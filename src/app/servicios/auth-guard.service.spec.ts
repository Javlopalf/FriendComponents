import { Router } from '@angular/router';
import { authGuard } from './auth-guard.service';
import { AuthService } from './auth-service.service';

describe('authGuard', () => {
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  });

  it('debería permitir acceso si el usuario está autenticado', () => {
    authServiceSpy.isAuthenticated.and.returnValue(true);

    const result = authGuard();

    expect(result).toBeTrue();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('debería redirigir a login si el usuario no está autenticado', () => {
    authServiceSpy.isAuthenticated.and.returnValue(false);

    const result = authGuard();

    expect(result).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
