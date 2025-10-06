const response = await fetch('https://reqres.in/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

const data = await response.json();
console.log(data);