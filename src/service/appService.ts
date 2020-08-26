import { injectable } from "inversify";
import { Service } from "../interface";
import { AppResponse } from "../model/appReponse";

@injectable()
export class AppService implements Service {
    
    public getHello() {
        return new AppResponse('success', [{ fieldName: 'firstName'}, { fieldName: 'lastName'}]);
    }
    
}