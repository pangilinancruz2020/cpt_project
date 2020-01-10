var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="A"){
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
   	document.view.question.value ="What is Clouding Computing? \na)Using the Internet to store, manage, and process data, rather than a local server or a personal computer.\nb)This is the standard markup language for documents designed to be displayed in a web browser. \nc)Storing Files Online. \nd)A computer in the sky.";
    document.view.qans.value=""
}
	i++; 
}