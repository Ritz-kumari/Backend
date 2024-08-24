import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const userSchema = Schema({
    userName:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
    },

    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String, //cloudinary url
        required: true
    },
    coverImage:{
        type: String, //cloudinary url
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: "video"
        }
    ],
    password:{
        type: String,
        required:[true, "password is required"]
    },
    refreshToken:{
        type: String
    }},
    {
        timeStamps: true,
    }
)

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) { return next()}
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methord.isPasswordCorrect() = async function (password) {
    return await bcrypt.compare("password", this.password)
}

userSchema.methord.generateAccessToken = function (){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        fullname: this.fullname,
        userName: this.userName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}

userSchema.methord.generateRefreshToken = function (){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}
userSchema.methord.generateRefreshToken = function () {}

export const User = mongoose.Model("User",userSchema)