import { ResponseModel } from "./responseModel";

export interface Controller {
    getHello(): ResponseModel;
}