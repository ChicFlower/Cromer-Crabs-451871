

function toggleTheme()
{
    let theme = document.getElementById('theme');
    let hamburger_type = document.getElementById('sidebarnav');

    if (theme.getAttribute('href') == 'main-style-sheet-light.css')
    {
      theme.setAttribute('href', 'main-style-sheet-dark.css');
      hamburger_type.setAttribute('src', 'hamburger_inverted.png');
    }

    else
    {
        theme.setAttribute('href', 'main-style-sheet-light.css');
        hamburger_type.setAttribute('src', 'hamburger.png');
    }
}

let open = false;


/* Set the width of the side navigation to 250px */
function openNav() 
{
  let mySidenav = document.getElementById("mySidenav");
  if (open == false)
  {
    mySidenav.style.width = "27vw";
    mySidenav.style.zIndex = "1";
    open = true;
  }
  else 
  {
    mySidenav.style.width="0";
    open = false;
    mySidenav.style.zIndex = "-1";
  }
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() 
{
  document.getElementById("mySidenav").style.width = "0";
  open = false;
  mySidenav.style.zIndex = "-1";
}

// function openwebsite()
// {
//   let website = document.getElementById("website");
//   if (website.getAttribute('src') == "facebooklogo.png")
//   {
//     window.open("https://facebook.com");
//   }

//   else if (website.getAttribute('src') == "instagramlogo.png")
//   {
//     window.open("https://www.instagram.com/");
//   }
// }

function openwebsiteF()
{
  window.open("https://facebook.com");
}

function openwebsiteI()
{
  window.open("https://instagram.com");
}

function openwebsiteT()
{
  window.open("https://twitch.com");
}

function openwebsiteD()
{
  window.open("https://discord.com");
}


function openwebsitett()
{
  window.open("https://tiktok.com")
}
// alert("hello, user");

