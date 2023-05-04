
setTimeout(() => {
    const box = document.getElementById('loader_container');
    const main = document.getElementById('main');
  
    box.style.display = 'none';
    main.style.display = 'block';
  }, 2000);

  // Get the modal container, trigger element, close button, and iframe element
var modal = document.querySelector('.video-modal');
var trigger = document.querySelector('.video-modal-trigger');
var closeBtn = document.querySelector('.video-modal-close');
var iframe = document.querySelector('.video-modal-iframe');

  //YouTube list section
var btn1 = document.getElementById("btn-1");
btn1.addEventListener('click',function() {
  console.log("btn-1 click");
  let yt = document.getElementById("yt-1");  //modal 
  let yt_iframe = document.getElementById("yt1-iframe"); //iframe
  yt.style.display = 'flex';
  let videoId = 'tevC-yNyNtA';  //video id
  let videoUrl = 'https://www.youtube.com/embed/' + videoId; 
  yt_iframe.src = videoUrl;
  let close_btn = document.getElementById("yt-close-1");
  close_btn.addEventListener('click',function() {
    yt.style.display = 'none';
  })
});

var btn2 = document.getElementById("btn-2");
btn2.addEventListener('click',function() {
  console.log("btn-2 click");
  let yt = document.getElementById("yt-2");  //modal 
  let yt_iframe = document.getElementById("yt2-iframe"); //iframe
  yt.style.display = 'flex';
  let videoId = 'Ooi72snVltY';  //video id
  let videoUrl = 'https://www.youtube.com/embed/' + videoId;  
  yt_iframe.src = videoUrl;
  let close_btn = document.getElementById("yt-close-2");
  close_btn.addEventListener('click',function() {
    yt.style.display = 'none';
  })
})

var btn3 = document.getElementById("btn-3");
btn3.addEventListener('click',function() {
  console.log("btn-3 click");
  let yt = document.getElementById("yt-3");  //modal 
  let yt_iframe = document.getElementById("yt3-iframe"); //iframe
  yt.style.display = 'flex';
  let videoId = 'cE8wVmwY7VY';  //video id
  let videoUrl = 'https://www.youtube.com/embed/' + videoId;  
  yt_iframe.src = videoUrl;
  let close_btn = document.getElementById("yt-close-3");
  close_btn.addEventListener('click',function() {
    yt.style.display = 'none';
  })
})

var btn4 = document.getElementById("btn-4");
btn4.addEventListener('click',function() {
  console.log("btn-4 click");
  let yt = document.getElementById("yt-4");  //modal 
  let yt_iframe = document.getElementById("yt4-iframe"); //iframe
  yt.style.display = 'flex';
  let videoId = 'l9IAr7WY-Xk';  //video id
  let videoUrl = 'https://www.youtube.com/embed/' + videoId;  
  yt_iframe.src = videoUrl;
  let close_btn = document.getElementById("yt-close-4");
  close_btn.addEventListener('click',function() {
    yt.style.display = 'none';
  })
})



// Add event listeners to the trigger and close button
trigger.addEventListener('click', function() {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});



// Update the iframe src attribute with the YouTube video URL
var videoId = 'Ooi72snVltY'; // Replace with the actual video ID
var videoUrl = 'https://www.youtube.com/embed/' + videoId;
iframe.src = videoUrl;


// toggle mobile menu
const mobileMenu = document.getElementById('mobile_menu'),
      closeBtnMenu = document.getElementById('close_btn-menu'),
      openMenu = document.getElementById('open-menu');

if(closeBtnMenu) {
  closeBtnMenu.addEventListener('click',() => {
    mobileMenu.classList.remove('show-mobile-menu');
    closeBtnMenu.classList.remove('show');
    openMenu.classList.remove('hide');
  })
}

if(openMenu) {
  openMenu.addEventListener('click',() => {
    mobileMenu.classList.add('show-mobile-menu');
    openMenu.classList.add('hide');
    closeBtnMenu.classList.add('show');
  })
}


//scroll top
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-top')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)