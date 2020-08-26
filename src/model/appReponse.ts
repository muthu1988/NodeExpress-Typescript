import { ResponseModel } from "../interface";

export class AppResponse implements ResponseModel {

    status: String = '';
    formData: Array<Object> = [];

    constructor(status: String, formData: Array<Object>) {
        this.status = status;
        this.formData = formData;
    }

}