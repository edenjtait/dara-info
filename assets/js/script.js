// Toggle sidebar on mobile
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Auto-close sidebar when clicking a link (mobile)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
      }
    });
  });

  // Adjust container width to fit its parent
  function adjustContainerWidth() {
    const container = document.querySelector('.container');
    if (container && container.parentElement !== document.body) {
      container.style.maxWidth = '100%';
    }
  }

  // Run on load and resize
  adjustContainerWidth();
  window.addEventListener('resize', adjustContainerWidth);
});

// Lightbox functions
function openLightbox(src, alt) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  lightbox.style.display = "block";
  lightboxImg.src = src;
  caption.innerHTML = alt;
  document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close lightbox when pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
