const takeScreenShot = async (e) => {
	const btn = e.target;
	const loader = document.getElementById('loader');
	const input = document.getElementById('url');
	const img = document.getElementById('screenShot');
	const url = input.value;

	// console.log(btn);
	if (!url) {
		M.toast({ html: 'Please provide website url', classes: 'rounded red' });
		return;
	}
	loader.innerHTML = `Loading...`;
	btn.disabled = true;
	try {
		const res = await fetch('/api/takescreenshot', {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ url }),
			method: 'POST'
		});
		const data = await res.json();
		const { image, success } = data;

		btn.disabled = false;
		loader.innerHTML = '';

		const src = `/screenshots/${image}`;
		if (success) {
			input.value = '';
			img.src = src;
			M.toast({ html: 'Success', classes: 'rounded green' });
			M.toast({ html: 'Screenshot taken', classes: 'rounded blue' });
		} else {
			M.toast({ html: 'Something went wrong', classes: 'rounded red' });
			M.toast({ html: 'Try again again', classes: 'rounded red' });
		}
	} catch (error) {
		btn.disabled = false;
		loader.innerHTML = '';
		M.toast({ html: 'Network error try again again', classes: 'rounded red' });
	}
};

document.getElementById('take').addEventListener('click', takeScreenShot);
