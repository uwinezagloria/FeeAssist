import mongooose from "mongoose";
const userSchema = new mongoose.Schema({
    FullName: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type:String
    },
    Role: {
        enum: ['admin', 'bursar', 'school', 'payer'],
        type: String
    },
    Otp: {
        type: Number
    },
    OtpVerified: {
        type: Boolean,
        default: false
    }
})
const userModel = mongoose.model("USERS", userSchema)
export default userModel