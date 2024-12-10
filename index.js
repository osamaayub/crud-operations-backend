const express=require("express");
require("dotenv").config();
//Database Connection
const connectDB=require("./config/database");
//Routes
const taskRoutes = require("./routes/taskRoute");
const authRoutes=require("./routes/authRoute");

//custom Error Middleware
const errorMiddleware = require("./middlewares/error.Middleware");


//create an Express Application

const app=express();

//connection with DB
connectDB();

//Routes
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1",taskRoutes);
app.use("/api/v1",authRoutes);

app.use(errorMiddleware)

const port=process.env.PORT||3000;
app.listen(port,()=>{
  console.log(`server is running on http:localhost:${port}`);
})