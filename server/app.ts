import { Hono } from "hono";
import {
  createRequestHandler,
  unstable_RouterContextProvider,
} from "react-router";

import * as build from "virtual:react-router/server-build";

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_HONO: string;
  }
}

const app = new Hono();

// Add any additional Hono middleware here

const handler = createRequestHandler(build);
app.mount("/", (req) => handler(req, new unstable_RouterContextProvider()));

export default app.fetch;
