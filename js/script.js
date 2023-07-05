window.addEventListener('scroll', function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    const progressBar = document.querySelector('.scroll-progress-bar');
    progressBar.style.width = scrolledPercentage + '%';
  });