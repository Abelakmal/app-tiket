import prisma from '@/prisma';

const getEventByUserIdRepo = async (userId: number) => {
  try {
    const data = await prisma.event.findMany({
      where: {
        userId,
      },
      include: { Transaction: true },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export default getEventByUserIdRepo;
