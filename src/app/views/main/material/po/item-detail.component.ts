import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PoService } from "./po.service";
import { PoItemDetails } from "src/app/core";

@Component({
    templateUrl: 'item-detail.component.html'
})
export class ItemDetailComponent implements OnInit {
    message: any;
    items: Array<PoItemDetails>

    constructor(
        private route: Router,
        private poService: PoService
    ) { }

    ngOnInit(): void {
        this.poService.currentMessage.subscribe(message => this.message = message.itemDetail);
        this.fetchData();
    }

    fetchData() {
        this.poService.getPoItemDetail(this.message).subscribe((data: Array<PoItemDetails>) => {
            this.items = data;
            if(this.items.length == 0)
                alert("No data exists");
        }, (err) => {
            alert(JSON.stringify(err));
        })
    }
}