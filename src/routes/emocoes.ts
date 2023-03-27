import { Router} from "express";
import { Request , Response } from "express";

const emocoesRouter = Router();

emocoesRouter.post("/emocoes" , (req: Request , res: Response) => {
    res.send("OK");
});
emocoesRouter.get("emocoes");
emocoesRouter.delete("/emocoes/:id");

export default emocoesRouter;