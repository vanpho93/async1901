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

function nhanPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(`${URL}/NHAN/${a}/${b}`, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function chiaPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        if (b == 0) return reject(new Error('Divide by zero.'));
        request(`${URL}/CHIA/${a}/${b}`, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

congPromise(4, 'x')
.then(tong => nhanPromise(tong, 6))
.catch(error => 10)
.then(tich => chiaPromise(tich, 2))
.then(result => console.log(result))
