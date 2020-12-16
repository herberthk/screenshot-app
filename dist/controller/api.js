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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeScreenshot = void 0;
const capture_website_1 = __importDefault(require("capture-website"));
const uuid_1 = require("uuid");
const takeScreenshot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.is('application/json')) {
        return res.json("Expects 'application/json'");
    }
    const { url } = req.body;
    if (!url) {
        return res.status(404).json({
            success: false,
            data: 'Url is required'
        });
    }
    try {
        const fileName = `${uuid_1.v4()}.jpg`;
        yield capture_website_1.default.file(url, `./public/screenshots/${fileName}`, {
            timeout: 0
        });
        return res.status(200).json({
            success: true,
            image: fileName
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            data: JSON.stringify(error)
        });
    }
});
exports.takeScreenshot = takeScreenshot;
