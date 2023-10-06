/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `follower` on the `User` table. All the data in the column will be lost.
  - Added the required column `avatar_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "follower",
ADD COLUMN     "avatar_url" TEXT NOT NULL,
ADD COLUMN     "followers" INTEGER NOT NULL;
