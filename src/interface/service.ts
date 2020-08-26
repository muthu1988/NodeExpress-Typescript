import { ResponseModel } from "./responseModel";

export interface Service {
    getHello(): ResponseModel;
}