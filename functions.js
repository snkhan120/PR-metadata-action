// array sort  function
const functions = {};

functions.sortArray = (array) => {
    return array.sort((a, b) => a - b);
}

functions.reverse = (array) => {    
    return array.reverse();
}

functions.monogoConnect = (url, dbName) => {
    return mongoose.connect(url + dbName);
}

functions.createCollection = (collectionName) => {
    return mongoose.connection.db.createCollection(collectionName);
}

functions.insertcollection = (collectionName, data) => {
    return mongoose.connection.db.collection(collectionName).insert(data);
}

functions.deleteCollection = (collectionName) => {
    return mongoose.connection.db.dropCollection(collectionName);
}  

module.exports = functions;
