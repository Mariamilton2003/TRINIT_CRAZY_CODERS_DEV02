const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const connectDataBase = require('./config/database');

//connecting environment variable
dotenv.config({path:path.join(__dirname,'/config/config.env')});

connectDataBase()
//  configuring server
app.listen(process.env.PORT,()=>[
    console.log(`Server is running on the port ${process.env.PORT}, in ${process.env.NODE_ENV} environment`)
])