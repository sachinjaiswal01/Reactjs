import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('server is ready');
});

const port = process.env.PORT || 3000; // local env sedatat lega ya fir port 3000 per serve karega.

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})