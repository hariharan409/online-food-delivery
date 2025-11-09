import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); 
// lazy import after env is ready
const { default: db } = await import("./src/db/db");
const { default: mainRouter } = await import("./src/routes/main.router");

const app = express();
const PORT = process.env.APP_PORT;


// Set CORS options
const CORS_OPTIONS = {
    origin: ['http://localhost:5173','http://localhost:5174'], // frontend and the backend hosted on different domain, so maually handling the cors
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

// enable cors for all routes
app.use(cors(CORS_OPTIONS));

// middleware to handle post & put request. payload size - 50mb
app.use(express.json({limit: "50mb"})); 

// api-routes
app.use(process.env.APP_BASE_PATH || "",mainRouter);

db.sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    return db.sequelize.sync(); // sync models with the database
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ order microservice server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });