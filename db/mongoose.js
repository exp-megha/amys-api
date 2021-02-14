const { reject } = require('lodash');
var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
mongoose.Promise = require('bluebird');
// const uri = "mongodb://gurudas:may192005@ds135983.mlab.com:35983/amys_billing";
// replica sets 
var uri = 'mongodb://amys_user:amys@amys-billing-shard-00-00.jjgqw.mongodb.net:27017,amys-billing-shard-00-01.jjgqw.mongodb.net:27017,amys-billing-shard-00-02.jjgqw.mongodb.net:27017/amys_billing?ssl=true&replicaSet=atlas-jw5itk-shard-0&authSource=admin&retryWrites=true&w=majority';


  const connect = async () => {
    return new Promise((resolve, reject) => {
      mongoose.connect( uri, 
        {
          useMongoClient: true,
        }
        , (err) => {
      console.log('connected', err);
        resolve(true);
    
      });
    })
  }
 (async () => { await connect(); })();

// await connect();
// mongoose.connect(process.env.MONGODB_URI);
mongoose.set('debug', true);
module.exports = {mongoose};
