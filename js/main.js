(function() {
    'use strict';

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    const vulnCards = document.querySelectorAll('.vuln-card');

    if (filterBtns.length > 0 && vulnCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;

                vulnCards.forEach(card => {
                    if (filter === 'all') {
                        card.classList.remove('hidden');
                        return;
                    }
                    if (filter === 'frontend' || filter === 'backend') {
                        const matches = card.dataset.side === filter;
                        card.classList.toggle('hidden', !matches);
                        return;
                    }
                    const matches = card.dataset.difficulty === filter;
                    card.classList.toggle('hidden', !matches);
                });
            });
        });
    }

    // Sidebar TOC scroll spy
    const tocLinks = document.querySelectorAll('.sidebar-toc a');
    if (tocLinks.length > 0) {
        const sections = Array.from(tocLinks).map(link => {
            const id = link.getAttribute('href');
            return id ? document.querySelector(id) : null;
        }).filter(Boolean);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = '#' + entry.target.id;
                    tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
                }
            });
        }, { rootMargin: '-30% 0px -60% 0px' });

        sections.forEach(s => observer.observe(s));

        tocLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = 80;
                        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }
            });
        });
    }

    // Smooth anchor scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        if (link.classList.contains('sidebar-toc')) return;
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offset = 80;
                    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });
})();
