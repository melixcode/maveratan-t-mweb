let currentLang = 'tr';

function renderContent() {
  const data = siteData[currentLang];

  // Hero
  document.getElementById('hero-title').innerText = data.hero.title;
  document.getElementById('hero-desc').innerText = data.hero.description;
  document.getElementById('btn-project').innerText = data.hero.btnProject;
  document.getElementById('btn-contact').innerText = data.hero.btnContact;

  // About
  document.getElementById('about-title').innerText = data.about.title;
  document.getElementById('about-text').innerText = data.about.text;
  document.getElementById('about-how').innerText = data.about.howWeWork;
  document.getElementById('about-belief').innerText = data.about.belief;

  // Team
  const teamContainer = document.getElementById('team-container');
  teamContainer.innerHTML = data.team.map(member => `
    <div class="card">
      <img src="${member.image}" alt="${member.name}" class="card-img">
      <div class="card-content">
        <h3>${member.name}</h3>
        <p style="color: var(--accent-blue); font-size: 0.9rem; margin-bottom: 8px;">${member.role}</p>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${member.bio}</p>
      </div>
    </div>
  `).join('');

  // Project
  document.getElementById('project-subtitle').innerText = data.project.subtitle;
  document.getElementById('project-desc').innerText = data.project.description;
  document.getElementById('project-features').innerHTML = data.project.features.map(f => `
    <li style="margin-bottom: 8px;">${f}</li>
  `).join('');

  // Achievements
  const achContainer = document.getElementById('achievements-container');
  achContainer.innerHTML = data.achievements.map(ach => `
    <div class="card">
      <img src="${ach.image}" alt="${ach.title}" class="card-img">
      <div class="card-content">
        <span style="color: var(--accent-purple); font-size: 0.85rem;">${ach.date}</span>
        <h3 style="margin: 4px 0;">${ach.title}</h3>
        <p style="color: var(--accent-blue); font-weight: 600; margin-bottom: 8px;">${ach.rank}</p>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${ach.desc}</p>
      </div>
    </div>
  `).join('');

  // Footer Year
  document.getElementById('year').innerText = new Date().getFullYear();
}

function toggleLanguage() {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  document.getElementById('lang-toggle').innerText = currentLang === 'tr' ? 'EN' : 'TR';
  renderContent();
}

document.addEventListener('DOMContentLoaded', renderContent);
