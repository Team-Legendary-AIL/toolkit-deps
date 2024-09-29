import { Router } from "./deps.ts";
export { Router };
export type { RouterContext } from "./deps.ts";
export abstract class TK_Mod<T> {

    constructor(..._args:unknown[]){

    }
    
    abstract routes(): Router;

    abstract upgradePassOut(): Promise<T> | T;
    abstract upgradePassIn(passValues: T): Promise<void> | void;
    abstract gracefulClose(): Promise<void> | void;
}