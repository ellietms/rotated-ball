let imgArray = new Array();
//making 24 image object with the src of images ball we have in the images folder
for(let i=0; i<24;i++){
     imgArray[i] = new Image();
     imgArray[i].src ='images/ball'+ i + '.gif' ;
}
//imagArray is an array of objects
let counter = 0;
function rotate(){
    if(counter > imgArray.length - 1){
        counter = 0;
        document.querySelector("#ball").src = imgArray[counter].src;
        counter++;
        setTimeout('rotate()',50);}
    else{
            document.querySelector("#ball").src = imgArray[counter].src;
            counter++;
            setTimeout('rotate()',50);
   } 
}

window.addEventListener("load",rotate);