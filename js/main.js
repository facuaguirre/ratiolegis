// --- BASE DE DATOS DE CONTENIDO ---
const materiasData = {
    'fundamentos-derecho-privado': {
        nombre: 'Fundamentos del Derecho Privado',
        descripcion: 'Conceptos esenciales del Derecho Civil, la codificación, la persona y sus atributos.',
        contenido: {
            texto: `<div class="main-content-panel"><h3>Unidad 1: El Derecho Civil y su Codificación</h3><p>El Derecho Civil es el conjunto de normas jurídicas y principios que regulan las relaciones personales o patrimoniales, voluntarias o forzosas, entre personas privadas o públicas, tanto físicas como jurídicas, de carácter privado y público.</p><ul><li>Codificación: Proceso de sistematización y ordenación de las normas en un cuerpo único y coherente (Código).</li><li>El Código Civil y Comercial de la Nación (CCCN) unifica la legislación civil y comercial, entrando en vigencia en 2015.</li><li>Fuentes del derecho: la ley, la costumbre, la jurisprudencia y la doctrina.</li></ul><h3>Unidad 2: La Persona Humana</h3><p>Comienzo de la existencia de la persona humana: desde la concepción. Derechos y atributos de la personalidad: nombre, domicilio, capacidad, estado civil y patrimonio.</p><button class="feynman-btn">Explicar con Método Feynman</button><div class="feynman-explanation"></div></div>`,
            infografia: [{img: 'https://placehold.co/600x400/121212/f40088?text=Codificaci%C3%B3n', titulo: 'Proceso de Codificación', texto: 'La unificación de las leyes civiles y comerciales en un solo cuerpo normativo para dar coherencia y seguridad jurídica.'}, {img: 'https://placehold.co/600x400/121212/ff5bb0?text=Persona+Humana', titulo: 'Atributos de la Personalidad', texto: 'Cualidades inherentes a la persona: Nombre, Domicilio, Capacidad, etc.'}],
            redes: `# Fundamentos del Derecho Privado\n## Derecho Civil\n- Concepto\n- Codificación\n  - Código de Vélez\n  - CCCN 2015\n- Fuentes\n## Persona Humana\n- Comienzo de la existencia\n- Atributos\n  - Nombre\n  - Domicilio\n  - Capacidad`,
            cuestionarios: [{pregunta: '¿Cuándo comienza la existencia de la persona humana según el CCCN?', opciones: ['Con el nacimiento con vida.', 'A los 18 años.', 'Desde la concepción.', 'Al ser inscripto en el Registro Civil.'], respuestaCorrecta: 2}, {pregunta: '¿Cuál de los siguientes NO es un atributo de la personalidad?', opciones: ['El nombre.', 'La profesión.', 'El domicilio.', 'La capacidad.'], respuestaCorrecta: 1}]
        }
    },
    'derecho-laboral': {
        nombre: 'Derecho Laboral',
        descripcion: 'Estudio de los principios, el contrato de trabajo y las relaciones laborales.',
        contenido: {
            texto: `<div class="main-content-panel"><h3>Unidad 1: Principios del Derecho del Trabajo</h3><p>El Derecho Laboral se rige por principios protectores hacia el trabajador, considerado la parte más débil de la relación.</p><ul><li><strong>Principio Protectorio:</strong> Se manifiesta en tres reglas: in dubio pro operario, la norma más favorable y la condición más beneficiosa.</li><li><strong>Principio de Irrenunciabilidad de Derechos:</strong> El trabajador no puede renunciar a los derechos establecidos en la ley.</li><li><strong>Principio de Continuidad de la Relación Laboral:</strong> Se busca que el contrato de trabajo tenga la mayor duración posible.</li></ul><button class="feynman-btn">Explicar con Método Feynman</button><div class="feynman-explanation"></div></div>`,
            infografia: [{img: 'https://placehold.co/600x400/121212/f40088?text=Protecci%C3%B3n', titulo: 'Principio Protectorio', texto: 'La regla fundamental que busca equilibrar la desigualdad entre empleador y trabajador.'}, {img: 'https://placehold.co/600x400/121212/ff5bb0?text=Contrato', titulo: 'Continuidad Laboral', texto: 'El contrato de trabajo se presume por tiempo indeterminado, salvo prueba en contrario.'}],
            redes: `# Derecho Laboral\n## Principios\n- Protectorio\n- Irrenunciabilidad\n- Continuidad\n## Contrato de Trabajo\n- Elementos\n- Modalidades`,
            cuestionarios: [{pregunta: 'La regla "in dubio pro operario" significa que:', opciones: ['En caso de duda, se favorece al empleador.', 'En caso de duda sobre la aplicación de normas, se favorece al trabajador.', 'El trabajador siempre tiene la razón.', 'El empleador puede dudar de la capacidad del trabajador.'], respuestaCorrecta: 1}]
        }
    },
    'derecho-internacional-publico': {
        nombre: 'Derecho Internacional Público',
        descripcion: 'Fundamentos, actores y mecanismos que rigen la comunidad internacional.',
        contenido: {
            texto: `<div class="main-content-panel"><h3>Contenido en Construcción</h3><p>El material de estudio para esta materia está siendo desarrollado.</p></div>`,
            infografia: `
                <div class="infografia-section">
                    <h3>Evolución del Derecho Internacional</h3>
                    <p class="subtitle">De un sistema para regular la coexistencia de Estados a un ordenamiento que gestiona la cooperación y protege valores comunes.</p>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <h4>DIP Clásico (1648)</h4>
                            <p>Nace con la Paz de Westfalia. Era un derecho liberal, descentralizado y oligocrático. El uso de la fuerza era un derecho del Estado (<i>jus ad bellum</i>).</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <h4>DIP Contemporáneo (1945)</h4>
                            <p>Surge con la creación de la ONU. Se vuelve institucionalizado, social y humanista. La prohibición del uso de la fuerza (Art. 2.4) es su pilar.</p>
                        </div>
                    </div>
                </div>
                <div class="infografia-section">
                    <h3>Fuentes del Derecho (Art. 38 ECIJ)</h3>
                    <p class="subtitle">Identificación de dónde emanan las normas que rigen la comunidad internacional.</p>
                    <div class="chart-container" style="height: 300px;"><canvas id="fuentesChart"></canvas></div>
                </div>
                 <div class="infografia-section">
                    <h3>Actores en el Escenario Mundial</h3>
                    <p class="subtitle">El DIP ha evolucionado para reconocer a diversos actores más allá del Estado, cada uno con una capacidad jurídica particular.</p>
                    <div class="chart-container" style="height: 400px;"><canvas id="sujetosChart"></canvas></div>
                </div>
            `,
            redes: `# Derecho Internacional Público\n## Sujetos\n- Estados\n- Organizaciones Internacionales\n## Fuentes\n- Tratados\n- Costumbre\n## Responsabilidad Internacional`,
            cuestionarios: []
        }
    },
    'derecho-penal-especial': {
        nombre: 'Derecho Penal (P. Especial)',
        descripcion: 'Análisis de los delitos en particular, tipificados en el Código Penal y leyes especiales.',
        contenido: {
            texto: '<div class="main-content-panel"><h3>Contenido en construcción</h3><p>Esta sección se encuentra actualmente en desarrollo. Vuelve pronto para ver el contenido completo sobre Derecho Penal (Parte Especial).</p></div>',
            infografia: [],
            redes: '# Derecho Penal (Parte Especial)\n- Delitos contra las personas\n- Delitos contra la propiedad',
            cuestionarios: []
        }
    }
};
const doctrinaData = [
    { titulo: 'La Inteligencia Artificial y su Impacto en la Responsabilidad Civil', autor: 'Dr. Juan C. Pérez', fecha: '15 de Junio, 2025', resumen: 'Un análisis sobre los nuevos paradigmas de la responsabilidad por daños causados por sistemas autónomos y algoritmos de IA.' },
    { titulo: 'El Futuro del Contrato de Trabajo en la Era Digital', autor: 'Dra. María L. Gómez', fecha: '02 de Julio, 2025', resumen: 'Reflexiones sobre la adaptación de los principios del derecho laboral a las nuevas modalidades de trabajo remoto y plataformas digitales.' }
];
const legislacionData = [
    { titulo: 'Código Civil y Comercial de la Nación', descripcion: 'Texto completo y actualizado, ley 26.994.' },
    { titulo: 'Ley de Contrato de Trabajo (Nº 20.744)', descripcion: 'Régimen de contrato de trabajo y sus modalidades.' },
    { titulo: 'Código Penal de la Nación Argentina', descripcion: 'Texto ordenado y actualizado de la ley 11.179.' }
];


