const dbURL = 'mongodb://localhost:27017/projectmanager';
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = { dbURL, dbOptions };