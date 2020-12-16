"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("../controller/api");
const cors_1 = __importDefault(require("cors"));
const router = express_1.default.Router();
router.post('/takescreenshot', cors_1.default(), api_1.takeScreenshot);
exports.default = router;
