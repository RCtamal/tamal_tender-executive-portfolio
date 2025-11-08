// Wait for document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Hide preloader after page is fully loaded
        window.addEventListener('load', function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        });
        
        // Hide preloader after 2 seconds even if page is not fully loaded
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 2000);
    }
    
    // Hero Section UI Enhancement
    const heroSection = document.getElementById('home');
    if (heroSection) {
        // Add parallax effect on mouse move
        heroSection.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const shapes = document.querySelectorAll('.hero-shape-1, .hero-shape-2, .hero-shape-3');
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                
                shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });
        
        // Add dynamic background based on dark/light mode
        function updateHeroMode() {
            const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
            const title = heroSection.querySelector('h1');
            
            if (isDarkMode) {
                heroSection.style.background = 'linear-gradient(135deg, rgba(25, 42, 86, 0.9), rgba(35, 67, 125, 0.85)), url("https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80") center/cover no-repeat';
                heroSection.style.boxShadow = 'inset 0 0 100px rgba(0, 0, 0, 0.5)';
                
                if (title) {
                    title.style.textShadow = '0 0 10px rgba(93, 143, 242, 0.5), 0 0 20px rgba(93, 143, 242, 0.3)';
                }
            } else {
                heroSection.style.background = 'linear-gradient(135deg, rgba(30, 86, 160, 0.9), rgba(58, 123, 213, 0.85)), url("https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80") center/cover no-repeat';
                heroSection.style.boxShadow = 'none';
                
                if (title) {
                    title.style.textShadow = 'none';
                }
            }
        }
        
        // Update hero on initial load
        updateHeroMode();
        
        // Add floating animations to shapes
        const heroShapes = document.querySelectorAll('.hero-shape-1, .hero-shape-2, .hero-shape-3');
        const durations = [6, 8, 10]; // Different durations for each shape
        
        heroShapes.forEach((shape, index) => {
            shape.style.animation = `float ${durations[index]}s ease-in-out infinite`;
        });
        
        // Add keyframe if it doesn't exist
        if (!document.getElementById('heroAnimations')) {
            const style = document.createElement('style');
            style.id = 'heroAnimations';
            style.textContent = `
                @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add listener for theme changes to update hero
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', updateHeroMode);
        }
        
        // Add button hover effects
        const buttons = heroSection.querySelectorAll('.hero-buttons .btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                this.style.transition = 'all 0.3s ease';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
    }
    
    // Enhanced Hero Section UI Effects
    function enhanceHeroSection() {
        const heroSection = document.getElementById('home');
        if (!heroSection) return;

        // Add floating animations to hero shapes
        const heroShape1 = heroSection.querySelector('.hero-shape-1');
        const heroShape2 = heroSection.querySelector('.hero-shape-2');
        const heroShape3 = heroSection.querySelector('.hero-shape-3');
        
        if (heroShape1) {
            heroShape1.style.animation = 'floating 6s ease-in-out infinite';
        }
        
        if (heroShape2) {
            heroShape2.style.animation = 'floating 8s ease-in-out infinite reverse';
        }
        
        if (heroShape3) {
            heroShape3.style.animation = 'floating 10s ease-in-out infinite';
        }
        
        // Add keyframe animation for floating if it doesn't exist
        if (!document.getElementById('floatingKeyframes')) {
            const style = document.createElement('style');
            style.id = 'floatingKeyframes';
            style.textContent = `
                @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Create particle elements for background effects
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'hero-particles';
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.overflow = 'hidden';
        particlesContainer.style.zIndex = '0';

        // Create multiple particles with different sizes and positions
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = `hero-particle hero-particle-${i + 1}`;
            particle.style.position = 'absolute';
            particle.style.borderRadius = '50%';
            particle.style.background = 'rgba(255, 255, 255, 0.1)';
            
            // Random size between 15px and 120px
            const size = 15 + Math.random() * 105;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            
            // Random animation duration between 10s and 25s
            const duration = 10 + Math.random() * 15;
            const delay = Math.random() * 5;
            
            particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
            particle.style.opacity = '0.15';
            particle.style.transform = 'translateZ(0)';
            
            particlesContainer.appendChild(particle);
        }

        heroSection.appendChild(particlesContainer);

        // Add parallax effect to hero section
        window.addEventListener('mousemove', (e) => {
            if (window.scrollY > window.innerHeight) return;
            
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const heroShapes = heroSection.querySelectorAll('.hero-shape-1, .hero-shape-2, .hero-shape-3');
            
            heroShapes.forEach((shape, index) => {
                const strength = 30 * (index + 1);
                const moveX = (mouseX - 0.5) * strength;
                const moveY = (mouseY - 0.5) * strength;
                
                shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            // Subtle effect on the hero content
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                const contentStrength = 15;
                const contentMoveX = (mouseX - 0.5) * contentStrength;
                const contentMoveY = (mouseY - 0.5) * contentStrength;
                
                heroContent.style.transform = `translate(${contentMoveX}px, ${contentMoveY}px)`;
            }
        });

        // Add animated gradient effect to hero-divider
        const divider = heroSection.querySelector('.hero-divider');
        if (divider) {
            // Add a shine effect using CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes shine {
                    0% { left: -100%; }
                    50%, 100% { left: 100%; }
                }
                .hero-divider:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.3);
                    animation: shine 3s infinite;
                }
            `;
            document.head.appendChild(style);
            
            // Ensure the divider has the correct position
            divider.style.position = 'relative';
            divider.style.overflow = 'hidden';
        }
    }

    // Run the hero section enhancements
    enhanceHeroSection();
    
    // Add counter animation to experience numbers
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 1500; // ms
            const step = target / (duration / 30); // 30 = interval time ms
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 30);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    // Observe counters and animate when they come into view
    const observeCounters = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observeCounters.disconnect(); // Only animate once
            }
        });
    }, { threshold: 0.5 });
    
    const counterSection = document.querySelector('.counter-box');
    if (counterSection) {
        observeCounters.observe(counterSection);
    }
    
    // Dark Mode Functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the right theme on page load
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Toggle theme when the button is clicked
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme === 'light') {
            newTheme = 'dark';
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Refresh AOS animations when theme changes
        AOS.refresh();
    });
    
    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: false,
        offset: 100
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Update active state in navbar
                document.querySelectorAll('.navbar-nav .nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Add enhanced hero section animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fadeInUp');
    }
    
    // Animate the background elements
    function animateBackgroundElements() {
        const bgElements = document.querySelectorAll('.bg-element');
        
        bgElements.forEach(element => {
            // Random position within viewport bounds
            const randomX = Math.random() * (window.innerWidth - 300);
            const randomY = Math.random() * (window.innerHeight - 300);
            
            // Apply random animation
            element.style.animation = `float ${10 + Math.random() * 10}s ease-in-out infinite alternate`;
            
            // Apply random delay
            element.style.animationDelay = `${Math.random() * 5}s`;
        });
    }
    
    // Call the function to animate background elements
    animateBackgroundElements();
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Add scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.transform = 'translate(-50%, 20px)';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.transform = 'translate(-50%, 0)';
            }
        });
    }
    
    // Handle form submission with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value.trim())) {
                        isValid = false;
                        input.classList.add('is-invalid');
                    }
                }
            });
            
            if (isValid) {
                // Show success message
                const formWrapper = contactForm.closest('.card-body');
                
                // Store original form HTML
                const originalForm = formWrapper.innerHTML;
                
                // Replace with success message with animation
                formWrapper.innerHTML = `
                    <div class="text-center py-5 fadeInUp">
                        <div class="mb-4">
                            <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
                        </div>
                        <h3>Thank You!</h3>
                        <p class="lead">Your message has been received successfully.</p>
                        <p>I will get back to you as soon as possible.</p>
                        <button class="btn btn-primary mt-3" id="resetForm">Send Another Message</button>
                    </div>
                `;
                
                // Add event listener to reset form
                document.getElementById('resetForm').addEventListener('click', function() {
                    formWrapper.innerHTML = originalForm;
                    
                    // Re-attach event listeners to the new form
                    const newForm = document.getElementById('contactForm');
                    newForm.addEventListener('submit', contactForm.onsubmit);
                });
            }
        });
        
        // Real-time validation feedback
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-invalid');
                    
                    // Email validation
                    if (this.type === 'email') {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(this.value.trim())) {
                            this.classList.add('is-invalid');
                        } else {
                            this.classList.add('is-valid');
                        }
                    } else {
                        this.classList.add('is-valid');
                    }
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.classList.remove('is-invalid');
                }
            });
        });
    }
    
    // Add scroll event listener for navbar active state
    window.addEventListener('scroll', function() {
        let current = '';
        
        // Find the section that is currently visible
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active state in navbar
        document.querySelectorAll('.navbar-nav .nav-link').forEach(navLink => {
            navLink.classList.remove('active');
            const navHref = navLink.getAttribute('href').substring(1);
            if (navHref === current) {
                navLink.classList.add('active');
            }
        });
    });
    
    // Add hover effects to timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-badge').classList.add('scale-in');
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-badge').classList.remove('scale-in');
        });
    });
    
    // Animate skill cards on scroll
    const skillElements = document.querySelectorAll('.skill-category');
    function animateSkillCards() {
        skillElements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                setTimeout(() => {
                    element.classList.add('fadeInUp');
                }, index * 150); // Stagger the animations
            }
        });
    }
    
    // Call once on load and then on scroll
    animateSkillCards();
    window.addEventListener('scroll', animateSkillCards);
    
    // Add hover effects to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Typing animation for hero section
    const heroText = document.querySelector('.hero-section p.lead');
    if (heroText) {
        const originalText = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        const typingSpeed = 30; // milliseconds per character
        
        function typeWriter() {
            if (i < originalText.length) {
                heroText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // Start typing animation after a slight delay
        setTimeout(typeWriter, 500);
    }
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const heroSection = document.querySelector('.hero-section');
        const heroShapes = document.querySelectorAll('.hero-shapes .hero-shape-1, .hero-shapes .hero-shape-2, .hero-shapes .hero-shape-3');
        
        if (heroSection) {
            const scrollPosition = window.scrollY;
            if (scrollPosition < 600) {
                heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
                
                // Move hero shapes at different speeds for parallax effect
                heroShapes.forEach((shape, index) => {
                    const speed = 0.2 + (index * 0.1);
                    shape.style.transform = `translateY(${scrollPosition * speed}px) rotate(${scrollPosition * 0.02}deg)`;
                });
            }
        }
    });
    
    // Refresh animations on resize
    window.addEventListener('resize', function() {
        AOS.refresh();
    });
}); 