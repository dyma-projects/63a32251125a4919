import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit{
  content = "Salut Dyma ! Cliquez moi."

  colorList = ['steelblue', 'orangered']
  bgColor! : string

  public spanOnClick() {
    this.content = "Salut Dyma ! Cliqué !!"
    this.bgColor =  this.colorList[1]
  }
  
  ngOnInit(): void {
      this.bgColor = this.colorList[0]
  }
}
