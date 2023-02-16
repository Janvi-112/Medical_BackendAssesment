const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const server = express();

server.use(bodyParser.json());
let medicalBills = [];



server.post('/items', (req, res) => {
    const bill = {
      patientName: req.body.patientName,
      patientAddress: req.body.patientAddress,
      hospitalName: req.body.hospitalName,
      dateOfService: req.body.dateOfService,
      billAmount: req.body.billAmount
    };
    medicalBills.push(bill);
    res.status(201).json(bill);
  });

server.get('/items', (req, res) => {
    res.json(medicalBills);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
