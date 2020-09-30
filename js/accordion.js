const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;

    // Change
    if (panel.style.maxHeight && panel.style.maxHeight != '0px') {
      // End of change
      panel.style.maxHeight = 0;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('header').classList.toggle('active');
});
