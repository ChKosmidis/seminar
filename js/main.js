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
            'footer.note': 'Материалы доступны участникам семинара.',
            'intro.hero.badge': 'Модуль 0',
            'intro.hero.title': 'Введение в мир НКО',
            'intro.hero.subtitle': 'Фокус на правозащитную деятельность: ландшафт, специфика, нетворкинг и первые шаги.',
            'intro.hero.primary': 'Перейти к программе модуля',
            'intro.hero.secondary': 'Попробовать интерактив',
            'intro.hero.point1.title': 'Ключевые фокусы',
            'intro.hero.point1.text': 'Ландшафт сектора, правозащитная специфика и форматы взаимодействия.',
            'intro.hero.point2.title': 'Советы ассистента',
            'intro.hero.point2.text': 'Индивидуальная концепция НКО и рекомендации по развитию.',
            'intro.hero.card.badge': 'Что внутри',
            'intro.hero.card.title': 'Как использовать модуль',
            'intro.hero.card.text': 'Пройдите обзор, ответьте на вопросы интерактива и получите тест, который поможет закрепить базу перед следующими встречами.',
            'intro.hero.card.item1': 'Готовая шпаргалка по типам НКО.',
            'intro.hero.card.item2': 'AI-концепция вашей будущей организации.',
            'intro.hero.card.item3': 'Квиз по основам с визуальным отчётом.',
            'intro.inPageNav.label': 'Быстрая навигация по модулю',
            'intro.quick.overview': 'Обзор сектора',
            'intro.quick.rights': 'Правозащита',
            'intro.quick.networking': 'Нетворкинг',
            'intro.quick.planning': 'Планирование',
            'intro.quick.interactive': 'Интерактив',
            'intro.quick.quiz': 'Самопроверка',
            'intro.sectionsStrip.label': 'Навигация по разделам семинара',
            'intro.sectionsStrip.prev': 'Прокрутить назад',
            'intro.sectionsStrip.next': 'Прокрутить вперёд',
            'intro.overview.badge': 'Картина сектора',
            'intro.overview.title': 'Ландшафт НКО: краткий обзор',
            'intro.overview.paragraph1': 'Некоммерческие организации играют ключевую роль в развитии гражданского общества. Они охватывают множество форм и направлений деятельности: от благотворительности и социальной поддержки до экологии, культуры и защиты прав человека.',
            'intro.overview.list': '<ul>\n<li><strong>Многообразие форм:</strong> общественные организации, фонды, автономные НКО, ассоциации и союзы.</li>\n<li><strong>Направления деятельности:</strong> социальное обслуживание, поддержка уязвимых групп, образование, здравоохранение, экология, культура, защита прав и свобод.</li>\n</ul>',
            'intro.overview.paragraph2': 'Общая миссия некоммерческого сектора — решение общественно значимых проблем и удовлетворение нематериальных потребностей граждан, действуя не ради прибыли, а во имя общественных благ.',
            'intro.overview.iconAlt': 'Ландшафт НКО',
            'intro.rights.badge': 'Правозащита',
            'intro.rights.title': 'Правозащитные НКО: миссия и специфика',
            'intro.rights.paragraph1': 'Правозащитная деятельность направлена на утверждение и защиту прав и свобод человека, гарантированных международными нормами и национальным законодательством. Ключевые направления работы включают:',
            'intro.rights.list': '<ul>\n<li><strong>Мониторинг и документирование:</strong> сбор и анализ информации о нарушениях прав человека.</li>\n<li><strong>Просвещение:</strong> повышение правовой грамотности населения и информирование о способах защиты.</li>\n<li><strong>Адвокация:</strong> представление интересов людей и продвижение законодательных изменений.</li>\n<li><strong>Юридическая помощь:</strong> бесплатные консультации и сопровождение в судах.</li>\n<li><strong>Поддержка жертв:</strong> психологическая, социальная и иная помощь пострадавшим.</li>\n</ul>',
            'intro.rights.paragraph2': 'Правозащитные НКО сталкиваются с особыми вызовами, рисками и этическими дилеммами, требующими компетентности, осторожности и приверженности принципам.',
            'intro.rights.iconAlt': 'Правозащитные НКО',
            'intro.networking.badge': 'Сотрудничество',
            'intro.networking.title': 'Нетворкинг-НКО: ресурсные центры и коалиции',
            'intro.networking.paragraph1': 'Сетевое взаимодействие критически важно для эффективности правозащитной деятельности. Такие организации помогают:',
            'intro.networking.list': '<ul>\n<li>Обмениваться информацией, опытом и лучшими практиками.</li>\n<li>Координировать совместные кампании и акции.</li>\n<li>Продвигать изменения на системном уровне через адвокацию.</li>\n<li>Делить ресурсы, экспертизу и обучение с другими НКО и активистами.</li>\n<li>Укреплять устойчивость и безопасность правозащитного сообщества.</li>\n</ul>',
            'intro.networking.paragraph2': 'Примеры успешных коалиций показывают, как солидарность и сотрудничество помогают достигать результатов даже в сложных условиях.',
            'intro.networking.iconAlt': 'Нетворкинг НКО',
            'intro.planning.badge': 'Первые шаги',
            'intro.planning.title': 'Выбор направления и формы будущей НКО',
            'intro.planning.paragraph1': 'Перед запуском организации важно осмыслить проблемное поле и определить нишу:',
            'intro.planning.list': '<ul>\n<li><strong>Анализ контекста:</strong> какая проблема наиболее актуальна и кем уже закрывается?</li>\n<li><strong>Целевая аудитория:</strong> кому вы помогаете и в чём именно заключаются их потребности?</li>\n<li><strong>Миссия и видение:</strong> долгосрочная цель и способ её достижения.</li>\n</ul>',
            'intro.planning.paragraph2': 'Ответы помогут осознанно выбрать форму НКО, определить необходимые ресурсы и построить стратегию.',
            'intro.planning.iconAlt': 'Выбор направления',
            'intro.interactive.badge': 'Интерактив',
            'intro.interactive.title': 'Сформируйте концепцию своей НКО',
            'intro.interactive.lead': 'Ответьте на три вопроса, чтобы получить базовый описательный профиль организации и рекомендации от ассистента.',
            'intro.interactive.problem.label': 'Какую проблему в области прав человека вы хотели бы решать?',
            'intro.interactive.problem.placeholder': 'Опишите проблему или кейс, с которым вы работаете.',
            'intro.interactive.type.label': 'Какой формат работы кажется вам подходящим?',
            'intro.interactive.type.placeholder': 'Выберите тип...',
            'intro.interactive.type.direct': 'Прямое действие (помощь, мониторинг)',
            'intro.interactive.type.networking': 'Нетворкинг/ресурсный центр',
            'intro.interactive.type.hybrid': 'Гибридный формат',
            'intro.interactive.justification.label': 'Почему именно этот формат?',
            'intro.interactive.justification.placeholder': 'Добавьте аргументы, почему выбранный формат подходит.',
            'intro.interactive.generate': 'Получить концепцию и совет',
            'intro.interactive.reset': 'Сбросить ответы',
            'intro.interactive.copy': 'Скопировать концепцию',
            'intro.interactive.feedback.title': 'Комментарий от ассистента',
            'intro.interactive.feedback.placeholder': 'Нажмите «Получить концепцию», чтобы увидеть рекомендации.',
            'intro.interactive.result.title': 'Ваша предварительная концепция',
            'intro.interactive.result.problem': 'Проблема:',
            'intro.interactive.result.type': 'Тип НКО:',
            'intro.interactive.result.justification': 'Обоснование:',
            'intro.modules.badge': 'Следующие шаги',
            'intro.modules.title': 'Перейдите к другим разделам программы',
            'intro.modules.open': 'К разделу',
            'intro.quiz.badge': 'Самопроверка',
            'intro.quiz.title': 'Проверьте себя по основам НКО',
            'intro.quiz.lead': 'Ответьте на пять вопросов и получите визуальный отчёт: его удобно сохранить в PDF или приложить к заметкам модуля.',
            'intro.quiz.submit': 'Показать результат',
            'intro.quiz.reset': 'Очистить ответы',
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
            'intro.sectionsStrip.label': 'Module navigation',
            'intro.sectionsStrip.prev': 'Scroll back',
            'intro.sectionsStrip.next': 'Scroll forward',
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
            'footer.note': 'Resources are available to participants.',
            'intro.hero.badge': 'Module 0',
            'intro.hero.title': 'Introduction to the NGO world',
            'intro.hero.subtitle': 'Focus on human rights work: landscape, specifics, networking and first steps.',
            'intro.hero.primary': 'Open module outline',
            'intro.hero.secondary': 'Try the interactive',
            'intro.hero.point1.title': 'Key focus areas',
            'intro.hero.point1.text': 'Sector landscape, human rights specifics and collaboration formats.',
            'intro.hero.point2.title': 'Assistant insights',
            'intro.hero.point2.text': 'Personalised NGO concept and development tips.',
            'intro.hero.card.badge': 'What\'s inside',
            'intro.hero.card.title': 'How to use this module',
            'intro.hero.card.text': 'Walk through the overview, answer the interactive prompts and take the quiz to lock in the basics before future sessions.',
            'intro.hero.card.item1': 'Ready cheat sheet on NGO types.',
            'intro.hero.card.item2': 'AI-generated concept for your future organisation.',
            'intro.hero.card.item3': 'Foundations quiz with a visual report.',
            'intro.inPageNav.label': 'Quick navigation inside this module',
            'intro.quick.overview': 'Sector overview',
            'intro.quick.rights': 'Human rights',
            'intro.quick.networking': 'Networking',
            'intro.quick.planning': 'Planning',
            'intro.quick.interactive': 'Interactive',
            'intro.quick.quiz': 'Self-check',
            'intro.sectionsStrip.label': 'Navigation across seminar sections',
            'intro.sectionsStrip.prev': 'Scroll backward',
            'intro.sectionsStrip.next': 'Scroll forward',
            'intro.overview.badge': 'Sector snapshot',
            'intro.overview.title': 'NGO landscape: quick overview',
            'intro.overview.paragraph1': 'Nonprofits play a key role in growing civil society. They span many forms and missions—from charity and social support to ecology, culture and human rights.',
            'intro.overview.list': '<ul>\n<li><strong>Diverse forms:</strong> public organisations, foundations, autonomous NGOs, associations and alliances.</li>\n<li><strong>Areas of work:</strong> social support, care for vulnerable groups, education, healthcare, ecology, culture, protection of rights and freedoms.</li>\n</ul>',
            'intro.overview.paragraph2': 'The shared mission of the NGO sector is to solve socially significant challenges and meet non-material public needs, acting for the common good rather than profit.',
            'intro.overview.iconAlt': 'NGO landscape icon',
            'intro.rights.badge': 'Human rights',
            'intro.rights.title': 'Human rights NGOs: mission and specifics',
            'intro.rights.paragraph1': 'Human rights work upholds and protects freedoms guaranteed by international standards and national law. Core areas include:',
            'intro.rights.list': '<ul>\n<li><strong>Monitoring and documentation:</strong> collecting and analysing information on human rights violations.</li>\n<li><strong>Education:</strong> improving legal literacy and informing people about protection tools.</li>\n<li><strong>Advocacy:</strong> representing communities and promoting legislative change.</li>\n<li><strong>Legal aid:</strong> free consultations and courtroom support.</li>\n<li><strong>Support for survivors:</strong> psychological, social and other assistance for affected people.</li>\n</ul>',
            'intro.rights.paragraph2': 'Human rights NGOs face unique challenges, risks and ethical dilemmas that demand expertise, care and strong values.',
            'intro.rights.iconAlt': 'Human rights NGO icon',
            'intro.networking.badge': 'Collaboration',
            'intro.networking.title': 'Networking NGOs: resource centres and coalitions',
            'intro.networking.paragraph1': 'Network cooperation is critical for effective human rights action. These organisations help teams:',
            'intro.networking.list': '<ul>\n<li>Share information, experience and best practices.</li>\n<li>Coordinate joint campaigns and advocacy actions.</li>\n<li>Advance systemic change through advocacy.</li>\n<li>Pool resources, expertise and training with other NGOs and activists.</li>\n<li>Strengthen resilience and safety across the human rights community.</li>\n</ul>',
            'intro.networking.paragraph2': 'Success stories show how solidarity and cooperation deliver results even in difficult contexts.',
            'intro.networking.iconAlt': 'Networking NGO icon',
            'intro.planning.badge': 'First steps',
            'intro.planning.title': 'Choosing the direction and legal form of your NGO',
            'intro.planning.paragraph1': 'Before launching, analyse the problem space and define your niche:',
            'intro.planning.list': '<ul>\n<li><strong>Context analysis:</strong> which problem is the most urgent and who already addresses it?</li>\n<li><strong>Target audience:</strong> who you support and what exactly they need.</li>\n<li><strong>Mission and vision:</strong> the long-term goal and the way to reach it.</li>\n</ul>',
            'intro.planning.paragraph2': 'The answers help you choose the right form, plan resources and shape your strategy.',
            'intro.planning.iconAlt': 'Planning icon',
            'intro.interactive.badge': 'Interactive',
            'intro.interactive.title': 'Shape your NGO concept',
            'intro.interactive.lead': 'Answer three prompts to build a baseline profile and receive assistant recommendations.',
            'intro.interactive.problem.label': 'Which human rights challenge would you like to address?',
            'intro.interactive.problem.placeholder': 'Describe the problem or case you want to work with.',
            'intro.interactive.type.label': 'Which working format seems right to you?',
            'intro.interactive.type.placeholder': 'Select a type...',
            'intro.interactive.type.direct': 'Direct action (aid, monitoring)',
            'intro.interactive.type.networking': 'Networking/resource centre',
            'intro.interactive.type.hybrid': 'Hybrid format',
            'intro.interactive.justification.label': 'Why does this format make sense?',
            'intro.interactive.justification.placeholder': 'Add reasons why this choice suits your organisation.',
            'intro.interactive.generate': 'Get concept and advice',
            'intro.interactive.reset': 'Clear answers',
            'intro.interactive.copy': 'Copy concept',
            'intro.interactive.feedback.title': 'Assistant comment',
            'intro.interactive.feedback.placeholder': 'Press “Get concept” to see recommendations.',
            'intro.interactive.result.title': 'Your draft concept',
            'intro.interactive.result.problem': 'Problem:',
            'intro.interactive.result.type': 'NGO type:',
            'intro.interactive.result.justification': 'Justification:',
            'intro.modules.badge': 'Next steps',
            'intro.modules.title': 'Move on to the other programme modules',
            'intro.modules.open': 'Open section',
            'intro.quiz.badge': 'Self-check',
            'intro.quiz.title': 'Check your NGO essentials knowledge',
            'intro.quiz.lead': 'Answer five questions and get a visual report—you can save it as PDF or add it to your notes.',
            'intro.quiz.submit': 'Show result',
            'intro.quiz.reset': 'Clear answers',

        }
    };

    const getTranslation = (lang, key) => translations[lang]?.[key];

    document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        if (!body) {
            return;
        }

        const isHomePage = body.classList.contains('home-page');
        const isSectionPage = body.classList.contains('section-page');
        const languageFromMarkup = body.dataset.language || 'ru';
        let storedLanguage = null;
        try {
            storedLanguage = localStorage.getItem(STORAGE_KEYS.language);
        } catch (error) {
            storedLanguage = null;
        }
        const initialLanguage = translations[storedLanguage] ? storedLanguage : (translations[languageFromMarkup] ? languageFromMarkup : 'ru');
        let currentLanguage = initialLanguage;

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        let storedTheme = null;
        try {
            storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
        } catch (error) {
            storedTheme = null;
        }
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
            const previousLanguage = currentLanguage;
            currentLanguage = lang;
            body.dataset.language = lang;
            document.documentElement.lang = lang;
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

            if (persist) {
                try {
                    localStorage.setItem(STORAGE_KEYS.language, lang);
                } catch (error) {
                    /* noop */
                }
            }

            languageButtons.forEach((btn) => {
                const isActive = btn.dataset.langOption === lang;
                btn.classList.toggle('is-active', isActive);
                btn.setAttribute('aria-pressed', String(isActive));
            });

            updateThemeToggle(currentTheme);
            updateMenuToggle(isNavOpen);

            if (previousLanguage !== lang) {
                document.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
            }
        };

        const applyTheme = (theme, persist = true) => {
            if (theme !== 'light' && theme !== 'dark') {
                theme = 'light';
            }
            currentTheme = theme;
            body.dataset.theme = theme;
            if (persist) {
                try {
                    localStorage.setItem(STORAGE_KEYS.theme, theme);
                } catch (error) {
                    /* noop */
                }
            }
            updateThemeToggle(theme);
            document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
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

        if (isSectionPage) {
            const sectionsStrip = document.querySelector('[data-sections-strip]');
            const stripPrev = document.querySelector('[data-strip-control="prev"]');
            const stripNext = document.querySelector('[data-strip-control="next"]');

            if (sectionsStrip) {
                const controls = [stripPrev, stripNext].filter(Boolean);
                const scrollStep = () => sectionsStrip.clientWidth * 0.8 || 260;
                const tolerance = 4;

                const updateStripControls = () => {
                    const maxScroll = Math.max(0, sectionsStrip.scrollWidth - sectionsStrip.clientWidth);
                    const atStart = sectionsStrip.scrollLeft <= tolerance;
                    const atEnd = sectionsStrip.scrollLeft >= maxScroll - tolerance;
                    const noOverflow = maxScroll <= tolerance;
                    if (stripPrev) {
                        stripPrev.disabled = noOverflow || atStart;
                    }
                    if (stripNext) {
                        stripNext.disabled = noOverflow || atEnd;
                    }
                };

                controls.forEach((button) => {
                    button.addEventListener('click', () => {
                        const direction = button === stripNext ? 1 : -1;
                        sectionsStrip.scrollBy({
                            left: scrollStep() * direction,
                            behavior: 'smooth'
                        });
                    });
                });

                sectionsStrip.addEventListener('scroll', () => {
                    requestAnimationFrame(updateStripControls);
                });
                window.addEventListener('resize', updateStripControls);
                updateStripControls();
            }
            initAnimatedEntries();
        }

        function initAnimatedEntries() {
            const animatedItems = document.querySelectorAll('[data-animate]');
            if (!animatedItems.length) {
                return;
            }

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

        if (isHomePage) {
            initAnimatedEntries();
        }
    });
})();
