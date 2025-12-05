import express from 'express';

const app = express();

app.get('/',(req, res) => {
    res.send('server is ready');
});

//get a list of 5 jokes

app.get ('jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },

         {
            id:2,
            title:'A joke',
            content:'This is another joke'
        },

         {
            id:3,
            title:'A joke',
            content:'This is a third joke'
        },

         {
            id:4,
            title:'A joke',
            content:'This is a fourth joke'
        },

         {
            id:5,
            title:'A joke',
            content:'This is a fifth joke'
        },
    ];
    res.send(jokes);
});

const port = process.env. PORT || 3000;

app. listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});

