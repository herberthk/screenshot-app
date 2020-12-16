import { Request, Response } from 'express';
import captureWebsite from 'capture-website';

import { v4 } from 'uuid';

export const takeScreenshot = async (req: Request, res: Response) => {
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
		const fileName = `${v4()}.jpg`;
		await captureWebsite.file(url, `./public/screenshots/${fileName}`, {
			timeout: 0
		});

		return res.status(200).json({
			success: true,
			image: fileName
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			data: JSON.stringify(error)
		});
	}
};
