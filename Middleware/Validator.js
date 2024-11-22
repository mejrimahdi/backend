const { check, validationResult } = require("express-validator");




exports.registerValidations=()=>[
    check("name","this field must contain a caracter").notEmpty(),
    check("email","this field must be an email").isEmail().notEmpty(),
    check("password","this field must be minimum 8 caracter with minimum 1 symbol, 2 numbers and 1 upperCase").isStrongPassword({minLength:8,minUppercase:1,minNumbers:2,minSymbols:1})
]
//password:mahdi321

exports.validator=(req,res,next)=>{
    const errors=validationResult(req)
    errors.isEmpty()?   next():res.status(400).send(errors)
}

