/**
 * XMLHttpRequest
 *
 */

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {

    if (request.readyState === 4) {

    

    if (request.status === 200) {
        console.log("yay success")
        const data = JSON.parse(request.responseText);
        data.forEach(user => {
            document.querySelector('#users').innerHTML += `<li> Name: ${user.name}, Username: ${user.username}</li>`;
        })
    } else {
        console.log('not successful')
    }
}
})

request.open('GET', 'https://jsonplaceholder.typicode.com/users');

request.send();

console.log("Request sent");