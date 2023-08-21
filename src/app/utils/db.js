import mongoose from 'mongoose';

const connect = async () => {
  try {
    console.log(process.env.MONGO);
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error('Connection failed!');
  }
};

export default connect;
