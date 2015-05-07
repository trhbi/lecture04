function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function million(){
  var a = zero();
  var i = 0;

  while(a.length < 1000000){
    a = succ(a);
  }
  return a;
}
