const express = require('express')
const { getAllBlogsController, 
        getBlogByIdController, 
        createBlogController, 
        updateBlogController, 
        deleteBlogController, 
        userBlogController} = require('../controllers/blogController')

//router object
const router = express.Router()

//routes
//GET || get all blogs
router.get('/all-blog', getAllBlogsController)

//GET || get single blog
router.get('/get-blog/:id', getBlogByIdController)

//POST || create blog
router.post('/create-blog', createBlogController)

//PUT || update blog
router.put('/update-blog/:id', updateBlogController)

//DELETE || delete blog
router.delete('/delete-blog/:id', deleteBlogController)

//GET || user blog
router.get('/user-blog/:id', userBlogController)

module.exports = router