// js/main.js
(() => {
    const STORAGE_KEYS = {
        theme: 'seminar-theme',
        language: 'seminar-language'
    };

    const translations = {
        ru: {
            'meta.title': 'Семинар НКО — современный курс управления',
            'nav.brand': 'Семинар НКО',
            'nav.brandAlt': 'Логотип семинара НКО',
            'nav.home': 'Главная',
            'nav.program': 'Программа',
            'nav.sections': 'Разделы',
            'nav.format': 'Особенности',
            'nav.resources': 'Материалы',
            'nav.cta': 'Связаться',
            'controls.language': 'Переключение языка',
            'controls.themeToDark': 'Включить тёмную тему',
            'controls.themeToLight': 'Включить светлую тему',
            'controls.menuOpen': 'Открыть меню',
            'controls.menuClose': 'Закрыть меню',
            'hero.badge': 'Живой семинар',
            'hero.title': 'Трёхчасовой практикум по управлению НКО',
            'hero.subtitle': 'Два ведущих помогают командам НКО за 3 часа отработать ключевые управленческие задачи. Короткая теория, погружение в кейсы и коллективная рефлексия.',
            'hero.primary': 'Начать обучение',
            'hero.secondary': 'Посмотреть программу',
            'hero.note': '2 ведущих · 3 часа живой работы · AI-фидбэк по каждому блоку',
            'hero.widget.title': 'Структура встречи',
            'hero.widget.item1': '30 минут — общий контекст и ожидания',
            'hero.widget.item2': '90 минут — практика на кейсах участников',
            'hero.widget.item3': '30 минут — план внедрения и ресурсы',
            'stats.eyebrow': 'Что важно знать',
            'stats.title': 'Семинар, который укладывается в 3 часа и экономит время команды',
            'stats.stat1.value': '3 часа',
            'stats.stat1.label': 'живого взаимодействия',
            'stats.stat2.value': '2 ведущих',
            'stats.stat2.label': 'с опытом управления НКО',
            'stats.stat3.value': 'AI-партнёр',
            'stats.stat3.label': 'powered by GPT-5',
            'stats.stat4.value': '4 блока',
            'stats.stat4.label': 'с AI-фидбэком и планом действий',
            'about.eyebrow': 'О чём поговорим',
            'about.title': 'Фокусируемся на реальных задачах команды',
            'about.text': 'Участни_цы приносят свои кейсы: расширение команды, выстраивание коммуникаций, устойчивость и безопасность. Мы разбираем их шаг за шагом и фиксируем решение вместе с AI-помощником.',
            'about.point1': 'Диагностика текущей ситуации и ожиданий команды.',
            'about.point2': 'Интерактивные упражнения и сбор маршрутов внедрения.',
            'about.point3': 'Итоговый план, который можно делегировать команде.',
            'features.card1.title': 'Командная диагностика',
            'features.card1.text': 'Определяем точки роста и риски в команде НКО, учитывая роли, мотивацию и выгорание.',
            'features.card2.title': 'Работа с коммуникациями',
            'features.card2.text': 'Проверяем каналы взаимодействия, сценарии созвонов и договорённости внутри команды.',
            'features.card3.title': 'План устойчивости',
            'features.card3.text': 'Собираем чек-лист по безопасности, инфраструктуре и ресурсам на ближайшие 90 дней.',
            'program.eyebrow': 'Программа встречи',
            'program.title': 'Три блока и финальная рефлексия',
            'program.text': 'Каждый блок завершается совместным выводом и AI-резюме, которое сохраняется для команды.',
            'program.block1.title': 'Блок 1 · Стартовые ориентиры',
            'program.block1.item1': 'Ожидания и фокус команды',
            'program.block1.item2': 'Быстрая диагностика процессов',
            'program.block1.item3': 'AI-сводка рисков',
            'program.block2.title': 'Блок 2 · Практика на кейсах',
            'program.block2.item1': 'Разбор ситуаций участни_ц',
            'program.block2.item2': 'Работа в группах и обмен инструментами',
            'program.block2.item3': 'AI-комментарии по действиям',
            'program.block3.title': 'Блок 3 · План внедрения',
            'program.block3.item1': 'Коллективная рефлексия',
            'program.block3.item2': 'Формирование планов на 30/60/90 дней',
            'program.block3.item3': 'AI-чек-лист действий',
            'sectionsNav.eyebrow': 'Онлайн-материалы',
            'sectionsNav.title': 'Все разделы семинара в одном месте',
            'sectionsNav.text': 'Сохраните ссылки или делитесь ими с командой — материалы открываются после семинара для самостоятельной работы и повторения.',
            'sectionsNav.open': 'Перейти к разделу',
            'sectionsNav.module0.title': 'Введение и цели',
            'sectionsNav.module0.desc': 'Настраиваемся на семинар, уточняем ожидания и собираем фокусочные вопросы.',
            'sectionsNav.module0.iconAlt': 'Иконка блока введения',
            'sectionsNav.module1.title': 'Community building',
            'sectionsNav.module1.desc': 'Инструменты для развития сообщества, мотивации волонтёров и лидерских практик.',
            'sectionsNav.module1.iconAlt': 'Иконка community building',
            'sectionsNav.module2.title': 'Внутренние коммуникации',
            'sectionsNav.module2.desc': 'Настраиваем каналы связи, синхронизацию команд и опорные договорённости.',
            'sectionsNav.module2.iconAlt': 'Иконка внутренних коммуникаций',
            'sectionsNav.module3.title': 'Инфраструктура НКО',
            'sectionsNav.module3.desc': 'Выбираем цифровые инструменты, распределяем ответственность и поддерживаем рутину.',
            'sectionsNav.module3.iconAlt': 'Иконка инфраструктуры НКО',
            'sectionsNav.module4.title': 'Право и безопасность',
            'sectionsNav.module4.desc': 'Проходим по юридическим требованиям и правилам цифровой безопасности.',
            'sectionsNav.module4.iconAlt': 'Иконка права и безопасности',
            'sectionsNav.module5.title': 'Эффективность и развитие',
            'sectionsNav.module5.desc': 'Оцениваем процессы, строим индивидуальные планы роста и поддерживаем команду.',
            'sectionsNav.module5.iconAlt': 'Иконка эффективности и развития',
            'sectionsNav.module6.title': 'Антикризисное управление',
            'sectionsNav.module6.desc': 'Готовимся к нестабильности, выстраиваем сценарии и распределяем роли.',
            'sectionsNav.module6.iconAlt': 'Иконка антикризисного управления',
            'sectionsNav.module7.title': 'Фандрайзинг и партнёрства',
            'sectionsNav.module7.desc': 'Ищем устойчивые источники финансирования и развиваем партнёрские связи.',
            'sectionsNav.module7.iconAlt': 'Иконка фандрайзинга',
            'sectionsNav.module8.title': 'Кейсы и практика',
            'sectionsNav.module8.desc': 'Подборка разборов, шаблонов и упражнений для самостоятельной работы.',
            'sectionsNav.module8.iconAlt': 'Иконка кейсов и практики',
            'feedback.eyebrow': 'AI-навигация',
            'feedback.title': 'Обратная связь AI в каждом блоке',
            'feedback.text': 'AI-партнёр фиксирует ключевые цитаты, задаёт уточняющие вопросы и предлагает шаблоны действий. У участни_ц остаются готовые материалы после каждой части семинара.',
            'feedback.item1.title': 'Моментальная выжимка',
            'feedback.item1.text': 'AI собирает инсайты и риски из обсуждения, чтобы команда не теряла важные детали.',
            'feedback.item2.title': 'Уточняющие вопросы',
            'feedback.item2.text': 'Каждый блок завершается промптами для рефлексии и дополнительной подготовки.',
            'feedback.item3.title': 'План действий',
            'feedback.item3.text': 'Итоговый чек-лист автоматически распределяет задачи по ролям и срокам.',
            'format.eyebrow': 'Как проходит семинар',
            'format.title': 'Упор на совместную работу и практику',
            'format.text': 'Встреча делится на короткие интеракции: мини-лекции, групповые задания и быстрые AI-рефлексии.',
            'format.block1.title': 'Живое обсуждение',
            'format.block1.text': 'Ведущие помогают собрать контекст и договориться о темпах работы.',
            'format.block2.title': 'Совместная практика',
            'format.block2.text': 'Группы работают с реальными кейсами и фиксируют решения в общих шаблонах.',
            'format.block3.title': 'Поддержка после',
            'format.block3.text': 'AI-помощник и ведущие остаются на связи, чтобы сопровождать внедрение.',
            'resources.eyebrow': 'Материалы после встречи',
            'resources.title': 'Доступ к базе инструментов и запись обсуждения',
            'resources.text': 'Участни_цы получают 90 дней доступа к записям, шаблонам документов и AI-резюме по каждому блоку.',
            'resources.item1': 'Готовые шаблоны для диагностики команды и коммуникаций.',
            'resources.item2': 'Чек-листы по безопасности, инфраструктуре и фандрайзингу.',
            'resources.item3': 'AI-конспекты обсуждений и набор промптов для последующей работы.',
            'cta.title': 'Хотите провести семинар для своей команды?',
            'cta.text': 'Напишите организаторам, чтобы согласовать дату, фокус встречи и запросы по материалам.',
            'cta.button': 'Запросить участие',
            'footer.text': 'Семинар Школы прав человека им. Елены Боннэр. Все права защищены.',
            'footer.note': 'Материалы доступны участникам семинара.'
        },
        en: {
            'meta.title': 'NGO Seminar — Modern Management Intensive',
            'nav.brand': 'NGO Seminar',
            'nav.brandAlt': 'NGO seminar logo',
            'nav.home': 'Home',
            'nav.program': 'Agenda',
            'nav.sections': 'Sections',
            'nav.format': 'Highlights',
            'nav.resources': 'Materials',
            'nav.cta': 'Contact',
            'controls.language': 'Language switcher',
            'controls.themeToDark': 'Enable dark theme',
            'controls.themeToLight': 'Enable light theme',
            'controls.menuOpen': 'Open menu',
            'controls.menuClose': 'Close menu',
            'hero.badge': 'Live seminar',
            'hero.title': 'Three-hour NGO management practice',
            'hero.subtitle': 'Two facilitators guide NGO teams through their core management challenges in three hours. Short theory, case immersion and collective reflection.',
            'hero.primary': 'Start learning',
            'hero.secondary': 'View agenda',
            'hero.note': '2 facilitators · 3 hours live · AI feedback in every block',
            'hero.widget.title': 'Session structure',
            'hero.widget.item1': '30 min — shared context and expectations',
            'hero.widget.item2': '90 min — practice on participant cases',
            'hero.widget.item3': '30 min — implementation plan and resources',
            'stats.eyebrow': 'Key facts',
            'stats.title': 'A focused three-hour format that respects your team’s time',
            'stats.stat1.value': '3 hours',
            'stats.stat1.label': 'of live collaboration',
            'stats.stat2.value': '2 facilitators',
            'stats.stat2.label': 'with NGO leadership experience',
            'stats.stat3.value': 'AI partner',
            'stats.stat3.label': 'powered by GPT-5',
            'stats.stat4.value': '4 segments',
            'stats.stat4.label': 'with AI summaries and action plans',
            'about.eyebrow': 'What we cover',
            'about.title': 'We work on the real challenges your team faces',
            'about.text': 'Participants bring their own cases: team growth, communication, resilience and safety. We unpack them step by step and document decisions together with the AI assistant.',
            'about.point1': 'Rapid check-in on expectations and current workflows.',
            'about.point2': 'Interactive exercises and co-created implementation tracks.',
            'about.point3': 'A final plan that the team can delegate and iterate.',
            'features.card1.title': 'Team diagnostics',
            'features.card1.text': 'Spot growth points and risks across roles, motivation and burnout.',
            'features.card2.title': 'Communication flows',
            'features.card2.text': 'Review channels, meeting cadences and agreements within the team.',
            'features.card3.title': 'Resilience roadmap',
            'features.card3.text': 'Build a 90-day checklist for safety, infrastructure and resources.',
            'program.eyebrow': 'Session agenda',
            'program.title': 'Three blocks plus final reflection',
            'program.text': 'Each block ends with a shared summary and an AI digest the team keeps.',
            'program.block1.title': 'Block 1 · Starting points',
            'program.block1.item1': 'Team focus and expectations',
            'program.block1.item2': 'Quick process diagnostics',
            'program.block1.item3': 'AI risk snapshot',
            'program.block2.title': 'Block 2 · Case practice',
            'program.block2.item1': 'Participant scenarios and discussion',
            'program.block2.item2': 'Group work and tool exchange',
            'program.block2.item3': 'AI comments on proposed actions',
            'program.block3.title': 'Block 3 · Implementation plan',
            'program.block3.item1': 'Collective reflection',
            'program.block3.item2': '30/60/90-day action mapping',
            'program.block3.item3': 'AI-generated checklist',
            'sectionsNav.eyebrow': 'Online materials',
            'sectionsNav.title': 'All seminar sections in one place',
            'sectionsNav.text': 'Save the links or share them with your team — every module opens after the seminar for self-paced follow-up.',
            'sectionsNav.open': 'Go to section',
            'sectionsNav.module0.title': 'Introduction & goals',
            'sectionsNav.module0.desc': 'Align expectations and collect focus questions for the session.',
            'sectionsNav.module0.iconAlt': 'Icon for introduction module',
            'sectionsNav.module1.title': 'Community building',
            'sectionsNav.module1.desc': 'Tools for growing communities, motivating volunteers and supporting leaders.',
            'sectionsNav.module1.iconAlt': 'Icon for community building module',
            'sectionsNav.module2.title': 'Internal communications',
            'sectionsNav.module2.desc': 'Set up communication channels, team syncs and working agreements.',
            'sectionsNav.module2.iconAlt': 'Icon for internal communications module',
            'sectionsNav.module3.title': 'Infrastructure',
            'sectionsNav.module3.desc': 'Choose the digital stack, assign ownership and keep routines sustainable.',
            'sectionsNav.module3.iconAlt': 'Icon for infrastructure module',
            'sectionsNav.module4.title': 'Legal & security',
            'sectionsNav.module4.desc': 'Map legal requirements and core digital security practices.',
            'sectionsNav.module4.iconAlt': 'Icon for legal and security module',
            'sectionsNav.module5.title': 'Effectiveness & development',
            'sectionsNav.module5.desc': 'Assess workflows, design growth plans and support the team.',
            'sectionsNav.module5.iconAlt': 'Icon for effectiveness module',
            'sectionsNav.module6.title': 'Crisis management',
            'sectionsNav.module6.desc': 'Prepare for uncertainty with shared scenarios and clear roles.',
            'sectionsNav.module6.iconAlt': 'Icon for crisis management module',
            'sectionsNav.module7.title': 'Fundraising & partnerships',
            'sectionsNav.module7.desc': 'Build sustainable funding pipelines and collaborative partnerships.',
            'sectionsNav.module7.iconAlt': 'Icon for fundraising module',
            'sectionsNav.module8.title': 'Cases & practice',
            'sectionsNav.module8.desc': 'A library of case studies, templates and exercises for later use.',
            'sectionsNav.module8.iconAlt': 'Icon for cases and practice module',
            'feedback.eyebrow': 'AI navigation',
            'feedback.title': 'AI feedback in every segment',
            'feedback.text': 'The AI partner captures highlights, asks probing questions and suggests action templates. Participants leave each block with ready-to-use artefacts.',
            'feedback.item1.title': 'Instant digest',
            'feedback.item1.text': 'AI records insights and risks so nothing gets lost after the discussion.',
            'feedback.item2.title': 'Guiding questions',
            'feedback.item2.text': 'Each block ends with prompts for reflection and deeper prep.',
            'feedback.item3.title': 'Action plan',
            'feedback.item3.text': 'The final checklist automatically distributes tasks by role and timing.',
            'format.eyebrow': 'How we work',
            'format.title': 'Collaboration and practice at the core',
            'format.text': 'We alternate mini-lectures, group tasks and fast AI reflections.',
            'format.block1.title': 'Live dialogue',
            'format.block1.text': 'Facilitators align on context and pace with the whole group.',
            'format.block2.title': 'Co-creation',
            'format.block2.text': 'Teams tackle real cases and capture decisions in shared templates.',
            'format.block3.title': 'Follow-up support',
            'format.block3.text': 'Facilitators and AI stay connected to accompany implementation.',
            'resources.eyebrow': 'After the seminar',
            'resources.title': 'Tool library and recording access',
            'resources.text': 'Participants keep 90-day access to recordings, document templates and AI digests for each block.',
            'resources.item1': 'Ready-made templates for team diagnostics and communication.',
            'resources.item2': 'Checklists for safety, infrastructure and fundraising.',
            'resources.item3': 'AI transcripts and prompt packs for continued work.',
            'cta.title': 'Want this seminar for your team?',
            'cta.text': 'Message the organisers to agree on timing, focus and material needs.',
            'cta.button': 'Request a session',
            'footer.text': 'Program crafted by Elena Bonner School of Human Rights. All rights reserved.',
            'footer.note': 'Resources are available to participants.'
        }
    };

    const getTranslation = (lang, key) => translations[lang]?.[key];

    document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        if (!body) {
            return;
        }

        const isHomePage = body.classList.contains('home-page');
        const languageFromMarkup = body.dataset.language || 'ru';
        const storedLanguage = localStorage.getItem(STORAGE_KEYS.language);
        let currentLanguage = translations[storedLanguage] ? storedLanguage : languageFromMarkup;

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
        let currentTheme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : (prefersDark ? 'dark' : (body.dataset.theme || 'light'));

        const languageButtons = document.querySelectorAll('[data-lang-option]');
        const themeToggle = document.querySelector('[data-toggle-theme]');
        const menuToggle = document.querySelector('[data-toggle-nav]');
        const mobileNav = document.querySelector('[data-mobile-nav]');
        const navOverlay = document.querySelector('[data-nav-overlay]');

        let isNavOpen = false;

        const applyLanguage = (lang, persist = true) => {
            if (!translations[lang]) {
                return;
            }
            currentLanguage = lang;
            body.dataset.language = lang;
            document.documentElement.lang = lang;
            if (persist) {
                localStorage.setItem(STORAGE_KEYS.language, lang);
            }

            const dictionary = translations[lang];
            if (dictionary['meta.title']) {
                document.title = dictionary['meta.title'];
            }

            document.querySelectorAll('[data-i18n]').forEach((node) => {
                const key = node.dataset.i18n;
                const value = dictionary[key];
                if (value !== undefined) {
                    if (node.dataset.i18nType === 'html') {
                        node.innerHTML = value;
                    } else {
                        node.textContent = value;
                    }
                }
            });

            document.querySelectorAll('[data-i18n-attrs]').forEach((node) => {
                const pairs = node.dataset.i18nAttrs.split(',').map((item) => item.trim()).filter(Boolean);
                pairs.forEach((pair) => {
                    const [attr, key] = pair.split(':').map((part) => part.trim());
                    const value = dictionary[key];
                    if (attr && value !== undefined) {
                        node.setAttribute(attr, value);
                    }
                });
            });

            languageButtons.forEach((btn) => {
                const isActive = btn.dataset.langOption === lang;
                btn.classList.toggle('is-active', isActive);
                btn.setAttribute('aria-pressed', String(isActive));
            });

            updateThemeToggle(currentTheme);
            updateMenuToggle(isNavOpen);
        };

        const applyTheme = (theme, persist = true) => {
            if (theme !== 'light' && theme !== 'dark') {
                theme = 'light';
            }
            currentTheme = theme;
            body.dataset.theme = theme;
            if (persist) {
                localStorage.setItem(STORAGE_KEYS.theme, theme);
            }
            updateThemeToggle(theme);
        };

        const updateThemeToggle = (theme) => {
            if (!themeToggle) {
                return;
            }
            const labelKey = theme === 'dark' ? 'controls.themeToLight' : 'controls.themeToDark';
            const label = getTranslation(currentLanguage, labelKey);
            if (label) {
                themeToggle.setAttribute('aria-label', label);
            }
            themeToggle.dataset.themeState = theme;
            themeToggle.classList.toggle('is-dark', theme === 'dark');
            themeToggle.classList.toggle('is-light', theme === 'light');
        };

        const updateMenuToggle = (open) => {
            if (!menuToggle) {
                return;
            }
            const labelKey = open ? 'controls.menuClose' : 'controls.menuOpen';
            const label = getTranslation(currentLanguage, labelKey);
            if (label) {
                menuToggle.setAttribute('aria-label', label);
            }
            menuToggle.setAttribute('aria-expanded', String(open));
            menuToggle.classList.toggle('is-active', open);

            body.classList.toggle('nav-open', open);
            if (navOverlay) {
                navOverlay.classList.toggle('is-visible', open);
            }
            if (mobileNav) {
                mobileNav.classList.toggle('is-open', open);
            }
        };

        applyLanguage(currentLanguage, false);
        applyTheme(currentTheme, false);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme);
            });
        }

        languageButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const lang = button.dataset.langOption;
                if (lang && lang !== currentLanguage) {
                    applyLanguage(lang);
                }
            });
        });

        if (menuToggle && mobileNav && navOverlay) {
            const closeNav = () => {
                if (!isNavOpen) return;
                isNavOpen = false;
                updateMenuToggle(false);
            };

            const openNav = () => {
                if (isNavOpen) return;
                isNavOpen = true;
                updateMenuToggle(true);
            };

            menuToggle.addEventListener('click', () => {
                isNavOpen ? closeNav() : openNav();
            });

            navOverlay.addEventListener('click', closeNav);
            mobileNav.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', closeNav);
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && isNavOpen) {
                    closeNav();
                }
            });
        }

        if (isHomePage) {
            const animatedItems = document.querySelectorAll('[data-animate]');
            const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

            if (hasGsap) {
                const { gsap } = window;
                gsap.registerPlugin(window.ScrollTrigger);

                gsap.set(animatedItems, { autoAlpha: 0, y: 32 });

                const heroItems = document.querySelectorAll('#hero [data-animate]');
                if (heroItems.length) {
                    gsap.timeline({ defaults: { ease: 'power3.out' } })
                        .to(heroItems, {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.9,
                            stagger: 0.14
                        }, 0.15);
                }

                const sections = document.querySelectorAll('main section');
                sections.forEach((section) => {
                    if (section.id === 'hero') {
                        return;
                    }
                    const targets = section.querySelectorAll('[data-animate]');
                    if (!targets.length) {
                        return;
                    }
                    gsap.timeline({
                        defaults: { duration: 0.85, ease: 'power3.out' },
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 78%',
                            end: 'bottom 32%',
                            toggleActions: 'play none none reverse'
                        }
                    }).to(targets, {
                        autoAlpha: 1,
                        y: 0,
                        stagger: 0.12
                    });
                });

                const floatingBadge = document.querySelector('.floating-badge');
                if (floatingBadge) {
                    gsap.fromTo(floatingBadge, { y: -6 }, {
                        y: 6,
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut'
                    });
                }
            } else if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            obs.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.2
                });

                animatedItems.forEach((item) => observer.observe(item));
            } else {
                animatedItems.forEach((item) => item.classList.add('is-visible'));
            }
        }
    });
})();


