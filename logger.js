const endpoint = "https://www.functionup.org";
const batch = "radon";

const log = function() {
    console.log("I am into the another log")
}
log();

module.exports.url = endpoint;
module.exports.batch = batch;
module.exports.log = log;