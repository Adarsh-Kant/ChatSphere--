// import mongoose from "mongoose";
// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     confirmpassword: {
//         type: String,
//     }
// }, {
//     timestamps: true// Automatically adds createdAt and updatedAt fields
// });
// const User = mongoose.model('User', userSchema);
// export default User;






import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String,
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;
