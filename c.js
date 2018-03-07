const request = require('request');

const URL = 'http://localhost:3000/tinh';

// (4 + 5) * 6 / 2

function cong(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    request(`${URL}/CONG/${a}/${b}`, (error, response, body) => {
        if (error) return cb(error);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    request(`${URL}/NHAN/${a}/${b}`, (error, response, body) => {
        if (error) return cb(error);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    if (b == 0) return cb(new Error('Divide by zero.'));
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    request(`${URL}/CHIA/${a}/${b}`, (error, response, body) => {
        if (error) return cb(error);
        cb(null, body);
    });
}

function tinhDienTichHinhThang(a, b, h, cb) {
    cong(a, b, (errorCong, tong) => {
        if (errorCong) return cb(errorCong);
        nhan(tong, h, (errorNhan, tich) => {
        if (errorNhan) return cb(errorNhan);
            chia(tich, 2, (errorChia, kq) => {
                if (errorChia) return cb(errorChia);
                cb(null, kq);
            });
        });
    });
}

tinhDienTichHinhThang(4, 5, 6, (error, kq) => {
    if (error) return console.log(error);
    console.log(kq);
});
