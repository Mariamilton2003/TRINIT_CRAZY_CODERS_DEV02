const mongoose = require('mongoose');

// connecting database
const connectDataBase = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log(`DataBase connected Successfully`)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDataBase;