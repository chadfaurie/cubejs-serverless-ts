"use strict";

import express from "express";
import bodyParser from "body-parser";
import "express-async-errors";

import cors from "cors";

import { cubejs } from "./services/cubejs";

// declare a new express app
const app = express();

/********************************
 * HTTP Get method for list objects *
 ********************************/

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
export default app.use(cors()).use(bodyParser.json());

cubejs.initApp(app);

//'/Users/chadfaurie/Documents/Dev/codeworkshop/timezor_project/timezor-api-ts/schema'
