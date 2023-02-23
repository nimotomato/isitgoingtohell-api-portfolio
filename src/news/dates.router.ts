import express from "express";
import type { Request, Response } from "express";

import * as datesService from "./dates.service";


const newsRouter = express.Router();


//GET: Label and region for selected dates, specified via query string. 
export default newsRouter.get("/", async (request: Request, response: Response) => {
    try {
        // Call prisma query
        const dateRange = await datesService.getDates()


        return response.status(200).json(dateRange)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})