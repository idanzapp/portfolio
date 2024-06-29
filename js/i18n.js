document.addEventListener('DOMContentLoaded', () => {
    const defaultLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
    const sections = document.getElementsByClassName('language-section');
    const languageSelector = document.getElementById('language-selector');
    const languageSelector2 = document.getElementById('language-selector2');

    // Función para mostrar la sección del idioma seleccionado y ocultar las demás
    const setActiveLanguage = (language) => {
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
        }
        document.getElementById(language).classList.add('active');
    };

    // Inicializar con el idioma por defecto
    setActiveLanguage(defaultLanguage);
    languageSelector.value = 'es';
    languageSelector2.value = 'en';

    // Añadir el listener para cambios en el selector de idioma
    languageSelector.addEventListener('change', (event) => {
        console.log('Language changed to:', event.target.value); // Log para verificar el cambio de idioma
        setActiveLanguage(event.target.value);
        languageSelector.value = 'es';
        languageSelector2.value = 'en';
    });

    // Añadir el listener para cambios en el selector de idioma
    languageSelector2.addEventListener('change', (event) => {
        console.log('Language changed to:', event.target.value); // Log para verificar el cambio de idioma
        setActiveLanguage(event.target.value);        
        languageSelector2.value = 'es';
        languageSelector2.value = 'en';
    });
});