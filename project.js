const jsonUrl = 'project.json'; // Asegúrate de que esta ruta sea correcta
const container = document.querySelector('.divproject');

async function loadProjects() {
    try {
        const response = await fetch(jsonUrl);
        const projects = await response.json();

        // Limpiar contenido previo
        container.innerHTML = '';

        // Generar dinámicamente cada proyecto
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('item-project');

            projectDiv.innerHTML = `
                <a href="${project.imgLink}" target="_blank">
                    <img src="${project.img}" alt="Project image">
                </a>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.github}" class="link" target="_blank">
                    <img src="./img/github.png" alt="GitHub link">
                </a>
            `;

            // Añadir el proyecto al contenedor
            container.appendChild(projectDiv);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

loadProjects();
