// ========= PRE-LOADER START ========= //

var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.body.style.overflow = 'auto';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    document.body.style.overflow = 'hidden';
    // Hide menu button
    document.getElementById('MenuBtn').style.display = 'none';

    window.addEventListener('load', function() {
        loadNow(1);
        // Show menu button
        document.getElementById('MenuBtn').style.display = 'block';
    });
});

/*var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    // Check if all content is loaded
    if (document.readyState === 'complete') {
        loader.style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Enable scroll bar
        // Show menu button
        document.getElementById('MenuBtn').style.display = 'block';
    } else {
        // Wait for the content to load
        setTimeout(displayContent, 100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    document.body.classList.add('loading'); // Add 'loading' class to body
    // Hide menu button
    document.getElementById('MenuBtn').style.display = 'none';

    setTimeout(function() {
        loadNow(1);
        document.body.classList.remove('loading'); // Remove 'loading' class from body
        // Show menu button
        document.getElementById('MenuBtn').style.display = 'block';
    }, 3300);
});*/
// ========= PRE-LOADER END ========= //
// ================================================================= //


// ========= Header toggle START ========= //
let MenuBtn = document.getElementById('MenuBtn');
let nav = document.querySelector('header nav');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('toggle-header');
    nav.classList.toggle('show-menu');
    MenuBtn.style.display = 'none';
});

document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && e.target !== MenuBtn) {
        document.querySelector('body').classList.remove('toggle-header');
        nav.classList.remove('show-menu');
        MenuBtn.style.display = 'block';
    }
});

// ========= Header toggle END ========= //
// ================================================================= //



// ========= Typing Animation START ========= //
let type = new Typed('.TypingAnimation', {
    strings: ['Computer Science Engineer','UI/UX & Web Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
});
// ========= Typing Animation END ========= //
// ================================================================= //


// ========= Active Link State On Scroll START ========= //
let navLinks = document.querySelectorAll('header nav ul li a'); 
let Section = document.querySelectorAll('section')
window.addEventListener('scroll', ()=> {
    const scrollPos = window.scrollY + 10
    Section.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add("active")
                }
            });
        }
    });
});
// ========= Active Link State On Scroll END ========= //
// ================================================================= //

