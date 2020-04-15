import winston from "winston";

const { LOG_LEVEL } = process.env;

export const logger = winston.createLogger({
  level: LOG_LEVEL || "info",
  format: winston.format.json(),
  defaultMeta: {},
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    // new winston.transports.File({ filename: "error.log", level: "error" }),
    // new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});
