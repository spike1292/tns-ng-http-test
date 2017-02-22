import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import * as dialogsModule from "ui/dialogs";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    textXML(): void {
        this.itemService.getTextXML().subscribe((result: string) => this.showDialog(result));
    }

    textXMLCharset(): void {
        this.itemService.getTextXMLWithCharset().subscribe((result: string) => this.showDialog(result));
    }

    applicationXML(): void {
        this.itemService.getApplicationXML().subscribe((result: string) => this.showDialog(result));
    }

    applicationXMLCharset(): void {
        this.itemService.getApplicationXMLWithCharset().subscribe((result: string) => this.showDialog(result));
    }

    private showDialog(message: string): Promise<void> {
        return dialogsModule.alert({
            title: "Result",
            okButtonText: "OK",
            message: message
        });
    }
}
