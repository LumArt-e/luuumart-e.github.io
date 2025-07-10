import gsap from 'https://cdn.skypack.dev/gsap';

const tabs = document.querySelectorAll('.tab-nav button');
const contents = document.querySelectorAll('.tab-content');

function showTab(id) {
  contents.forEach(content => {
    if (content.id === id) {
      content.style.display = 'block';
      gsap.fromTo(content, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
    } else {
      content.style.display = 'none';
    }
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    showTab(tab.dataset.tab);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  showTab('top');
});