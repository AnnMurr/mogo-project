const accordItem = document.querySelectorAll('.accordion__item');
const ACCORDION_ITEM_ACTIVE = 'accordion__item_active';
const ACCORDION_ARROW_BTN_SELECTOR = '.accordion__arrow-btn';
const ACCORDION_ARROW_BTN_ACTIVE = 'accordion__arrow-btn_active';

const arrowBtn = el => el.querySelector(ACCORDION_ARROW_BTN_SELECTOR);

const deactivateAllItems = () => {
    accordItem.forEach(element => {
        element.classList.remove(ACCORDION_ITEM_ACTIVE);
        arrowBtn(element).classList.remove(ACCORDION_ARROW_BTN_ACTIVE);
    })
};

accordItem.forEach(element => {
    element.addEventListener("click", function () {
        let isItemActive = this.classList.contains(ACCORDION_ITEM_ACTIVE);
        deactivateAllItems();
        this.classList.toggle(ACCORDION_ITEM_ACTIVE, !isItemActive);
        arrowBtn(element).classList.toggle(ACCORDION_ARROW_BTN_ACTIVE, !isItemActive);
  });
});
