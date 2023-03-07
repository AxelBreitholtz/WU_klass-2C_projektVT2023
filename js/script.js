var menu_visible = false

function toggleMenu() {

    document.getElementById('link_list').classList.toggle('link_list_visible')

    document.getElementById('burger').classList.toggle('burger_x_form')

    if (menu_visible) {
        document.getElementById('nav').style.backgroundColor= "transparent";
        menu_visible = false
    }
    else {
        document.getElementById('nav').style.backgroundColor= "rgb(" + 0 + ", " + 63 + ", " + 94 + ")";
        menu_visible = true
    }    
}

document.getElementById('burger').addEventListener('click', toggleMenu)

