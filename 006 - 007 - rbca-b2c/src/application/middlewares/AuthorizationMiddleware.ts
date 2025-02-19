import { IData, IMiddleware, IResponse } from "../interfaces/IMiddleware";
import { IRequest } from "../interfaces/IRequest";

export class AuthorizationMiddleware implements IMiddleware {
  constructor(private readonly allowedRoles: string[]) {}

  async handle({ account }: IRequest): Promise<IResponse | IData> {
    // Garante que o usuário está autenticado
    if (!account) {
      return {
        statusCode: 403, // Forbidden -> Usuário sem permissão (proibido)
        body: {
          error: "Access denied.",
        },
      };
    }

    // Garante que o usuário tenha permissão para acessar essa rota
    if (!this.allowedRoles.includes(account.role)) {
      return {
        statusCode: 403,
        body: {
          error: "Access denied.",
        },
      };
    }

    return {
      data: {},
    };
  }
}
