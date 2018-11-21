/*function NightMode() 
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

}*/

function apply_theme(theme)
{
  var fg_color = '';
  var bg_color = '';
  if ( theme == null)
  {
    theme = 'light';
  }
  if ( theme == 'light')
  {
    fg_color = 'black';
    bg_color = 'white';
  }
  else if ( theme == 'dark' )
  {
  fg_color = 'black';
  bg_color = 'gray';
  }
  document.body.style.color = fg_color;
  document.body.style.backgroundColor = bg_color;
  localStorage.setItem( 'theme', theme );
}
var saved_theme = localStorage.getItem('theme');
apply_theme(saved_theme);
