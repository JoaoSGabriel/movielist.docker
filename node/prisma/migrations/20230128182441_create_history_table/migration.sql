-- CreateEnum
CREATE TYPE "HistoryType" AS ENUM ('WATCHED', 'PLANNING', 'LIKED');

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "HistoryType" NOT NULL,
    "tmdbMovieId" INTEGER NOT NULL,
    "tmdbTitle" TEXT NOT NULL,
    "tmbdPoster_path" TEXT NOT NULL,
    "actionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
