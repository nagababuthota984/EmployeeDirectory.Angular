import { Injectable } from "@angular/core";

@Injectable()
export class ApiConfig{
    public readonly API_ENDPOINT = "https://localhost:7013/api/";
    public readonly headerDict:HeadersInit = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET, PUT, POST'
      }

    prepareDefaultHeaders() : Headers
    {
        return new Headers(this.headerDict);
    }
}