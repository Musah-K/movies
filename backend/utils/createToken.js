import jwt from "jsonwebtoken";

const generateToken = (res, userId)=>{
    const token = jwt.sign({userId},process.env.SECRET,{expiresIn:'15d'});


    res.cookie('jwt',token,{
        httpOnly:true,
        secure: true,
        sameSite:"strict",
        maxAge: 15*24*60*60*1000
    })

    return token;
}

export default generateToken;