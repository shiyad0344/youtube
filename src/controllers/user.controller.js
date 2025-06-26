import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser= async (req,res)=>{
    res.status(200).json({
        message: "OK"
    })
}

export {registerUser}