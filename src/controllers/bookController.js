const bookModel = require("../models/bookModel");

const createBook = async function (req, res) {
    let book = req.body; 
    if(book.author_id == book.author_id && book.publisher_id == book.publisher_id) {
    let bookCreated = await bookModel.create(book);
    res.send({data: bookCreated}); 
    } else {
        res.send({mes: 'error: author_id is required'});
    };
};

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id', 'publisher_id']);
    res.send({data: specificBook});
};

// const priceIncrease = async function (req, res) {
//     let book = await bookModel.find().populate(['author_id','publisher_id'])
//     let data = [];
//     for (let i = 0; i < book.length; i++) {
//         const element = book[i];
//         if(element.author_id.rating > 3.5){
//             element.author_id.price += 10
//         }
//         data.push(element.author_id.price)
//     }
//     res.send({data: data})
// }

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
module.exports.createBook = createBook;
// module.exports.priceIncrease = priceIncrease;




















