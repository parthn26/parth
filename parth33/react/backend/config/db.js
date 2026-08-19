const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI);

        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB not connected');
        console.log(error);
    }
};

module.exports = connectDB;