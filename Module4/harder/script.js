(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  console.log("Hi");
  for (var i=0;i<names.length;i++){
    if (names[i][0]=="J" || names[i][0]=="j"){
      byeSpeaker.speak(names[i]);
    } else{
      helloSpeaker.speak(names[i]);
    }
  }
})(window);