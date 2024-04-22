-- CreateTable
CREATE TABLE "production" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "manufacturing" TEXT NOT NULL,
    "validity" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "production_pkey" PRIMARY KEY ("id")
);
