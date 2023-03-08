import express from 'express';
import cors from 'cors';

import newsRouter from './news/news.router';
import datesRouter from './news/dates.router';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());


// Use router in routers
// GET max and min date
app.use("/api/dates", datesRouter); 

// GET news between dates
app.use("/api/news", newsRouter);



app.listen(port, () => {
    console.log(`Listening on port${port}`);
});