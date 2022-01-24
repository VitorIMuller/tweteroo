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
    if(req.body.username.length === 0 || req.body.avatar.length === 0){
        res.sendStatus(400)

    }else{

        const tweet = req.body;
        tweets.push(tweet);
    
        res.sendStatus(200)
    }

})

app.post('/sign-up',(req, res) =>{
    if(req.body.username.length === 0 || req.body.avatar.length === 0){
        res.sendStatus(400)

    }else{

        const user = req.body;
        userData.push(user)
        res.status(400)
    }
})



app.listen(5000, ()=> {
    console.log("Rodando!")
});