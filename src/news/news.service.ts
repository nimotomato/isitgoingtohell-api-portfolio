import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


type Sentiment = {
    label?: string;
    region: string;
};


export const getSentiments = async (startDate: Date, endDate: Date): Promise<Sentiment[]> => {
    const result = await prisma.news.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        region: true,
        sentiments: {
          select: {
            label: true,
          },
        },  
      },
    });


    const sentiments = result.map((news) => {
        return {
          label: news.sentiments?.label,
          region: news.region,
        };
      });
    

    return sentiments;
}