const Router = require('express')
const router = new Router()

router.post('/registrarion',)
router.post('/login',)
router.get('/auth', (req, res) => {
    res.json({message: 'ALL WORKING'})
})

module.exports = router