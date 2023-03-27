-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nomeDoUsuario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emocoesPrimarias" (
    "id" SERIAL NOT NULL,
    "emocao" TEXT NOT NULL,

    CONSTRAINT "emocoesPrimarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emocoesSecundarias" (
    "id" SERIAL NOT NULL,
    "emocao" TEXT NOT NULL,
    "idemocaoPrimaria" INTEGER NOT NULL,

    CONSTRAINT "emocoesSecundarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emocoesTerciarias" (
    "id" SERIAL NOT NULL,
    "emocao" TEXT NOT NULL,
    "idemocaoSecundaria" INTEGER NOT NULL,

    CONSTRAINT "emocoesTerciarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registros" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idEmocao" INTEGER NOT NULL,
    "anotacao" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registros_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "emocoesSecundarias" ADD CONSTRAINT "emocoesSecundarias_idemocaoPrimaria_fkey" FOREIGN KEY ("idemocaoPrimaria") REFERENCES "emocoesPrimarias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emocoesTerciarias" ADD CONSTRAINT "emocoesTerciarias_idemocaoSecundaria_fkey" FOREIGN KEY ("idemocaoSecundaria") REFERENCES "emocoesSecundarias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros" ADD CONSTRAINT "registros_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registros" ADD CONSTRAINT "registros_idEmocao_fkey" FOREIGN KEY ("idEmocao") REFERENCES "emocoesTerciarias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
