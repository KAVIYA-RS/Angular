import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link?:string;
  title = 'basic_form';


  calling(val :string)
  {
    if(val=="Apple")
  {
    this.link= "https://www.collinsdictionary.com/images/full/apple_158989157.jpg";
  }
  if(val=="Ball")
  {
    this.link="https://m.media-amazon.com/images/I/51IM+jkaEbL._SY355_.jpg";
  }
  if(val=="Cat")
  {
    this.link="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg";

  }
  if(val=="Dog")
  {
    this.link="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*";
  }

}
  
  
}
