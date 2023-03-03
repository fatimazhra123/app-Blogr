const router = require("express").Router()


const { createCategorie, getAllCategorie} = require('../controller/categorieController')


router.post('/', createCategorie)
router.get('/', getAllCategorie)




module.exports = router
