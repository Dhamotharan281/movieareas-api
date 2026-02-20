import express from"express"
const app=express();
const port=900;

app.get("/",(req,res)=>{
    res.json({msg:"Hello students!..."});
});

//CRUD function of movies
//c

app.post("/movies",(req,res)=>{
    res.json({msg:"Movie added successfully..."});
});

//r
app.get("/movies",(req, res)=>{
    res.json({msg:"All movies..."});
});
//u
app.put("/movies/:id",(req,res)=>{
    res.json({msg:"update"})
})


//d

app.delete("/movies",(req,res)=>{
    res.json({msg:"movie deleted"})
})
app.listen(port,
    ()=>
    console.log(`Server is running on port
        http://localhost:${port}`));  
