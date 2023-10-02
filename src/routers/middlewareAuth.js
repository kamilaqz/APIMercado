const jwtService = require('jsonwebtoken')
const dotenv = require('dotenv').config()

module.exports = async (req, res, next) => {

    const routeClient = req.path
    const nonSecurityRoutesClients = ['/client/create', '/client/login']
    if(nonSecurityRoutesClients.includes(routeClient)) {
        return next()
    }

    const routeEmployee = req.path
    const nonSecurityRoutesEmployee = ['/employee/create', '/employee/login']
    if(nonSecurityRoutesEmployee.includes(routeEmployee)) {
        return next()
    }

    const token = req.headers.authorization
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({message: "Usuário não autorizado"})
    }

    const tokenValue = token.split(' ')[1]
    const secret = process.env.SECRET
    try {
        await jwtService.verify(tokenValue, secret)
        return next()
    }catch (err) {
        return res.status(401).json({message: "Não foi possível autorizar."})
    }
}