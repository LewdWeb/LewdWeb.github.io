function NightMode() 
{
  var color = document.getElementById('mydiv').style.color;
    
  var backgroundColor = document.getElementById('mydiv').style.backgroundColor;
  
    
  if ( backgroundColor == "white" ) { document.getElementById('mydiv').style.backgroundColor="black"; } 
  else { document.getElementById('mydiv').style.backgroundColor="white"; }
}
