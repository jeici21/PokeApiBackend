import swaggerJSDoc  from "swagger-jsdoc";
import swaggerUi  from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "PokeAPI Challenge", version: "1.0.0" },
    },
    apis: ["./src/routes/*.routes.js"],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
export const swaggerDocs = (app, port) => {
    // Route-Handler to visit our docs
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Make our docs in JSON format available
    app.get("/api/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Version 1 Docs are available on http://localhost:${port}/api/docs`
    );
};