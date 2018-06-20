import { Time } from "@angular/common";

export interface TaskInter{
    time:string;
    name:string;
    date:string;
    info:string;
    accomplish:boolean //accomplish or not
    acomplishDate:string;//when the user set the task as an ecomplish task.
}