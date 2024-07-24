const {connect} = require("mongoose");

const MONGO_DB_URL ="mongodb+srv://Bruhadev:<password>@cluster1.kxmfpjv.mongodb.net"

const DB_NAME = "cs-library-app";

const connectDb = async () => {
    try{
        await connect(`${MONGO_DB_URL}/${DB_NAME}`);
    console.log(`$MongoDB Connection is sucessful.`);
    } catch (err) {
        console.error(err)
    }
};


connectDb();


module.exports = {};