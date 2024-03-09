const express = require('express');
const errorMiddleware = require('./middleware/error');
const student = require('./routes/student');
const faculty = require('./routes/faculty');
const course = require('./routes/course');
const admin = require('./routes/admin')
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/',student);
app.use('/api/v1/',faculty);
app.use('/api/v1/',course);
app.use('/api/v1/',admin);


app.use(errorMiddleware);

module.exports = app;