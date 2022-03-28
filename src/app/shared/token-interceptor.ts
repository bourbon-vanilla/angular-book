import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    private authToken: string = '1234567890';

    // in Production use i.e. the library 'angular-oauth2-oidc' 
    //     for authentication and authorization scenarios

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newRequest = req.clone({
            setHeaders: { 
                authorization: `Bearer ${this.authToken}` 
            }
        });
        return next.handle(newRequest);
    }
}
