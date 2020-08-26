import { injectable, inject } from "inversify";
import { Provider, Service } from "../interface";
import { TYPES } from "../types";

@injectable()
export class AppProvider implements Provider {
    
    private _service: Service;

    constructor(@inject(TYPES.Service) service: Service) {
        this._service = service;
    }

    public getHello() {
        return this._service.getHello();    
    }

}