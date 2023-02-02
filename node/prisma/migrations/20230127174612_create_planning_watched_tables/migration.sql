-- CreateTable
CREATE TABLE "PlaningSee" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tmdbMovieId" INTEGER NOT NULL,
    "tmdbTitle" TEXT NOT NULL,
    "tmbdPoster_path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlaningSee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watched" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tmdbMovieId" INTEGER NOT NULL,
    "tmdbTitle" TEXT NOT NULL,
    "tmbdPoster_path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Watched_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlaningSee" ADD CONSTRAINT "PlaningSee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watched" ADD CONSTRAINT "Watched_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
