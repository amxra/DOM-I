const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Nav section 

let navSection = document.querySelectorAll('nav a')

for (i =0; i < navSection.length; i++){
  navSection[i].innerHTML = siteContent['nav']['nav-item-' + (i + 1)]
}

// CTA 

let bannerText = document.querySelector('.cta-text h1');

siteContent.cta.h1 = "Dom <br> Is <br> Awesome";

bannerText.innerHTML = siteContent.cta.h1;

let bannerButton = document.querySelector('.cta-text button');

bannerButton.innerHTML = siteContent.cta.button;


let bannerImage = document.querySelector('#cta-img');

bannerImage.setAttribute('src', siteContent['cta']['img-src']);



//Middle Area

let topContentHeader = document.querySelectorAll('.main-content .top-content h4');

topContentHeader[0].textContent= siteContent['main-content']["features-h4"];
topContentHeader[1].textContent= siteContent['main-content']["about-h4"]


let topContentParagraph = document.querySelectorAll('.main-content .top-content p');

topContentParagraph[0].textContent = siteContent['main-content']['features-content'];
topContentParagraph[1].textContent = siteContent['main-content']['about-content']

let middleImage = document.querySelector('#middle-img');

middleImage.setAttribute('src', siteContent['main-content']["middle-img-src"]);

let bottomContentHeader = document.querySelectorAll('.bottom-content .text-content h4');

bottomContentHeader[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeader[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeader[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');

bottomContentText[0].textContent = siteContent['main-content']['services-content'];
bottomContentText[1].textContent = siteContent['main-content']['product-content'];
bottomContentText[2].textContent = siteContent['main-content']['vision-content'];

let contactHeader = document.querySelector('.contact h4');

contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactBody = document.querySelectorAll('.contact p');

contactBody[0].textContent = siteContent['contact']['address'];
contactBody[1].textContent = siteContent['contact']['phone'];
contactBody[2].textContent = siteContent['contact']['email'];

let footerText = document.querySelector('footer');

footerText.textContent = siteContent['footer']['copyright']