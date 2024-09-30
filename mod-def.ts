import { Router } from "./deps.ts";
export { Router };
import type { Middleware } from "./deps.ts";
export type { RouterContext } from "./deps.ts";
export abstract class TK_Mod<T> {
    abstract router: Router;

    constructor(..._args:unknown[]){

    }
    
    routes(): Middleware {
        return (ctx, next) => {
            this.router.routes()(
                ctx, async () => {
                    await this.router.allowedMethods()(ctx, next);
                }
            )
        }
    }

    abstract upgradePassOut(): Promise<T> | T;
    abstract upgradePassIn(passValues: T): Promise<void> | void;
    abstract gracefulClose(): Promise<void> | void;
}