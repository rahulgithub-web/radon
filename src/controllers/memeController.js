let axios = require("axios");

let getMemes = async function(res,req) {
    try {
    let memeId = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    var options = {
        method: "post",
        url: `http://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&userName=chewie123456password=meme@123`
    }
    let result = await axios(options);
    console.log(result.data);  
    res.status(201).send({ msg: result.data})
  }  catch(err) {
    console.log(err)
    res.status(500).send({ msg: err.message });
  }
}

module.exports.getMemes = getMemes;