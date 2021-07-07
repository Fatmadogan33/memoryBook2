import { IUser } from "@entities/Memory";

declare module 'express' {
    export interface Request  {
        body: {
            user: IUser
        };
    }
}
