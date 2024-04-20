const express=require("express")
const router=express.Router()

const upload=require('../middleware/multer')
const {getImage,getImagePost}=require('../controller/imageController')

router.post('/image',upload.single('image'),getImage)
router.get('/image/:fileName',getImagePost)
module.exports=router
