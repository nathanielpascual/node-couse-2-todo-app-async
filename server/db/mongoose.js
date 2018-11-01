var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex',true);
mongoose.connect(process.env.MONGODB_URI ,{ useNewUrlParser: true },(error)=>{
    
});

module.exports = {mongoose}

//process.env.NODE_ENV === 'production'