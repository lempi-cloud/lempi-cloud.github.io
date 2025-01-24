document.addEventListener('DOMContentLoaded', function () {
    const tocToggle = document.getElementById('toc-toggle');
    const tocPanel = document.getElementById('toc-panel');
    const tocList = tocPanel.querySelector('ul');
    const headers = document.querySelectorAll('#content h1');
  
    // Generate the TOC dynamically
    headers.forEach((header, index) => {
      const tocItem = document.createElement('li');
      const tocLink = document.createElement('a');
      tocLink.textContent = header.textContent;
      tocLink.href = `#chapter-${index}`;
      tocLink.setAttribute('data-scroll', index);
  
      // Add an ID to each header for linking
      header.id = `chapter-${index}`;
      tocItem.appendChild(tocLink);
      tocList.appendChild(tocItem);
    });
  
    // TOC Toggle functionality
    tocToggle.addEventListener('click', () => {
      if (tocPanel.style.left === '0px') {
        tocPanel.style.left = '-300px'; // Hide the TOC
      } else {
        tocPanel.style.left = '0px'; // Show the TOC
      }
    });
  
    // Smooth scrolling for TOC links
    tocList.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth',
          });
          tocPanel.style.left = '-300px'; // Automatically close the TOC after navigation
        }
      }
    });
  });
  