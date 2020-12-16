"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_URL = exports.__prod__ = void 0;
exports.__prod__ = process.env.NODE_ENV === 'production';
exports.SERVER_URL = 'http://localhost:8000';
