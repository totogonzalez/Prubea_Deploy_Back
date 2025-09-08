import { Router } from "express";
import { findAll, findOne /*, add, update, remove*/ } from "./pedido.controller.js";
import { verificarToken } from '../shared/authMiddleware.js';
export const pedidoRouter = Router();
pedidoRouter.get('/', verificarToken, findAll);
pedidoRouter.get('/:nroPed', findOne);
/*pedidoRouter.post('/',sanitizePedidoInput,add)
pedidoRouter.put('/:nroPed',sanitizePedidoInput,update)
pedidoRouter.patch('/:nroPed',sanitizePedidoInput,update)
pedidoRouter.delete('/:nroPed',sanitizePedidoInput,remove)*/ 
//# sourceMappingURL=pedido.routes.js.map