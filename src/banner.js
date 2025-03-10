import styles from './banner.module.css';

export const addBanner = (text) => {
  const content = document.querySelector('#content');
  content.textContent = text;
  content.classList.add(styles.content);
};

export const removeBanner = () => {
  const content = document.querySelector('#content');
  if (content) {
    content.innerHTML = '';
  }
};
