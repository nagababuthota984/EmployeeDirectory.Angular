import { Injectable } from "@angular/core";

@Injectable()
export class ApiConfig{
    public readonly API_ENDPOINT = "https://localhost:7013/api/";
    public readonly headerDict:HeadersInit = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin':'*'
      }

    prepareDefaultHeaders() : Headers
    {
        return new Headers(this.headerDict);
    }
}