

const login = async (req,res) =>{
    res.send('fake login/register/singup')
}

const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random()*101);
    res.status(200).json({msg:'hello, joema ma',secret:`heres is a your funny number = ${luckyNumber}`})
}

module.exports ={
    login,
    dashboard
}