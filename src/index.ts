import express from 'express';
import cors from 'cors';

import newsRouter from './news/news.router';


const app = express();



app.use(cors());
app.use(express.json());
app.use("/api/news", newsRouter)
// app.use("/api/news", dynamicNewsRouter(startDate, endDate))

//Placeholder dates
// const startDate = new Date('February 18, 2022 03:24:00')
// const endDate = new Date('February 20, 2024 03:24:00')

app.listen(Number(3000), () => {
    console.log("Listening on port 3000")
});