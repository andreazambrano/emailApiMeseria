const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const newOrderCtaAppToUser = require('./newOrderCtaAppToUser');
const newOrderAppToUser = require('./newOrderAppToUser');
const newOrderAppToAdmin = require('./newOrderAppToAdmin');
const newValidationAppToUser = require('./newValidationAppToUser');
const newValidationAppToAdmin = require('./newValidationAppToAdmin');
const newOrdeUserWebpay = require('./newOrdeUserWebpay');
const newOrderCtaAppToUserWebpay = require('./newOrderCtaAppToUserWebpay');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/newOrderCtaAppToUser', (req, res) => {
	newOrderCtaAppToUser(req.body);
	res.status(200).send;
})
app.post('/newOrderAppToUser', (req, res) => {
	newOrderAppToUser(req.body);
	res.status(200).send;
})
app.post('/newOrderAppToAdmin', (req, res) => {
	newOrderAppToAdmin(req.body);
	res.status(200).send;
})
app.post('/newValidationAppToUser', (req, res) => {
	newValidationAppToUser(req.body);
	res.status(200).send;
})
app.post('/newValidationAppToAdmin', (req, res) => {
	newValidationAppToAdmin(req.body);
	res.status(200).send;
})
app.post('/newOrdeUserWebpay', (req, res) => {
	newOrdeUserWebpay(req.body);
	res.status(200).send;
})
app.post('/newOrderCtaAppToUserWebpay', (req, res) => {
	newOrderCtaAppToUserWebpay(req.body);
	res.status(200).send;
})
app.listen(3005, () => {
console.log('Servidor corriendo')
});
