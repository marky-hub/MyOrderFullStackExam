import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shorten';

  constructor(private service : AppService){

  }
  
  ngOnInit(){

  }

  shortenUrl(){
    var longUrl = (<HTMLInputElement>document.getElementById("longUrl")).value;
    var shortenUrl = "";
    this.service.shortenUrl(longUrl).subscribe((response) => {
      console.log("response:",response);
      shortenUrl = response;
      (<HTMLInputElement>document.getElementById("shortenUrl")).value = shortenUrl;
    })
  }

  copyUrl(){
    var copyText = (<HTMLInputElement>document.getElementById("shortenUrl"));
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = <HTMLInputElement>document.getElementById("myTooltip");
    tooltip.innerHTML = "URL Copied";
  }
  
}
