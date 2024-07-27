require("dotenv").config();

const express = require("express");
const usersRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/log");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use("/users", usersRoutes);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
