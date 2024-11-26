import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('server is ready');
});


// Get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = 
    [
        {
          id: 1,
          title: "Debugging",
          content: "Debugging: Removing the needles from the haystack."
        },
        {
          id: 2,
          title: "Wi-Fi Password",
          content: "Why was the computer cold? It left its Windows open!"
        },
        {
          id: 3,
          title: "SQL Joke",
          content: "Why do SQL developers always party alone? They don't like to join tables!"
        },
        {
          id: 4,
          title: "404",
          content: "I tried to make a joke about a missing file, but I couldn't find the 404 punchline!"
        },
        {
          id: 5,
          title: "Java vs. JavaScript",
          content: "Java and JavaScript are like car and carpet – completely unrelated!"
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000; // local env sedatat lega ya fir port 3000 per serve karega.

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})