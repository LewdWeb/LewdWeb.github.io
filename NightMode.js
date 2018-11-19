function NightMode() 
{
  var color = document.getElementById('mydiv').style.color;
    
  var backgroundColor = document.getElementById('mydiv').style.backgroundColor;
  
    
  if (backgroundColor == "gray") { document.getElementById('mydiv').style.backgroundColor="white"; } 
  else { document.getElementById('mydiv').style.backgroundColor="gray"; }
}
