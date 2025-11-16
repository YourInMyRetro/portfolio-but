document.addEventListener("DOMContentLoaded", function() {

    // --- OBJET DE TRADUCTION (NOTRE LOGIQUE) ---
    const translations = {
        "fr": {
            // Nav
            "nav_about": "À Propos de Moi",
            "nav_techs": "Technologies",
            "nav_portfolio": "Portfolio",
            "nav_education": "Formation",
            "nav_exp": "Expérience",
            "nav_refs": "Références",
            "btn_cv": "Télécharger mon CV",
            "hero_name": "VALÉRIAN PASQUIER",
            "hero_subtitle": "Développeur BUT Informatique",
            // About
            "title_about": "À PROPOS DE MOI",
            "about_contact_title": "Infos & Contact",
            "about_phone": "+33 (0) 6 40 35 10 76",
            "about_email": "valerianpasquier676@gmail.com",
            "about_address": "8 Avenue des hirondelles, Annecy",
            "about_linkedin": "Mon Profil LinkedIn",
            "about_passions_title": "Passions Et Loisirs",
            "about_passion_1": "Musculation",
            "about_passion_2": "Apprendre des faits divers",
            "about_passion_3": "Sortir avec des amis",
            "about_lang_title": "Langues",
            "about_lang_fr": "Français (Natif)",
            "about_lang_en": "Anglais (Niveau B2)",
            "about_skills_title": "Compétences Générales",
            "about_skill_1": "Indépendant",
            "about_skill_2": "Organisé",
            "about_skill_3": "Ponctuel",
            "about_skill_4": "Apprend vite",
            // Techs
            "title_techs": "TECHNOLOGIES",
            "techs_langs_title": "Langages & BDD",
            "techs_tools_title": "Outils & Systèmes",
            "skill_csharp": "C#",
            "skill_html": "HTML/CSS, JS, PHP",
            "skill_python": "Python",
            "skill_sql": "SQL",
            "skill_linux": "Linux Debian",
            "skill_git": "Git / GitHub",
            "skill_vscode": "VS Code / Visual Studio",
            "skill_vp": "Visual Paradigm",
            "skill_pa": "PowerAMC",
            // Portfolio
            "title_portfolio": "PORTFOLIO",
            "filter_all": "Tous",
            "filter_uni": "Projets Universitaires",
            "filter_perso": "Projets Personnels",
            "project_date_label": "Date",
            "project_type_label": "Type",
            "project_tech_label": "Technologie",
            "project_context_label": "Contexte",
            "project_access": "Accéder",
            "project_code": "Voir le code",
            "project_type_web": "Site Web",
            "project_type_game": "Jeu Vidéo",
            "project_context_uni": "Projet Universitaire",
            "project_context_perso": "Projet Personnel",
            "project_ecommerce_title": "Projet E-commerce",
            "project_ecommerce_desc": "Clonage d'un site e-commerce. Conception de la BDD (MCD, MLD) et développement (SQL, HTML, CSS, JS).",
            "project_ecommerce_context": "Projet Universitaire (Équipe de 5)",
            "project_ecommerce_tech": "HTML, CSS, JS, SQL",
            "project_snow_title": "Jeu Chasse-Neige (C#)",
            "project_snow_desc": "Développement d'un jeu 2D en C#. Gestion du gameplay, des collisions et de l'interface utilisateur.",
            "project_snow_date": "Jan. 2025",
            "project_snow_tech": "C# (WPF/Unity)",
            "project_freelance_title": "Projet Freelance (Web)",
            "project_freelance_desc": "Tentative de création et vente de sites web pour restaurants/bars. Le projet n'a pas abouti mais m'a appris la prospection, la gestion de projet et l'utilisation d'outils (Prismic, Netlify, Git).",
            "project_freelance_date": "Été 2025",
            "project_freelance_tech": "Prismic (CMS), Netlify, Git",
            "project_this_title": "Mon Portfolio",
            "project_this_desc": "Le site que vous consultez actuellement. Conçu en HTML, CSS et JavaScript pur, sa création a été réalisée à l'aide d'une IA supervisée suivant méticuleusement mes directives de conception et de fonctionnalité.",
            "project_this_context": "Projet Personnel / Universitaire",
            "project_this_tech": "HTML5, CSS3, JavaScript",
            // Education
            "title_education": "FORMATION",
            "edu1_date": "2024 - 2026",
            "edu1_title": "BUT Informatique",
            "edu1_desc": "Bachelor Universitaire de Technologie en Informatique.",
            "edu1_loc": "Université de Savoie / IUT Annecy, France",
            "edu2_date": "2022 - 2024",
            "edu2_title": "Baccalauréat STI2D",
            "edu2_desc": "Diplôme de fin d'études secondaires spécialisé en sciences et technologie.",
            "edu2_loc": "Lycée Louis Lachenal / Argonay, France",
            // Experience
            "title_exp": "EXPÉRIENCE",
            "exp1_date": "Depuis Sept. 2025",
            "exp1_title": "Boulanger",
            "exp1_desc": "Production et cuisson du pain, mise en rayon, contrôle qualité.",
            "exp1_loc": "Auchan Supermarché, Seynod",
            "exp2_date": "2023 - 2024",
            "exp2_title": "Équipier polyvalent",
            "exp2_desc": "Préparation des aliments, gestion de la caisse et service client, entretien de la propreté.",
            "exp2_loc": "Burger King, Annecy",
            // References
            "title_refs": "RÉFÉRENCES",
            "ref1_name": "Mme. Nathalie Gruson",
            "ref1_title": "Enseignante et Responsable des Stages",
            "ref2_name": "M. Benoit Diard",
            "ref2_title": "Enseignant en Informatique",
            "ref_email": "Email:",
            "footer_rights": "Tous droits réservés."
        },
        "en": {
            // Nav
            "nav_about": "About Me",
            "nav_techs": "Technologies",
            "nav_portfolio": "Portfolio",
            "nav_education": "Education",
            "nav_exp": "Experience",
            "nav_refs": "References",
            "btn_cv": "Download My Resume",
            "hero_name": "VALÉRIAN PASQUIER",
            "hero_subtitle": "Computer Science B.U.T. Developer",
            // About
            "title_about": "ABOUT ME",
            "about_contact_title": "Info & Contact",
            "about_phone": "+33 (0) 6 40 35 10 76",
            "about_email": "valerianpasquier676@gmail.com",
            "about_address": "8 Avenue des hirondelles, Annecy, France",
            "about_linkedin": "My LinkedIn Profile",
            "about_passions_title": "Miscellaneous",
            "about_passion_1": "Working out at the gym",
            "about_passion_2": "Learning miscellaneous facts",
            "about_passion_3": "Going out with friends",
            "about_lang_title": "Languages",
            "about_lang_fr": "French (Native)",
            "about_lang_en": "English (B2 Level)",
            "about_skills_title": "Soft Skills",
            "about_skill_1": "Independent",
            "about_skill_2": "Organization",
            "about_skill_3": "Punctual",
            "about_skill_4": "Love learning new things",
            // Techs
            "title_techs": "TECHNOLOGIES",
            "techs_langs_title": "Languages & DB",
            "techs_tools_title": "Tools & Systems",
            "skill_csharp": "C#",
            "skill_html": "HTML/CSS, JS, PHP",
            "skill_python": "Python",
            "skill_sql": "SQL",
            "skill_linux": "Linux Debian",
            "skill_git": "Git / GitHub",
            "skill_vscode": "VS Code / Visual Studio",
            "skill_vp": "Visual Paradigm",
            "skill_pa": "PowerAMC",
            // Portfolio
            "title_portfolio": "PORTFOLIO",
            "filter_all": "All",
            "filter_uni": "University Projects",
            "filter_perso": "Personal Projects",
            "project_date_label": "Date",
            "project_type_label": "Type",
            "project_tech_label": "Technology",
            "project_context_label": "Context",
            "project_access": "Access",
            "project_code": "View Code",
            "project_type_web": "Website",
            "project_type_game": "Video Game",
            "project_context_uni": "University Project",
            "project_context_perso": "Personal Project",
            "project_ecommerce_title": "E-commerce Project",
            "project_ecommerce_desc": "E-commerce website clone. DB Design (MCD, MLD) and development (SQL, HTML, CSS, JS).",
            "project_ecommerce_context": "University Project (5-person team)",
            "project_ecommerce_tech": "HTML, CSS, JS, SQL",
            "project_snow_title": "Snowplow Game (C#)",
            "project_snow_desc": "Development of a 2D game in C#. Managed gameplay, collisions, and user interface.",
            "project_snow_date": "Jan. 2025",
            "project_snow_tech": "C# (WPF/Unity)",
            "project_freelance_title": "Freelance Project (Web)",
            "project_freelance_desc": "Attempted to create and sell websites for local restaurants/bars. While not commercially successful, it taught me client prospection, project management, and using tools (Prismic, Netlify, Git).",
            "project_freelance_date": "Summer 2025",
            "project_freelance_tech": "Prismic (CMS), Netlify, Git",
            "project_this_title": "My Portfolio",
            "project_this_desc": "The website you are currently viewing. Built with HTML, CSS, and pure JavaScript, its creation was achieved using a supervised AI meticulously following my design and functional directives.",
            "project_this_context": "Personal / University Project",
            "project_this_tech": "HTML5, CSS3, JavaScript",
            // Education
            "title_education": "EDUCATION",
            "edu1_date": "2024 - 2026",
            "edu1_title": "B.U.T. in Computer Science",
            "edu1_desc": "Technical Bachelor's Degree in Computer Science.",
            "edu1_loc": "University of Savoy / IUT Annecy, France",
            "edu2_date": "2022 - 2024",
            "edu2_title": "French STI2D Baccalaureate",
            "edu2_desc": "High school diploma specialized in science technology.",
            "edu2_loc": "Louis lachenal High school / Argonay, France",
            // Experience
            "title_exp": "EXPERIENCE",
            "exp1_date": "Since Sept. 2025",
            "exp1_title": "Baker",
            "exp1_desc": "Bread Production and Baking, Retail Display, Quality Control.",
            "exp1_loc": "Auchan Supermarket, Seynod, France",
            "exp2_date": "2023 - 2024",
            "exp2_title": "All-round Teammate",
            "exp2_desc": "Food preparation, Cash handling and customer service, Maintenance of cleanliness.",
            "exp2_loc": "Burger King, Annecy, France",
            // References
            "title_refs": "REFERENCES",
            "ref1_name": "Miss Nathalie Gruson",
            "ref1_title": "Teacher and Internship Coordinator",
            "ref2_name": "Mister Benoit Diard",
            "ref2_title": "Computer Science Teacher",
            "ref_email": "Email:",
            "footer_rights": "All rights reserved."
        }
    };
    
    let currentLang = 'fr'; // Garde en mémoire la langue actuelle

    // --- LOGIQUE DE CHANGEMENT DE LANGUE (NOTRE LOGIQUE) ---
    const btnFr = document.getElementById('btn-fr');
    const btnEn = document.getElementById('btn-en');
    const htmlTag = document.documentElement; 
    const btnCV = document.getElementById('btn-cv-download'); 

    function setLanguage(lang) {
        currentLang = lang; // Met à jour la langue actuelle
        htmlTag.setAttribute('lang', lang);
        
        // Gère le bouton CV
        if (lang === 'fr') {
            btnFr.classList.add('active');
            btnEn.classList.remove('active');
            btnCV.href = "CV_Valerian_PASQUIER_FR.pdf"; 
            btnCV.download = "CV_Valerian_PASQUIER_FR.pdf";
        } else {
            btnEn.classList.add('active');
            btnFr.classList.remove('active');
            btnCV.href = "CV_Valerian_PASQUIER_EN.pdf"; 
            btnCV.download = "CV_Valerian_PASQUIER_EN.pdf";
        }

        // Gère la traduction
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    btnFr.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('fr');
    });
    btnEn.addEventListener('click', (e) => {
        e.preventDefault();
        setLanguage('en');
    });

    // --- LOGIQUE DU NOUVEAU FICHIER (ÉTOILES) ---
    function createStars() {
        const starsContainer = document.getElementById('starsContainer');
        if (!starsContainer) return;
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
    }

    // --- LOGIQUE DU NOUVEAU FICHIER (ANIMATIONS AU SCROLL) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars (logique du nouveau fichier)
                if (entry.target.classList.contains('skill-item')) {
                    const fill = entry.target.querySelector('.skill-fill');
                    if (fill) {
                        setTimeout(() => {
                            // Lit la largeur depuis le style inline --skill-width
                            fill.style.width = fill.style.getPropertyValue('--skill-width');
                        }, 100);
                    }
                }
            }
        });
    }, observerOptions);

    // Observe sections (logique du nouveau fichier)
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe skill items (logique du nouveau fichier)
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });

    // --- LOGIQUE DE FILTRE (Logique du nouveau fichier) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // --- LOGIQUE DE SCROLL (Logique du nouveau fichier) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calcule la hauteur du header pour décaler le scroll
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20; // 20px de marge
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // --- INITIALISATION ---
    createStars();
    setLanguage('fr'); // Initialise en français
    
    // Add stagger animation to cards
    document.querySelectorAll('.glass-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

});