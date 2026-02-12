function toggleTheme()
{
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'main-style-sheet-light.css')
    {
        theme.setAttribute('href', 'main-style-sheet-dark.css');
    }
    else
    {
        theme.setAttribute('href', 'main-style-sheet-light.css')
    }
}

// alert("hello, user");
