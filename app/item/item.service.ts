import { Injectable } from "@angular/core";
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";

import { Item } from "./item";

@Injectable()
export class ItemService {

    public constructor(private http: Http){

    }

    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
        { id: 3, name: "Piqué", role: "Defender" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        { id: 5, name: "Sergio", role: "Midfielder" },
        { id: 6, name: "Denis Suárez", role: "Midfielder" },
        { id: 7, name: "Arda", role: "Midfielder" },
        { id: 8, name: "A. Iniesta", role: "Midfielder" },
        { id: 9, name: "Suárez", role: "Forward" },
        { id: 10, name: "Messi", role: "Forward" },
        { id: 11, name: "Neymar", role: "Forward" },
        { id: 12, name: "Rafinha", role: "Midfielder" },
        { id: 13, name: "Cillessen", role: "Goalkeeper" },
        { id: 14, name: "Mascherano", role: "Defender" },
        { id: 17, name: "Paco Alcácer", role: "Forward" },
        { id: 18, name: "Jordi Alba", role: "Defender" },
        { id: 19, name: "Digne", role: "Defender" },
        { id: 20, name: "Sergi Roberto", role: "Midfielder" },
        { id: 21, name: "André Gomes", role: "Midfielder" },
        { id: 22, name: "Aleix Vidal", role: "Midfielder" },
        { id: 23, name: "Umtiti", role: "Defender" },
        { id: 24, name: "Mathieu", role: "Defender" },
        { id: 25, name: "Masip", role: "Goalkeeper" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }

    getTextXML(): Observable<String>{
        return this.http.get('http://mockbin.org/bin/ebed6ca6-f882-4843-847d-b5d6767116d9')
            .map((res: Response) => res.text());
    }

    getTextXMLWithCharset(): Observable<String>{
        return this.http.get('http://mockbin.org/bin/de77a9e7-3ef1-4cfd-bb4d-8ab41e68238b')
            .map((res: Response) => res.text());
    }

    getApplicationXML(): Observable<String>{
        return this.http.get('http://mockbin.org/bin/bacd18bc-696a-47c3-9974-fe5d0e289ac6')
            .map((res: Response) => res.text());
    }

    getApplicationXMLWithCharset(): Observable<String>{
        return this.http.get('http://mockbin.org/bin/f2b097e0-8ee0-4366-b4e9-b5343acfedd8')
            .map((res: Response) => res.text());
    }

}
