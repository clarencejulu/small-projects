const main = document.getElementById('main');

getData();
async function getData() {
    const response = await fetch("./db.json");
    const data = await response.json();
    // console.log(data.projects[0].name);
    showData(data.projects);
} 

function showData(projects){
    projects.forEach( project => {
        const { name, description, link } = project;

        const a = document.createElement('a');
        a.innerHTML = name;
        a.href = `/${link}`;
        const h2 = document.createElement('h2');
        h2.appendChild(a);
        const p = document.createElement('p');
        p.innerHTML = description;
        const div = document.createElement('div');
        div.appendChild(h2);
        div.appendChild(p);
        main.appendChild(div);
    })
}
