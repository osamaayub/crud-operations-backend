const mongoose=require( "mongoose");


const connectDB=async ()=>{
  try{
    const connect=await  mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected sucessfully ${connect.connection.host}`)
  }catch (e) {
    console.log(e.message);
  }
}

module.exports=connectDB;