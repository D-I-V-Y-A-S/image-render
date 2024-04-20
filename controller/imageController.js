const path=require('path')
const fs=require('fs')
const directory=(__dirname).split('\controller')[0]

const getImage=((request,response)=>{
    console.log(request.file)
    response.status(201).send("Image Uploaded")
})

const getImagePost=(request,response)=>{
    const fileName=request.params.fileName
    fs.stat(filePath,(error,stat)=>{
if(stat)
{
    response.status(201).sendFile(filePath)
}
else{
    response.status(409).send("wrong path!!")
}
    })
}
module.exports={getImage,getImagePost}