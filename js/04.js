function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function one (a){
  var a = zero();
  a = succ(a);
  return a;
}
