// const asyncHandler = () =>{}

// export {asyncHandler}

const asyncHandler = (reqHandler) =>{
    (req,res,next) => {
        Promise.resolve(reqHandler(req,res,next)).catch((error) => next(error))
    }
}

// const asyncHandler = (func) => async (req,res,next) =>{
//     try{
//         await func(req,res,next)
//     }catch(error){
//         res.status(error.code || 5000).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

export {asyncHandler}