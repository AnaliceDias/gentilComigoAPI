import { registro , emocoesPrimarias , emocoesSecundarias , emocoesTerciarias } from "@prisma/client";

export type regristroInterface = Omit< registro , "id" | "created_at">

export type emocaoPrimariaInterface = emocoesPrimarias;

export type emocaoSecundariaInterface = emocoesSecundarias;

export type emocaoTerciariaInterface = emocoesTerciarias;