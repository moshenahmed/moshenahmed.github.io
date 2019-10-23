import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maketi';
  /**
   *
   */
  private A = [1, 2,3]
  private f = [];
  constructor() {
    let y = 0;
     this.A.sort();
     console.log(this.A);
     const length = this.A.length -1;
     const x = this.A[length] +1;
     x === 0 ?  y = x +1 : y = x;
     for(let i = this.A[0]; i <= this.A[this.A.length - 1]; i++){
//console.log(this.A[i]);
this.f.push(i)
if(!this.A.includes(i)){
  console.log(i)
} 
}
console.log(this.f)
      if(this.f === this.A){
        console.log(this.A[this.A.length -1] + 1)
      }
      //console.log(y); 

    }

  }
