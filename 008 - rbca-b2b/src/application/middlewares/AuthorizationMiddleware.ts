import { IData, IMiddleware, IResponse } from "../interfaces/IMiddleware";
import { IRequest } from "../interfaces/IRequest";
import { GetRolePermissionsUseCase } from "../useCases/GetRolePermissionsUseCase";

export class AuthorizationMiddleware implements IMiddleware {
  constructor(
    private readonly requiredPermissions: string[],
    private readonly getRolePermissionsUseCase: GetRolePermissionsUseCase
  ) {}

  async handle({ account }: IRequest): Promise<IResponse | IData> {
    // Garante que o usuário está autenticado
    if (!account) {
      return {
        statusCode: 403,
        body: {
          error: "Access denied.",
        },
      };
    }

    const { permissionsCodes } = await this.getRolePermissionsUseCase.execute({
      roleId: account.role,
    });

    const isAllowed = this.requiredPermissions.some((code) =>
      permissionsCodes.includes(code)
    );

    // Garante que o usuário tenha permissão para acessar essa rota
    if (!isAllowed) {
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
