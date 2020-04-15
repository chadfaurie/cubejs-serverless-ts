import serverless from "serverless-http";
import express from "./app";

export const http = serverless(express, {
  request: (request: any, event: any, context: any) => {
    request.context = {
      functionName: context.functionName,
      invokedFunctionArn: context.invokedFunctionArn,
      ...event.requestContext
    };
  }
});
