function cargarPaises() {
  fetch('assets/paises.json')
    .then((response) => response.json())
    .then((data) => {
      const selectPaises = document.getElementById('form_country');
      data.forEach((pais) => {
        const option = document.createElement('option');
        option.text = pais.name;
        option.value = pais.name;
        selectPaises.appendChild(option);
      });
    })
    .catch((error) => console.error('Error al cargar los países:', error));
}

window.addEventListener('DOMContentLoaded', async () => {
  cargarPaises();
});
