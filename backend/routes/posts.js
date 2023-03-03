const router = require("express").Router()
const { createPost,updatePost,deletePost,getOnepost, getAllPost} = require('../controller/postController')


router.post('/', createPost)
router.put('/', updatePost)
router.delete('/', deletePost)
router.get('/', getOnepost)
router.get('/', getAllPost)



module.exports = router
