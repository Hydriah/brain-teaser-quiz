

const questions$answer=[
  ["what flies without wings?","time"],
  ["what's full of holes but still holds water?","sponge"],
  ["what are the two(2) things you can,t eat for supper?","breakfast and lunch"],
  ["where will you find roads without vehicles,forests without trees, and cities without houses?"," map"],
  ["The more it dries,the wetter it gets. what is it?","towel"],
  [" what is seen once every minute,twice every moment,but never in a thousand years?"," M"]];
  
  
    
  
  let html;
  let counter=0 ;
  let question;
  let response;
  let correct=[];
  let wrong=[];
  
  function print(message) {
    document.write(message)
  }
  function listanswer(arr){ 
         let anshtml= "<ol>" ;
  for (let i = 0; i < arr.length; i++) {
    anshtml='<li>' + arr[i] + '</li>'
    
  }
   anshtml+="</ol>"
    return anshtml;
  }

  for (let i = 0; i < questions$answer.length; i++) {
       question= prompt(questions$answer[i][0]+" NOTE: pls type in lowercase "+" HINTS: The answer is just a word.") ;
       response=questions$answer[i][1]
       if (question===response) {
      counter += 1;
      correct.push(questions$answer)
    }
      else{
      wrong.push(questions$answer);
      }
  
  
  }  
  
   html="you got " + counter+ " out of " +questions$answer.length;
   html+="<h2>you got these questions correctly:</h2>"
   html+=listanswer(correct);
   html+="<h2> you got these questions wrong:</h2>"
  
  
  print(html)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  