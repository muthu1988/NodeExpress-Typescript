import { ResponseModel } from "./responseModel";

export interface Provider {
    getHello(): ResponseModel;
}
