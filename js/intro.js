(() => {
    const locales = {
        ru: {
            concept: {
                emptyFields: 'Пожалуйста, заполните все поля, чтобы получить рекомендации.',
                typeLabels: {
                    direct_action: 'Организация прямого действия',
                    networking: 'Нетворкинг/ресурсный центр',
                    hybrid: 'Гибридный формат'
                },
                typeFocus: {
                    direct_action: 'Сосредоточьтесь на регулярном мониторинге, оперативной помощи и прозрачных каналах связи.',
                    networking: 'Продумайте сервисы для партнёров: обмен знаниями, регулярные встречи, библиотеку инструментов.',
                    hybrid: 'Разделите ответственность: одна команда работает с кейсами, другая развивает сообщество и стандарты.'
                },
                prompts: [
                    'Опишите три первых шага: что запустите и какие ресурсы нужны?',
                    'Выберите партнёров — это ускорит старт и повысит устойчивость.',
                    'Запланируйте заботу о команде и правила безопасности — это критично в правозащитной работе.'
                ],
                fallbackJustification: 'Обоснование пока не заполнено, добавьте несколько предложений.',
                copyTemplate: ({ problem, typeLabel, justification }) => `Проблема: ${problem}\nТип НКО: ${typeLabel}\nОбоснование: ${justification}`,
                copySuccess: 'Скопировано',
                copyError: 'Не удалось скопировать текст'
            },
            feedback: {
                intro: 'Что видит ассистент:',
                structure: 'Вы выбрали {typeLabel}. Убедитесь, что команда понимает формат и распределение ролей.',
                justification: 'Обоснование можно усилить: добавьте измеримый результат и обозначьте, кого вовлекаете. Сейчас оно звучит так: {justificationText}.',
                risks: 'Закрепите базовые правила безопасности: хранение данных, реагирование на риски и публичные коммуникации.',
                nextSteps: 'Следующие шаги:',
                closing: 'Сохраните заметку в PDF/Notion — она пригодится в следующих модулях.'
            },
            quiz: {
                questions: {
                    legal_form: {
                        question: 'Какая организационно-правовая форма не подходит для НКО в России?',
                        options: {
                            public_org: 'Общественная организация',
                            fund: 'Фонд',
                            joint_stock: 'Акционерное общество',
                            ano: 'Автономная некоммерческая организация'
                        }
                    },
                    ngo_definition: {
                        question: 'Что из перечисленного не является признаком НКО?',
                        options: {
                            benefit: 'Деятельность в интересах общества',
                            profit: 'Получение прибыли как основной цели',
                            support: 'Поддержка уязвимых групп',
                            advocacy: 'Адвокация и просвещение'
                        }
                    },
                    hr_focus: {
                        question: 'Что относится к ключевым задачам правозащитных НКО?',
                        options: {
                            monitoring: 'Мониторинг и документирование нарушений',
                            commerce: 'Организация коммерческих выставок',
                            games: 'Разработка компьютерных игр',
                            sports: 'Создание спортивных клубов'
                        }
                    },
                    networking: {
                        question: 'Сетевое взаимодействие (нетворкинг) помогает НКО…',
                        options: {
                            isolation: 'Изолироваться от внешнего мира',
                            merge: 'Обязательно сливаться в одну организацию',
                            coordination: 'Обмениваться опытом и координировать усилия',
                            competition: 'Повышать конкуренцию между организациями'
                        }
                    },
                    state_support: {
                        question: 'Что важно указать при описании будущей НКО?',
                        options: {
                            audience: 'Целевую аудиторию и её потребности',
                            slogan: 'Только слоган организации',
                            revenue: 'План по продаже продукции',
                            ignoreRisks: 'Решение игнорировать риски'
                        }
                    }
                },
                result: (score, total) => `Ваш результат: ${score} из ${total} (${Math.round((score / total) * 100)}%)`,
                labels: ['Правильные ответы', 'Неправильные ответы'],
                validation: 'Ответьте на все вопросы, чтобы увидеть отчёт.'
            }
        },
        en: {
            concept: {
                emptyFields: 'Please fill in every field to receive recommendations.',
                typeLabels: {
                    direct_action: 'Direct-action organisation',
                    networking: 'Networking/resource hub',
                    hybrid: 'Hybrid format'
                },
                typeFocus: {
                    direct_action: 'Focus on regular monitoring, rapid response and clear communication channels.',
                    networking: 'Design services for peers: knowledge exchange, convenings and shared toolkits.',
                    hybrid: 'Split responsibilities: one stream works with cases, the other nurtures the community and standards.'
                },
                prompts: [
                    'Write down three first actions: what launches first and which resources are required?',
                    'List partners to collaborate with — it speeds up launch and boosts resilience.',
                    'Plan wellbeing and security routines for the team — human rights work needs them.'
                ],
                fallbackJustification: 'Add a short justification to keep the plan consistent.',
                copyTemplate: ({ problem, typeLabel, justification }) => `Problem: ${problem}\nNGO format: ${typeLabel}\nJustification: ${justification}`,
                copySuccess: 'Copied',
                copyError: 'Copy failed'
            },
            feedback: {
                intro: 'Assistant notice:',
                structure: 'You chose {typeLabel}. Make sure the team understands the format and role allocation.',
                justification: 'Strengthen the justification with tangible outcomes and mention who is involved. It currently reads: {justificationText}.',
                risks: 'Document security routines: data handling, crisis response and responsible communications.',
                nextSteps: 'Next steps:',
                closing: 'Store these notes in PDF/Notion — they will support the next sessions.'
            },
            quiz: {
                questions: {
                    legal_form: {
                        question: 'Which legal form is not suitable for NGOs in Russia?',
                        options: {
                            public_org: 'Public organisation',
                            fund: 'Charitable fund',
                            joint_stock: 'Joint-stock company',
                            ano: 'Autonomous non-profit organisation'
                        }
                    },
                    ngo_definition: {
                        question: 'Which of the following is not a characteristic of an NGO?',
                        options: {
                            benefit: 'Serving public benefit',
                            profit: 'Profit as the primary goal',
                            support: 'Supporting vulnerable groups',
                            advocacy: 'Advocacy and education'
                        }
                    },
                    hr_focus: {
                        question: 'Which task belongs to human rights NGOs?',
                        options: {
                            monitoring: 'Monitoring and documenting violations',
                            commerce: 'Running commercial fairs',
                            games: 'Developing video games',
                            sports: 'Setting up sports clubs'
                        }
                    },
                    networking: {
                        question: 'Networking helps NGOs to…',
                        options: {
                            isolation: 'Isolate from the outside world',
                            merge: 'Merge into one organisation by default',
                            coordination: 'Exchange experience and coordinate efforts',
                            competition: 'Increase competition between organisations'
                        }
                    },
                    state_support: {
                        question: 'What is essential when describing your future NGO?',
                        options: {
                            audience: 'Target audience and their needs',
                            slogan: 'Only the organisation slogan',
                            revenue: 'Sales projection for products',
                            ignoreRisks: 'Decision to ignore risks'
                        }
                    }
                },
                result: (score, total) => `Your result: ${score} of ${total} (${Math.round((score / total) * 100)}%)`,
                labels: ['Correct answers', 'Incorrect answers'],
                validation: 'Answer every question to see the report.'
            }
        }
    };

    const QUIZ_BLUEPRINT = [
        {
            id: 'legal_form',
            options: [
                { id: 'public_org' },
                { id: 'fund' },
                { id: 'joint_stock', correct: true },
                { id: 'ano' }
            ]
        },
        {
            id: 'ngo_definition',
            options: [
                { id: 'benefit' },
                { id: 'profit', correct: true },
                { id: 'support' },
                { id: 'advocacy' }
            ]
        },
        {
            id: 'hr_focus',
            options: [
                { id: 'monitoring', correct: true },
                { id: 'commerce' },
                { id: 'games' },
                { id: 'sports' }
            ]
        },
        {
            id: 'networking',
            options: [
                { id: 'isolation' },
                { id: 'merge' },
                { id: 'coordination', correct: true },
                { id: 'competition' }
            ]
        },
        {
            id: 'state_support',
            options: [
                { id: 'audience', correct: true },
                { id: 'slogan' },
                { id: 'revenue' },
                { id: 'ignoreRisks' }
            ]
        }
    ];

    document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        if (!body.classList.contains('section-page')) {
            return;
        }

        let currentLanguage = locales[body.dataset.language] ? body.dataset.language : 'ru';

        const refs = {
            problem: document.getElementById('humanRightsProblem'),
            type: document.getElementById('nkoTypeChoice'),
            justification: document.getElementById('nkoJustification'),
            generate: document.getElementById('showNkoConceptBtn'),
            resetConcept: document.getElementById('resetConceptBtn'),
            conceptCard: document.getElementById('nkoConceptResult'),
            conceptProblem: document.getElementById('resultProblem'),
            conceptType: document.getElementById('resultNkoType'),
            conceptJustification: document.getElementById('resultJustification'),
            copy: document.getElementById('copyConceptBtn'),
            feedbackCard: document.getElementById('aiFeedbackContainer'),
            feedbackText: document.getElementById('aiFeedbackResult'),
            quizContainer: document.getElementById('quizContainer'),
            submitQuiz: document.getElementById('submitQuizBtn'),
            resetQuiz: document.getElementById('resetQuizBtn'),
            quizResult: document.getElementById('quizResult'),
            quizScore: document.getElementById('quizScore'),
            quizChartContainer: document.getElementById('quizResultChartContainer'),
            quizChart: document.getElementById('quizResultChart')
        };

        const state = {
            concept: null,
            quizAnswers: {},
            quizScore: null,
            chart: null
        };

        const getLocale = () => locales[currentLanguage] || locales.ru;

        const getChartStyles = () => {
            const styles = getComputedStyle(document.body);
            const accent = styles.getPropertyValue('--section-color-accent').trim() || '#2563eb';
            const surface = styles.getPropertyValue('--section-color-surface').trim() || '#ffffff';
            const textPrimary = styles.getPropertyValue('--section-color-text-primary').trim() || '#0f172a';
            const textSecondary = styles.getPropertyValue('--section-color-text-secondary').trim() || '#475569';
            return {
                accent,
                surface,
                textPrimary,
                textSecondary,
                muted: 'rgba(148, 163, 184, 0.35)',
                border: styles.getPropertyValue('--section-color-border').trim() || 'rgba(148, 163, 184, 0.3)'
            };
        };

        const renderConcept = () => {
            if (!state.concept) {
                return;
            }
            const locale = getLocale();
            const typeLabel = locale.concept.typeLabels[state.concept.type] || state.concept.type;
            const justification = state.concept.justification || locale.concept.fallbackJustification;

            refs.conceptProblem.textContent = state.concept.problem;
            refs.conceptType.textContent = typeLabel;
            refs.conceptJustification.textContent = justification;
            refs.conceptCard.hidden = false;
            refs.feedbackCard.hidden = false;
            refs.feedbackText.innerHTML = buildFeedback({
                type: state.concept.type,
                typeLabel,
                justification
            });
        };

        const buildFeedback = ({ type, typeLabel, justification }) => {
            const locale = getLocale();
            const structure = locale.feedback.structure.replace('{typeLabel}', typeLabel);
            const justificationLine = locale.feedback.justification.replace('{justificationText}', justification);
            const prompts = (locale.concept.prompts || [])
                .map((item) => `<li>${item}</li>`)
                .join('');

            return `
                <p><strong>${locale.feedback.intro}</strong></p>
                <ul>
                    <li>${structure}</li>
                    <li>${justificationLine}</li>
                    <li>${locale.feedback.risks}</li>
                </ul>
                <p>${locale.concept.typeFocus[type] || ''}</p>
                ${prompts ? `<p><strong>${locale.feedback.nextSteps}</strong></p><ul>${prompts}</ul>` : ''}
                <p>${locale.feedback.closing}</p>
            `;
        };

        const renderQuiz = () => {
            if (!refs.quizContainer) {
                return;
            }
            const locale = getLocale();
            refs.quizContainer.innerHTML = '';

            QUIZ_BLUEPRINT.forEach((question, index) => {
                const localeQuestion = locale.quiz.questions[question.id];
                if (!localeQuestion) {
                    return;
                }
                const block = document.createElement('div');
                block.className = 'mb-4';

                const title = document.createElement('p');
                title.className = 'fw-semibold';
                title.textContent = `${index + 1}. ${localeQuestion.question}`;
                block.appendChild(title);

                question.options.forEach((option) => {
                    const optionId = `quiz-${question.id}-${option.id}`;
                    const wrapper = document.createElement('div');
                    wrapper.className = 'form-check';

                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `question-${question.id}`;
                    input.id = optionId;
                    input.value = option.id;
                    input.className = 'form-check-input';
                    input.checked = state.quizAnswers[question.id] === option.id;
                    input.addEventListener('change', () => {
                        state.quizAnswers[question.id] = option.id;
                        state.quizScore = null;
                        hideQuizResult();
                    });

                    const label = document.createElement('label');
                    label.className = 'form-check-label';
                    label.setAttribute('for', optionId);
                    label.textContent = localeQuestion.options[option.id] || option.id;

                    wrapper.appendChild(input);
                    wrapper.appendChild(label);
                    block.appendChild(wrapper);
                });

                refs.quizContainer.appendChild(block);
            });
        };

        const hideQuizResult = () => {
            if (refs.quizResult) {
                refs.quizResult.hidden = true;
            }
            if (refs.quizChartContainer) {
                refs.quizChartContainer.hidden = true;
            }
            if (state.chart) {
                state.chart.destroy();
                state.chart = null;
            }
        };

        const showQuizResult = () => {
            const locale = getLocale();
            const total = QUIZ_BLUEPRINT.length;
            if (!refs.quizScore || !refs.quizResult) {
                return;
            }

            refs.quizScore.textContent = locale.quiz.result(state.quizScore, total);
            refs.quizResult.hidden = false;
            if (refs.quizChartContainer) {
                refs.quizChartContainer.hidden = false;
            }

            if (!refs.quizChart) {
                return;
            }

            const ctx = refs.quizChart.getContext('2d');
            if (state.chart) {
                state.chart.destroy();
            }
            const palette = getChartStyles();
            state.chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: locale.quiz.labels,
                    datasets: [
                        {
                            data: [state.quizScore, total - state.quizScore],
                            backgroundColor: [palette.accent, palette.border],
                            borderColor: [palette.accent, 'transparent'],
                            borderWidth: 0,
                            hoverOffset: 4,
                            borderRadius: 18,
                            spacing: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    cutout: '78%',
                    layout: {
                        padding: 6
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: palette.surface,
                            titleColor: palette.textPrimary,
                            bodyColor: palette.textPrimary,
                            borderColor: palette.accent,
                            borderWidth: 1,
                            padding: 10,
                            displayColors: false
                        }
                    },
                    animation: {
                        duration: 700,
                        easing: 'easeOutCubic'
                    }
                }
            });
        };

        const evaluateQuiz = () => {
            const locale = getLocale();
            const unanswered = QUIZ_BLUEPRINT.some((question) => !state.quizAnswers[question.id]);
            if (unanswered) {
                if (refs.quizScore && refs.quizResult) {
                    refs.quizScore.textContent = locale.quiz.validation;
                    refs.quizResult.hidden = false;
                }
                if (refs.quizChartContainer) {
                    refs.quizChartContainer.hidden = true;
                }
                if (state.chart) {
                    state.chart.destroy();
                    state.chart = null;
                }
                return;
            }

            let score = 0;
            QUIZ_BLUEPRINT.forEach((question) => {
                const selected = state.quizAnswers[question.id];
                const isCorrect = question.options.some((option) => option.id === selected && option.correct);
                if (isCorrect) {
                    score += 1;
                }
            });
            state.quizScore = score;
            showQuizResult();
        };

        const generateConcept = () => {
            const locale = getLocale();
            const problem = (refs.problem?.value || '').trim();
            const type = refs.type?.value;
            const justification = (refs.justification?.value || '').trim();

            if (!problem || !type || !justification) {
                if (refs.feedbackCard && refs.feedbackText) {
                    refs.feedbackCard.hidden = false;
                    refs.feedbackText.innerHTML = `<em>${locale.concept.emptyFields}</em>`;
                }
                return;
            }

            state.concept = { problem, type, justification };
            renderConcept();
        };

        const copyConcept = async () => {
            if (!state.concept || !refs.copy) {
                return;
            }
            const locale = getLocale();
            const typeLabel = locale.concept.typeLabels[state.concept.type] || state.concept.type;
            const payload = locale.concept.copyTemplate({
                problem: state.concept.problem,
                typeLabel,
                justification: state.concept.justification
            });

            try {
                await navigator.clipboard.writeText(payload);
                flashButton(refs.copy, locale.concept.copySuccess);
            } catch (error) {
                flashButton(refs.copy, locale.concept.copyError);
            }
        };

        const flashButton = (button, text) => {
            const original = button.dataset.originalLabel || button.textContent;
            button.textContent = text;
            setTimeout(() => {
                button.textContent = button.dataset.originalLabel || original;
            }, 1800);
        };

        const resetConcept = () => {
            if (refs.problem) refs.problem.value = '';
            if (refs.type) refs.type.value = '';
            if (refs.justification) refs.justification.value = '';
            state.concept = null;
            if (refs.conceptCard) refs.conceptCard.hidden = true;
            if (refs.feedbackCard) refs.feedbackCard.hidden = true;
        };

        const resetQuiz = () => {
            state.quizAnswers = {};
            state.quizScore = null;
            hideQuizResult();
            renderQuiz();
        };

        if (refs.generate) {
            refs.generate.addEventListener('click', generateConcept);
        }
        if (refs.copy) {
            refs.copy.dataset.originalLabel = refs.copy.textContent;
            refs.copy.addEventListener('click', copyConcept);
        }
        if (refs.resetConcept) {
            refs.resetConcept.addEventListener('click', resetConcept);
        }
        if (refs.submitQuiz) {
            refs.submitQuiz.addEventListener('click', evaluateQuiz);
        }
        if (refs.resetQuiz) {
            refs.resetQuiz.addEventListener('click', resetQuiz);
        }

        renderQuiz();
        hideQuizResult();

        
        document.addEventListener('languagechange', (event) => {
            const nextLanguage = event?.detail?.language;
            if (!nextLanguage || !locales[nextLanguage]) {
                return;
            }
            currentLanguage = nextLanguage;
            renderQuiz();
            renderConcept();
            if (state.quizScore !== null) {
                showQuizResult();
            }
            if (refs.copy) {
                refs.copy.dataset.originalLabel = refs.copy.textContent;
            }
        });

        document.addEventListener('themechange', (event) => {
            // If results are visible, rebuild chart palette on theme change
            if (state.quizScore !== null) {
                showQuizResult();
            }
        });
    });
})();

