import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

type DateRange = {
  startDate: Date;
  endDate: Date;
};


export const getDates = async (): Promise<DateRange[]> => {
    const maxDate = await prisma.news.findFirst({
      where: {
        sentiments: {
          isNot: null
        }
      },
      orderBy: {
        date: 'desc'
      },
      select: {
        date: true
      },
    });

    const minDate = await prisma.news.findFirst({
      where: {
        sentiments: {
          isNot: null
        }
      },
      orderBy: {
        date: 'asc'
      },
      select: {
        date: true
      },
    });


    const dateRange: DateRange[] = [];


    if (maxDate && minDate) {
      dateRange.push({
        startDate: minDate.date,
        endDate: maxDate.date,
      });
    }


    return dateRange;
}