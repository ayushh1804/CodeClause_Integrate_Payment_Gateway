
const projects = [
  { id: 1, title: 'Human rights and child rights.' },
  { id: 2, title: 'Prevent Social Injustice' },
  { id: 3, title: 'Conservation of Environment' },
];


function generateProjectCards() {
  const projectContainer = document.querySelector('#projects .container');

  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
      <h3>${project.title}</h3>
     
    `;

    projectContainer.appendChild(card);
  });
}


generateProjectCards();
