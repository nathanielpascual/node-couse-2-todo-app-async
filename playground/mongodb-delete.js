//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client)=>{
    
    if(err){
      return  console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    //deleteMany

    // db.collection('Todos').deleteMany({text : 'Go to work'}).then ((result) =>{
    //   console.log(result);
    // })

    //deleteOne
      // db.collection('Todos').deleteOne({text : 'Play games'}).then((result) => {
      //   console.log(result);
      // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({text : 'Walk the dog'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name : 'Nathan Pascual'}).then((result)=> {
    //   console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({name : 'Nathan Pascual'}).then((result)=> {
    //   console.log(result);
    // });
    db.collection('Users').findOneAndDelete({_id : new ObjectID('5b9e04a5d0be52b5a51674f6') }).then((result)=> {
      console.log(JSON.stringify(result,undefined,2));
    });
    client.close;
});