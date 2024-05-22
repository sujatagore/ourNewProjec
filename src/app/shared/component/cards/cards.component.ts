import { Component } from "@angular/core";
import { cardArr } from "../../const/data";
import { Icards } from "../../module/dataInterface";





@Component({
    selector : 'app-cards',
    templateUrl : './cards.component.html',
    styleUrls : ['./cards.component.scss']
})
export class CardComponent{
    cardsData : Array<Icards> = cardArr;
}