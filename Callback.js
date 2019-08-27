const kendaraan = (motor, mobil, callback) => {
    return callback(motor, mobil);
}

const dataKendaraan = kendaraan(' Harley Davidson', 'Lamborghini', (motor,mobil) => {
    return motor + mobil;
});

console.log(dataKendaraan);