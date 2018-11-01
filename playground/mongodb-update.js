//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client)=>{
    
    if(err){
      return  console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate(
    //   {_id: new ObjectID('5b9dcefec0e75b21ea17cb77')},
    //   {
    //     $set : {
    //         completed : true
    //     }
    //   },{
    //     returnOriginal : false 
    //   }).then((result)=>{
    //    console.log(JSON.stringify(result,undefined,2));
    // });

    db.collection('Users').findOneAndUpdate(
      {
         _id: new ObjectID('5b9e0392d0be52b5a5167483')
      },
      {
        $set : {
            name : 'Feileen Victoria Pascual'
        },
        $inc : { age : 26}
      }, {
        returnOriginal : false
      }).then((result)=> {
        console.log(JSON.stringify(result,undefined,2));
      });
    
    client.close;
});