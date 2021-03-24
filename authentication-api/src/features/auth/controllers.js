module.exports = {
    auth: ctx => {
        const { response } = ctx
        response.body = { message: 'Autenticado com sucesso!' }
    }
}