import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais } from './animais';
import { TokenService } from '../autenticacao/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  listaDoUsuario(nomeDoUsuario: string):Observable<Animais>{
    const token = this.tokenService.retornaToken();
    const header = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animais>(`${environment.apiUrl}/${nomeDoUsuario}/photos`, { headers: header });
  }
}
