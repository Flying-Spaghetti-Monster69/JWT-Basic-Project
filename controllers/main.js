const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) =>{
    const {username, password} = req.body;

    if (!username || !password) {
        throw new CustomAPIError('password or email no provided',400)
    }

    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    console.log(token)
    console.log(process.env.JWT_SECRET)
    console.log(id)
    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random()*101);
    res.status(200).json({msg:'hello, joema ma',secret:`heres is a your funny number = ${luckyNumber}`})
}

module.exports ={
    login,
    dashboard
}