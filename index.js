
setTimeout(() => {
    const box = document.getElementById('loader_container');
    const main = document.getElementById('main');
  
    // 👇️ hides element (still takes up space on the page)
    box.style.display = 'none';
    main.style.display = 'block';
  }, 2000);

