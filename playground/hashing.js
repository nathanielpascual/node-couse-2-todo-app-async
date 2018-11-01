const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(password,salt,(err, hash)=>
{
    console.log(hash);
});
});

var hashPassword = '$2a$10$IfhAHUV1m6iwUeUt9O.pleHqjXKsvLdnIZh5ZcNOCC1ATqCh5ASvW';

bcrypt.compare(password,hashPassword,(err,res)=>
{
    console.log(res);
});
// var data = {
//     id : 10
// }

// var token = jwt.sign(data,'123abc');

// console.log(token);

// var decoded = jwt.verify(token,'123abc');
// console.log('decoded',decoded);
//jwt.verify;
// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// // console.log(`Message : ${message}`);
// // console.log(`Hash : ${hash}`);

// var data = {
//     id : 3
// };

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// console.log(token.hash);
// console.log(resultHash);
// if(resultHash === token.hash)
// {
//     console.log('Data was not changed');
// }
// else
// {
//     console.log('Data was changed. Do not trust');
// }

