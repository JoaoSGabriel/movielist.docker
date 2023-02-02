/*
  Warnings:

  - You are about to drop the column `actionId` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `tmbdPoster_path` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `tmdbMovieId` on the `History` table. All the data in the column will be lost.
  - You are about to drop the column `tmdbTitle` on the `History` table. All the data in the column will be lost.
  - Added the required column `historyId` to the `MovieFavorits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historyId` to the `PlaningSee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historyId` to the `Watched` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "History" DROP COLUMN "actionId",
DROP COLUMN "tmbdPoster_path",
DROP COLUMN "tmdbMovieId",
DROP COLUMN "tmdbTitle";

-- AlterTable
ALTER TABLE "MovieFavorits" ADD COLUMN     "historyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PlaningSee" ADD COLUMN     "historyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Watched" ADD COLUMN     "historyId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MovieFavorits" ADD CONSTRAINT "MovieFavorits_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "History"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaningSee" ADD CONSTRAINT "PlaningSee_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "History"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "History"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
