import app from "./app";
import connectDB from "./config/db";

const port = 8000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });
});
