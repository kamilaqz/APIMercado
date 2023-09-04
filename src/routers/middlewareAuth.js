const jwtService = require('jsonwebtoken')
module.exports = async (req, res, next) => {

    const routeClient = req.path
    const nonSecurityRoutesClients = ['/createClient', '/login', '/about']
    if(nonSecurityRoutesClients.includes(routeClient)) {
        return next()
    }

    const routeEmployee = req.path
    const nonSecurityRoutesEmployee = ['/createEmployee', '/login', '/about']
    if(nonSecurityRoutesEmployee.includes(routeEmployee)) {
        return next()
    }

    const token = req.headers.authorization
    if (!token) {
        res.status(401).json({message: "Usuario não autorizado"})
        return next()
    }
    //token = token.split(' ')[1] 
    const secret = process.env.SECRET
    try {
        await jwtService.verify(token, secret)
        return next()
    }catch (err) {
        res.status(401).json({message: "Usuario não autorizado"})
        return
    }
}