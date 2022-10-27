import mongoose from "mongoose";

export const db = () => {
  mongoose
    .connect("mongodb://localhost:27017/sd")
    .then((res) => {
      console.log("connect ");
    })
    .catch((e) => {
      console.log(e);
    });
};


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : false
    }
})


export const userModel = mongoose.model("user" , userSchema);



