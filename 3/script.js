function getRandom (){
  var s = (Math.round((Math.random() * 1000))) ;
  //alert(s);
  var i = 0;
  var k = 0;

  while (i !== s && k !== null) {
    k = prompt("Введите число", '')
    i = parseInt(k);
    if( i < s){
      alert("Введите больше число")

    }
    else if (i > s) {
      alert("Введите меньше число")
    }
    else if (i == s) {
      alert("Угадал");
      break;
    }
    else if ( isNaN(i) && k !== null){
      alert("Введите число!");
    }
  }
}
getRandom()
