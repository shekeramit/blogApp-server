const db = require("../database/connection");
const Jwt = require('jsonwebtoken');
const secretkey = 'secret'

//For signup
exports.signupUser = async(req,res)=>{
  const signupData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    password: req.body.password,
  };
    db.query('INSERT INTO auth SET ?',signupData , (err, result) => {
        if (err) {
          console.error('Error inserting data:', err); 
          res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log('Data inserted successfully:', result);
          res.status(200).json({ message: 'Signup successful' });
        }
    })
}

//For login
exports.loginUser = async(req,res) => {
    const { emailAddress, password } = req.body;
  db.query('SELECT * FROM auth WHERE emailAddress = ?', [emailAddress], (err,result)=>{
    try{
      if(result[0].emailAddress){
        let token=generateToken(emailAddress)
        res.json({"token":token});
      }
    }  
    catch(err){
      res.send("error")
    }
   
  })
}
function generateToken(result) {
    const token = Jwt.sign({ result }, secretkey, { expiresIn: '1h' });
    return token;
}
