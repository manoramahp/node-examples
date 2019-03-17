var express = require('express');
var device_data = require('../model/device_data');

var router = express.Router();

router.get('/', function(req, res) {
    console.log("[sample] request devices");
    res.json(device_data.devices);
});

router.get('/:id', function(req, res){
    console.log("[sample] request bike " + req.params.id);
    res.json(device_data.devices.find(bike => bike.key == req.params.id));
});

module.exports = router;