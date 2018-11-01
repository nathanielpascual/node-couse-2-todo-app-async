const {ObjectId} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

const {User} = require('../server/models/user');

// Todo.deleteMany({}).then((result)=>
// {
//     console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findOneAndRemove({}).then((result) => {
    console.log(result);
})

Todo.findByIdAndRemove('').then((result)=> 
{
    console.log(result);
});