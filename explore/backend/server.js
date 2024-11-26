import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('server is ready');
});


// Get a list of 5 jokes

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Funny story',
            content: 'This is a funny story'
        },
        {
            id: 4,
            title: 'Random thought',
            content: 'This is a random thought'
        },
        {
            id: 5,
            title: 'A pun',
            content: 'This is a pun'
        }        
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000; // local env sedatat lega ya fir port 3000 per serve karega.

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})