"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResponse = void 0;
var AppResponse = /** @class */ (function () {
    function AppResponse(status, formData) {
        this.status = '';
        this.formData = [];
        this.status = status;
        this.formData = formData;
    }
    return AppResponse;
}());
exports.AppResponse = AppResponse;
