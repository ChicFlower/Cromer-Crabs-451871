function toggleTheme()
{
    let theme = document.getElementById('theme');
    let hamburger_type = document.getElementById('sidebarnav');
    let team_icon = document.getElementById('team_icon')
    let apex2026_circuit = document.getElementById('apex2026_circuit')
    
    if (theme.getAttribute('href') == 'index_light.css')
    {
      theme.setAttribute('href', 'index_black.css');
      hamburger_type.setAttribute('src', 'hamburger_inverted.png');
      team_icon.setAttribute("src", "Team_Icon_DM.jpg")
    }

    else
    {
        theme.setAttribute('href', 'index_light.css');
        hamburger_type.setAttribute('src', 'pictures/..hamburger.png');
        team_icon.setAttribute("src", "Team_Icon_LM.jpg")
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


function openwebsiteTT()
{
  window.open("https://tiktok.com");
}

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