const koa = require('koa')
const router = require('koa-router')
const applyRoutes = require('./routes')

const app = new koa()
const router = new Router()

module.exports = () => {
    console.log('[koa] Criando um novo servidor')

    applyRoutes(router)

    app.use(router.routes())
    app.listen(8080)
}