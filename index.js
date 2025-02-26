import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/signup", async (req, res) => {
  const { Username, Email, Password, DateofBirth } = req.body;

  if (!Username) {
    res.status(500).json({
      success: false,
      error: "Username cannot be empty",
    });
  }

  if (!Email) {
    res.status(500).json({
      success: false,
      error: "Email cannot be empty",
    });
  }

  console.log(typeof Password);
  if (Password.length < 8 || Password.length > 16) {
    res.status(500).json({
      success: false,
      error:
        "Password length should be greater than 8 or less than or equal to 16",
    });
  }

  res.status(201).json({
    success: true,
    message: "User signed up successfully :(",
  });
});

app.listen(port, () => {
  console.log("server running on port", port);
});
