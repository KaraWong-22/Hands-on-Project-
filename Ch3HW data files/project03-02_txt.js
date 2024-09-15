/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Kara Wong
      Date:   9/14/24

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0]="This is a Great Pyreneese. Super friendly and great protectors";
captions[1]="This is a Corgi. Grat for herding.";
captions[2]="This is a Chocolate Lab. This is a great hunting dog."; 
captions[3]="This is an Australian Shepherd. These are also great herding dogs."; 
captions[4]="This is a Dalmation. Fun fact- most Dalmations are deaf."; 
captions[5]="This is a Bernese Mountain Dog. These dogs are great to keep on a farm.";
captions[6]="This is a Golden Retriever. They are super freindly.";
captions[7]="This is a French Bulldog. They are very cute, but have breathing issues.";
captions[8]="This is a Beagle. This is also a great hunting dog.";
captions[9]="This is a Jack Russell Terrier. These are one of the smartest dogs.";
captions[10]="This is a German Shepherd. You may see this type of dog as a K-9 unit.";
captions[11]="This is a Teacup chihuahua. Also known as one of the smallest dogs in the world.";
captions[12]="This is a Great Dane. Also known as one of the largest dogs in the world.";
captions[13]="Dogs come in all shapes and sizes. Lets find one for you!";


let htmlCode = "";


for (let i = 0; i < captions.length; i++) {
    
    htmlCode += `
        <figure>    
            <img alt="" src="slide${i}.jpg" />
            <figcaption>${captions[i]}</figcaption> 
        </figure>
    `;
}

document.getElementById("gallery").innerHTML = htmlCode;
