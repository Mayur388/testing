// 1. Create Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    
    // Random Position
    heart.style.left = Math.random() * 100 + "vw";
    
    // Random Animation Duration
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.querySelector(".hearts-container").appendChild(heart);
    
    // Remove heart after animation to keep browser clean
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate a heart every 300 milliseconds
setInterval(createHeart, 300);


// 2. Handle Button Click (Music + Scroll)
document.getElementById('start-btn').addEventListener('click', () => {
    // Try to play audio
    const audio = document.getElementById('bg-music');
    audio.volume = 0.5; // Set volume to 50%
    audio.play().catch(error => {
        console.log("Audio play failed (browser restriction): ", error);
        alert("Please interact with the page to allow music!");
    });

    // Scroll smoothly to the gallery
    document.getElementById('gallery-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


// 3. Scroll Reveal Animation (Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));