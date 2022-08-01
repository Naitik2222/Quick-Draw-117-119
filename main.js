array_1=["eraser" , "book " ,"cup","keyboard" ,"pencil" , "pen"];
timer_counter=0;
score=0;
var timer_check;
var drawn_sketch;
var answer_holder;
function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}
function updateCanvas(){
    background("white");
    random_no= Math.floor((Math.random()*array_1.length)+);
    Element_of_array= array_1[random_no];
    
}
