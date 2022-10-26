import app from './app.js';

const port = 3000;

const main = async () => {
    try {
        app.listen(port, () => {
            console.log(`listening port ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();