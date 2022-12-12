fetch('data/cats.json')
	.then(Response => {
		console.log(Response);
		if(!Response.ok){
			throw new Error('response was not ok')
		}
		return Response.json();
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log('something blew up');
	})

	fetch('data/dogs.json')
	.then(Response => {
		console.log(Response);
		if(!Response.ok){
			throw new Error('response was not ok')
		}
		return Response.json();
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log('something blew up');
	})
