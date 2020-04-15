import { Response, NextFunction } from "express";

import CubeJsServerCore from "@cubejs-backend/server-core";
import ElasticSearchDriver from "@cubejs-backend/elasticsearch-driver";

import { Unauthorized } from "../utils/errors";
import { IOrganization } from "../models/organization";

import { ITimezorCubeJsRequest } from "../request";

const { LOCAL, STAGE } = process.env;
const isLocal = LOCAL === "Y";

export const cubejs = CubeJsServerCore.create({
  devServer: isLocal,
  telemetry: false,
  schemaPath: "./src/schema/",
  dbType: "elasticsearch",

  driverFactory: () =>
    new ElasticSearchDriver({
      url: process.env.CUBEJS_EXT_DB_HOST,
      openDistro: false,
      dialect: "elasticsearch",
      cloud: {
        id: process.env.ELASTIC_CLOUD_ID || "",
        username: process.env.ELASTIC_USER || "",
        password: process.env.ELASTIC_PASS || ""
      }
    })
});
