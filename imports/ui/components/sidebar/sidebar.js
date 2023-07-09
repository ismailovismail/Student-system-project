import './sidebar.html'


Template.sidebar.onCreated(function () {
    this.autorun(() => {

        const mobileTableCards = document.querySelectorAll('.mobile-table .card')
        const mobileTableButtons = document.querySelectorAll('.mobile-table .mobile-table-buttons')


        mobileTableCards.forEach((card, cardIndex) => {
            var lastKeyUpTime = 0

            card.addEventListener('mousedown', () => {
                var keyDownAt = new Date();
                mobileTableButtons.forEach((button, buttonIndex) => {
                    setTimeout(() => {
                        if (+keyDownAt > +lastKeyUpTime) {
                            if (cardIndex === buttonIndex) {
                                card.style.transform = "translateX(-65px)";
                                button.style.transform = "translateX(65px)";
                                button.style.display = "flex";

                                let cardTransforming = true;

                                card.addEventListener('mousedown', () => {
                                    if (cardTransforming == true) {
                                        card.style.transform = "translateX(0px)";
                                        button.style.transform = "translateX(0px)";
                                        button.style.display = "none"
                                        cardTransforming = false;
                                    }
                                })
                            }
                        }
                    }, 300);
                })
            });

            card.addEventListener('mouseup', () => {
                lastKeyUpTime = new Date();
            });
        })

    })
});




Template.sidebar.events({
    'click .hamburger-button': function (event, template) {
        const hamburgerMenu = document.querySelector('.hamburger-menu')
        const hamburgerButton = document.querySelector('.hamburger-button')
        if (hamburgerButton.classList.contains("active")) {
            hamburgerButton.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        } else {
            hamburgerButton.classList.add("active");
            hamburgerMenu.classList.add("active");
        }
    },

});