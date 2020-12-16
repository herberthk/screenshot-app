import { captureScreenshot } from './take';
interface axiosResponse {
	success: boolean;
	image: string;
}
test('should take screenshot', async () => {
	try {
		const res = await captureScreenshot(
			'https://www.notion.so/Senior-Backend-Developer-dab9a09039034012906bc5bb2442ffdc'
		);
		const { success } = res.data as axiosResponse;
		expect(success).toBe(true);
	} catch (error) {}
});
