const teamCard = document.createElement('div');
teamCard.className='team-card'
const teamContainer = document.querySelector('.team-container')
teamContainer.append(teamCard)
console.log(teamCard)
let html = '';

const team = [
  {
    foto: 'wayne-barnett-founder-ceo.jpg',
    nome: 'Wayne',
    cognome: 'Barnett',
    ruolo: 'Founder & CEO'
  },
  {
    foto: 'angela-caroll-chief-editor.jpg',
    nome: 'Angela',
    cognome: 'Caroll',
    ruolo: 'Chief Editor'
  },
  {
    foto: 'walter-gordon-office-manager.jpg',
    nome: 'Walter',
    cognome: 'Gordon',
    ruolo: 'Office Manager'
  },
  {
    foto: 'angela-lopez-social-media-manager.jpg',
    nome: 'Angela',
    cognome: 'Lopez',
    ruolo: 'Social Media Manager'
  },
  {
    foto: 'scott-estrada-developer.jpg',
    nome: 'Scott',
    cognome: 'Estrada',
    ruolo: 'Developer'
  },
  {
    foto: 'barbara-ramos-graphic-designer.jpg',
    nome: 'Barbara',
    cognome: 'Ramos',
    ruolo: 'Graphic Designer'
  }


]



for (let i = 0; i < team.length; i++){
  const membroTeam = team[i]
  console.log('membroTeam',membroTeam)

  const fotoMembriTeam = membroTeam.foto
  console.log('foto: ',fotoMembriTeam)

  const nomeMembriTeam = membroTeam.nome
  console.log('nome: ',nomeMembriTeam)

  const cognomeMembriTeam = membroTeam.cognome
  console.log('cognome: ',cognomeMembriTeam)

  const ruoloMembriTeam = membroTeam.ruolo
  console.log('ruolo: ',ruoloMembriTeam)

  

  html +=`<div class="team-card">
            <div class="card-image">
              <img src="img/${fotoMembriTeam}"
              alt="${nomeMembriTeam} ${cognomeMembriTeam}"/>
            </div>
          <div class="card-text">
            <h3>${nomeMembriTeam} ${cognomeMembriTeam}</h3>
            <p>${ruoloMembriTeam}</p>
          </div>
        </div>`


}


teamContainer.innerHTML = html;



