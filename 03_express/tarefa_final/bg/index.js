const express = require('express');
const router = express.Router();

const path = require('path');
const basepath = path.join(__dirname, '../pages');

router.get('/black', (req, res) => {
    res.sendFile(`${basepath}/backgroundBlack.html`);
});

router.get('/purple', (req, res) => {
    res.sendFile(`${basepath}/backgroundPurple.html`);
});

module.exports = router;