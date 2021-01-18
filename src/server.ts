import express from "express";
import fibController from "./controllers/fibonacci";

// Create Express server
const service = express();

// Express configuration
service.set("port", 3000);

/**
 * Primary routes.
 */
service.get("/:index", fibController, );

/**
 * Start Express server.
 */

 const server = service.listen(service.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        service.get("port"),
        service.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
