import prisma from "../src/config/database";
import { emocaoPrimariaInterface , emocaoSecundariaInterface , emocaoTerciariaInterface } from "../src/interfaces/interfaces";

async function main () {

    const emocoesPrimarias: emocaoPrimariaInterface[] = [
        {id: 1, emocao: "Triste"},
        {id: 2, emocao: "Alegre"},
        {id: 3, emocao: "Surpreso"},
        {id: 4, emocao: "Estar mal"},
        {id: 5, emocao: "Com medo"},
        {id: 6, emocao: "Com raiva"},
        {id: 7, emocao: "Com aversão"}
    ];

    const emocoesSecundarias: emocaoSecundariaInterface[] =[
        {id: 1,
        emocao: "Sozinho(a)",
        idEmocaoPrimaria: 1
        },
        {id: 2,
        emocao: "Vulnerável",
        idEmocaoPrimaria: 1
        },
        {id: 3,
        emocao: "Culpado(a)",
        idEmocaoPrimaria: 1
        },
        {id: 4,
        emocao: "Desesperado(a)",
        idEmocaoPrimaria: 1
        },
        {id: 5,
        emocao: "Deprimido(a)",
        idEmocaoPrimaria: 1
        },
        {id: 6,
        emocao: "Ofendido(a)",
        idEmocaoPrimaria: 1
        },

        {id: 7,
        emocao: "Brincalhão",
        idEmocaoPrimaria: 2
        },
        {id: 8,
        emocao: "Satisfeito(a)",
        idEmocaoPrimaria: 2
        },
        {id: 9,
        emocao: "Interessado(a)",
        idEmocaoPrimaria: 2
        },
        {id: 10,
        emocao: "Orgulhoso",
        idEmocaoPrimaria: 2
        },
        {id: 11,
        emocao: "Reconhecido(a)",
        idEmocaoPrimaria: 2
        },
        {id: 12,
        emocao: "Poderoso(a)",
        idEmocaoPrimaria: 2
        },
        {id: 13,
        emocao: "Pacífico(a)",
        idEmocaoPrimaria: 2
        },
        {id: 14,
        emocao: "Confiável",
        idEmocaoPrimaria: 2
        },
        {id: 15,
        emocao: "Otimista",
        idEmocaoPrimaria: 2
        },
        {id: 16,
        emocao: "Assustado(a)",
        idEmocaoPrimaria: 3
        },
        {id: 17,
        emocao: "Confuso(a)",
        idEmocaoPrimaria: 3
        },
        {id: 18,
        emocao: "Maravilhado(a)",
        idEmocaoPrimaria: 3
        },
        {id: 19,
        emocao: "Animado(a)",
        idEmocaoPrimaria: 3
        },
        {id: 20,
        emocao: "Entediado(a)",
        idEmocaoPrimaria: 4
        },
        {id: 21,
        emocao: "Ocupado(a)",
        idEmocaoPrimaria: 4
        },
        {id: 22,
        emocao: "Estressado(a)",
        idEmocaoPrimaria: 4
        },
        {id: 23,
        emocao: "Cansado(a)",
        idEmocaoPrimaria: 4
        },
        {id: 24,
        emocao: "Ameaçado(a)",
        idEmocaoPrimaria: 5
        },
        {id: 25,
        emocao: "Rejeitado(a)",
        idEmocaoPrimaria: 5
        },
        {id: 26,
        emocao: "Fraco(a)",
        idEmocaoPrimaria: 5
        },
        {id: 27,
        emocao: "Inseguro(a)",
        idEmocaoPrimaria: 5
        },
        {id: 28,
        emocao: "Ansioso(a)",
        idEmocaoPrimaria: 5
        },
        {id: 29,
        emocao: "Apavorado(a)",
        idEmocaoPrimaria: 5
        },
        {id: 30,
        emocao: "Crítico(a)",
        idEmocaoPrimaria: 6
        },
        {id: 31,
        emocao: "Distante",
        idEmocaoPrimaria: 6
        },
        {id: 32,
        emocao: "Frustrado(a)",
        idEmocaoPrimaria: 6
        },
        {id: 33,
        emocao: "Agressivo(a)",
        idEmocaoPrimaria: 6
        },
        {id: 34,
        emocao: "Bravo(a)",
        idEmocaoPrimaria: 6
        },
        {id: 35,
        emocao: "Amargo(a)",
        idEmocaoPrimaria: 6
        },
        {id: 36,
        emocao: "Humilhado(a)",
        idEmocaoPrimaria: 6
        },
        {id: 37,
        emocao: "Decepcionado(a)",
        idEmocaoPrimaria: 6
        },
        {id: 38,
        emocao: "Com repulsa",
        idEmocaoPrimaria: 7
        },
        {id: 39,
        emocao: "Horrorizado(a)",
        idEmocaoPrimaria: 7
        },
        {id: 40,
        emocao: "Desapontado(a)",
        idEmocaoPrimaria: 7
        },
        {id: 41,
        emocao: "Desaprovador(a)",
        idEmocaoPrimaria: 7
        },
    ];

    const emocoesTerciarias: emocaoTerciariaInterface[] = [
        {id: 1,
        emocao: "Isolado(a)",
        idEmocaoSecundaria: 1
        },
        {id: 2,
        emocao: "Abandonado(a)",
        idEmocaoSecundaria: 1
        },
        {id: 3,
        emocao: "Vítima",
        idEmocaoSecundaria: 2
        },
        {id: 4,
        emocao: "Frágil",
        idEmocaoSecundaria: 2
        },
        {id: 5,
        emocao: "Envergonhado(a)",
        idEmocaoSecundaria: 3
        },
        {id: 6,
        emocao: "Arrependido(a)",
        idEmocaoSecundaria: 3
        },
        {id: 7,
        emocao: "Pesaroso(a)",
        idEmocaoSecundaria: 4
        },
        {id: 8,
        emocao: "Impotente",
        idEmocaoSecundaria: 4
        },
        {id: 9,
        emocao: "Vazio(a)",
        idEmocaoSecundaria: 5
        },
        {id: 10,
        emocao: "Inferior",
        idEmocaoSecundaria: 5
        },
        {id: 11,
        emocao: "Desiludido(a)",
        idEmocaoSecundaria: 6
        },
        {id: 12,
        emocao: "Tímido(a)",
        idEmocaoSecundaria: 6
        },
        {id: 13,
        emocao: "Entusiasmado(a)",
        idEmocaoSecundaria: 7
        },
        {id: 14,
        emocao: "Atrevido(a)",
        idEmocaoSecundaria: 7
        },
        {id: 15,
        emocao: "Livre",
        idEmocaoSecundaria: 8
        },
        {id: 16,
        emocao: "Contente",
        idEmocaoSecundaria: 8
        },
        {id: 17,
        emocao: "Curioso(a)",
        idEmocaoSecundaria: 9
        },
        {id: 18,
        emocao: "Inquiridor(a)",
        idEmocaoSecundaria: 9
        },
        {id: 19,
        emocao: "Bem sucedido(a)",
        idEmocaoSecundaria: 10
        },
        {id: 20,
        emocao: "Confiante",
        idEmocaoSecundaria: 10
        },
        {id: 21,
        emocao: "Respeitado(a)",
        idEmocaoSecundaria: 11
        },
        {id: 22,
        emocao: "Valorizado(a)",
        idEmocaoSecundaria: 11
        },
        {id: 23,
        emocao: "Corajoso(a)",
        idEmocaoSecundaria: 12
        },
        {id: 24,
        emocao: "Criativo(a)",
        idEmocaoSecundaria: 12
        },
        {id: 25,
        emocao: "Amoroso(a)",
        idEmocaoSecundaria: 13
        },
        {id: 26,
        emocao: "Grato(a)",
        idEmocaoSecundaria: 13
        },
        {id: 27,
        emocao: "Sensível",
        idEmocaoSecundaria: 14
        },
        {id: 28,
        emocao: "Íntimo(a)",
        idEmocaoSecundaria: 14
        },
        {id: 29,
        emocao: "Esperançoso(a)",
        idEmocaoSecundaria: 15
        },
        {id: 30,
        emocao: "Otimista",
        idEmocaoSecundaria: 15
        },
        {id: 31,
        emocao: "Chocado(a)",
        idEmocaoSecundaria: 16
        },
        {id: 32,
        emocao: "Consternado(a)",
        idEmocaoSecundaria: 16
        },
        {id: 33,
        emocao: "Desiludido(a)",
        idEmocaoSecundaria: 17
        },
        {id: 34,
        emocao: "Perplexo(a)",
        idEmocaoSecundaria: 17
        },
        {id: 35,
        emocao: "Antônito(a)",
        idEmocaoSecundaria: 18
        },
        {id: 36,
        emocao: "Admirado(a)",
        idEmocaoSecundaria: 18
        },
        {id: 37,
        emocao: "Ansioso(a) por algo",
        idEmocaoSecundaria: 19
        },
        {id: 38,
        emocao: "Energizado(a)",
        idEmocaoSecundaria: 19
        },
        {id: 39,
        emocao: "Indiferente",
        idEmocaoSecundaria: 20
        },
        {id: 40,
        emocao: "Apático(a)",
        idEmocaoSecundaria: 20
        },
        {id: 41,
        emocao: "Pressionado(a)",
        idEmocaoSecundaria: 21
        },
        {id: 42,
        emocao: "Apressado(a)",
        idEmocaoSecundaria: 21
        },
        {id: 43,
        emocao: "Oprimido(a)",
        idEmocaoSecundaria: 22
        },
        {id: 44,
        emocao: "Fora de controle",
        idEmocaoSecundaria: 22
        },
        {id: 45,
        emocao: "Sonolento(a)",
        idEmocaoSecundaria: 23
        },
        {id: 46,
        emocao: "Sem foco",
        idEmocaoSecundaria: 23
        },
        {id: 47,
        emocao: "Apreensivo(a)",
        idEmocaoSecundaria: 24
        },
        {id: 48,
        emocao: "Exposto(a)",
        idEmocaoSecundaria: 24
        },
        {id: 49,
        emocao: "Excluído(a)",
        idEmocaoSecundaria: 25
        },
        {id: 50,
        emocao: "Perseguido(a)",
        idEmocaoSecundaria: 25
        },
        {id: 51,
        emocao: "Inútil",
        idEmocaoSecundaria: 26
        },
        {id: 52,
        emocao: "Insignificante",
        idEmocaoSecundaria: 26
        },
        {id: 53,
        emocao: "Inferior",
        idEmocaoSecundaria: 27
        },
        {id: 54,
        emocao: "Inadequado(a)",
        idEmocaoSecundaria: 27
        },
        {id: 55,
        emocao: "Preocupado(a)",
        idEmocaoSecundaria: 28
        },
        {id: 56,
        emocao: "Sobrecarregado(a)",
        idEmocaoSecundaria: 28
        },
        {id: 57,
        emocao: "Desamparado(a)",
        idEmocaoSecundaria: 29
        },
        {id: 58,
        emocao: "Aterrorizado(a)",
        idEmocaoSecundaria: 29
        },
        {id: 59,
        emocao: "Cético(a)",
        idEmocaoSecundaria: 30
        },
        {id: 60,
        emocao: "Desdenhoso(a)",
        idEmocaoSecundaria: 30
        },
        {id: 61,
        emocao: "Entorpecido(a)",
        idEmocaoSecundaria: 31
        },
        {id: 62,
        emocao: "Arredio(a)",
        idEmocaoSecundaria: 31
        },
        {id: 63,
        emocao: "Irritado(a)",
        idEmocaoSecundaria: 32
        },
        {id: 64,
        emocao: "Furioso(a)",
        idEmocaoSecundaria: 32
        },
        {id: 65,
        emocao: "Hostil",
        idEmocaoSecundaria: 33
        },
        {id: 66,
        emocao: "Provocador(a)",
        idEmocaoSecundaria: 33
        },
        {id: 67,
        emocao: "Ciumento(a)",
        idEmocaoSecundaria: 34
        },
        {id: 68,
        emocao: "Com ódio",
        idEmocaoSecundaria: 34
        },
        {id: 69,
        emocao: "Violado(a)",
        idEmocaoSecundaria: 35
        },
        {id: 70,
        emocao: "Indignado(a)",
        idEmocaoSecundaria: 35
        },
        {id: 71,
        emocao: "Ridicularizado(a)",
        idEmocaoSecundaria: 36
        },
        {id: 72,
        emocao: "Desrespeitado(a)",
        idEmocaoSecundaria: 36
        },
        {id: 73,
        emocao: "Traído(a)",
        idEmocaoSecundaria: 37
        },
        {id: 74,
        emocao: "Ressentido(a)",
        idEmocaoSecundaria: 37
        },
        {id: 75,
        emocao: "Com nojo",
        idEmocaoSecundaria: 38
        },
        {id: 76,
        emocao: "Hesitante",
        idEmocaoSecundaria: 38
        },
        {id: 77,
        emocao: "Nauseado(a)",
        idEmocaoSecundaria: 39
        },
        {id: 78,
        emocao: "Repugnante",
        idEmocaoSecundaria: 39
        },
        {id: 79,
        emocao: "Espantado(a)",
        idEmocaoSecundaria: 40
        },
        {id: 80,
        emocao: "Revoltado(a)",
        idEmocaoSecundaria: 40
        },
        {id: 81,
        emocao: "Julgador(a)",
        idEmocaoSecundaria: 41
        },
        {id: 82,
        emocao: "Acabrunhado(a)",
        idEmocaoSecundaria: 41
        },
    ];
    
    await prisma.emocoesPrimarias.createMany({data: emocoesPrimarias});
    await prisma.emocoesSecundarias.createMany({data: emocoesSecundarias});
    await prisma.emocoesTerciarias.createMany({data: emocoesTerciarias});
}

main();