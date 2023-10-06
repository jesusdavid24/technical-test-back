import { PrismaClient} from '@prisma/client';
import { User } from './user.types';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.user.findMany({
    select: {
      id: false,
      name: true,
      avatar_url: true,
      followers: true
    }
  });
  return users;
}

export async function createUser(data: User) {
  
  const user = await prisma.user.create({
    data,
    select: {
      avatar_url: true,
      name: true, 
      followers: true
    }
  });

  return user;
};


