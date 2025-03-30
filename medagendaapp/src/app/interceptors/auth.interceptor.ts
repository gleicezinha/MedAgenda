import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';


export const autenticacaoInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};