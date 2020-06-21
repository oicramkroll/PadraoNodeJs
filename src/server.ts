import express from 'express';
import '@controllers/UserController';
const app = express();
app.get('/',(req,res)=>{
    return res.json({mensage:'Hello Word'});
})

app.listen(3333);
