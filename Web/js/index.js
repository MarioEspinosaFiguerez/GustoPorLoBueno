  const currentPath = window.location.pathname;
  document.querySelectorAll('.menu li a').forEach(link => {
    const linkPath = link.pathname;

    if (currentPath === '/index.html' || currentPath === linkPath) {
        link.classList.add('active');
    }
  });