require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.APP_PORT;

const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());
app.use(express.static("public"));
app.use(morgan("combined"));

app.use((req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      throw Error("Authorization headers not found");
    }

    const token = authorization.split(" ")[1];
    if (token !== "sometoken") {
      throw Error("You are not logged in or invalid authorization header");
    }

    next();
  } catch (error) {
    response = {
      success: false,
      message: error.message,
    };
    res.status(401).send(response);
  }
});

// app.use((req, res, next) => {
//   const pathname = req.path;
//   const method = req.method;
//   console.log(method, pathname);

//   next();
// });

const logBookEndpoint = (req, res, next) => {
  console.log("You're using the book resources");

  next();
};

app.get("/", (request, response) => {
  response.send("Our Server is running");
});

//Use bookRoutes where /books is the endpoint
app.use("/books", logBookEndpoint, bookRoutes);

app.listen(port, () => {
  console.log(`Server listening to port: ${port}`);
});
