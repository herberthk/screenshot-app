import express from 'express';
import { takeScreenshot } from '../controller/api';
import cors from 'cors';
const router = express.Router();
// @desc    Take screenshot and and return url
// @route   Post /api/takescreenshot
router.post('/takescreenshot', cors(), takeScreenshot);

export default router;
