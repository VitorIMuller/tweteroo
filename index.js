import express, {json} from "express";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

let tweets = [];
let userData = [];

app.get('/tweets', (req, res)=>{
    if(tweets.length <=10){
        res.send(tweets)
    }else{
        res.send(tweets.slice(tweets.length - 10, tweets.length));
    }
})

app.post('/tweets', (req, res)=> {
    const tweet = req.body;
    tweets.push(tweet);

    res.send("OK!")
})

app.post('/sign-up',(req, res) =>{
    const user = req.body;
    userData.push(user)
    res.send("OK!")
})



app.listen(5000, ()=> {
    console.log("Rodando!")
});