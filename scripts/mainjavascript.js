

function toggleTheme()
{
    let theme = document.getElementById('theme');
    let hamburger_type = document.getElementById('sidebarnav');

    if (theme.getAttribute('href') == 'index_light.css')
    {
      theme.setAttribute('href', 'index_black.css');
      hamburger_type.setAttribute('src', 'pictures/hamburger_inverted.png');
    }

    else
    {
        theme.setAttribute('href', 'index_light.css');
        hamburger_type.setAttribute('src', 'pictures/hamburger.png');
    }
}

let open = false;


/* Set the width of the side navigation to 250px */
function openNav() 
{
  let mySidenav = document.getElementById("mySidenav");
  if (open == false)
  {
    mySidenav.style.width = "100vw";
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
  window.open("https://tiktok.com");
}
// alert("hello, user");

var slideIndex = 1;
var slideIndex2 = 1;
showDivs(slideIndex);
showDivs2(slideIndex2)

function plusDivs(n)
{
  showDivs(slideIndex+=n);
}

function plusDivs2(n)
{
  showDivs2(slideIndex2+=n);
}

function showDivs(n)
{
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length)
  {
    slideIndex = 1;
  }
  for (i=0; i<x.length; i++)
  {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display="block";
}

function showDivs2(n)
{
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length)
  {
    slideIndex2 = 1;
  }
  for (i=0; i<x.length; i++)
  {
    x[i].style.display = "none";
  }
  x[slideIndex2-1].style.display="block";
}


