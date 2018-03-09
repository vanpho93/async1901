const request = require('request');

const URL = 'http://localhost:3000/tinh';

function congPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(`${URL}/CONG/${a}/${b}`, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

congPromise(4, 5)
.then(result => console.log(result))
.catch(error => console.log(error.message));
