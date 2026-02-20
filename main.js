import express from"express"
const app=express();
const port=900;

app.get("/",(req,res)=>{
    res.json({msg:"Hello students!..."});
});
app.listen(port,
    ()=>
    console.log(`Server is running on port
        http://localhost:${port}`));  
