const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(i => i.classList.remove('active'));

        this.classList.add('active');

        alert(`You clicked on ${this.innerText}`);
    });
});
