const projects = [
    {
        src: "https://github.com/tecnologias-web/catalogo-cursos-frontend/blob/master/css/index.css",
        title: "Generator Password",
        description: "Generado de password" 
    },
];

function addProject(projects){
    let html = '';
    projects.ForEach(function(project){
        html +=  `
        <div class="item-project">
          <img src="${project.src}" />
          <h3>${project.title}</h3>
          <p>${project.description}€</p>
        </div>
      `;
    });

$('.item-project').html(html);


}
$(function(){
    addProject(projects);
});