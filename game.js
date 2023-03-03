var colarr=["yellow","red","green","blue"];
var gamePattern=[];
var userClickedPattern=[];

var level=0;
var state=false;
$(document).on("keydown",function(event){
    if(!state){
        newNum();
        state=true;
    }
 });
function newNum(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var random=Math.floor(Math.random()*4);
    var randomChosencolor=colarr[random];
    gamePattern.push(randomChosencolor);
    $("#"+randomChosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+randomChosencolor+".mp3");
    audio.play();
}
$(".btn").on("click",function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    addani(userChosenColor);
    console.log(gamePattern);
    console.log(userClickedPattern);
    checkanswer(userClickedPattern.length-1);

})
function playsound(cols){
    var audio1=new Audio("sounds/"+cols+".mp3");
    audio1.play();
    
 }
 function addani(col){
    $("#"+col).addClass("pressed");
    setTimeout(function(){
        $("#"+col).removeClass("pressed");
    },100);

 }

 function checkanswer(currentlevel){
    if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                newNum();
            },1000);
        }
    }
    else{
        console.log("failed");
        $("#level-title").text("Game Over, Press Any Key To Restart");
        var wro=new Audio("sounds/wrong.mp3");
        wro.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver(); ''
    }
 }
 function startOver(){
    gamePattern=[];
    state=false;
    level=0;
 }
    


