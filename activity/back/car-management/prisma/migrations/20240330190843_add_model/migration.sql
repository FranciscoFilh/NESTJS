-- CreateTable
CREATE TABLE "ImageCar" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ImageCar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_carTologin" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_carTologin_AB_unique" ON "_carTologin"("A", "B");

-- CreateIndex
CREATE INDEX "_carTologin_B_index" ON "_carTologin"("B");

-- AddForeignKey
ALTER TABLE "ImageCar" ADD CONSTRAINT "ImageCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_carTologin" ADD CONSTRAINT "_carTologin_A_fkey" FOREIGN KEY ("A") REFERENCES "car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_carTologin" ADD CONSTRAINT "_carTologin_B_fkey" FOREIGN KEY ("B") REFERENCES "login"("id") ON DELETE CASCADE ON UPDATE CASCADE;
