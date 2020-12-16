import { Request, Response } from 'express';
export const loadHomePage = (req: Request, res: Response) => res.render('home');
