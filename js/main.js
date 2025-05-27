// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, Flip, Observer, EasePack, ScrollToPlugin);

    const heroSection = document.querySelector('.hero-section');
    const aboutSeminarSection = document.getElementById('about-seminar');
    const sectionsOverviewSection = document.getElementById('sections-overview');
    const footerElement = document.querySelector('footer');

    // --- Общая функция для анимированного перехода ---
    function animatePageTransition(targetUrl) {
        // 1. Плавная прокрутка вверх
        gsap.to(window, {
            duration: 0.6, // Можно попробовать чуть быстрее
            scrollTo: { y: 0, autoKill: false },
            ease: "power2.easeInOut", // Чуть изменил ease
            onStart: () => {
                ScrollTrigger.getAll().forEach(st => st.disable(false));
                document.body.style.pointerEvents = 'none'; // Предотвращаем случайные клики во время анимации
            },
            onComplete: () => {
                // 2. Анимация исчезновения контента после прокрутки
                const elementsToFadeOut = [
                    heroSection,
                    aboutSeminarSection,
                    sectionsOverviewSection,
                    footerElement,
                    document.querySelector('header nav') // Также скрываем навигацию
                ].filter(el => el);

                gsap.to(elementsToFadeOut, {
                    duration: 0.35, // Уменьшаем длительность, чтобы было быстрее
                    opacity: 0,
                    // y: -10, // Небольшой сдвиг вверх при исчезновении (опционально)
                    ease: "power1.in",
                    stagger: 0.05, // Небольшой stagger для более "мягкого" ухода, если много элементов
                    force3D: true, // Попробуем форсировать аппаратное ускорение
                    onComplete: () => {
                        window.location.href = targetUrl;
                        // pointerEvents вернется в auto при перезагрузке страницы
                    }
                });
            }
        });
    }

    // --- 1. Анимация для Hero секции и переход по кнопке ---
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-button');
    const startLearningBtn = document.getElementById('startLearningBtn');

    if (heroTitle && heroSubtitle && heroButton) {
        gsap.timeline({ defaults: { duration: 0.8, ease: 'power2.out' } })
            .to(heroTitle, { opacity: 1, y: 0, delay: 0.2 })
            .to(heroSubtitle, { opacity: 1, y: 0 }, "-=0.5")
            .to(heroButton, { opacity: 1, y: 0 }, "-=0.5");
    }

    if (startLearningBtn) {
        startLearningBtn.addEventListener('click', function(e) {
            e.preventDefault();
            animatePageTransition(this.href);
        });
    }

    // --- 2. Анимация секции "О СЕМИНАРЕ" ---
    const aboutSectionTitle = document.querySelector('#about-seminar .section-title');
    const principleCards = gsap.utils.toArray('#about-seminar .principle-card');
    const targetAudience = document.querySelector('#about-seminar .target-audience');

    if (aboutSectionTitle) {
        gsap.to(aboutSectionTitle, {
            opacity: 1, y: 0, duration: 0.8,
            scrollTrigger: { trigger: aboutSectionTitle, start: "top 85%" }
        });
    }
    if (principleCards.length > 0) {
        principleCards.forEach((card, index) => {
            gsap.to(card, {
                opacity: 1, y: 0, duration: 0.6, delay: index * 0.15,
                scrollTrigger: { trigger: card, start: "top 90%" }
            });
            const icon = card.querySelector('.principle-icon');
            if (icon) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(icon, { y: -8, scale: 1.15, rotate: 'random(-10, 10)', duration: 0.25, ease: "back.out(2)" });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(icon, { y: 0, scale: 1, rotate: 0, duration: 0.4, ease: "elastic.out(1, 0.7)" });
                });
            }
        });
    }
    if (targetAudience) {
        gsap.to(targetAudience, {
            opacity: 1, y: 0, duration: 0.8,
            scrollTrigger: { trigger: targetAudience, start: "top 85%" }
        });
    }
    
    // --- 3. Анимация и интерактивность секции "ОБЗОР РАЗДЕЛОВ" + НОВЫЙ переход ---
    const overviewSectionTitle = document.querySelector('#sections-overview .section-title');
    const overviewCardsWrappers = gsap.utils.toArray('#sections-overview .overview-card');

    if (overviewSectionTitle) {
        gsap.to(overviewSectionTitle, {
            opacity: 1, y: 0, duration: 0.8,
            scrollTrigger: { trigger: overviewSectionTitle, start: "top 85%" }
        });
    }

    if (overviewCardsWrappers.length > 0) {
        overviewCardsWrappers.forEach((cardWrapper, index) => {
            const card = cardWrapper.querySelector('.card');
            const linkButton = cardWrapper.querySelector('.section-link-btn');

            gsap.to(cardWrapper, { 
                opacity: 1, y: 0, scale: 1, duration: 0.5, delay: index * 0.1,
                scrollTrigger: { trigger: cardWrapper, start: "top 90%", once: true }
            });

            if (card) {
                gsap.set(card, { transformOrigin: "center center", transformPerspective: 1000 }); 
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    const rotateX = gsap.utils.clamp(-8, 8, y / (rect.height / 2) * -8); 
                    const rotateY = gsap.utils.clamp(-8, 8, x / (rect.width / 2) * 8);  
                    gsap.to(card, {
                        duration: 0.6, rotationX: rotateX, rotationY: rotateY, scale: 1.03, z: 15, ease: "power1.out"
                    });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        duration: 0.6, rotationX: 0, rotationY: 0, scale: 1, z: 0, ease: "elastic.out(1, 0.6)"
                    });
                });
            }

            if (linkButton) {
                linkButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    animatePageTransition(this.href);
                });
            }
        });
    }

    // --- 4. Кастомное полноэкранное меню с SVG-бургером ---
    // (код меню остается таким же, как в предыдущем ответе, я его здесь не дублирую для краткости)
    // ... (вставьте сюда полный код для секции 4 из предыдущего ответа) ...
    const customMenuToggler = document.getElementById('customMenuToggler');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const closeFullscreenMenuBtn = document.getElementById('closeFullscreenMenu');
    
    if (customMenuToggler && fullscreenMenu) {
        const fsNav = fullscreenMenu.querySelector('.navbar-nav-fullscreen');
        const fsMenuItems = fsNav ? gsap.utils.toArray(fsNav.querySelectorAll('.fs-menu-item > a, .fs-menu-item > .dropdown-toggle-custom')) : [];
        const fsSubMenuItemsContainer = fsNav ? fsNav.querySelector('.fs-menu-item.custom-dropdown .dropdown-menu-custom') : null;

        const actualBurgerIcon = customMenuToggler.querySelector('svg');
        const burgerLine1 = actualBurgerIcon ? actualBurgerIcon.querySelector('.line1') : null;
        const burgerLine2 = actualBurgerIcon ? actualBurgerIcon.querySelector('.line2') : null;
        const burgerLine3 = actualBurgerIcon ? actualBurgerIcon.querySelector('.line3') : null;
        
        let burgerTimeline = gsap.timeline({ paused: true, reversed: true });

        if (burgerLine1 && burgerLine2 && burgerLine3) {
            const line1YInitial = parseFloat(burgerLine1.getAttribute('y'));
            const line2YInitial = parseFloat(burgerLine2.getAttribute('y'));
            const line3YInitial = parseFloat(burgerLine3.getAttribute('y'));
            
            if (!isNaN(line1YInitial) && !isNaN(line2YInitial) && !isNaN(line3YInitial)) {
                burgerTimeline
                    .to(burgerLine1, { duration: 0.25, attr:{y: line2YInitial}, ease: "power2.inOut" }, "cross")
                    .to(burgerLine3, { duration: 0.25, attr:{y: line2YInitial}, ease: "power2.inOut" }, "cross")
                    .to(burgerLine2, { duration: 0.2, scaleX: 0, transformOrigin: "50% 50%", ease: "power2.in" }, "cross") 
                    .to(burgerLine1, { duration: 0.25, rotation: 45,  transformOrigin: "50% 50%", ease: "power2.out" }, "crossEnd")
                    .to(burgerLine3, { duration: 0.25, rotation: -45, transformOrigin: "50% 50%", ease: "power2.out" }, "crossEnd");
            } else {
                 console.warn("SVG burger lines y attributes not found or not numbers. Falling back to simple rotation.");
                 burgerTimeline.to(actualBurgerIcon, {rotation: 180, duration: 0.3, ease:"power2.inOut"});
            }
        } else if (actualBurgerIcon) {
            burgerTimeline.to(actualBurgerIcon, {rotation: 180, duration: 0.3, ease:"power2.inOut"});
        }

        let fsMenuIsOpen = false;
        gsap.set(fullscreenMenu, { display: 'none', autoAlpha: 0 }); 
        if (fsMenuItems.length > 0) {
            gsap.set(fsMenuItems, { autoAlpha: 0, y: 20 });
        }

        const openFullscreenMenu = () => { 
            if (fsMenuIsOpen) return;
            fsMenuIsOpen = true;
            
            fullscreenMenu.style.display = 'flex';
            burgerTimeline.play();
            customMenuToggler.classList.add('open');
            customMenuToggler.setAttribute('aria-expanded', 'true');

            gsap.timeline()
            .to(fullscreenMenu, { autoAlpha: 1, duration: 0.35, ease: 'power1.out' })
            .to(fsMenuItems, 
                { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.06, ease: 'power1.out' }, 
                "-=0.2"
            );
        };
        const closeFullscreenMenu = () => {
            if (!fsMenuIsOpen) return;
            fsMenuIsOpen = false;

            burgerTimeline.reverse();
            customMenuToggler.classList.remove('open');
            customMenuToggler.setAttribute('aria-expanded', 'false');
            
            gsap.timeline({
                onComplete: () => {
                    fullscreenMenu.style.display = 'none';
                    if (fsSubMenuItemsContainer && (fsSubMenuItemsContainer.style.height !== '0px' && fsSubMenuItemsContainer.style.height !== '')) {
                         gsap.set(fsSubMenuItemsContainer, { height: 0, autoAlpha: 0, marginTop: 0, marginBottom: 0});
                         const sectionsDropdownCustomFs = document.getElementById('sectionsDropdownCustomFs');
                         if(sectionsDropdownCustomFs) sectionsDropdownCustomFs.setAttribute('aria-expanded', 'false');
                    }
                }
            })
            .to(fsMenuItems, { autoAlpha: 0, y: 15, duration: 0.2, stagger: { each: 0.04, from: "end" }, ease: 'power1.in' })
            .to(fullscreenMenu, { 
                autoAlpha: 0, 
                duration: 0.25, 
                ease: 'power1.in'
            }, "-=0.1"); 
        };

        customMenuToggler.addEventListener('click', () => { fsMenuIsOpen ? closeFullscreenMenu() : openFullscreenMenu(); });
        
        if (closeFullscreenMenuBtn) {
            closeFullscreenMenuBtn.addEventListener('click', closeFullscreenMenu);
        }
        
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && fsMenuIsOpen) closeFullscreenMenu(); });
        
        const sectionsDropdownCustomFs = document.getElementById('sectionsDropdownCustomFs');
        
        if (sectionsDropdownCustomFs && fsSubMenuItemsContainer) {
            let subMenuFsIsOpen = false;
            sectionsDropdownCustomFs.addEventListener('click', (e) => {
                e.preventDefault();
                subMenuFsIsOpen = !subMenuFsIsOpen;
                sectionsDropdownCustomFs.setAttribute('aria-expanded', subMenuFsIsOpen.toString());
                if (subMenuFsIsOpen) {
                    gsap.to(fsSubMenuItemsContainer, { 
                        height: 'auto', autoAlpha: 1, marginTop: '0.5rem', marginBottom: '0.5rem',
                        duration: 0.3, ease: 'power1.out' 
                    });
                } else {
                    gsap.to(fsSubMenuItemsContainer, { 
                        height: 0, autoAlpha: 0, marginTop: 0, marginBottom: 0,
                        duration: 0.3, ease: 'power1.in' 
                    });
                }
            });
            const fsSubMenuLinks = fsSubMenuItemsContainer ? gsap.utils.toArray(fsSubMenuItemsContainer.querySelectorAll('a.dropdown-item')) : [];
            fsSubMenuLinks.forEach(link => {
                 link.addEventListener('mouseenter', () => {
                    gsap.to(link, { color: '#0d6efd', x: 3, duration: 0.2 });
                });
                link.addEventListener('mouseleave', () => {
                    gsap.to(link, { color: '#495057', x: 0, duration: 0.2 });
                });
            });
        }
    } else {
        console.warn("Custom menu toggler or fullscreen menu not found. Fullscreen menu functionality disabled.");
    }

});