import express from "express";
import type { Request, Response } from "express";
import {body, validationResult} from "express-validator";

import * as newsService from "./news.service";


//GET: Label and region for selected dates. 
const newsRouter = express.Router();



export default newsRouter.get("/", async (request: Request, response: Response) => {
    try {
        // Wtf is as {startDate: string}. I don't get this line, got help from good friend chatGPT
        const startDate = new Date((request.query as { startDate: string }).startDate);
        const endDate = new Date((request.query as { endDate: string }).endDate);

        const news = await newsService.getSentiments(startDate, endDate)
        return response.status(200).json(news)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})



// export const dynamicNewsRouter = (startDate: Date, endDate: Date) => {
//     const newsRouter = express.Router();

//     newsRouter.get("/", async (request: Request, response: Response) => {
//         try {
//             const news = await newsService.getSentiments(startDate, endDate)
//             return response.status(200).json(news)
//         } catch (error: any) {
//             return response.status(500).json(error.message)
//         }
//     })

//     return newsRouter
// }
