function NightMode() 
{

  var color = document.getElementById('mydiv').style.color;
    
  var backgroundColor = document.getElementById('mydiv').style.backgroundColor;
  
    
  if (color == "black" && backgroundColor == "gray") {
        document.getElementById('mydiv').style.color="blue";
        document.getElementById('mydiv').style.backgroundColor="white";
        
    } else {
        document.getElementById('mydiv').style.color="black";
        document.getElementById('mydiv').style.backgroundColor="gray";

    }

}
