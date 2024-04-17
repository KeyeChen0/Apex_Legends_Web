const contentElements = document.querySelectorAll('.content');

contentElements.forEach(content => {
    const pg = content.querySelector('.photogallery');
    const title = content.querySelector('.legend');

    // Function to toggle active/inactive classes
    function toggleActive(element, isActivating) {
        element.classList.toggle('active', isActivating);
        element.classList.toggle('inactive', !isActivating);
        element.classList.toggle('fade', !isActivating);
    }

    // Add event listeners for photogallery and legend
    [pg, title].forEach(element => {
        element.addEventListener('click', () => {
            if (element.classList.contains('active')) return;
            toggleActive(pg, element === pg);
            toggleActive(title, element === title);
        });

        element.addEventListener("mouseenter", () => {
            if (element.classList.contains('active')) return;
            (element === pg ? title : pg).classList.add("fade");
        });

        element.addEventListener("mouseleave", () => {
            if (element.classList.contains('active')) return;
            (element === pg ? title : pg).classList.remove("fade");
        });

        element.addEventListener('mousedown', () => {
            if (element.classList.contains('active')) return;
            (element === pg ? title : pg).classList.add('shrink');
        });

        element.addEventListener('mouseup', () => {
            if (element.classList.contains('active')) return;
            (element === pg ? title : pg).classList.remove('shrink');
        });
    });
});

// Page navigation with transition effect
document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = link.getAttribute('href');
        }, 1000);
    });
});

  
  

  






