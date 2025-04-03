// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            alert('Form submission would be handled here');
        });
    }
});


// Typewriter Effect
// Typewriter Effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Modified to add cursor class
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

// Initialize Typewriter on Page Load
window.onload = function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typewriter initialization
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    
    // Add CSS for blinking cursor effect
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".wrap::after { content: '|'; animation: blink 0.7s infinite; }";
    css.innerHTML += "@keyframes blink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
    document.body.appendChild(css);
};



document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.card');
    const modalOverlay = document.getElementById('project-modal-overlay');
    const modalContent = document.getElementById('project-modal-content');
    const closeButton = document.getElementById('close-modal');
    
    // Project ID mapping
    const projectMapping = {
      'GLPI': 'project-glpi',
      'Convertisseur de fichier': 'project-converter',
      'FastSushi': 'project-fastsushi',
      'Cobblemon team planner': 'project-cobblemon',
      'Projet Banque': 'project-banque'
    };
    
    // Function to open modal with specific project content
// Function to open modal with specific project content
function openProjectModal(projectId) {
    const template = document.getElementById(projectId);
    
    if (template) {
      // Clone the template content
      const content = template.content.cloneNode(true);
      
      // Clear previous content and add new content
      modalContent.innerHTML = '';
      modalContent.appendChild(content);
      
      // Show the modal
      modalOverlay.style.display = 'flex';
      
      // Reset scroll position to top
      const modalContainer = document.querySelector('.project-modal-container');
      if (modalContainer) {
        modalContainer.scrollTop = 0;
      }
      
      // Force browser to recognize the change before adding active class
      setTimeout(() => {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }, 10);
    }
  }
  
  // Function to close modal
  function closeProjectModal() {
    modalOverlay.classList.remove('active');
    
    // Wait for animation to complete before hiding completely
    setTimeout(() => {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
      
      // Reset scroll position to top after closing
      const modalContainer = document.querySelector('.project-modal-container');
      if (modalContainer) {
        modalContainer.scrollTop = 0;
      }
    }, 300);
  }
    
    // Add click event to each project card
    projectCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Prevent clicks on buttons inside card from opening modal
        if (e.target.closest('.more') || e.target.closest('.see-link')) {
          e.stopPropagation();
          return;
        }
        
        // Find the project title
        const projectTitle = card.querySelector('.title').textContent;
        const projectId = projectMapping[projectTitle];
        
        if (projectId) {
          modalOverlay.style.display = 'flex';
          
          // Slight delay to ensure display:flex takes effect before animation
          setTimeout(() => {
            openProjectModal(projectId);
          }, 10);
        }
      });
    });
    
    // Close modal when close button is clicked
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      closeProjectModal();
    });
    
    // Close modal when clicking outside of content
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
    
    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeProjectModal();
      }
    });
  });


window.onscroll = function() {
    var theta = document.documentElement.scrollTop / 300 % Math.PI;

document.getElementById('star-logo').style.transform ='rotate(' + theta + 'rad)';
}

const clickableImages = document.querySelectorAll('.clickable-image');
    const popupContainer = document.getElementById('popupContainer');
    const popupImage = document.getElementById('popupImage');
    
    // Add click event to each clickable image
    clickableImages.forEach(image => {
      image.addEventListener('click', function(e) {
        e.stopPropagation();
        // Set the popup image source to the one specified in the data attribute
        popupImage.src = this.getAttribute('data-popup-image');
        popupImage.alt = this.alt + " Popup";
        // Show the popup
        popupContainer.style.display = 'flex';
      });
    });
    
    // Hide popup when clicking anywhere on the overlay
    popupContainer.addEventListener('click', function() {
      popupContainer.style.display = 'none';
    });