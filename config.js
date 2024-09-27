const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "c6F2nDRQ#F-cQ7BG0Q9o3B6yERarVrnPZI6b8SCn7iOfOh0aDje4",
MONGODB: process.env.MONGODB || "mongodb+srv://supnu:shan27@cluster0.dw38v.mongodb.net/",//enter mongo db url
};
