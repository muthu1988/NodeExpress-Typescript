import { injectable, inject } from "inversify";
import { Provider, Controller } from "../interface";
import { TYPES } from "../types";

@injectable()
export class AppController implements Controller {
    
    private _provider: Provider;

    constructor(@inject(TYPES.Provider) provider: Provider) {
        this._provider = provider;
    }

    public getHello() {
        return this._provider.getHello();    
    }

}