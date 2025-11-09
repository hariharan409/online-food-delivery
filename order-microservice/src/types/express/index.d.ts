import { AuthenticatedUser } from "../auth.user.ts";


declare global {
    namespace Express {
        interface User extends AuthenticatedUser {} // extends the base User type
        interface Request {
            user?: User; // Now Express.Request.user refers to the extended one
        }
    }
}