import compression from "compression";
import cors from "cors";
import express from "express";
//Local imports
import healthRoutes from './routes/health.routes.js';
import morgan from "morgan";
import pokemonsRoutes from './routes/pokemons.routes.js';
import typeRoutes from './routes/types.routes.js';

const app = express();

//Middlewares
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
app.use('/api/health', healthRoutes);
app.use('/api/type/', typeRoutes);
app.use('/api/pokemons/', pokemonsRoutes);

export default app;