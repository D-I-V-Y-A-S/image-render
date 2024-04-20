const multer=require("multer")
const path=require('path')
const fs=require('fs')

const directory=(__dirname).split('\middleware')[0]

const storage=multer.diskStorage({
    destination:(request,file,cb)=>{
        cb(null,'images')
    },
    filename:(request,file,cb)=>{
        const filePath=path.join(directory,'images',file.originalname)
        fs.stat(filePath,(error,stat)=>{
            if(error)
            {
                cb(null,file.originalname)
            }
            else{
                cb("file already exists")
            }
        })
    }
})

const upload=multer({storage:storage})

module.exports=upload

//multer->({})
//arrowfunc
//npm install multer
//body-formdata-post