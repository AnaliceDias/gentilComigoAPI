import { Router } from "express";
import cadastrarRouter from "../routes/cadastrar";
import conectarRouter from "../routes/conectar";
import emocoesRouter from "../routes/emocoes";

const router = Router()

router.use(cadastrarRouter);
router.use(conectarRouter);
router.use(emocoesRouter);

export default router;