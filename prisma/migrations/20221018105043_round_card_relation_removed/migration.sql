/*
  Warnings:

  - You are about to drop the column `roundId` on the `Card` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[word]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_roundId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "roundId";

-- CreateIndex
CREATE UNIQUE INDEX "Card_word_key" ON "Card"("word");
