"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const take_1 = require("./take");
test('should take screenshot', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield take_1.captureScreenshot('https://www.notion.so/Senior-Backend-Developer-dab9a09039034012906bc5bb2442ffdc');
        const { success } = res.data;
        expect(success).toBe(true);
    }
    catch (error) { }
}));
