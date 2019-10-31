import{ Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = '--working--'; 
    pageTitle:string = "Hello there";
    userName:string = "Keshu";
    formName:string ='';
    userEmail='email';

    formUser(fName:any){
        console.log(fName)
        //console.log(fName.target.value);
         this.formName =fName.target.value;
    }
    formEmail(fEmail:any){
        console.log(fEmail)
         this.userEmail = fEmail.target.value;
    }
}
