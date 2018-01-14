function add(a,b){
    return a+b;
}
function getById(id){
    return document.getElementById(id);
}
function getByName(name){
    return document.getElementsByTagName(name);
}

module.exports = {
    add: add,
    getById: getById,
    getByName: getByName
}