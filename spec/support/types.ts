import { Response } from 'supertest';
import { IMemory } from '@entities/Memory';


export interface IResponse extends Response {
    body: {
        users: IMemory[];
        error: string;
    };
}

export interface IReqBody {
    user?: IMemory;
}
