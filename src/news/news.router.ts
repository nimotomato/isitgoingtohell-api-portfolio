import express from "express";
import type { Request, Response } from "express";
import {body, validationResult} from "express-validator";

import * as newsService from "./news.service";


const newsRouter = express.Router();


//GET: Label and region for selected dates, specified via query string. 
export default newsRouter.get("/", async (request: Request, response: Response) => {
    try {
        // Take the query params anduse in prisma query.
        const startDate = new Date((request.query as { startDate: string }).startDate);
        const endDate = new Date((request.query as { endDate: string }).endDate);


        // Call prisma query
        const news = await newsService.getSentiments(startDate, endDate)


        return response.status(200).json(news)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})