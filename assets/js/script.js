// toggle mobile menu
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener(
  'click',
  (event) => toggleMenu(event, false),
));

// Dynamic section
const speakers = [
  {
    name: 'Yomi Casual',
    title: 'Professional Tailor',
    image: 'casual.png',
    bio: 'He is an experienced entrepreneur and CEO of Yomi Casual, based in Lagos .',
  },
  {
    name: 'Ebuka Obi Uchendu',
    title: 'Big-Brother Tv-Presenter',
    image: 'Ebuka.jpg',
    bio: 'He is the winner of Big-Brother Africa in the year 2007 and also a fashionist.',
  },
  {
    name: 'Mai Atafo',
    title: 'Professional Tailor',
    image: 'mai-Atafo.JPG',
    bio: 'He is the best Male Professional Fashion Tailor in Nigeria.',
  },
  {
    name: 'Ezema Anthony Sunday',
    title: 'Fashion Digital Marketer',
    image: 'TONY.JPG',
    bio: 'He is a Social Media Influencer and a Fashion Digital Marketer.',
  },
  {
    name: 'Ezema Obinna',
    title: 'Professional Shoe Maker',
    image: 'OBI.JPG',
    bio: 'He is a Professional Shoe Maker and CEO of Naveno Style.',
  },
  {
    name: 'Nyekachi Douglas',
    title: 'Miss World 2019',
    image: 'Nyekachi Douglas.jpg',
    bio: 'She is a Professional Model and winner of 2019 Miss World.',
  },
];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src="./assets/Img/${speaker.image}" alt="featured-speakers" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// Show more speackers
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.mobile-hide').forEach((el) => {
      el.classList.toggle('mobile-hide');
    });
    moreSpeakerButton.style.display = 'none';
  },
);