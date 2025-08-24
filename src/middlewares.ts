import type { unstable_MiddlewareFunction } from "react-router";
import { userContext } from "src/user-content";

export const sessionMiddleware: unstable_MiddlewareFunction = (args, next) => {
  console.log("sessionMiddleware");
  const user = args.context.get(userContext);
  console.log("user", user);
  next();
};
