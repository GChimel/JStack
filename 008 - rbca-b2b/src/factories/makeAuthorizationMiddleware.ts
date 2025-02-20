import { AuthorizationMiddleware } from "../application/middlewares/AuthorizationMiddleware";
import { GetRolePermissionsUseCase } from "../application/useCases/GetRolePermissionsUseCase";

export function makeAuthorizationMiddleware(requiredRoles: string[]) {
  return new AuthorizationMiddleware(
    requiredRoles,
    new GetRolePermissionsUseCase()
  );
}
