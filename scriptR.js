
function Insert() {
  var nomes = document.querySelector('input').value;
  nomes = nomes.toUpperCase();
  var result = [];
  var separar = nomes.split(',');
  for ( var i = 0 ; i < separar.length ; i++ ) {
      var seguinte = separar[i];
      while ( seguinte.indexOf("<script") >= 0 && seguinte.indexOf("</script") < 0 )
          seguinte += ',' + separar[++i];
      result.push(seguinte);
      result.sort();
     
  }
  //visualização
  document.querySelector("body").innerHTML += "<ul>";
  for ( var i = 0 ; i < result.length ; i++ )
      document.querySelector("body").innerHTML += "<li>" + result[i].replace(/</g, "&lt;") + "</li>";
  document.querySelector("body").innerHTML += "</ul>";

}