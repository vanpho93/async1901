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

// congPromise(4, 5)
// .then(tong => nhanPromise(tong, 6))
// .then(tich => chiaPromise(tich, 2))
// .then(result => console.log(result));

function tinhDienTichHinhThang(a, b, h) {
    return congPromise(a, b)
    .then(tong => nhanPromise(tong, h))
    .then(tich => chiaPromise(tich, 2));
}

// tinhDienTichHinhThang(4, 5, 6)
// .then(result => console.log(result))
// .catch(error => console.log(error));
// async function tinhDienTich(a, b, h) {
//     return new Promise(async (resolve, reject) => {
//         setTimeout(() => reject(new Error('timeout')), 500);
//         try {
//             const tong = await congPromise(a, b);
//             tich = await nhanPromise(tong, h);
//             const kq = await chiaPromise(tich, 2);
//             resolve(kq);
//         } catch(err) {
//             reject(err);
//         }
//     });
// }

async function tinhDienTich(a, b, h) {
    let tich;
    try {
        const tong = await congPromise(a, b);
        tich = await nhanPromise(tong, h);
    } catch (error) {
        tich = 10;
    }
    const kq = await chiaPromise(tich, 2);
    return kq;
}

// tinhDienTich('x', 5, 6)
// .then(kq => console.log(kq))
// .catch(error => console.log(error));

tinhDienTich(4, 5, 6)
.then(kq => console.log(kq))
.catch(error => console.log(error));

// function tinhDienTichDongBo(a, b, h) {
//     const tong = a + b;
//     console.log('tong = ', tong);
//     const tich = tong * h;
//     console.log('tich = ', tich);
//     const kq = tich / 2;
//     console.log('kq = ', kq);
//     return kq;
// }

// tinhDienTichDongBo(4, 5, 6);
// tinhDienTichDongBo(1, 2, 3);
