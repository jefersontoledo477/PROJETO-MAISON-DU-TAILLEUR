AOS.init();

  (function() {
      let headerVisible = false;
      document.getElementById("menu").addEventListener("click", function () {
          if (headerVisible === false) {
              document.getElementById("header").style.height = "290px";
              headerVisible = true;
          } else {
              document.getElementById("header").style.height = "50px";
              headerVisible = false;
          }
      });

      // Show "Go to Top" button after scrolling down
      const goTopBtn = document.querySelector(".gotopbtn");
      window.addEventListener("scroll", function () {
          if (window.scrollY > 300) {  // Show the button after scrolling down 200px
              goTopBtn.style.display = "block";
          } else {
              goTopBtn.style.display = "none";
          }
      });

  })();
  function handleSubmit(event) {
    event.preventDefault(); 
    const feedbackMessage = document.getElementById("feedbackMessage");
    feedbackMessage.style.display = "block"; 

    document.getElementById("feedbackForm").reset();
}
// Get the button
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        const progressCircle = document.querySelector(".progress-ring__circle");
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
    
        // Set the circle progress properties
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;
    
        // Function to show or hide the button based on scroll position
        function toggleScrollButton() {
            if (window.scrollY > 100) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        }
    
        // Function to set the scroll progress on the button ring
        function setProgress(percent) {
            const offset = circumference - (percent / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }
    
        // Listen for scroll events to update button visibility and progress
        window.addEventListener("scroll", () => {
            toggleScrollButton();
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setProgress(scrollPercent);
        });
    
        // Smooth scroll to top when the button is clicked
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });