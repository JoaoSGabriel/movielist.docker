/*
  Warnings:

  - You are about to drop the column `rated` on the `Rated` table. All the data in the column will be lost.
  - You are about to drop the column `tmbdPoster_path` on the `Rated` table. All the data in the column will be lost.
  - You are about to drop the column `tmdbTitle` on the `Rated` table. All the data in the column will be lost.
  - Added the required column `rate` to the `Rated` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rated" DROP COLUMN "rated",
DROP COLUMN "tmbdPoster_path",
DROP COLUMN "tmdbTitle",
ADD COLUMN     "rate" DECIMAL(65,30) NOT NULL;
