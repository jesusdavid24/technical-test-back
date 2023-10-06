import { PrismaClient} from '@prisma/client';
import { User } from './user.types';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.user.findMany({
    select: {
      id: false,
      name: true,
      avatar: true,
      company: true,
      follower: true
    }
  });
  return users;
}

export async function createUser(data: User) {
  const user = await prisma.user.create({
    data,
  });

  return user;
};


