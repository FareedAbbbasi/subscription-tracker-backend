import express from "express";

import { PORT } from "./config/env.js"

import auth from "./routes/auth.routes.js"
import subscription from "./routes/subscription.routes.js"
import connectToDatabase from "./database/mongodb.js";
import userRouter from "./routes/user.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// app.use(arcjetMiddleware);

app.use('/api/v1/auth', auth)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subscription)

app.use(errorMiddleware)

app.listen(PORT, async () => {
    console.log(`Subscription Tracking at http://localhost:${PORT}`);
    await connectToDatabase();
})

export default app;