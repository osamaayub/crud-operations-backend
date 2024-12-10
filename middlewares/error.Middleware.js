

const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Interval Server Error";
  if (err.code === 11000) {
    const error = Object.keys(err.keyPattern).join(",");
    err.message=`Duplicate Field - ${error}`
    err.status=err.status ||400;
  }
  if(err.name==="CASTERROR"){
   const errorpath=err.path;
   err.message=`Invalid Format of ${errorpath}`
   err.status=err.status ||400;
  }
  return res.status(err.status).json({
   message:err.message
  });
}

module.exports = errorMiddleware;