var SubjectSH = ["Ich", "Du", "Es", "Wir", "Ihr", "Sie(They)"];
var SubjectCurrent;
var VerbSH = ["Sein", "Haben", "Machen"];
var VerbCurrent;
var ArtAN = ["The", "A"];
var ArtCurrent;
var NounAN = ["Table", "Wall", "Book", "Pen", "Clock", "Window", "Chair", "Map", "Paper"];
var NounCurrent;

function randItUp2(){
  var i = ArtAN.length;
  var t = NounAN.length;
  var rand;
  var rand2;
  do {
  rand = Math.floor(Math.random() * i);
}
  while (ArtAN[rand] == ArtCurrent);
  ArtCurrent = ArtAN[rand];
  console.log(ArtAN[rand]);
  document.getElementById("ANRandA").innerHTML = ArtCurrent;
  do {
    rand2 = Math.floor(Math.random() * t);
  }
  while(NounAN[rand2] == NounCurrent);
  NounCurrent = NounAN[rand2];
  console.log(NounAN[rand2]);
  document.getElementById("ANRandN").innerHTML = NounCurrent;
  
}

function randItUp(){
  var i = SubjectSH.length;
  var t = VerbSH.length;
  var rand;
  var rand2;
  do {
  rand = Math.floor(Math.random() * i);
}
  while (SubjectSH[rand] == SubjectCurrent);
  SubjectCurrent = SubjectSH[rand];
  console.log(SubjectSH[rand]);
  document.getElementById("ConRandS").innerHTML = SubjectCurrent;
  do {
    rand2 = Math.floor(Math.random() * t);
  }
  while(VerbSH[rand2] == VerbCurrent);
  VerbCurrent = VerbSH[rand2];
  console.log(VerbSH[rand2]);
  document.getElementById("ConRandV").innerHTML = VerbCurrent;
  
}

