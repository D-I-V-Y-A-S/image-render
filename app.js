const express=require('express')
const app=express()
const PORT=3500

const route=require('./router/userRoute')

app.use(express.json())
app.get('/',(request,response)=>{
    response.status(200).send({message:"Hello!"})
})
app.use('/api/v1',route)

app.listen(PORT,console.log(`server started running at http://localhost:${PORT}`))



//npm init -y
//npm install express --save-dev nodemon
//"start":"nodemon app.js"
//npm start