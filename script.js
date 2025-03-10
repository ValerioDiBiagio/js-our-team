const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


/*
<div class="col">
  <div class="box-pic">
    <img src="img/male1.png" alt="">
  </div>
  <div class="box-text">
    <h3>Marco Bianchi</h3>
    <div class="role">Designer</div>
    <div class="email"><a href="#">marcobianchi@team.com</a></div>
  </div>
</div> */

const parentElement = document.querySelector('.row');

function renderHtml(parent, members) {

  let coWorkers = '';

  for (let i = 0; i < members.length; i++) {

    const currentElement = members[i];
    console.log(members[i]);

    coWorkers += createHtmlElement(currentElement)
  
  }

  parent.innerHTML = coWorkers;

}

renderHtml(parentElement, teamMembers);

function createHtmlElement(item) {
  
  return `<div class="col">
  <div class="box-pic">
    <img src="${item.img}" alt="${item.img}">
  </div>
  <div class="box-text">
    <h3>${item.name}</h3>
    <div class="role">${item.role}</div>
    <div class="email"><a href="#">${item.email}</a></div>
  </div>
</div>`
}