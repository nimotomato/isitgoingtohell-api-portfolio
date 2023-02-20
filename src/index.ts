import express from 'express';
import cors from 'cors';

import newsRouter from './news/news.router';


const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Use router in routers
app.use("/api/news", newsRouter)


app.listen(Number(3000), () => {
    console.log("Listening on port 3000")
});