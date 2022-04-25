var img1 = document.getElementById("img1");
img1.addEventListener("mouseover",function(){
    this.src = 'real.jpg';
    style=" border: 1px solid black";
   
})
img1.addEventListener("mouseout",function(){
    this.src = 'real1.jpg';
})
var img2 = document.getElementById("img2");
img2.addEventListener("mouseover",function(){
    this.src = 'real.jpg';
})
img2.addEventListener("mouseout",function(){
    this.src = 'real2.jpg';
})
var img3 = document.getElementById("img3");
img3.addEventListener("mouseover",function(){
    this.src = 'real.jpg';
})
img3.addEventListener("mouseout",function(){
    this.src = 'real3.jpg';
})
var img4 = document.getElementById("img4");
img4.addEventListener("mouseover",function(){
    this.src = 'real.jpg';
})
img4.addEventListener("mouseout",function(){
    this.src = 'real4.jpg';
})

var img5 = document.getElementById("img5");
img5.addEventListener("mouseover",function(){
    this.src = 'fake.jpg';
})
img5.addEventListener("mouseout",function(){
    this.src = 'fake1.jpg';
})
var img6 = document.getElementById("img6");
img6.addEventListener("mouseover",function(){
    this.src = 'fake.jpg';
})
img6.addEventListener("mouseout",function(){
    this.src = 'fake2.jpg';
})
var img7 = document.getElementById("img7");
img7.addEventListener("mouseover",function(){
    this.src = 'fake.jpg';
})
img7.addEventListener("mouseout",function(){
    this.src = 'fake3.jpg';
})
var img8 = document.getElementById("img8");
img8.addEventListener("mouseover",function(){
    this.src = 'fake.jpg';
})
img8.addEventListener("mouseout",function(){
    this.src = 'fake4.jpg';
})

function readURL(input){

  if(input.files && input.files[0]){

    var imageTagID = input.getAttribute("targetID");

    var reader = new FileReader();

    reader.onload = function (e) {

       var img = document.getElementById(imageTagID);

       img.setAttribute("src", e.target.result)

    }

    reader.readAsDataURL(input.files[0]);

  }

}

