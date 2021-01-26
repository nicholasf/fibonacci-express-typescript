import express from "express";
import number from "./controllers/number";
import resource from "./controllers/resource";
import error from "./controllers/error"

// Create Express server
const service = express();

// Express configuration
service.set("port", 3000);

/**
 * Primary routes.
 */
service.get("/:position", number, resource, error);

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
