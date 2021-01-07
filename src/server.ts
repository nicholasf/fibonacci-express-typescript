import express from "express";
import bodyParser from "body-parser";

// Create Express server
const service = express();

// Express configuration
service.set("port", 3000);
service.use(bodyParser.json());
service.use(bodyParser.urlencoded({ extended: true }));


/**
 * Primary app routes.
 */
// app.get("/", homeController.index);

import { fibonacci } from "./lib/fibonacci";

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

    console.log(fibonacci(10));
});

export default server;
