const tab = document.querySelector('.tab');
const tabButtons = tab.querySelectorAll('[data-tab-button]');
const tabContainers = tab.querySelectorAll('[data-tab-content]');

const onTabClick = (event) => {
    tabContainers.forEach((container) => {
        container.hidden = true;
    });
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
        tab.classList.remove('tab__button--active');
    });
    event.currentTarget.setAttribute('aria-selected', true);
    event.currentTarget.classList.add('tab__button--active');
    const id = event.currentTarget.id;
    const activeTabPanel = tab.querySelector(`[aria-label="${id}"]`);
    activeTabPanel.hidden = false;
};

tabButtons.forEach(button => button.addEventListener('click', onTabClick));