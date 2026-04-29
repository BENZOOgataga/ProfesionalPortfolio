(function () {
    const page = window.location.pathname.split('/').pop() || 'index.html';

    const projectPages = new Set([
        'projets_competences.html',
        'projets1-details.html',
        'projets2-details.html',
        'projets3-details.html',
        'projets4-details.html',
        'livrable-itil-iso27001.html'
    ]);

    const competences = [
        ['competence-1-patrimoine.html', 'Gérer le patrimoine informatique'],
        ['competence-2-incidents.html', 'Répondre aux incidents et demandes'],
        ['competence-3-presence.html', 'Développer la présence en ligne'],
        ['competence-4-projet.html', 'Travailler en mode projet'],
        ['competence-5-service.html', 'Mettre à disposition un service'],
        ['competence-6-developpement.html', 'Organiser son développement professionnel'],
    ];

    function navItem(href, label, active) {
        const cls = active ? 'nav-link active-page' : 'nav-link';
        return `<li class="nav-item"><a class="${cls}" href="${href}">${label}</a></li>`;
    }

    const dropdownItems = competences
        .map(([href, label]) => {
            const cls = page === href ? 'dropdown-item active' : 'dropdown-item';
            return `<li><a class="${cls}" href="${href}">${label}</a></li>`;
        })
        .join('\n                        ');

    const nav = `<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
        <a class="navbar-brand" href="index.html">Louis Morice</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                ${navItem('index.html', 'Accueil', page === 'index.html' || page === '')}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Compétences BTS SIO
                    </a>
                    <ul class="dropdown-menu">
                        ${dropdownItems}
                    </ul>
                </li>
                ${navItem('projets_competences.html', 'Projets &amp; Compétences', projectPages.has(page))}
                ${navItem('CV.html', 'CV', page === 'CV.html')}
                ${navItem('veille.html', 'Veille Technologique', page === 'veille.html')}
                ${navItem('e5.html', 'E5', page === 'e5.html')}
            </ul>
        </div>
    </div>
</nav>`;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) placeholder.outerHTML = nav;
}());
