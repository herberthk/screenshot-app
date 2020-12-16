import axios from 'axios';
import { SERVER_URL } from '../util/constants';

export const captureScreenshot = async (url: string) =>
	await axios.post(`${SERVER_URL}/api/takescreenshot`, { url });
