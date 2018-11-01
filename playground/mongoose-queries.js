const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

//var id = '5bb05e01ffba8532c8ea4579';
var id = '5ba1d449fc00802730dd27ac';
// if(!ObjectId.isValid(id))
// {
//     console.log('Id is not valid');
// }


// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         console.log('id not found');
//     }
//     console.log('Todo by id',todo);
// }).catch((e) => console.log(e));

// User.find({
//     _id : id
// }).then((users) => {
//     console.log('Users',users);
// });

// User.findOne({
//     _id : id
// }).then((user) => {
//     console.log('User',user);
// });

User.findById(id).then((user) =>
{
    if(!user){
        console.log('id not found');
    }
    console.log(JSON.stringify(user,undefined,2));
},(e) =>{
    console.log(e)
});