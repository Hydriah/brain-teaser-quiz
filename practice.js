

const questions$answer=[
["what flies without wings?","time"],
["what's full of holes but still holds water?","sponge"],
["what are the two(2) things you can,t eat for supper?","breakfast and lunch"],
["where will you find roads without vehicles,forests without trees, and cities without houses?"," map"],
["The more it dries,the wetter it gets. what is it?","towel"],
[" what is seen once every minute,twice every moment,but never in a thousand years?"," M"]
]


function print(message) {
    document.write("<p>"+ message+"</p>")
}

let counter=0;
function listanswer(ans) {
    let question;
    let anshtml= "<ol>" ;

for (let i = 0; i < ans.length; i++) {
     question+= prompt(questions$answer[i][0]+" NOTE: pls type in lowercase "+" HINTS: The answer is just a word.") ;
     
     if (questions$answer[i][0]===questions$answer[i][1].toLowerCase()) {
    counter+=1;
    
}

anshtml += "<li> "+questions$answer[i][0] +"Ans: "+questions$answer[i][1]+ " </li>"+ "<br>";
    
}
 alert("you got " + counter+ " out of " +questions$answer.length)
anshtml+="</ol>";
print(anshtml)
}
listanswer(questions$answer)