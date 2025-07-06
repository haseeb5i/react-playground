import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://unnamed-temp.onrender.com",
  fetchOptions: {
    credentials: "include",
  },
});
