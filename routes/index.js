const router = require('express').Router()
const productsController = require('../controllers/products')

router.get('/', productsController.index)

router.get('/new', productsController.new)

router.get('/:name', productsController.show)

router.get('/:name/edit', productsController.edit)

router.post('/', productsController.create)

router.put('/:id', productsController.update)

router.patch('/:name', productsController.buy)

router.delete('/:id', productsController.delete)





module.exports = router