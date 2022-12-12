/**
 * async/await
 *
 */

/*
fetch('data/cats.json')
	.then(response => {
		if (!response.ok) {
			throw new Error("Response was not OK!");
		}

		return response.json();
	})
	.then(data => {
		console.log("Gots data:", data);
	})
	.catch(err => {
		console.log("Something blew up 😢:", err);
	});
*/


const getJSON = async (url) => {
	
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Response was not OK!");
	}

	const data = await response.json();
	return data;
};

const res = getJSON('data/dogs.json')
	.then(data => {
		console.log(data)
	})
console.log('res:', res);