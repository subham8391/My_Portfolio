const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = targetPosition - navHeight;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add an event listener to the "My Work" button
document.addEventListener("DOMContentLoaded", function() {
    // Function to smoothly scroll to the my projects section
    function scrollToMyProjects() {
      const myProjectsSection = document.getElementById("myProjectsSection");
      myProjectsSection.scrollIntoView({ behavior: "smooth" });
    }

    // Add event listener to the "My Work" button
    const myWorkButton = document.getElementById("myWorkButton");
    myWorkButton.addEventListener("click", scrollToMyProjects);
  });


// Function to smoothly scroll to the expert section
document.addEventListener("DOMContentLoaded", function() { 
    function scrollToExpertSection() {
      const expertSection = document.getElementById("expertSection");
      expertSection.scrollIntoView({ behavior: "smooth" });
    }

    // Add event listener to the "Skills" link
    const skillsLink = document.getElementById("skillsLink");
    skillsLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior (scrolling to the section anchor)
      scrollToExpertSection();
    });
  });
  // Function to smoothly scroll to the myProjects section
  document.addEventListener("DOMContentLoaded", function() {
    function scrollToMyProjectsSection() {
      const myProjectsSection = document.getElementById("myProjectsSection");
      myProjectsSection.scrollIntoView({ behavior: "smooth" });
    }

    // Add event listener to the "Projects" link
    const projectsLink = document.getElementById("projectsLink");
    projectsLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior (scrolling to the section anchor)
      scrollToMyProjectsSection();
    });
  });
// Function to smoothly scroll to the studyExp section
  document.addEventListener("DOMContentLoaded", function() {
    function scrollToStudyExpSection() {
      const studyExpSection = document.getElementById("eduExp");
      studyExpSection.scrollIntoView({ behavior: "smooth" });
    }

    // Add event listener to the "Edu & Exp" link
    const eduExpLink = document.getElementById("eduExpLink");
    eduExpLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior (scrolling to the section anchor)
      scrollToStudyExpSection();
    });
  });
  // Smooth scrolling to contact section when Contact is clicked
