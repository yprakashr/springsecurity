const express = require('express');
const helmet = require('helmet');
const app = require('../app');

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
