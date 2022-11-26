import mongoose from "mongoose"
require('dotenv');

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI!);

export default connectMongo;