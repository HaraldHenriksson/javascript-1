/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

 const jokeEl = document.querySelector('#joke')
 const jokeEl2 = document.querySelector('#joke2')
 const jokeEl3 = document.querySelector('#joke3')
 const jokeEl4 = document.querySelector('#joke4')
 const jokeEl5 = document.querySelector('#joke5')
 const btnEl = document.querySelector('#getJokeBtn')


// fetch('https://api.chucknorris.io/jokes/random')
//     .then(Response => {
//         if (!Response.ok) {
//             throw new Error("response was not ok")
//         }

//         return Response.json();
//     })
//     .then(data => {
//         console.log('data:', data)
//         jokeEl.innerText = data.value;
//     })
//     .catch(err => {
//         console.log('ERROR: cound not fetch joke.', err)
//     })


const getJoke = () => {
    const getJSON = async (url) => {
	
        const response = await fetch(url);
    
        if (!response.ok) {
             throw new Error("Response was not OK!");
        }
    
         const data = await response.json();
         return data;
     };
    
     const res = getJSON('https://api.chucknorris.io/jokes/random')
         .then(data => {
             console.log(data)
            jokeEl.innerText = data.value
            jokeEl2.innerText = data.value
            jokeEl3.innerText = data.value
            jokeEl4.innerText = data.value
            jokeEl5.innerText = data.value
         })
     console.log('res:', res);
}
getJoke();

 btnEl.addEventListener('click', () => {
    getJoke();
 })
