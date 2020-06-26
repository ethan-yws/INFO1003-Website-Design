var sum=0
var x=document.getElementById("myTest")
function myFunction(){
sum+= x
if( sum > 0 && sum<= 25){
alert("You are in level 1"
}
if(sum>25 && sum<=50){
alert("You are in level 2")
}

if(sum>50 && sum<=75){
alert("You are in level 3")
}
else{
alert("You are in level 4")
}

}