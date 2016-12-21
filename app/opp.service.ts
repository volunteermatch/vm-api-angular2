import { Injectable }    from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers} from '@angular/http';

declare var CryptoJS : any;
import './ext/sha256.js';
import './ext/enc-base64-min.js';
import 'rxjs/add/operator/toPromise';

import { Opp } from './opp';

@Injectable()
export class OppService {

  private searchOppsUrl = 'http://localhost:9097/api/call';
  private apiKey = '<api key here>';
  private apiUserName = '<api user name here>';

  constructor(private http: Http) { }

  getOpps(): Promise<Opp[]> {
    let headers = new Headers(this.getAuthenticationHeadersForWSSE());
    let params = new URLSearchParams();
    params.append('action', 'searchOpportunities');
    params.append('query', '{"location": "94111", "numberOfResults": 10}');
    let options = new RequestOptions({
      headers: headers,
      search: params
    });


    return this.http.get(this.searchOppsUrl, options).toPromise()
      .then(response => response.json().opportunities as Opp[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  private getAuthenticationHeadersForWSSE() {
    let nonce: number = Math.floor(Math.random() * 999999);
    let timestamp: string = this.buildDateString();
    console.log(timestamp);
    let passwordDigest = this.calculateAdminPasswordDigest(nonce, timestamp);
    let wsseToken = "UsernameToken Username=\"" + this.apiUserName + "\", ";
    wsseToken += "PasswordDigest=\"" + passwordDigest + "\", ";
    wsseToken += "Nonce=\"" + nonce + "\", ";
    wsseToken += "Created=\"" + timestamp + "\"";


    return {
      "X-WSSE": wsseToken,
      "Authorization": "WSSE profile=\"UsernameToken\""
    };
  }


  private calculateAdminPasswordDigest(nonce: number, timestamp: string) {
    return CryptoJS.enc.Base64.stringify(
      CryptoJS.SHA256(nonce + timestamp + this.apiKey));
  }


  private buildDateString() {
    let m = new Date();
    let dateString: string =
      m.getUTCFullYear() + "-" +
      ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
      ("0" + m.getUTCDate()).slice(-2) + "T" +
      ("0" + m.getUTCHours()).slice(-2) + ":" +
      ("0" + m.getUTCMinutes()).slice(-2) + ":" +
      ("0" + m.getUTCSeconds()).slice(-2) + "-0000";
    return dateString;
  }
}