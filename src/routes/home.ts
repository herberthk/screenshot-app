import express from 'express';
import { loadHomePage } from '../controller/home';
const router = express.Router();
// @desc    Load home page
// @route   GET /
router.get('/', loadHomePage);

export default router;
