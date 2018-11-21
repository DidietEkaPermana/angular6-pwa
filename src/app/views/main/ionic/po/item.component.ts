import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PoService } from "./po.service";
import { PoItems, PoMessage } from "src/app/core";

@Component({
    templateUrl: 'item.component.html'
})
export class ItemComponent implements OnInit {
    message: any;
    items: Array<PoItems>

    constructor(
        private route: Router,
        private poService: PoService
    ) { }

    ngOnInit(): void {
        this.poService.currentMessage.subscribe(message => this.message = message.item);
        this.fetchData();
    }

    fetchData() {
        this.poService.getPoItem(this.message).subscribe((data: Array<PoItems>) => {
            this.items = data;
            if(this.items.length == 0){
                alert("No data exists");
            }
        }, (err) => {
            alert(JSON.stringify(err));
        })
    }

    view(arg) {
        var message = <PoMessage>{
            item: this.message,
            itemDetail: arg
        }
        this.poService.changeMessage(message);
        this.route.navigate(['poitemdetail'])
    }

}