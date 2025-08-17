import app from "./app";
import connectDB from "./config/db";
import { NotificationService } from "./services/notification.service";

const port = 8000;

connectDB().then(() => {
  new NotificationService();

  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });
});
