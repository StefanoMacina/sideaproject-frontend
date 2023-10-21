import { Component, EventEmitter, Input, Output } from "@angular/core";
import { celebrities } from "src/app/Films/interfaces/celebrity.interface";


@Component({
    selector : 'celebrities-list',
    templateUrl : './CelebrityList.html',
    styleUrls : ['./CelebrityList.scss']
})
export class CelebritiesList{

    @Input() list : celebrities [] = [];
    @Output() celebrity = new EventEmitter<string>();
    @Output() select = new EventEmitter<string>()


    selectCelebrity(id : string){
        this.celebrity.emit(id)
    }

    editCelebrity(id:string){
        this.select.emit(id)
    }
}