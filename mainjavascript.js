function toggleTheme()
{
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'main-style-sheet-light.css')
    {
        theme.setAttribute('href', 'main-style-sheet-dark.css');
    }
    else
    {
        theme.setAttribute('href', 'main-style-sheet-light.css');
    }
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "27vw";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// alert("hello, user");
