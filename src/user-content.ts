import { unstable_createContext } from "react-router";

type UserContextType = {
  userId: string;
};

export const userContext = unstable_createContext<UserContextType | null>(null);
