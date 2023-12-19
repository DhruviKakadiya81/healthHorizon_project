const login_Lab = require("../Models/Laboratory/laboratoryModel.js");
const bcrypt=require("bcrypt");

exports.loginLab = async (req, res, next) => {
    try {

        const l_email = req.body.email;
         const l_password= req.body.password;
        const loginUser = await login_Lab.findOne({email:l_email});
        const compare=await bcrypt.compare(l_password,loginUser.password);
          if(compare)
          {
            res.status(200).json({
              id:loginUser._id,
              email:loginUser.email,
              password:loginUser.password
            })
            //res.send(loginUser);
          }else{
            res.status(401).json({
              message:"Failed in password"
            })
          }
        
    } catch (error) {
        console.log("err in login route"+error);
        res.status(401).json({
          message:"Failed in Catch"
        })
    }
}