/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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
