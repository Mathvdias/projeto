const express = require('express');
const bodyParser = require('body-parser');
const bme280 = require('bme280');
const gpiop = require('rpi-gpio').promise;
const app = express();

app.use(bodyParser.json());
app.post('/switchLed0', function (req, res) {
    const statusExists = req && req.body && req.body.status != null;
    const status = statusExists ? req.body.status.toString() == "true" : false;
    gpiop.setup(40, gpiop.DIR_OUT).then(() => {
        return gpiop.write(40, status);
    }).catch((err) => {
        console.log(`error: ${err.toString()}`);
    });
    res.send('led was switched 0');
});
app.post('/switchLed1', function (req, res) {
    const statusExists = req && req.body && req.body.status != null;
    const status = statusExists ? req.body.status.toString() == "true" : false;
    gpiop.setup(38, gpiop.DIR_OUT).then(() => {
        return gpiop.write(38, status);
    }).catch((err) => {
        console.log(`error: ${err.toString()}`);
    });
    res.send('led was switched 1');
});
app.post('/switchLed2', function (req, res) {
    const statusExists = req && req.body && req.body.status != null;
    const status = statusExists ? req.body.status.toString() == "true" : false;
    gpiop.setup(36, gpiop.DIR_OUT).then(() => {
        return gpiop.write(36, status);
    }).catch((err) => {
        console.log(`error: ${err.toString()}`);
    });
    res.send('led was switched 2');
});
app.post('/switchLed3', function (req, res) {
    const statusExists = req && req.body && req.body.status != null;
    const status = statusExists ? req.body.status.toString() == "true" : false;
    gpiop.setup(32, gpiop.DIR_OUT).then(() => {
        return gpiop.write(32, status);
    }).catch((err) => {
        console.log(`error: ${err.toString()}`);
    });
    res.send('led was switched 2');
});
app.post('/switchLed4', function (req, res) {
    const statusExists = req && req.body && req.body.status != null;
    const status = statusExists ? req.body.status.toString() == "true" : false;
    gpiop.setup(35, gpiop.DIR_OUT).then(() => {
        return gpiop.write(35, status);
    }).catch((err) => {
        console.log(`error: ${err.toString()}`);
    });
    res.send('led was switched 2');
});
app.post('/switchLed5', function (req, res) {
    const statusExists = req && req.body && req.body.status != null;
    const status = statusExists ? req.body.status.toString() == "true" : false;
    gpiop.setup(37, gpiop.DIR_OUT).then(() => {
        return gpiop.write(37, status);
    }).catch((err) => {
        console.log(`error: ${err.toString()}`);
    });
    res.send('led was switched 2');
});
app.get('/sensorBme', (req, res) => {
    const sensor = bme280.open({
        i2cBusNumber: 1,
        i2cAddress: 0x76,
        pressureOversampling: bme280.OVERSAMPLE.X16,
        temperatureOversampling: bme280.OVERSAMPLE.X2,
        filterCoefficient: bme280.FILTER.F16
    }).then(async sensor => {
        const sens = await sensor.read();
        console.log(sens);
        res.status(200).send(sens);
        sensor.close();
    }).catch(console.log);
});
app.listen(3000);
console.log('server started on port 3000');
