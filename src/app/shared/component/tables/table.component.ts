import { Component } from "@angular/core";
import { Itable } from "../../module/dataInterface";






@Component({
    selector : 'app-table',
    templateUrl : './table.component.html',
    styleUrls : ['./table.component.scss']
})
export class TableComponent{
    dataArr : Array<Itable> = [
        {
            fname : "Jhon",
            lname : "Doe",
            email : "jd159@gmail.com",
            contact : 155496362
        },
        {
            fname : "Joe",
            lname : "Varsi",
            email : "vj189@gmail.com",
            contact : 15487451362
        },
        {
            fname : "vihan",
            lname : "Doe",
            email : "vd19@gmail.com",
            contact : 15584565362
        },
        {
            fname : "Sahil",
            lname : "Varsi",
            email : "sv169@gmail.com",
            contact : 38653213578
        }
    ]
}