
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


