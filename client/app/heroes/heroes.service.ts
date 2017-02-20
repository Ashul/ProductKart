import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
@Injectable()
export class HeroService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://localhost:3001/api/productdetails';  // URL to web api
  constructor(private http: Http) { console.log("hi there")}
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
             //  .toPromise()
               .map(response => response.json())
               .catch(this.handleError);
  }
  getHero(id: number) { 
    return this.getHeroes()
               .map(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}