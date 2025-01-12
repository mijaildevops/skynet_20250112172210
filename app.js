// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Leer el archivo JSON y mostrar el título en el HTML
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Asignamos el título del JSON al h1 en el HTML
        document.querySelector('h1').textContent = data.title;
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  });
  