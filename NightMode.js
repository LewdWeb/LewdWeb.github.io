function toggleNightMode() {
  var color = document.getElementById('mydiv').style.color;
    
  var backgroundColor = document.getElementById('mydiv').style.backgroundColor;
  
    
  if (color == "black" && backgroundColor == "white") {
        document.getElementById('mydiv').style.color="white";
        document.getElementById('mydiv').style.backgroundColor="black";
        
        
    } else {
        document.getElementById('mydiv').style.color="black";
        document.getElementById('mydiv').style.backgroundColor="white";
        
    }
}
