import { Router } from "./deps.ts";
export { Router };
import type { Middleware } from "./deps.ts";
export type { RouterContext } from "./deps.ts";
export abstract class TK_Mod<T> {
    abstract router: Router;

    constructor(..._args:unknown[]){

    }
    
    routes(): Middleware {
        return this.router.routes();
    }
    
    allowedMethods(): Middleware {
        return this.router.allowedMethods();
    }

    abstract upgradePassOut(): Promise<T> | T;
    abstract upgradePassIn(passValues: T): Promise<void> | void;
    abstract gracefulClose(): Promise<void> | void;
}