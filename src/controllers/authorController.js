const authorModel = require("../model/authorModel");

const createAuthor = async function (req,res) {
    let author = req.body; 
    let authorCreated = await authorModel.create(author);
    res.send({ data: authorCreated}); 
};

const getAuthorsData = async function (req, res) {
    let authors = await authorModel.find(); 
    res.send({ data: authors}); 
};

module.exports.createAuthor = createAuthor;
module.exports.getAuthorsData = getAuthorsData;