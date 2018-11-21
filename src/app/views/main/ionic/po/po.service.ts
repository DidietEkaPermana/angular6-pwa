import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ApiService, PoMessage } from "src/app/core";
import { map } from "rxjs/operators";

@Injectable()
export class PoService {
    private messageSource = new BehaviorSubject(<PoMessage>{});
    currentMessage = this.messageSource.asObservable();

    constructor(
        private apiService: ApiService
    ) { }

    changeMessage(message: any) {
        this.messageSource.next(message)
    }

    getPoHeader() {
        return this.apiService.get('api/Po/getheader')
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }

    getPoItem(arg): any {
        return this.apiService.get('api/Po/getitem/' + arg)
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }

    getPoItemDetail(arg): any {
        return this.apiService.get('api/Po/getitemdetail/' + arg)
            .pipe(map(
                data => {
                    return data;
                }
            ));
    }
}