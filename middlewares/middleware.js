const validar = (req, res, next) => {

    const Auth = req.header('Authorization')
    Auth
        ? next()
        : res.send('usuario No autorizado')
}

module.exports = validar