document.addEventListener("DOMContentLoaded", function() {
    // Function to smoothly scroll to the contact section
    function scrollToContact() {
      const contactSection = document.getElementById("contactSection");
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    // Add event listener to the "Contact" button
    const contactButton = document.getElementById("contactLink");
    contactButton.addEventListener("click", scrollToContact);
  });

  // Smooth scrolling to contact section when "Contact Me" button is clicked
document.addEventListener("DOMContentLoaded", function() {
    // Function to smoothly scroll to the contact section
    function scrollToContact() {
      const contactSection = document.getElementById("contactSection");
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    // Add event listener to the "Contact" button
    const contactButton = document.getElementById("contactMeButton");
    contactButton.addEventListener("click", scrollToContact);
  });
// Trigger CV download when "Download CV" button is clicked
const downloadCvButton = document.getElementById('downloadCvButton');
downloadCvButton.addEventListener('click', () => {
    // Replace 'path/to/cv.pdf' with the actual path to your CV file
    const cvFilePath = 'path/to/cv.pdf';
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'Subham_Das_CV.pdf';
    link.click();
});

// Expertise data array
const expertiseData = [
    { title: 'Web-Design', skill: 'HTML5', percentage: 80 },
    { title: 'Graphic-Design', skill: 'CSS', percentage: 70 },
    { title: 'Web-Devlopment', skill: 'JAVA', percentage: 90 },
    { title: 'Degital-Marketing', skill: 'JAVA SCRIPT', percentage: 60 },
];

// Function to generate expertise HTML dynamically
function generateExpertiseHTML(expertise) {
    return `
        <div class="paria flex">
            <span class="fs-4 text-white fw-bold">${expertise.title}</span>
            <div class="ammo flex">
                <span class="fs-5 text-warning fw-bold">${expertise.skill}</span>
                <span class="fs-3 text-white fw-bolder">${expertise.percentage}%</span>
            </div>
            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="${expertise.percentage}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning text-dark" style="width: ${expertise.percentage}%">${expertise.percentage}%</div>
            </div>
        </div>`;
}

// Function to generate expertise elements and append to the container
function renderExpertise() {
    const expertiseContainer = document.getElementById('expertiseContainer');
    let expertiseHTML = '';

    expertiseData.forEach((expertise) => {
        expertiseHTML += generateExpertiseHTML(expertise);
    });

    expertiseContainer.innerHTML = expertiseHTML;
}

// Call the function to generate expertise elements on page load
renderExpertise();

    // Education and Experience data arrays
    const educationData = [
        { period: '2018-2022', title: 'High School Degree', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et, in asperiores rem laudantium corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, provident.' },
        { period: '2018-2022', title: 'Bachelor`s Degree', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et, in asperiores rem laudantium corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, provident.' },
        { period: '2018-2022', title: 'Newton School Degree', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et, in asperiores rem laudantium corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, provident.' },
    ];

    const experienceData = [
        { period: '2018-2022', title: 'Frontend Devloper', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et, in asperiores rem laudantium corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, provident.' },
        { period: '2018-2022', title: 'Full-Stack Devloper', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et, in asperiores rem laudantium corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, provident.' },
        { period: '2018-2022', title: 'UI/UX Designer', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et, in asperiores rem laudantium corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, provident.' },
    ];

    // Function to generate education or experience HTML dynamically
    function generateDataHTML(data, sectionId, contentsId) {
        let dataHTML = '';

        data.forEach(item => {
            dataHTML += `
                <div class="box">
                    <h4 class="text-warning fs-5">${item.period}</h4>
                    <h3 class="text-white fs-4">${item.title}</h3>
                    <p class="text-white">${item.description}</p>
                </div>`;
        });

        document.getElementById(sectionId).style.display = 'block';
        document.getElementById(contentsId).innerHTML = dataHTML;
    }

    // Call the function to generate education elements
    generateDataHTML(educationData, 'educationSection', 'educationContents');

    // Call the function to generate experience elements
    generateDataHTML(experienceData, 'experienceSection', 'experienceContents');


    document.addEventListener("DOMContentLoaded", function () {
        // Sample project data (Replace this with your actual data from an external source or array)
        const projects = [
          {
            title: "Project 1",
            image: "my projectsec/asia-culturecenter-fGLuk0h0EsY-unsplash.jpg",
            description: "Project 1 description...",
          },
          {
            title: "Project 2",
            image: "my projectsec/asia-culturecenter-fGLuk0h0EsY-unsplash.jpg",
            description: "Project 2 description...",
          },
          // Add more project objects here
        ];
  
        const carouselInner = document.querySelector(".carousel-inner");
        const viewMoreButtons = document.querySelectorAll(".btn.btn-link");
        const prevButton = document.querySelector(".carousel-control-prev");
        const nextButton = document.querySelector(".carousel-control-next");
        let currentSlide = 0;
  
        // Function to generate carousel indicators and project cards dynamically
        function generateCarousel() {
          let carouselHTML = "";
          let indicatorsHTML = "";
  
          projects.forEach((project, index) => {
            const activeClass = index === 0 ? "active" : "";
            carouselHTML += `
              <div class="carousel-item ${activeClass}">
                <div class="wraper flex">
                  <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
                    <div class="col">
                      <div class="card text-bg-dark">
                        <img src="${project.image}" class="card-img img-fluid" style="height: 16.2rem;" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${project.title}</h5>
                          <p class="card-text">${project.description}</p>
                          <p class="card-text"><small>Last updated 3 mins ago</small></p>
                          <button type="button" class="btn btn-link text-warning text-decoration-none fs-6 fw-bolder text-warning view-more-btn">View-More</button>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-bg-dark">
                        <img src="${project.image}" class="card-img img-fluid" style="height: 16.2rem;" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${project.title}</h5>
                          <p class="card-text">${project.description}</p>
                          <p class="card-text"><small>Last updated 3 mins ago</small></p>
                          <button type="button" class="btn btn-link text-warning text-decoration-none fs-6 fw-bolder text-warning view-more-btn">View-More</button>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-bg-dark">
                        <img src="${project.image}" class="card-img img-fluid" style="height: 16.2rem;" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${project.title}</h5>
                          <p class="card-text">${project.description}</p>
                          <p class="card-text"><small>Last updated 3 mins ago</small></p>
                          <button type="button" class="btn btn-link text-warning text-decoration-none fs-6 fw-bolder text-warning view-more-btn">View-More</button>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-bg-dark">
                        <img src="${project.image}" class="card-img img-fluid" style="height: 16.2rem;" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${project.title}</h5>
                          <p class="card-text">${project.description}</p>
                          <p class="card-text"><small>Last updated 3 mins ago</small></p>
                          <button type="button" class="btn btn-link text-warning text-decoration-none fs-6 fw-bolder text-warning view-more-btn">View-More</button>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-bg-dark">
                        <img src="${project.image}" class="card-img img-fluid" style="height: 16.2rem;" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${project.title}</h5>
                          <p class="card-text">${project.description}</p>
                          <p class="card-text"><small>Last updated 3 mins ago</small></p>
                          <button type="button" class="btn btn-link text-warning text-decoration-none fs-6 fw-bolder text-warning view-more-btn">View-More</button>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-bg-dark">
                        <img src="${project.image}" class="card-img img-fluid" style="height: 16.2rem;" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${project.title}</h5>
                          <p class="card-text">${project.description}</p>
                          <p class="card-text"><small>Last updated 3 mins ago</small></p>
                          <button type="button" class="btn btn-link text-warning text-decoration-none fs-6 fw-bolder text-warning view-more-btn">View-More</button>
                        </div>
                      </div>
                    </div>
                    <!-- Add more columns for other projects if needed -->
                  </div>
                </div>
              </div>
            `;
  
            indicatorsHTML += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" class="${activeClass}" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
          });
  
          carouselInner.innerHTML = carouselHTML;
          document.querySelector(".carousel-indicators").innerHTML = indicatorsHTML;
        }
  
        // Function to handle "View-More" button click event
        function onViewMoreClick(event) {
          const projectIndex = Array.from(viewMoreButtons).indexOf(event.target);
          const project = projects[projectIndex];
          // Replace this with your logic to show more information about the project (e.g., using a modal or expanding the card)
          console.log("View-More button clicked for project:", project);
        }
  
        // Event listener for "View-More" buttons
        viewMoreButtons.forEach((btn) => {
          btn.addEventListener("click", onViewMoreClick);
        });
  
        // Function to show the specified slide
        function showSlide(slideIndex) {
          const slides = document.querySelectorAll(".carousel-item");
          if (slideIndex >= slides.length) {
            slideIndex = 0;
          } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
          }
  
          slides.forEach((slide) => {
            slide.classList.remove("active");
          });
  
          slides[slideIndex].classList.add("active");
          currentSlide = slideIndex;
        }
  
        // Event listener for previous button click
        prevButton.addEventListener("click", () => {
          showSlide(currentSlide - 1);
        });
  
        // Event listener for next button click
        nextButton.addEventListener("click", () => {
          showSlide(currentSlide + 1);
        });
  
        // Initialize the carousel by generating carousel indicators and project cards
        generateCarousel();
  
        // Optional: Implement carousel autoplay
        let autoplayInterval; // To store the interval reference
  
        function startAutoplay() {
          autoplayInterval = setInterval(() => {
            showSlide(currentSlide + 1);
          }, 5000); // Change slide every 5 seconds (adjust as needed)
        }
  
        function stopAutoplay() {
          clearInterval(autoplayInterval);
        }
  
        startAutoplay(); // Start autoplay when the page loads
  
        // Optional: Implement carousel pause/play on hover
        const carousel = document.querySelector("#carouselExampleCaptions");
        carousel.addEventListener("mouseenter", stopAutoplay);
        carousel.addEventListener("mouseleave", startAutoplay);
      });

      document.addEventListener("DOMContentLoaded", function () {
        // Get the current year and update the footer
        const currentYear = new Date().getFullYear();
        document.getElementById("copyright").textContent = `© ${currentYear} Copyright: Copyright by Mr. Subham Das`;
  
        // Form validation and submission
        const contactForm = document.getElementById("contactForm");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
  
        contactForm.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent the form from submitting normally
  
          // Validate email address
          if (!emailInput.value.trim()) {
            emailError.textContent = "Email address is required.";
          } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = "Invalid email address.";
          } else {
            emailError.textContent = "";
          }
  
          // Validate message
          if (!messageInput.value.trim()) {
            messageError.textContent = "Message is required.";
          } else {
            messageError.textContent = "";
          }
  
          // Check if the form is valid before submission
          if (isValidEmail(emailInput.value) && messageInput.value.trim()) {
            // Replace the following code with your logic to submit the form data to the server
            // For example, you can use Fetch API or XMLHttpRequest to send the data
            console.log("Form data:", {
              email: emailInput.value,
              message: messageInput.value,
            });
  
            // Display a success message to the user after successful submission
            alert("Message sent successfully!");
            // Reset the form after successful submission
            contactForm.reset();
          }
        });
  
        // Helper function to validate email address using a simple regex
        function isValidEmail(email) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
        }
      });

      //go to top
      document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll("section");
        const windowHeight = window.innerHeight;
      
        let prevScrollPos = window.scrollY;
        let isHidden = false;
      
        function updateSectionVisibility() {
          const currentScrollPos = window.scrollY;
          const scrollUp = currentScrollPos < prevScrollPos;
      
          if (scrollUp) {
            // Scrolling up, show the sections
            if (isHidden) {
              sections.forEach(section => section.classList.remove("hide-section"));
              isHidden = false;
            }
          } else {
            // Scrolling down, hide the sections
            if (!isHidden) {
              sections.forEach(section => section.classList.add("hide-section"));
              isHidden = true;
            }
          }
      
          // Show the "Go to Top" button when reaching the bottom of the page
          const documentHeight = document.documentElement.scrollHeight;
          const currentPosition = window.scrollY + windowHeight;
          const buffer = 100; // Adjust this value for earlier appearance of the button
      
          if (currentPosition >= documentHeight - buffer) {
            document.getElementById("goToTopBtn").style.display = "block";
          } else {
            document.getElementById("goToTopBtn").style.display = "none";
          }
      
          prevScrollPos = currentScrollPos;
        }
      
        function scrollToTop() {
          window.scroll({
            top: 0,
            behavior: "smooth"
          });
        }
      
        function debounce(func, delay) {
          let timer;
          return function() {
            clearTimeout(timer);
            timer = setTimeout(func, delay);
          };
        }
      
        // Update the section visibility on scroll
        window.addEventListener("scroll", debounce(updateSectionVisibility, 50));
      
        // Update section visibility on page load (in case the page starts scrolled down)
        updateSectionVisibility();
      
        // Add event listener to the "Go to Top" button
        const goToTopBtn = document.getElementById("goToTopBtn");
        goToTopBtn.addEventListener("click", scrollToTop);
      });

      
      //animated writing
      document.addEventListener("DOMContentLoaded", function() {
        function typeText(element, text, delay) {
          let charIndex = 0;
          const intervalId = setInterval(function() {
            element.textContent = text.slice(0, charIndex);
            charIndex++;
            if (charIndex > text.length) {
              clearInterval(intervalId);
            }
          }, delay);
        }
    
        function startTypingAnimation() {
          const textElements = document.querySelectorAll('.hidden-text');
          const typingDelay = 100; // Milliseconds
    
          textElements.forEach(function(element) {
            const fullText = element.textContent;
            typeText(element, fullText, typingDelay);
          });
        }
    
        startTypingAnimation();
      });