import mongoose from "mongoose"
const schoolSchema=mongoose.Schema({
    SchoolName:{
       type:String 
    },
    SchoolLogo:{
type:String
    },
    SchoolEmail:{
type:String
    },
    SchoolAddress:{
Province:{
    type:String
},
District:{
type:String
},
Sector:{
    type:String
},
Cell:{
    type:String
},
Village:{
    type:String
}
    },
    SchoolBursar:{
        FullName:{
            type:String
        },
        Email:{
            type:String
        }
    }
})
const schoolModel=mongoose.model("Schools",schoolSchema)
export default schoolModel