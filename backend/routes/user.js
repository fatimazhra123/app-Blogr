const router = require("express").Router()
const { updateProfil,deleteProfil,getProfil} = require('../controller/userController')


router.put('/:id', updateProfil)
router.delete('/:id', deleteProfil)
router.get('/:id', getProfil)




module.exports = router
