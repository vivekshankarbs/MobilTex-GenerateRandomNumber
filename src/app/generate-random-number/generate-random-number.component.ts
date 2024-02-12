import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-random-number',
  templateUrl: './generate-random-number.component.html',
  styleUrl: './generate-random-number.component.css'
})
export class GenerateRandomNumberComponent {
   randomNumberList:any

  generateRandomNumbers() {
 
    this.randomNumberList = new Set<number>();

    while (this.randomNumberList.size < 10000) {

      const randomNumber = Math.floor(Math.random() * 10000) + 1;

      if (!this.randomNumberList.has(randomNumber)) 
      {   
        this.randomNumberList.add(randomNumber);
      } 
        
        
    }
  }
}
