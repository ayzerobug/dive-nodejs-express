const express = require("express");
const app = express();
const port = 3000;

const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Our Server is running");
});

//Use bookRoutes where /books is the endpoint
app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server listening to port: ${port}`);
});
