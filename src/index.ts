import express from 'express';
import cors from 'cors';

import newsRouter from './news/news.router';
import datesRouter from './news/dates.router';

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Use router in routers
// GET max and min date
app.use("/api/dates", datesRouter); 

// GET news between dates
app.use("/api/news", newsRouter);



app.listen(Number(3000), () => {
    console.log("Listening on port 3000");
});