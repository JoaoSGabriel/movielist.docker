-- CreateTable
CREATE TABLE "Rated" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "rated" INTEGER NOT NULL,
    "tmdbMovieId" INTEGER NOT NULL,
    "tmdbTitle" TEXT NOT NULL,
    "tmbdPoster_path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rated_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rated" ADD CONSTRAINT "Rated_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
