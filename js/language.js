document.addEventListener('DOMContentLoaded', () => {
    const languageToggleButton = document.getElementById('btn_translate');
    const languageText = document.getElementById('language-text');
    const currentLanguage = localStorage.getItem('language') || 'PT-BR';

    languageToggleButton.addEventListener('click', () => {
        let currentLanguage = languageText.textContent;
        const newLanguage = currentLanguage === 'PT-BR' ? 'EN-US' : currentLanguage === 'EN-US' ? 'ES-LA' : 'PT-BR';
        languageText.textContent = newLanguage;
        localStorage.setItem('language', newLanguage);
        updateTexts(newLanguage);
    });

    updateTexts(currentLanguage);
});

function updateTexts(language) {
    const texts = {
        'PT-BR': {
            'language-text': 'PT-BR',
            'about': 'Sobre mim',
            'awards': 'Prêmios',
            'projects': 'Projetos',
            'hiPresentation': 'Olá, meu nome é Gabriel',
            'partAbout': 'Sobre mim',
            'subAbout': 'Me conheça',
            'aboutMe': 'Olá, sou o Gabriel Perugini, tenho 18 anos e tenho paixão pela area de programação, estudei no SENAI durante dois anos com o intuito de me aperfeiçoar, já participei de algumas competições durante esses anos que estudo programação, buscando sempre propor ideias criativas e praticas. Tenho como objetivo ajudar a todos com meus projetos, desde desenvolvedores até os usuarios, adaptabilidade e respeito são a chave para um bom trabalho.',
            'skills': 'Habilidades',
            'subSkills': 'E vem mais...',
            'partAwards': 'Prêmios',
            'subAwards': 'Conheça meu empenho e colaboração',
            'colocationHP': 'Colocação: 15 Melhores',
            'challengeHP': 'Desafio: Inovação Pelo Oceano',
            'ideaHP': 'Idea: Life Ocean',
            'viewHP': '<img src="assets/icon/visibility.svg" alt="">Explorar',
            'partProjects': 'Projetos',
            'subProjects': 'Conheça como eu aplico meus conhecimentos',
            'partFooter': 'Quer conhecer mais? Entre em contato!',
            'contact': '<img src="assets/icon/email.svg" alt="">Contato'
        },
        'EN-US': {
            'language-text': 'EN-US',
            'about': 'About me',
            'awards': 'Awards',
            'projects': 'Projects',
            'hiPresentation': 'Hello, my name is Gabriel',
            'partAbout': 'About me',
            'subAbout': 'Know me',
            'aboutMe': `Hello, I'm Gabriel Perugini, I'm 18 years old and I'm passionate about programming. I studied at SENAI for two years with the aim of improving myself. I've already participated in some competitions during these years that I've been studying programming, always seeking to propose creative and practical ideas. My goal is to help everyone with my projects, from developers to users. Adaptability and respect are the key to good work.`,
            'skills': 'Skills',
            'subSkills': 'And more comes...',
            'partAwards': 'Awards',
            'subAwards': 'Discover my commitment and collaboration',
            'colocationHP': 'Placement: Top 15',
            'challengeHP': 'Challenge: Innovation by the Ocean',
            'ideaHP': 'Idea: Life Ocean',
            'viewHP': '<img src="assets/icon/visibility.svg" alt="">Explorar',
            'partProjects': 'Projects',
            'subProjects': 'Find out how I apply my knowledge',
            'partFooter': 'Want to know more? Contact!',
            'contact': '<img src="assets/icon/email.svg" alt="">Contact'
        },
        'ES-LA': {
            'language-text': 'ES-LA',
            'about': 'Sobre mí',
            'awards': 'Premios',
            'projects': 'Proyectos',
            'hiPresentation': 'Hola, mi nobre es Gabriel',
            'partAbout': 'Sobre mí',
            'subAbout': 'Conoceme',
            'aboutMe': 'Hola, soy Gabriel Perugini, tengo 18 años y soy un apasionado de la programación. Estudié en el SENAI durante dos años con el objetivo de perfeccionarme. Ya he participado en algunas competiciones durante estos años que me han permitido He estado estudiando programación, siempre buscando proponer ideas creativas y prácticas. Mi objetivo es ayudar a todos con mis proyectos, desde los desarrolladores hasta los usuarios, la adaptabilidad y el respeto son la clave de un buen trabajo.',
            'skills': 'Habilidades',
            'subSkills': 'Y viene más...',
            'partAwards': 'Premios',
            'subAwards': 'Descubre mi compromiso y colaboración',
            'colocationHP': 'Colocación: Los 15 mejores',
            'challengeHP': 'Desafío: Innovación para el océano',
            'ideaHP': 'Idea: Life Ocean',
            'viewHP': '<img src="assets/icon/visibility.svg" alt="">Explorar',
            'partProjects': 'Proyectos',
            'subProjects': 'Descubre cómo aplico mis conocimientos',
            'partFooter': '¿Quiere saber más? ¡Entre en contacto!',
            'contact': '<img src="assets/icon/email.svg" alt="">Contacto'
        }
    };

    Object.keys(texts[language]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = texts[language][id];
        }
    });
}