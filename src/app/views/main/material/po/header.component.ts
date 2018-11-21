import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PoHeaders, PoMessage } from "src/app/core";
import { PoService } from "./po.service";

@Component({
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    items: Array<PoHeaders>

    constructor(
        private route: Router,
        private poService: PoService
    ) { }

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(): any {
        this.poService.getPoHeader().subscribe((data: Array<PoHeaders>) => {
            this.items = data;
        }, (err) => {
            console.log(JSON.stringify(err));
            alert(JSON.stringify(err));
        })
    }

    view(arg){
        var message = <PoMessage>{
            item: arg
        }
        this.poService.changeMessage(message);
        this.route.navigate(['poitem'])
    }
}