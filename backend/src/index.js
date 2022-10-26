import './models/Pokemons.js';
import './models/Types.js'
import './models/PokemonsType.js';
import './models/PokemonsEvolve.js';

import app from './app.js';
import { sequelize } from "./database/config.js";
import { swaggerDocs } from './swagger.js';

const port = 3000;

const main = async () => {
    try {
        await sequelize.sync({ forced: true });
        app.listen(port, () => {
            console.log(`listening port ${port}`);
            swaggerDocs(app, port);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();