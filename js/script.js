function config() {
 var first = Number(document.getElementById('s1').value), 
 second = Number(document.getElementById('s2').value), 
 third = Number(document.getElementById('s3').value),
 result = first + second + third;
 if (result){
  document.getElementById('result').innerHTML = result;
 };
};