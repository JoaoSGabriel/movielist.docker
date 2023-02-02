-- CreateTable
CREATE TABLE "MovieFavorits" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tmdbMovieId" INTEGER NOT NULL,
    "tmdbTitle" TEXT NOT NULL,
    "tmbdPoster_path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MovieFavorits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MovieFavorits" ADD CONSTRAINT "MovieFavorits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
