import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  /* aumnetar e diminuir letra */ 
  font_size = 16;

  setFontSize(idd: string) {
    
    //calc font size
    if(idd === 'a+'){
      this.font_size += 1;
    } else if(idd === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = 16;
    }

    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
       htmlRoot.style.fontSize = `${this.font_size}px`;
    }

  }

  setDarkTheme(idd: string) {
    
    //calc font size
    if(idd === 'night') {

      document.body.classList.toggle('dark-theme');
      
    }
  }
  
  
  
  constructor( ) { }

  ngOnInit(): void {
   
  }  



}




