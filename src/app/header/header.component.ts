import{ Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
   
    styles:[`
    .text{
        color:red;
        font-size:20px;
        background-color:grey;
        text-align:center;
        margin:10px;
    }
    `]
})
export class HeaderComponent {
    

}