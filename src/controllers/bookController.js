const bookModel= require("../models/bookModel");
const authorModel= require("../models/authorModel");

const createBook= async function (req, res) {
    let data= req.body;
    let savedData= await bookModel.create(data);
    res.send({msg: savedData})
}

const createAuthor = async function (req, res) {
    let data = req.body;
    let savedData= await authorModel.create(data);
    res.send({msg: savedData});
}

const getBooksByChetanBhagat = async function (req, res) {
    let data = await authorModel.find({author_name: "Chetan Bhagat"});
    let id = data[0].author_id;
    let bookData = await bookModel.find({author_id:id})
    res.send({ msg: bookData })
}

const updateBookPrice = async function (req, res) {
    let data = {price: 100};
    let authorsData = await bookModel.findOneAndUpdate(
        {name : "Two States"}, //condition  
        {$set: data}, //update in data
        {new: true, upsert: true}).select
        ({name: 1, _id:0, price: 1, author_id: 1})
    res.send({ msg: authorsData });    
};

module.exports.createBook= createBook;
module.exports.createAuthor = createAuthor;
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat;
module.exports.updateBookPrice = updateBookPrice;