// --- LÓGICA DE LA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('.nav-link, .nav-logo, .cta-button');
    const cardContainer = document.getElementById('card-container');
    const materiaContentView = document.getElementById('materia-content-view');
    const backToEstudioButton = document.getElementById('back-to-estudio-button');
    const { Markmap, Transformer } = window.markmap;
    const transformer = new Transformer();
    let activeCharts = [];

    // --- NAVEGACIÓN PRINCIPAL ---
    function showView(viewId) {
        views.forEach(view => view.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        
        navLinks.forEach(link => {
            if (link.classList.contains('nav-logo')) {
                 link.classList.toggle('active', viewId === 'inicio-view');
            } else {
                 link.classList.toggle('active', link.dataset.view === viewId);
            }
        });
         window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = e.currentTarget.dataset.view;
            if (materiaContentView.classList.contains('active') && viewId === 'estudio-view') {
                showEstudioView();
            } else {
                showView(viewId);
            }
        });
    });

    // --- LÓGICA DE LA SECCIÓN ESTUDIO ---
    function showEstudioView() {
        materiaContentView.classList.remove('active');
        showView('estudio-view');
    }
    
    function showMateriaContentView(materiaKey) {
        views.forEach(view => view.classList.remove('active'));
        materiaContentView.classList.add('active');
        document.getElementById('materia-title').textContent = materiasData[materiaKey].nombre;
        cargarContenidoMateria(materiaKey);
    }

    backToEstudioButton.addEventListener('click', showEstudioView);

    function generarTarjetasMaterias() {
        cardContainer.innerHTML = '';
        for (const key in materiasData) {
            const materia = materiasData[key];
            const card = document.createElement('div');
            card.className = 'materia-card';
            card.innerHTML = `<div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M242.33,85.67A16,16,0,0,0,232,80H216V48a16,16,0,0,0-16-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V176h16a16,16,0,0,0,16-16V96A16,16,0,0,0,242.33,85.67ZM48,48H200V80H53.67a16,16,0,0,0-15.34,20.33L48,136.89Zm152,160H48V152.89l-9.67-32.33A16,16,0,0,0,24,104a15.94,15.94,0,0,0-3.67.51L16,106.33V96a16,16,0,0,0,16,16H200v48h16v10.33l-4.33-1.8A16,16,0,0,0,216,176v-2.33l-16-6.86V152.89l-9.67-32.33a16,16,0,0,0-15.34-12.33H160a16,16,0,0,0,0,32h26.33l9.67,32.33A16,16,0,0,0,211.33,184H216v24Zm32-48H216V96h16a1,1,0,0,1,0,2,1,1,0,0,1,0-2h0v64Z"></path></svg></div><h3>${materia.nombre}</h3><p>${materia.descripcion}</p>`;
            card.addEventListener('click', () => showMateriaContentView(key));
            cardContainer.appendChild(card);
        }
    }

    function cargarContenidoMateria(materiaKey) {
        const materia = materiasData[materiaKey];
        const contentContainer = document.getElementById('content-container');
        
        activeCharts.forEach(chart => chart.destroy());
        activeCharts = [];
        contentContainer.innerHTML = '';
        
        const textoTab = createTabContent('texto', materia.contenido.texto);
        const infografiaTab = createTabContent('infografia', createInfografiaHTML(materia.contenido.infografia));
        const redesTab = createTabContent('redes', `<svg class="markmap-container"></svg>`);
        const cuestionariosTab = createTabContent('cuestionarios', createCuestionariosHTML(materia.contenido.cuestionarios, materiaKey));
        
        contentContainer.append(textoTab, infografiaTab, redesTab, cuestionariosTab);
        
        const tabNav = materiaContentView.querySelector('.tab-nav');
        tabNav.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        tabNav.querySelector('.tab-button[data-tab="texto"]').classList.add('active');
        textoTab.classList.add('active');

        const { root } = transformer.transform(materia.contenido.redes);
        Markmap.create(redesTab.querySelector('.markmap-container'), undefined, root);
        
        addEventListenersToMateriaContent(materiaKey);
        
        if (materiaKey === 'derecho-internacional-publico') {
            initDipCharts();
        }
    }
    
    // --- LÓGICA OTRAS SECCIONES ---
    function generarContenidoDoctrina() {
        const container = document.getElementById('doctrina-container');
        container.innerHTML = doctrinaData.map(article => `
            <div class="article-card">
                <h3>${article.titulo}</h3>
                <div class="meta">Por ${article.autor} | ${article.fecha}</div>
                <p>${article.resumen}</p>
            </div>
        `).join('');
    }

    function generarContenidoLegislacion() {
        const container = document.getElementById('legislacion-container');
        container.innerHTML = legislacionData.map(law => `
            <div class="law-item">
                <h3>${law.titulo}</h3>
                <p class="meta">${law.descripcion}</p>
            </div>
        `).join('');
    }

    // --- HELPERS Y EVENT LISTENERS ---
    function createTabContent(tabName, innerHTML) {
        const div = document.createElement('div');
        div.className = 'tab-content';
        div.dataset.tab = tabName;
        div.innerHTML = innerHTML;
        return div;
    }

    function createInfografiaHTML(items) {
        if (typeof items === 'string') return items;
        if (!items || items.length === 0) return '<p>No hay infografías disponibles.</p>';
        return `<div class="infografia-grid">${items.map(item => `<div class="info-card"><img src="${item.img}" alt="${item.titulo}"><h4>${item.titulo}</h4><p>${item.texto}</p></div>`).join('')}</div>`;
    }

    function createCuestionariosHTML(items, materiaKey) {
        if (!items || items.length === 0) return '<p>No hay cuestionarios disponibles.</p>';
        let html = items.map((item, index) => `
            <div class="quiz-question" data-question-index="${index}">
                <p>${index + 1}. ${item.pregunta}</p>
                <div class="quiz-options">
                    ${item.opciones.map((opcion, i) => `<label><input type="radio" name="quiz-${materiaKey}-${index}" value="${i}">${opcion}</label>`).join('')}
                </div>
            </div>`).join('');
        return html + '<button class="verify-btn">Verificar Respuestas</button>';
    }

    materiaContentView.querySelector('.tab-nav').addEventListener('click', (e) => {
        if (e.target.matches('.tab-button')) {
            const tabName = e.target.dataset.tab;
            materiaContentView.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            materiaContentView.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            e.target.classList.add('active');
            materiaContentView.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
        }
    });

    function addEventListenersToMateriaContent(materiaKey) {
        const contentContainer = document.getElementById('content-container');
        const feynmanBtn = contentContainer.querySelector('.feynman-btn');
        if(feynmanBtn) {
            feynmanBtn.addEventListener('click', () => {
                const explanationDiv = contentContainer.querySelector('.feynman-explanation');
                explanationDiv.style.display = explanationDiv.style.display === 'block' ? 'none' : 'block';
                if(!explanationDiv.innerHTML) {
                    explanationDiv.innerHTML = `<h4>¿Cómo usar el Método Feynman?</h4><p><strong>Paso 1: Elige un concepto.</strong> Ya tienes el texto base aquí. Léelo atentamente.</p><p><strong>Paso 2: Enséñalo a un niño (o explícalo con tus palabras).</strong> Intenta reescribir el concepto en un lenguaje muy simple, usando analogías y ejemplos. Copia y pega tu explicación aquí abajo.</p><textarea style="width: 100%; height: 100px; margin-top: 10px; background: #1e1e1e; color: white; border: 1px solid var(--border-color); border-radius: 4px; padding: 10px;"></textarea><p><strong>Paso 3: Identifica tus lagunas de conocimiento.</strong> Al explicar, notarás dónde te trabas o qué partes no entiendes bien. Vuelve al material original para reforzar esas áreas.</p><p><strong>Paso 4: Organiza, simplifica y cuenta una historia.</strong> Refina tu explicación hasta que sea clara, concisa y fácil de seguir. ¡Repite el proceso hasta dominar el tema!</p>`;
                }
            });
        }

        const verifyBtn = contentContainer.querySelector('.verify-btn');
        if(verifyBtn) {
            verifyBtn.addEventListener('click', () => {
                const questions = materiasData[materiaKey].contenido.cuestionarios;
                contentContainer.querySelectorAll('.quiz-question').forEach((questionDiv) => {
                    const questionIndex = parseInt(questionDiv.dataset.questionIndex);
                    const correctAnswerIndex = questions[questionIndex].respuestaCorrecta;
                    const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
                    questionDiv.querySelectorAll('.quiz-options label').forEach(label => label.classList.remove('correct', 'incorrect'));
                    if (selectedOption) {
                        const selectedLabel = selectedOption.parentElement;
                        if (parseInt(selectedOption.value) === correctAnswerIndex) {
                            selectedLabel.classList.add('correct');
                        } else {
                            selectedLabel.classList.add('incorrect');
                            questionDiv.querySelector(`input[value="${correctAnswerIndex}"]`).parentElement.classList.add('correct');
                        }
                    } else {
                        questionDiv.querySelector(`input[value="${correctAnswerIndex}"]`).parentElement.classList.add('correct');
                    }
                });
            });
        }
    }
    
    function initDipCharts() {
        const sharedOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: 'var(--text-secondary)' }, grid: { color: 'var(--border-color)' } },
                y: { ticks: { color: 'var(--text-secondary)' }, grid: { color: 'var(--border-color)' } }
            }
        };

        const ctxFuentes = document.getElementById('fuentesChart')?.getContext('2d');
        if(ctxFuentes) {
            const fuentesChart = new Chart(ctxFuentes, {
                type: 'doughnut',
                data: {
                    labels: ['Tratados', 'Costumbre', 'PGD'],
                    datasets: [{
                        data: [55, 35, 10],
                        backgroundColor: [ '#f00084', '#ff47a8', '#ff84c8'],
                        borderColor: 'var(--bg-secondary)',
                        borderWidth: 4
                    }]
                },
                options: { ...sharedOptions, scales: {} }
            });
            activeCharts.push(fuentesChart);
        }

        const ctxSujetos = document.getElementById('sujetosChart')?.getContext('2d');
        if(ctxSujetos) {
            const sujetosChart = new Chart(ctxSujetos, {
                type: 'bar',
                data: {
                    labels: ['Estados', 'OIs', 'Individuos', 'Pueblos', 'Atípicos'],
                    datasets: [{
                        label: 'Capacidad Jurídica',
                        data: [100, 75, 50, 40, 30],
                        backgroundColor: '#f00084',
                        borderRadius: 5
                    }]
                },
                options: { ...sharedOptions, indexAxis: 'y' }
            });
            activeCharts.push(sujetosChart);
        }
    }

    // --- INICIALIZACIÓN ---
    showView('inicio-view');
    generarTarjetasMaterias();
    generarContenidoDoctrina();
    generarContenidoLegislacion();
});

