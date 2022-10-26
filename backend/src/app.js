import compression from "compression";
import cors from "cors";
import express from "express";
//Local imports
import healthRoutes from './routes/health.routes.js';
import morgan from "morgan";

const app = express();

//Middlewares
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
app.use('/api/health', healthRoutes);

export default app;