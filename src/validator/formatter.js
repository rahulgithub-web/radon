const trim = function() {
    const text = "  functionUp  "; 
    const res = text.trim();  
    return res;
}
trim();  

const lowerCase = function() {
    const text = "FUNCTIONUP";
    const res = text.toLowerCase();
    return res;
}
lowerCase(); 

const upperCase = function() {
    const text = "functionup";
    const res = text.toUpperCase();
    return res;
}

module.exports.trims = trim;
module.exports.lower = lowerCase;
module.exports.upper = upperCase;