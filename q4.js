var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++
        
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Which is a Cloud Computing Company? \na)Mircosoft \nb)Apple \nc)Amazon \nd)All of the Above.";
    document.view.qans.value=""
}
	i++; 
}