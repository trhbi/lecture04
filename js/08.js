function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function n(length){
  var a = zero();

  while(a.length < length){
    a = succ(a);
  }
  if (length < 0){
    return　null;
  }
  return a;
}
