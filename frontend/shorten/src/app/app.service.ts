import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
@Injectable({
    providedIn: 'root'
})

export class AppService {
    constructor (private http : HttpClient) {}

    shortenUrl(longUrl : any){
        return this.http.get(`http://localhost:3000/new/${longUrl}`,{responseType: 'text'})
    }

}

