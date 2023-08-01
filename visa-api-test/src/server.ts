
import http from "http";
import app from "./app";
import config from "./config/config";
import newSequelize from "./infra/sequelize";

const logger = console;

const gracefulShutdown = (server: http.Server, forcedTimeout: number) => {
    return function () {
        logger.info("Received SIGINT or SIGTERM. Shutting down gracefully...");
        server.close(async () => {
            logger.info("Closed out remaining connections.");

            try {
                await newSequelize().close();
                console.log("Database connection closed.");
                process.exit();
            } catch (err) {
                process.exit();
            }
        });
        
        setTimeout(() => {
            logger.error("Could not close connections in time, forcefully shutting down");
            process.exit();
        }, forcedTimeout);
    };
};


const server = http.createServer(app);

// when press Ctrl+C then SIGINT event will be run. 
// https://www.geeksforgeeks.org/node-js-process-signal-events/

process.on("SIGTERM", gracefulShutdown(server, config.APP_FORCE_SHUTDOWN_SECOND));
process.on("SIGINT", gracefulShutdown(server, config.APP_FORCE_SHUTDOWN_SECOND));


(async () => {
    try {
        await newSequelize().authenticate();
        server.listen(config.APPLICATION_SERVER_PORT, () => {
            logger.log("ShareTrip Visa API IS RUNNING: "+ config.APPLICATION_SERVER_PORT);
        });
        console.log("Connection has been Established Successfully.");
    } catch (err) {
        console.error("Unable to connect to the database:", err);
    }
})();
