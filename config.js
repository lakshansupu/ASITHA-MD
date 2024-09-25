const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Yz82XZKY#kSNIH9aQsQDJz-mBWjdDZIvG8xTn_WgQgHSY2L72gbQ",
MONGODB: process.env.MONGODB || "mongodb+srv://supnu:shan27@cluster0.dw38v.mongodb.net/",//enter mongo db url
};
