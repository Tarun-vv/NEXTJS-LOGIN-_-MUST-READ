import { auth } from "./app/_lib/auth";

export const middleware = auth;

// route to protect from user who is not logged in
export const config = {
  matcher: ["/main-page"],
};
