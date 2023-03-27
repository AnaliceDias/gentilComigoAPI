/*
  Warnings:

  - You are about to drop the column `idemocaoPrimaria` on the `emocoesSecundarias` table. All the data in the column will be lost.
  - You are about to drop the column `idemocaoSecundaria` on the `emocoesTerciarias` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `emocoesPrimarias` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `emocoesSecundarias` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `emocoesTerciarias` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idEmocaoPrimaria` to the `emocoesSecundarias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idEmocaoSecundaria` to the `emocoesTerciarias` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "emocoesSecundarias" DROP CONSTRAINT "emocoesSecundarias_idemocaoPrimaria_fkey";

-- DropForeignKey
ALTER TABLE "emocoesTerciarias" DROP CONSTRAINT "emocoesTerciarias_idemocaoSecundaria_fkey";

-- AlterTable
ALTER TABLE "emocoesPrimarias" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "emocoesPrimarias_id_seq";

-- AlterTable
ALTER TABLE "emocoesSecundarias" DROP COLUMN "idemocaoPrimaria",
ADD COLUMN     "idEmocaoPrimaria" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "emocoesSecundarias_id_seq";

-- AlterTable
ALTER TABLE "emocoesTerciarias" DROP COLUMN "idemocaoSecundaria",
ADD COLUMN     "idEmocaoSecundaria" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "emocoesTerciarias_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "emocoesPrimarias_id_key" ON "emocoesPrimarias"("id");

-- CreateIndex
CREATE UNIQUE INDEX "emocoesSecundarias_id_key" ON "emocoesSecundarias"("id");

-- CreateIndex
CREATE UNIQUE INDEX "emocoesTerciarias_id_key" ON "emocoesTerciarias"("id");

-- AddForeignKey
ALTER TABLE "emocoesSecundarias" ADD CONSTRAINT "emocoesSecundarias_idEmocaoPrimaria_fkey" FOREIGN KEY ("idEmocaoPrimaria") REFERENCES "emocoesPrimarias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emocoesTerciarias" ADD CONSTRAINT "emocoesTerciarias_idEmocaoSecundaria_fkey" FOREIGN KEY ("idEmocaoSecundaria") REFERENCES "emocoesSecundarias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
