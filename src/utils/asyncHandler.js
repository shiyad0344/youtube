
const asyncHandler= (requesthandler)=>{
   return  (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next))
        .catch((error)=> next(error))
    }
}

export {asyncHandler}







/*const asyncHandler= ()=>{}
const asyncHandler=(func)=>{()=>{}}
const asyncHandler=(func)=> async()=>{}
    */

/*const asyncHandler= (func) =>async(req,res,next)=>{

    try {
        
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}*/