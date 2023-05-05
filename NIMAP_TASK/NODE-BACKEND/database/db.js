// const mongoose = require('mongoose');

// async function connect() {
   
//     return await mongoose.connect('mongodb+srv://ankita:Ankita0410@ankita.k70ud.mongodb.net/nimap2?retryWrites=true&w=majority');
// }

// connect()
//     .then((res) => {
//         console.log('Database Connected')
//     })
//     .catch((err) => {
//         console.log(err);
      
//     })

const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb+srv://ankita:Ankita0410@ankita.k70ud.mongodb.net/nimap1?retryWrites=true&w=majority');
}

connect()
    .then((res) => {
        console.log('Database Connected')
    })
    .catch((err) => {
        console.log(err);
        return;
    })
