document.getElementById('open_btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

$('.sub-btn').click(function(){
    $(this).next('.submenu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
});

document.addEventListener("DOMContentLoaded", function() {
    const submenuItems = document.querySelectorAll(".sub-item");

    submenuItems.forEach(function(item) {
        let timeoutId;

        item.addEventListener("mouseover", function() {
            const submenu = this.nextElementSibling;
            timeoutId = setTimeout(function() {
                showSubMenu(submenu);
            }, 865);
        });

        item.addEventListener("mouseout", function() {
            clearTimeout(timeoutId);
            const submenu = this.nextElementSibling;
            hideSubMenu(submenu);
        });

        item.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const submenu = this.nextElementSibling;
            toggleSubMenu(submenu);
        });
    });

    function showSubMenu(submenu) {
        closeAllSubmenus();
        submenu.classList.add("active");
    }

    function hideSubMenu(submenu) {
        submenu.classList.remove("active");
    }

    function toggleSubMenu(submenu) {
        const isActive = submenu.classList.contains("active");
        closeAllSubmenus();
        if (!isActive) {
            submenu.classList.add("active");
        }
    }

    function closeAllSubmenus() {
        const submenus = document.querySelectorAll(".submenu");
        submenus.forEach(function(submenu) {
            submenu.classList.remove("active");
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const submenuItems = document.querySelectorAll(".sub-item");
    const cadastroItem = document.querySelector(".dropdown");

    submenuItems.forEach(function(item) {
        item.style.top = cadastroItem.offsetTop + "px";
    });
});
