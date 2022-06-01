const printDate = function() {
    const date = new Date();
    return date;
}
printDate();  

const printMonth = function() {
    const month = new Date().getMonth(); 
    return month;
}
printMonth();

const getBatchInfo = function() {
    const batchName = "Radon";
    const weekDay = " W3D3";
    const topics = " The topics we covered today is Nodejs Module System";
    const info = batchName + ","+ weekDay + "," +topics; 
    return info;
}
getBatchInfo();

module.exports.date = printDate;
module.exports.month = printMonth;
module.exports.info = getBatchInfo;