function checkAN(){
  var A = document.getElementById("AN").value;
  if(ArtCurrent == "The" && NounCurrent == "Table"){
    if(A == "Der Tisch"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Table"){
    if(A == "Ein Tisch"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "The" && NounCurrent == "Wall"){
    if(A == "Die Wand"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Wall"){
    if(A == "Eine Wand"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "The" && NounCurrent == "Book"){
    if(A == "Das Buch"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Book"){
    if(A == "Ein Buch"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "The" && NounCurrent == "Pen"){
    if(A == "Der Kuli"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Pen"){
    if(A == "Ein Kuli"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "The" && NounCurrent == "Clock"){
    if(A == "Die Uhr"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Clock"){
    if(A == "Eine Uhr"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "The" && NounCurrent == "Window"){
    if(A == "Das Fenster"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Window"){
    if(A == "Ein Fenster"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "The" && NounCurrent == "Chair"){
    if(A == "Der Stuhl"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Chair"){
    if(A == "Ein Stuhl"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "The" && NounCurrent == "Map"){
    if(A == "Der Landkarte"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Map"){
    if(A == "Eine Landkarte"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "The" && NounCurrent == "Paper"){
    if(A == "Das Papier"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{
  if(ArtCurrent == "A" && NounCurrent == "Paper"){
    if(A == "Ein Papier"){
    document.getElementById("Val1x3").innerHTML = "Richtig!";
    document.getElementById("Val1x3").classList.remove("hidden-message");
    document.getElementById("Val1x3").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x3").innerHTML = "Falsch";
  document.getElementById("Val1x3").classList.remove("hidden-message");
  document.getElementById("Val1x3").classList.add("shown-message");
    }
  }
  else{


  }}}}}}}}}}}}}}}}}}}

function checkCon(){
  var C = document.getElementById("Con").value;
  if(SubjectCurrent == "Ich" && VerbCurrent == "Sein"){
    if(C == "Bin"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }
  }
  else{
    if(SubjectCurrent == "Ich" && VerbCurrent == "Haben"){
    if(C == "Habe"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Ich" && VerbCurrent == "Machen"){
    if(C == "Mache"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Du" && VerbCurrent == "Sein"){
    if(C == "Bist"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Du" && VerbCurrent == "Haben"){
    if(C == "Hast"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Du" && VerbCurrent == "Machen"){
    if(C == "Machst"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Es" && VerbCurrent == "Sein"){
    if(C == "Ist"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Es" && VerbCurrent == "Haben"){
    if(C == "Hat"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Es" && VerbCurrent == "Machen"){
    if(C == "Macht"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Ihr" && VerbCurrent == "Sein"){
    if(C == "Seid"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Ihr" && VerbCurrent == "Haben"){
    if(C == "Habt"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Ihr" && VerbCurrent == "Machen"){
    if(C == "Macht"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Wir" && VerbCurrent == "Sein"){
    if(C == "Sind"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Wir" && VerbCurrent == "Haben"){
    if(C == "Haben"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Wir" && VerbCurrent == "Machen"){
    if(C == "Machen"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Sie(They)" && VerbCurrent == "Sein"){
    if(C == "Sind"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Sie(They)" && VerbCurrent == "Haben"){
    if(C == "Haben"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }
  else{
    if(SubjectCurrent == "Sie(They)" && VerbCurrent == "Machen"){
    if(C == "Machen"){
    document.getElementById("Val1x2").innerHTML = "Richtig!";
    document.getElementById("Val1x2").classList.remove("hidden-message");
    document.getElementById("Val1x2").classList.add("shown-message");
    }
    else{
  document.getElementById("Val1x2").innerHTML = "Falsch";
  document.getElementById("Val1x2").classList.remove("hidden-message");
  document.getElementById("Val1x2").classList.add("shown-message");
      
    }

  }

}}}}}}}}}}}}}}}}}}

function ssFunctionQ1(){
  var Q = document.getElementById("Q1");
  Q.value = Q.value + "ß";
}
function ssFunctionQ2(){
  var Q = document.getElementById("Q2");
  Q.value = Q.value + "ß";
}
function ssFunctionQ3(){
  var Q = document.getElementById("Q3");
  Q.value = Q.value + "ß";
}
function ssFunctionQ1x1(){
  var Q = document.getElementById("Q1x1");
  Q.value = Q.value + "ß";
}
function ssFunctionQ2x1(){
  var Q = document.getElementById("Q2x1");
  Q.value = Q.value + "ß";
}
function ssFunctionQ3x1(){
  var Q = document.getElementById("Q3x1");
  Q.value = Q.value + "ß";
}
function ssFunctionQ4x1(){
  var Q = document.getElementById("Q4x1");
  Q.value = Q.value + "ß";
}

function uFunctionQ1x1(){
  var Q = document.getElementById("Q1x1");
  Q.value = Q.value + "ü";
}
function uFunctionQ2x1(){
  var Q = document.getElementById("Q2x1");
  Q.value = Q.value + "ü";
}
function uFunctionQ3x1(){
  var Q = document.getElementById("Q3x1");
  Q.value = Q.value + "ü";
}
function uFunctionQ4x1(){
  var Q = document.getElementById("Q4x1");
  Q.value = Q.value + "ü";
}

function check1(){
  var Q = document.getElementById("Q1").value;
  if(Q == "Wie heißt du") {
  document.getElementById("Val").innerHTML = "Richtig!";
  document.getElementById("Val").classList.remove("hidden-message");
  document.getElementById("Val").classList.add("shown-message");
  }
  else{
  document.getElementById("Val").innerHTML = "Falsch";
  document.getElementById("Val").classList.remove("hidden-message");
  document.getElementById("Val").classList.add("shown-message");  }
}

function check2(){
  var Q = document.getElementById("Q2").value;
  if(Q == "Ich heiße") {
  document.getElementById("Val2").innerHTML = "Richtig!";
  document.getElementById("Val2").classList.remove("hidden-message");
  document.getElementById("Val2").classList.add("shown-message");
  }
  else{
  document.getElementById("Val2").innerHTML = "Falsch";
  document.getElementById("Val2").classList.remove("hidden-message");
  document.getElementById("Val2").classList.add("shown-message");  }
}

function check3(){
  var Q = document.getElementById("Q3").value;
  if(Q == "Es freut mich") {
  document.getElementById("Val3").innerHTML = "Richtig!";
  document.getElementById("Val3").classList.remove("hidden-message");
  document.getElementById("Val3").classList.add("shown-message");
  }
  else{
  document.getElementById("Val3").innerHTML = "Falsch";
  document.getElementById("Val3").classList.remove("hidden-message");
  document.getElementById("Val3").classList.add("shown-message");  }
}

function check1x1(){
  var Q = document.getElementById("Q1x1").value;
  if(Q == "Wie heißt du") {
  document.getElementById("Val1x1").innerHTML = "Richtig!";
  document.getElementById("Val1x1").classList.remove("hidden-message");
  document.getElementById("Val1x1").classList.add("shown-message");
  }
  else{
  document.getElementById("Val1x1").innerHTML = "Falsch";
  document.getElementById("Val1x1").classList.remove("hidden-message");
  document.getElementById("Val1x1").classList.add("shown-message");  }
}
function check2x1(){
  var Q = document.getElementById("Q2x1").value;
  if(Q == "Ich heiße") {
  document.getElementById("Val2x1").innerHTML = "Richtig!";
  document.getElementById("Val2x1").classList.remove("hidden-message");
  document.getElementById("Val2x1").classList.add("shown-message");
  }
  else{
  document.getElementById("Val2x1").innerHTML = "Falsch";
  document.getElementById("Val2x1").classList.remove("hidden-message");
  document.getElementById("Val2x1").classList.add("shown-message");  }
}
function check3x1(){
  var Q = document.getElementById("Q3x1").value;
  if(Q == "Wie geht es dir" || Q == "Wie geht's") {
  document.getElementById("Val3x1").innerHTML = "Richtig!";
  document.getElementById("Val3x1").classList.remove("hidden-message");
  document.getElementById("Val3x1").classList.add("shown-message");
  }
  else{
  document.getElementById("Val3x1").innerHTML = "Falsch";
  document.getElementById("Val3x1").classList.remove("hidden-message");
  document.getElementById("Val3x1").classList.add("shown-message");  }
}
function check4x1(){
  var Q = document.getElementById("Q4x1").value;
  if(Q == "Es geht mir prima" || Q == "Es geht mir gut" || Q == "Es geht mir so lala") {
  document.getElementById("Val4x1").innerHTML = "Richtig!";
  document.getElementById("Val4x1").classList.remove("hidden-message");
  document.getElementById("Val4x1").classList.add("shown-message");
  }
  else{
  document.getElementById("Val4x1").innerHTML = "Falsch";
  document.getElementById("Val4x1").classList.remove("hidden-message");
  document.getElementById("Val4x1").classList.add("shown-message");  }
}
