const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) =>{
    const {username, password} = req.body;

    if (!username || !password) {
        throw new CustomAPIError('password or email no provided',400)
    }

    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) =>{
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('no token provided', 401)
    }

    const token = authHeader.split(' ')[1]
    console.log(token)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        const luckyNumber = Math.floor(Math.random()*101);

        res.status(200).json({msg:`welcome, ${decoded.username}`,secret:`heres is a your funny number = ${luckyNumber}`})
    
    } catch (error) {
        throw new CustomAPIError('not authorized to access this route',401)
    }
}

module.exports ={
    login,
    dashboard
}