// ===== ARL SG-SST Training Platform — Application Logic =====

// ===== COURSE DATA =====
const COURSES = [
  {
    id: 'alturas', title: 'Trabajo en Alturas', hours: 8, icon: '🏗️', category: 'Seguridad Industrial',
    color: 'linear-gradient(135deg, #0066cc, #003366)',
    image: 'https://images.unsplash.com/photo-1574635648815-e425c64a702f?q=80&w=2070&auto=format&fit=crop',
    desc: 'Capacitación en prevención de caídas, uso de equipos de protección y normativa vigente para trabajos en alturas superiores a 1.5 metros.',
    modules: [
      {
        name: 'Normatividad y Marco Legal', stages: [
          { type: 'lectura', title: 'Marco legal del trabajo en alturas', videoUrl: 'https://www.youtube-nocookie.com/embed/O2BhW0YVOxM', content: '<h3>Resolución 4272 de 2021</h3><p>La normatividad colombiana establece que todo trabajo realizado a una altura igual o superior a <strong>2.00 metros</strong> (actualizado según Res 4272) sobre un nivel inferior se considera trabajo en alturas. Esta resolución define los requisitos mínimos de seguridad para la prevención y protección contra caídas.</p><h3>Responsabilidades del empleador</h3><ul><li>Realizar evaluaciones de riesgo antes de cada tarea en alturas</li><li>Proveer equipos de protección contra caídas certificados</li><li>Garantizar la capacitación y certificación de los trabajadores</li><li>Implementar un programa de prevención y protección contra caídas</li></ul><div class="tip-box"><strong>💡 Importante:</strong> Todo coordinador de trabajo en alturas debe tener licencia vigente de la SST.</div><h3>Clasificación de riesgos</h3><p>Los trabajos en alturas se clasifican según el nivel de riesgo en: Riesgo I (bajo), Riesgo II (medio) y Riesgo III (alto). Cada nivel requiere medidas de prevención específicas y equipos de protección particulares.</p>' },
          { type: 'actividad', title: 'Identificación de riesgos', items: ['Identificar 3 situaciones de riesgo en trabajo en alturas', 'Clasificar cada situación según nivel de riesgo (I, II, III)', 'Describir las medidas de prevención para cada caso', 'Listar los EPP necesarios para cada situación'] },
          {
            type: 'evaluacion', title: 'Evaluación: Normatividad', questions: [
              { q: '¿A partir de qué altura se considera trabajo en alturas en Colombia?', o: ['1.00 metro', '1.50 metros', '2.00 metros', '2.50 metros'], a: 1 },
              { q: '¿Qué resolución regula el trabajo en alturas en Colombia?', o: ['Resolución 0312', 'Resolución 4272 de 2021', 'Resolución 1409', 'Decreto 1072'], a: 1 },
              { q: '¿Quién es responsable de proveer los EPP para trabajo en alturas?', o: ['El trabajador', 'La ARL', 'El empleador', 'El contratista'], a: 2 },
              { q: '¿Qué documento debe tener un coordinador de trabajo en alturas?', o: ['Diploma universitario', 'Licencia SST vigente', 'Certificado médico', 'Póliza de seguros'], a: 1 },
              { q: '¿Cuántos niveles de riesgo se clasifican en trabajo en alturas?', o: ['2', '3', '4', '5'], a: 1 }
            ]
          }
        ]
      },
      {
        name: 'Equipos de Protección', stages: [
          { type: 'lectura', title: 'EPP para trabajo en alturas', videoUrl: 'https://www.youtube-nocookie.com/embed/O2BhW0YVOxM', content: '<h3>Arnés de cuerpo completo</h3><p>El arnés es el elemento principal del sistema de protección contra caídas. Debe cumplir con la norma ANSI Z359.11 y tener puntos de anclaje dorsal, esternal y laterales.</p><h3>Líneas de vida</h3><ul><li><strong>Líneas de vida verticales:</strong> para ascenso y descenso seguro</li><li><strong>Líneas de vida horizontales:</strong> para desplazamiento lateral</li><li><strong>Líneas de vida retráctiles:</strong> limitación automática de caída</li></ul><h3>Inspección de equipos</h3><p>Antes de cada uso, cada equipo debe ser inspeccionado visualmente. Los equipos dañados o vencidos deben retirarse inmediatamente del servicio.</p>' },
          { type: 'actividad', title: 'Inspección de equipos', items: ['Listar los componentes de un arnés de cuerpo completo', 'Describir el procedimiento de inspección pre-uso', 'Identificar señales de desgaste o daño en un arnés', 'Determinar criterios de descarte de equipos'] },
          {
            type: 'evaluacion', title: 'Evaluación: EPP', questions: [
              { q: '¿Cuál es el elemento principal del sistema anticaídas?', o: ['Casco', 'Arnés de cuerpo completo', 'Guantes', 'Botas'], a: 1 },
              { q: '¿Qué norma debe cumplir el arnés?', o: ['ISO 9001', 'ANSI Z359.11', 'OSHA 1910', 'NTC 2037'], a: 1 },
              { q: '¿Cuándo se debe inspeccionar el equipo?', o: ['Mensualmente', 'Semanalmente', 'Antes de cada uso', 'Anualmente'], a: 2 },
              { q: '¿Qué tipo de línea de vida permite desplazamiento lateral?', o: ['Vertical', 'Horizontal', 'Retráctil', 'Dinámica'], a: 1 },
              { q: '¿Qué hacer con un equipo dañado?', o: ['Repararlo', 'Retirarlo del servicio', 'Usarlo con precaución', 'Reportar y seguir usando'], a: 1 }
            ]
          }
        ]
      },
      {
        name: 'Procedimientos Seguros', stages: [
          { type: 'lectura', title: 'Procedimientos de trabajo seguro', videoUrl: 'https://www.youtube-nocookie.com/embed/O2BhW0YVOxM', content: '<h3>Permiso de Trabajo en Alturas</h3><p>Ningún trabajo en alturas puede iniciar sin un permiso de trabajo debidamente diligenciado y autorizado. Este documento verifica las condiciones de seguridad y los controles implementados.</p><h3>Plan de rescate</h3><p>Todo trabajo en alturas debe contar con un plan de rescate que permita la recuperación del trabajador en caso de caída en un tiempo no mayor a 15 minutos.</p><h3>Pasos del procedimiento seguro</h3><ul><li>Evaluar condiciones atmosféricas y del entorno</li><li>Verificar el estado de los equipos</li><li>Diligenciar el permiso de trabajo</li><li>Establecer zona de exclusión en el área inferior</li><li>Verificar puntos de anclaje</li></ul>' },
          { type: 'actividad', title: 'Plan de rescate', items: ['Elaborar un checklist de permiso de trabajo en alturas', 'Diseñar un plan de rescate para un escenario dado', 'Identificar los puntos de anclaje adecuados', 'Determinar la zona de exclusión necesaria'] },
          {
            type: 'evaluacion', title: 'Evaluación Final', questions: [
              { q: '¿Qué documento se requiere antes de iniciar trabajo en alturas?', o: ['Orden de trabajo', 'Permiso de trabajo', 'Contrato laboral', 'Certificado médico'], a: 1 },
              { q: '¿En cuánto tiempo máximo debe ejecutarse un rescate?', o: ['5 minutos', '15 minutos', '30 minutos', '60 minutos'], a: 1 },
              { q: '¿Qué es la zona de exclusión?', o: ['Área de descanso', 'Área inferior restringida', 'Zona de almacenamiento', 'Punto de encuentro'], a: 1 },
              { q: '¿Qué se debe verificar primero al llegar al sitio?', o: ['El contrato', 'Las condiciones atmosféricas y del entorno', 'El horario', 'La nómina'], a: 1 },
              { q: '¿Quién autoriza el permiso de trabajo en alturas?', o: ['El trabajador', 'Persona competente autorizada', 'Recursos humanos', 'El vigía'], a: 1 }
            ]
          }
        ]
      }
    ],
    supportMaterial: [
      { title: 'Guía Técnica: Trabajo Seguro en Alturas (Res 4272)', type: 'document', icon: '📄', desc: 'Documento resumen con los puntos clave de la nueva resolución, requisitos de seguridad y roles.', url: 'material/guia_alturas.html' },
      { title: 'Presentación: Equipos de Protección contra Caídas', type: 'presentation', icon: '🎬', desc: 'Diapositivas interactivas sobre selección, uso e inspección de arneses y conectores.', url: 'material/pres_epp_alturas.html' },
      { title: 'Presentación Comercial: Seguros de Vida Aurora', type: 'presentation', icon: '🏛️', desc: 'Conoce nuestra historia, misión y portafolio de servicios con más de 57 años de trayectoria.', url: 'material/presentacion_aurora.html' }
    ]
  },
  {
    id: 'psicosocial', title: 'Riesgo Psicosocial', hours: 6, icon: '🧠', category: 'Salud Ocupacional',
    color: 'linear-gradient(135deg, #7c3aed, #4c1d95)',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop',
    desc: 'Identificación del riesgo psicosocial, aplicación de la Batería del Ministerio y estrategias de intervención en el ambiente laboral.',
    modules: [
      {
        name: 'Conceptos Fundamentales', stages: [
          { type: 'lectura', title: 'Factores de riesgo psicosocial', videoUrl: 'https://www.youtube-nocookie.com/embed/jITQpCsylHE', content: '<h3>¿Qué es el riesgo psicosocial?</h3><p>Son las condiciones presentes en una situación laboral directamente relacionadas con la organización del trabajo, el contenido de la tarea y la realización de esta, que pueden afectar el bienestar y la salud del trabajador.</p><h3>Clasificación</h3><ul><li><strong>Intralaborales:</strong> Demandas del trabajo, control, leadership, recompensas</li><li><strong>Extralaborales:</strong> Tiempo fuera del trabajo, relaciones familiares, vivienda</li><li><strong>Individuales:</strong> Características sociodemográficas, información sobre salud</li></ul><div class="tip-box"><strong>💡 Dato clave:</strong> La Resolución 2764 de 2022 actualiza los instrumentos de evaluación del riesgo psicosocial.</div>' },
          { type: 'actividad', title: 'Identificación de factores', items: ['Identificar 3 factores intralaborales en tu puesto de trabajo', 'Describir cómo afectan tu bienestar', 'Proponer una estrategia de intervención para cada uno', 'Reflexionar sobre los factores extralaborales presentes'] },
          {
            type: 'evaluacion', title: 'Evaluación módulo 1', questions: [
              { q: '¿Qué resolución actualiza los instrumentos de riesgo psicosocial?', o: ['Resolución 0312', 'Resolución 2764 de 2022', 'Resolución 2646', 'Decreto 1072'], a: 1 },
              { q: '¿Cuántas categorías de factores psicosociales existen?', o: ['2', '3', '4', '5'], a: 1 },
              { q: '¿Qué tipo de factor es el liderazgo?', o: ['Extralaboral', 'Individual', 'Intralaboral', 'Ambiental'], a: 2 },
              { q: '¿La vivienda es un factor de tipo...?', o: ['Intralaboral', 'Extralaboral', 'Individual', 'Organizacional'], a: 1 },
              { q: '¿Quién debe aplicar la batería de riesgo psicosocial?', o: ['El jefe', 'Psicólogo especialista en SST', 'Cualquier persona', 'El trabajador mismo'], a: 1 }
            ]
          }
        ]
      },
      {
        name: 'Batería de Instrumentos', stages: [
          { type: 'lectura', title: 'Aplicación de la Batería', videoUrl: 'https://www.youtube-nocookie.com/embed/jITQpCsylHE', content: '<h3>Batería de Riesgo Psicosocial</h3><p>Es el instrumento oficial del Ministerio de Trabajo para evaluar los factores de riesgo psicosocial. Su aplicación es obligatoria para todas las empresas colombianas.</p><h3>Componentes</h3><ul><li>Cuestionario de factores intralaborales (Forma A y B)</li><li>Cuestionario de factores extralaborales</li><li>Cuestionario de estrés</li><li>Ficha de datos generales</li></ul><p>Los resultados se clasifican en cinco niveles: Sin riesgo, Riesgo bajo, Riesgo medio, Riesgo alto y Riesgo muy alto.</p>' },
          { type: 'actividad', title: 'Análisis de resultados', items: ['Identificar las diferencias entre Forma A y Forma B', 'Describir los cinco niveles de riesgo', 'Proponer intervenciones para riesgo alto y muy alto', 'Elaborar un cronograma de aplicación de la batería'] },
          {
            type: 'evaluacion', title: 'Evaluación módulo 2', questions: [
              { q: '¿Cuántos niveles de clasificación tiene la batería?', o: ['3', '4', '5', '6'], a: 2 },
              { q: '¿La forma A del cuestionario se aplica a...?', o: ['Todos', 'Jefes y profesionales', 'Auxiliares y operarios', 'Solo gerentes'], a: 1 },
              { q: '¿Cada cuánto se debe aplicar la batería como mínimo?', o: ['Cada 6 meses', 'Cada año', 'Cada 2 años', 'Cada 3 años'], a: 1 },
              { q: '¿El cuestionario de estrés evalúa...?', o: ['Producción', 'Síntomas de estrés', 'Rendimiento', 'Salario'], a: 1 },
              { q: '¿Qué nivel de riesgo requiere intervención inmediata?', o: ['Bajo', 'Medio', 'Alto', 'Muy alto'], a: 3 }
            ]
          }
        ]
      }
    ],
    supportMaterial: [
      { title: 'Guía: Manejo del Riesgo Psicosocial y Res 2764', type: 'document', icon: '🧠', desc: 'Resumen de la normatividad, aplicación de la batería y rutas de intervención.', url: 'material/guia_psicosocial.html' },
      { title: 'Taller de Clima Organizacional', type: 'presentation', icon: '🎬', desc: 'Dinámicas y actividades para mejorar el bienestar en el equipo de trabajo.', url: 'material/taller_clima.html' }
    ]
  },
  {
    id: 'auxilios', title: 'Primeros Auxilios', hours: 10, icon: '🩺', category: 'Emergencias',
    color: 'linear-gradient(135deg, #dc2626, #991b1b)',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop',
    desc: 'Protocolo de atención en emergencias, RCP, manejo de heridas, fracturas y traslado de víctimas en el entorno laboral.',
    modules: [
      {
        name: 'Evaluación de la Escena', stages: [
          { type: 'lectura', title: 'Protocolo inicial de emergencia', videoUrl: 'https://www.youtube-nocookie.com/embed/4IEQRl9pHL4', content: '<h3>Las 3 S: Seguridad</h3><p>Antes de atender cualquier emergencia, aplica el protocolo de las 3 S:</p><ul><li><strong>Seguridad:</strong> Evalúa si la escena es segura para ti</li><li><strong>Situación:</strong> Determina qué ocurrió y cuántas víctimas hay</li><li><strong>SEM:</strong> Activa el Sistema de Emergencias Médicas (123)</li></ul><h3>Evaluación primaria (CAB)</h3><p>C - Circulación (pulso), A - Vía aérea (permeabilidad), B - Respiración (ventilación). Este protocolo te permite identificar condiciones que amenazan la vida de forma inmediata.</p>' },
          { type: 'actividad', title: 'Simulación de evaluación', items: ['Describir el procedimiento de las 3 S', 'Enumerar los pasos de evaluación CAB', 'Identificar señales de peligro en una escena', 'Practicar la activación del SEM (número 123)'] },
          {
            type: 'evaluacion', title: 'Evaluación módulo 1', questions: [
              { q: '¿Qué significan las 3 S?', o: ['Salvar, Socorrer, Sanar', 'Seguridad, Situación, SEM', 'Signos, Síntomas, Solución', 'Socorro, Soporte, Seguimiento'], a: 1 },
              { q: '¿Qué número activa emergencias en Colombia?', o: ['911', '123', '112', '111'], a: 1 },
              { q: '¿Qué significa la C en CAB?', o: ['Conciencia', 'Circulación', 'Comprensión', 'Control'], a: 1 },
              { q: '¿Qué evalúas primero al llegar a una emergencia?', o: ['La víctima', 'Tu propia seguridad', 'Los testigos', 'El informe'], a: 1 },
              { q: '¿Quién puede realizar primeros auxilios?', o: ['Solo médicos', 'Solo paramédicos', 'Cualquier persona capacitada', 'Solo enfermeros'], a: 2 }
            ]
          }
        ]
      },
      {
        name: 'RCP y DEA', stages: [
          { type: 'lectura', title: 'Reanimación Cardiopulmonar', videoUrl: 'https://www.youtube-nocookie.com/embed/4IEQRl9pHL4', content: '<h3>RCP de alta calidad</h3><p>La RCP (Reanimación Cardiopulmonar) es la intervención más crítica para salvar vidas en un paro cardíaco.</p><ul><li>Frecuencia: 100-120 compresiones por minuto</li><li>Profundidad: 5-6 cm en adultos</li><li>Permitir la re-expansión completa del tórax</li><li>Relación compresión-ventilación: 30:2</li></ul><h3>Uso del DEA</h3><p>El Desfibrilador Externo Automático (DEA) analiza el ritmo cardíaco y administra una descarga eléctrica si es necesario. Sigue las instrucciones de voz del equipo.</p>' },
          { type: 'actividad', title: 'Práctica de RCP', items: ['Describir la secuencia correcta de RCP', 'Identificar cuándo usar el DEA', 'Calcular el número de compresiones en 2 minutos', 'Explicar la relación 30:2'] },
          {
            type: 'evaluacion', title: 'Evaluación módulo 2', questions: [
              { q: '¿Cuál es la frecuencia correcta de compresiones?', o: ['60-80 por minuto', '80-100 por minuto', '100-120 por minuto', '120-140 por minuto'], a: 2 },
              { q: '¿Cuál es la profundidad de compresiones en adultos?', o: ['2-3 cm', '3-4 cm', '5-6 cm', '7-8 cm'], a: 2 },
              { q: '¿Cuál es la relación compresión-ventilación?', o: ['15:1', '15:2', '30:1', '30:2'], a: 3 },
              { q: '¿Qué significa DEA?', o: ['Dispositivo Eléctrico Automático', 'Desfibrilador Externo Automático', 'Detector de Emergencias Agudas', 'Desfibrilador Especial Avanzado'], a: 1 },
              { q: '¿El DEA se puede usar sin capacitación?', o: ['No, solo médicos', 'Sí, tiene instrucciones de voz', 'Solo bomberos', 'Requiere certificación especial'], a: 1 }
            ]
          }
        ]
      }
    ],
    supportMaterial: [
      { title: 'Protocolo RCP y Primer Respondiente', type: 'document', icon: '🆘', desc: 'Guía visual de pasos para actuar ante paros y emergencias vitales.', url: 'material/protocolo_emergencias.html' }
    ]
  },
  {
    id: 'quimicos', title: 'Manejo de Sustancias Químicas', hours: 6, icon: '⚗️', category: 'Higiene Industrial',
    color: 'linear-gradient(135deg, #059669, #064e3b)',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    desc: 'Sistema Globalmente Armonizado (SGA), hojas de seguridad, almacenamiento y manejo seguro de sustancias químicas peligrosas.',
    modules: [
      {
        name: 'SGA y Hojas de Seguridad', stages: [
          { type: 'lectura', title: 'Sistema Globalmente Armonizado', videoUrl: 'https://www.youtube-nocookie.com/embed/6rvwx8G0yZQ', content: '<h3>¿Qué es el SGA?</h3><p>El Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA/GHS) es un estándar internacional para clasificar sustancias químicas según sus peligros.</p><h3>Hoja de Datos de Seguridad (HDS)</h3><p>La HDS contiene 16 secciones obligatorias con información sobre identificación, peligros, composición, primeros auxilios, medidas contra incendios, etc.</p><ul><li>Sección 1-3: Identificación y composición</li><li>Sección 4-6: Emergencias</li><li>Sección 7-10: Manipulación y propiedades</li><li>Sección 11-16: Información toxicológica y regulatoria</li></ul>' },
          { type: 'actividad', title: 'Lectura de HDS', items: ['Identificar los 9 pictogramas del SGA', 'Localizar información de primeros auxilios en una HDS', 'Determinar la clasificación de peligro de un producto', 'Verificar compatibilidad de almacenamiento'] },
          {
            type: 'evaluacion', title: 'Evaluación SGA', questions: [
              { q: '¿Cuántas secciones tiene una HDS?', o: ['8', '12', '16', '20'], a: 2 },
              { q: '¿Cuántos pictogramas tiene el SGA?', o: ['5', '7', '9', '11'], a: 2 },
              { q: '¿Qué información contiene la sección 4 de la HDS?', o: ['Composición', 'Primeros auxilios', 'Almacenamiento', 'Transporte'], a: 1 },
              { q: '¿Qué significa SGA?', o: ['Sistema General de Alertas', 'Sistema Globalmente Armonizado', 'Sistema de Gestión Ambiental', 'Seguridad General Aplicada'], a: 1 },
              { q: '¿Quién debe tener acceso a las HDS?', o: ['Solo el jefe', 'Solo el área de SST', 'Todos los trabajadores expuestos', 'Solo emergencias'], a: 2 }
            ]
          }
        ]
      },
      {
        name: 'Almacenamiento y Emergencias', stages: [
          { type: 'lectura', title: 'Almacenamiento seguro', videoUrl: 'https://www.youtube-nocookie.com/embed/6rvwx8G0yZQ', content: '<h3>Matriz de compatibilidad</h3><p>Las sustancias químicas deben almacenarse según su compatibilidad. Nunca almacenar ácidos junto con bases, ni oxidantes con inflamables.</p><h3>Kit de derrames</h3><p>Toda área donde se manipulen sustancias químicas debe contar con un kit de derrames que incluya material absorbente, EPP de emergencia y bolsas de disposición.</p>' },
          { type: 'actividad', title: 'Plan de emergencia química', items: ['Elaborar una matriz de compatibilidad básica', 'Diseñar el contenido de un kit de derrames', 'Describir el procedimiento ante un derrame', 'Identificar las rutas de evacuación del área'] },
          {
            type: 'evaluacion', title: 'Evaluación Final', questions: [
              { q: '¿Se pueden almacenar ácidos junto con bases?', o: ['Sí', 'No', 'Depende la cantidad', 'Solo en pequeñas cantidades'], a: 1 },
              { q: '¿Qué debe contener un kit de derrames?', o: ['Solo guantes', 'Material absorbente, EPP y bolsas', 'Solo un extintor', 'Solo señalización'], a: 1 },
              { q: '¿Dónde se debe ubicar la HDS?', o: ['En la oficina del gerente', 'Accesible en el área de trabajo', 'En el archivo general', 'Solo digital'], a: 1 },
              { q: '¿Qué se hace primero ante un derrame químico?', o: ['Limpiar inmediatamente', 'Evaluar el riesgo and usar EPP', 'Llamar al jefe', 'Evacuar todo el edificio'], a: 1 },
              { q: '¿Cada cuánto se debe revisar el kit de derrames?', o: ['Anualmente', 'Periódicamente y después de cada uso', 'Nunca', 'Solo en auditorías'], a: 1 }
            ]
          }
        ]
      }
    ],
    supportMaterial: [
      { title: 'Manual: Almacenamiento Seguro (Res 773)', type: 'document', icon: '🧪', desc: 'Guía práctica para el etiquetado SGA y matrices de compatibilidad química.', url: 'material/almacenamiento_quimico.html' }
    ]
  },
  {
    id: 'ergonomia', title: 'Ergonomía Laboral', hours: 4, icon: '🪑', category: 'Salud Ocupacional',
    color: 'linear-gradient(135deg, #0891b2, #164e63)',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=2069&auto=format&fit=crop',
    desc: 'Prevención de desórdenes musculoesqueléticos, diseño ergonómico del puesto de trabajo y pausas activas.',
    modules: [
      {
        name: 'Fundamentos de Ergonomía', stages: [
          { type: 'lectura', title: 'Principios ergonómicos', videoUrl: 'https://www.youtube-nocookie.com/embed/PrH-LGZsJKI', content: '<h3>¿Qué es la ergonomía?</h3><p>Es la disciplina que se encarga de adaptar el trabajo a las capacidades y limitaciones del ser humano, buscando optimizar el bienestar y el rendimiento.</p><h3>Desórdenes musculoesqueléticos (DME)</h3><ul><li>Síndrome del túnel carpiano</li><li>Lumbalgia ocupacional</li><li>Tendinitis</li><li>Cervicalgia</li></ul><p>Los DME representan más del 60% de las enfermedades laborales en Colombia.</p><h3>Factores de riesgo ergonómico</h3><ul><li>Posturas prolongadas o forzadas</li><li>Movimientos repetitivos</li><li>Manipulación manual de cargas</li><li>Vibración y presión mecánica</li></ul>' },
          { type: 'actividad', title: 'Evaluación de puesto', items: ['Evaluar la postura en tu puesto de trabajo actual', 'Identificar factores de riesgo ergonómico presentes', 'Proponer 3 mejoras al diseño del puesto', 'Diseñar una rutina de pausas activas de 5 minutos'] },
          {
            type: 'evaluacion', title: 'Evaluación de Ergonomía', questions: [
              { q: '¿Qué porcentaje de enfermedades laborales son DME en Colombia?', o: ['30%', '45%', 'Más de 60%', '80%'], a: 2 },
              { q: '¿Cuál es el objetivo principal de la ergonomía?', o: ['Aumentar producción', 'Adaptar el trabajo al ser humano', 'Reducir costos', 'Cumplir normas'], a: 1 },
              { q: '¿Qué es el síndrome del túnel carpiano?', o: ['Dolor de espalda', 'Lesión en la mano/muñeca', 'Problema visual', 'Dolor de cuello'], a: 1 },
              { q: '¿Las pausas activas se recomiendan cada...?', o: ['30 minutos', '1 hora', '2 horas', '4 horas'], a: 2 },
              { q: '¿Qué tipo de riesgo son los movimientos repetitivos?', o: ['Físico', 'Ergonómico', 'Psicosocial', 'Químico'], a: 1 }
            ]
          }
        ]
      }
    ],
    supportMaterial: [
      { title: 'Guía de Pausas Activas Dinámicas', type: 'document', icon: '🚶‍♀️', desc: 'Rutinas de 5 minutos para prevenir DME en puestos administrativos y operativos.', url: 'material/guia_pausas_activas.html' }
    ]
  },
  {
    id: 'accidentes', title: 'Investigación de Accidentes', hours: 8, icon: '🔍', category: 'Gestión SST',
    color: 'linear-gradient(135deg, #d97706, #78350f)',
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop',
    desc: 'Metodología de investigación de accidentes e incidentes laborales según la Resolución 1401 de 2007.',
    modules: [
      {
        name: 'Marco Legal y Metodología', stages: [
          { type: 'lectura', title: 'Resolución 1401 de 2007', videoUrl: 'https://www.youtube.com/embed/LVU0G3Q6y4E', content: '<h3>Obligación de investigar</h3><p>Todo accidente de trabajo e incidente grave debe ser investigado dentro de los <strong>15 días hábiles</strong> siguientes a su ocurrencia. La investigación debe determinar las causas básicas e inmediatas.</p><h3>Metodología de investigación</h3><ul><li><strong>Paso 1:</strong> Conformar el equipo investigador</li><li><strong>Paso 2:</strong> Recopilar información y evidencia</li><li><strong>Paso 3:</strong> Análisis de causalidad</li><li><strong>Paso 4:</strong> Definir acciones correctivas</li><li><strong>Paso 5:</strong> Seguimiento a las acciones</li></ul><div class="tip-box"><strong>💡 Recuerda:</strong> El equipo investigador debe incluir al jefe inmediato, un representante del COPASST y al responsable del SG-SST.</div>' },
          { type: 'actividad', title: 'Análisis de caso', items: ['Identificar causas inmediatas y básicas de un caso dado', 'Elaborar un diagrama de causalidad', 'Proponer acciones correctivas y preventivas', 'Definir indicadores de seguimiento'] },
          {
            type: 'evaluacion', title: 'Evaluación de Investigación', questions: [
              { q: '¿En cuántos días hábiles se debe investigar un accidente?', o: ['5', '10', '15', '30'], a: 2 },
              { q: '¿Qué resolución regula la investigación de AT?', o: ['Resolución 0312', 'Resolución 1401 de 2007', 'Resolución 2646', 'Decreto 1072'], a: 1 },
              { q: '¿Quién debe integrar el equipo investigador?', o: ['Solo el jefe', 'Jefe, COPASST y responsable SST', 'Solo la ARL', 'Solo el trabajador'], a: 1 },
              { q: '¿Qué son las causas básicas?', o: ['Las inmediatas', 'Factores personales y del trabajo', 'Las consecuencias', 'Los testigos'], a: 1 },
              { q: '¿Cuál es el último paso de la investigación?', o: ['Recopilar datos', 'Análisis de causas', 'Seguimiento a acciones', 'Conformar el equipo'], a: 2 }
            ]
          }
        ]
      }
    ],
    supportMaterial: [
      { title: 'Metodología de los 5 Porqués y Espina de Pescado', type: 'presentation', icon: '🎬', desc: 'Aprende a identificar las causas raíz de los incidentes de forma efectiva.', url: 'material/metodologias_causalidad.html' }
    ]
  }
];

// ===== STATE =====
// ===== STATE =====
let currentUser = JSON.parse(localStorage.getItem('aurora_current_user')) || null;
let allUsers = JSON.parse(localStorage.getItem('aurora_users')) || [];
let allCompletions = JSON.parse(localStorage.getItem('aurora_completions')) || [];
let userProgress = JSON.parse(localStorage.getItem('aurora_progress')) || {}; // Progress of current user per course stage
let currentCourseId = null;
let currentModuleIdx = 0;
let currentStageIdx = 0;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  if (allUsers.length === 0) seedMockData();
  renderCourses();
  updateAuthUI();
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const head = document.getElementById('header');
    if (head) head.classList.toggle('scrolled', window.scrollY > 50);
  });
});

function seedMockData() {
  const mockUsers = [
    { name: 'Admin Aurora', email: 'admin@segurosaurora.com', password: 'ADMIN', role: 'admin', company: 'Seguros Aurora', location: 'Bogotá' },
    { name: 'Carlos Ruiz', email: 'carlos@empresa.com', password: 'USER1', role: 'user', company: 'Logística SAS', location: 'Medellín' },
    { name: 'Ana Gomez', email: 'ana@salud.com', password: 'USER2', role: 'user', company: 'Clínica Norte', location: 'Barranquilla' }
  ];
  const mockCompletions = [
    { id: 1, courseId: 'alturas', courseName: 'Trabajo en Alturas', userName: 'Carlos Ruiz', userId: '1234', email: 'carlos@empresa.com', company: 'Logística SAS', location: 'Medellín', score: 90, date: '2026-01-15T10:00:00Z', displayDate: '15/01/2026', hours: 8 },
    { id: 2, courseId: 'psicosocial', courseName: 'Riesgo Psicosocial', userName: 'Carlos Ruiz', userId: '1234', email: 'carlos@empresa.com', company: 'Logística SAS', location: 'Medellín', score: 85, date: '2026-02-10T14:30:00Z', displayDate: '10/02/2026', hours: 6 },
    { id: 3, courseId: 'auxilios', courseName: 'Primeros Auxilios', userName: 'Ana Gomez', userId: '5678', email: 'ana@salud.com', company: 'Clínica Norte', location: 'Barranquilla', score: 95, date: '2026-02-12T09:15:00Z', displayDate: '12/02/2026', hours: 10 }
  ];
  localStorage.setItem('aurora_users', JSON.stringify(mockUsers));
  localStorage.setItem('aurora_completions', JSON.stringify(mockCompletions));
  allUsers = mockUsers;
  allCompletions = mockCompletions;
}

// ===== AUTH =====
function openAuthModal() { document.getElementById('authModal').classList.add('active'); }
function closeAuthModal() { document.getElementById('authModal').classList.remove('active'); }

function switchAuthTab(tab) {
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('authModalTitle').textContent = tab === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta';
}

function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

function generatePassword(length = 8) {
  const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let retVal = "";
  for (let i = 0; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}

function handleRegister(e) {
  e.preventDefault();
  const email = document.getElementById('regEmail').value;
  const errEl = document.getElementById('regEmailError');
  if (!validateEmail(email)) { errEl.classList.add('visible'); document.getElementById('regEmail').classList.add('error'); return; }
  errEl.classList.remove('visible'); document.getElementById('regEmail').classList.remove('error');

  // Check if user already exists
  if (allUsers.find(u => u.email === email)) {
    showToast('Este correo ya está registrado', 'error');
    return;
  }

  const password = generatePassword();
  const newUser = {
    name: document.getElementById('regName').value,
    id: document.getElementById('regId').value,
    phone: document.getElementById('regPhone').value,
    email,
    password,
    company: document.getElementById('regCompany').value,
    location: document.getElementById('regLocation').value,
    role: email.startsWith('admin@') ? 'admin' : 'user',
    date: new Date().toISOString()
  };

  allUsers.push(newUser);
  localStorage.setItem('aurora_users', JSON.stringify(allUsers));

  // Show generated password to user
  document.getElementById('generatedPass').textContent = password;
  document.getElementById('generatedPassContainer').style.display = 'block';
  showToast('¡Registro exitoso! Guarda tu contraseña.', 'success');

  // Change button to Login after a delay or just allow them to see the pass
  e.target.querySelector('button').textContent = "Usuario Registrado - Iniciar Sesión";
  e.target.querySelector('button').onclick = () => switchAuthTab('login');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;

  const user = allUsers.find(u => u.email === email && u.password === pass);

  if (user) {
    currentUser = user;
    localStorage.setItem('aurora_current_user', JSON.stringify(currentUser));
    localStorage.setItem('aurora_progress', JSON.stringify(userProgress)); // Simplified: progress could be per user
    closeAuthModal();
    updateAuthUI();
    showToast('Sesión iniciada correctamente', 'success');

    // Redirect Admin automatically
    if (currentUser.role === 'admin') {
      showAdminDashboard();
    }
  } else {
    showToast('Credenciales incorrectas', 'error');
  }
}

function logout() {
  currentUser = null; showHome(); updateAuthUI(); showToast('Sesión cerrada', 'info');
}

function updateAuthUI() {
  const hasUser = !!currentUser;
  document.getElementById('authBtnContainer').style.display = hasUser ? 'none' : 'block';
  document.getElementById('userPanel').classList.toggle('active', hasUser);
  if (hasUser) {
    const initials = currentUser.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('userAvatar').textContent = initials;
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('btnAdminDash').style.display = currentUser.role === 'admin' ? 'flex' : 'none';
  }
}

// ===== NAVIGATION =====
function showHome() {
  document.getElementById('mainPage').style.display = 'block';
  document.getElementById('courseView').classList.remove('active');
  document.getElementById('userHistoryView').classList.remove('active');
  document.getElementById('adminDashboardView').classList.remove('active');
  document.getElementById('footer').style.display = 'block';
  window.scrollTo(0, 0);
}

function showUserHistory() {
  if (!currentUser) return;
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('courseView').classList.remove('active');
  document.getElementById('adminDashboardView').classList.remove('active');
  document.getElementById('userHistoryView').classList.add('active');
  document.getElementById('footer').style.display = 'none';
  renderUserHistory();
}

function showAdminDashboard() {
  if (!currentUser || currentUser.role !== 'admin') return;
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('courseView').classList.remove('active');
  document.getElementById('userHistoryView').classList.remove('active');
  document.getElementById('adminDashboardView').classList.add('active');
  document.getElementById('footer').style.display = 'none';
  renderAdminDashboard();
}

function showCourseView(courseId) {
  if (!currentUser) { openAuthModal(); showToast('Regístrate para acceder a los cursos', 'info'); return; }
  currentCourseId = courseId;
  currentModuleIdx = 0; currentStageIdx = 0;
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
  document.getElementById('courseView').classList.add('active');
  window.scrollTo(0, 0);
  renderCourseView();
}

// ===== RENDER COURSES =====
function renderCourses() {
  const grid = document.getElementById('coursesGrid');
  if (!grid) return;

  const myDone = currentUser ? allCompletions.filter(c => c.userId === currentUser.id) : [];

  grid.innerHTML = COURSES.map(c => {
    const done = myDone.find(x => x.courseId === c.id);
    return `<div class="course-card animate-fadeInUp">
      <div class="course-card-header" style="background-image: url('${c.image}')">
        <div class="course-card-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${c.hours} horas
        </div>
        <div class="course-card-category">${c.category}</div>
      </div>
      <div class="course-card-body">
        <h3 class="course-card-title">${c.title}</h3>
        <p class="course-card-desc">${c.desc}</p>
        <div class="course-card-meta">
          <div class="course-card-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0116.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
            ${c.modules.length} módulos
          </div>
          <div class="course-card-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            ${c.modules.reduce((a, m) => a + m.stages.length, 0)} etapas
          </div>
        </div>
        <div style="margin-top:auto">
          ${done ? '<div class="completed-badge" style="margin-bottom:12px">✓ Completado</div>' : ''}
          <button class="btn-course" onclick="showCourseView('${c.id}')">
            ${done ? 'Revisar Curso' : 'Iniciar Curso'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ===== RENDER COURSE VIEW =====
function renderCourseView() {
  const course = COURSES.find(c => c.id === currentCourseId);
  if (!course) return;
  document.getElementById('cvTitle').textContent = course.title;
  document.getElementById('cvHours').textContent = course.hours + ' horas de capacitación';
  document.getElementById('cvModules').textContent = course.modules.length + ' módulos';
  renderModuleSidebar(course);
  renderStage(course);
  renderSupportMaterial(course);
  updateCourseProgress(course);
}

function renderSupportMaterial(course) {
  const section = document.getElementById('supportMaterialSection');
  const list = document.getElementById('supportMaterialList');
  if (!course.supportMaterial || course.supportMaterial.length === 0) {
    section.style.display = 'none';
    return;
  }
  section.style.display = 'block';
  list.innerHTML = course.supportMaterial.map(m => `
    <div class="support-item" onclick="window.open('${m.url}', '_blank')">
      <div class="support-item-icon">${m.icon}</div>
      <div class="support-item-title">${m.title}</div>
      <p class="support-item-desc">${m.desc}</p>
      <div class="support-item-action">
        ${m.type === 'presentation' ? 'Ver Presentación' : 'Descargar Guía'}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    </div>
  `).join('');
}

function getProgressKey(courseId, mi, si) { return `${courseId}_${mi}_${si}`; }
function isStageCompleted(courseId, mi, si) { return !!userProgress[getProgressKey(courseId, mi, si)]; }
function canAccessStage(courseId, mi, si) {
  if (mi === 0 && si === 0) return true;
  if (si > 0) return isStageCompleted(courseId, mi, si - 1);
  return isStageCompleted(courseId, mi - 1, COURSES.find(c => c.id === courseId).modules[mi - 1].stages.length - 1);
}

function updateCourseProgress(course) {
  let total = 0, done = 0;
  course.modules.forEach((m, mi) => m.stages.forEach((_, si) => { total++; if (isStageCompleted(currentCourseId, mi, si)) done++; }));
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  document.getElementById('cvProgressFill').style.width = pct + '%';
  document.getElementById('cvProgressText').textContent = pct + '% completado';
}

function renderModuleSidebar(course) {
  const sb = document.getElementById('moduleSidebar');
  let html = '<div class="module-sidebar-title">Módulos del Curso</div>';
  course.modules.forEach((m, mi) => {
    const allComplete = m.stages.every((_, si) => isStageCompleted(currentCourseId, mi, si));
    const accessible = canAccessStage(currentCourseId, mi, 0);
    const active = mi === currentModuleIdx;
    let cls = 'module-item';
    if (active) cls += ' active';
    if (allComplete) cls += ' completed';
    if (!accessible && !allComplete) cls += ' locked';
    html += `<div class="${cls}" onclick="${accessible || allComplete ? `selectModule(${mi})` : ''}">
      <div class="module-item-number">${allComplete ? '✓' : (mi + 1)}</div>
      <div class="module-item-text">${m.name}</div>
    </div>`;
  });
  sb.innerHTML = html;
}

function selectModule(mi) {
  currentModuleIdx = mi; currentStageIdx = 0;
  const course = COURSES.find(c => c.id === currentCourseId);
  renderModuleSidebar(course); renderStage(course);
}

// ===== RENDER STAGE =====
function renderStage(course) {
  const mod = course.modules[currentModuleIdx];
  const stage = mod.stages[currentStageIdx];
  const el = document.getElementById('stageContent');
  const accessible = canAccessStage(currentCourseId, currentModuleIdx, currentStageIdx);
  const completed = isStageCompleted(currentCourseId, currentModuleIdx, currentStageIdx);

  if (!accessible) {
    el.innerHTML = `<div class="locked-overlay"><div class="locked-icon">🔒</div><h3>Etapa Bloqueada</h3><p>Debes completar la etapa anterior antes de acceder a este contenido.</p></div>`;
    return;
  }

  let tagClass = stage.type, tagLabel = stage.type === 'lectura' ? '📖 Lectura' : stage.type === 'actividad' ? '✏️ Actividad Práctica' : '📝 Evaluación';
  let html = `<div class="stage-header"><div><span class="stage-tag ${tagClass}">${tagLabel}</span>${completed ? ' <span class="completed-badge">✓ Completada</span>' : ''}</div><div style="font-size:.85rem;color:var(--gray-400)">Módulo ${currentModuleIdx + 1} — Etapa ${currentStageIdx + 1} de ${mod.stages.length}</div></div>`;
  html += `<h2 class="stage-title">${stage.title}</h2>`;

  // Stage navigation
  const stageNav = `<div style="display:flex;gap:8px;margin-top:8px;margin-bottom:24px">${mod.stages.map((s, si) => {
    const c = isStageCompleted(currentCourseId, currentModuleIdx, si);
    const a = canAccessStage(currentCourseId, currentModuleIdx, si);
    const act = si === currentStageIdx;
    return `<button onclick="${a ? `currentStageIdx=${si};renderStage(COURSES.find(c=>c.id===currentCourseId))` : ''}" style="padding:6px 14px;border-radius:20px;font-size:.8rem;font-weight:600;border:2px solid ${act ? 'var(--primary-500)' : c ? 'var(--success)' : 'var(--gray-200)'};background:${act ? 'var(--primary-50)' : c ? 'var(--success-light)' : 'var(--white)'};color:${act ? 'var(--primary-700)' : c ? 'var(--success)' : 'var(--gray-400)'};cursor:${a ? 'pointer' : 'not-allowed'};opacity:${a ? 1 : .5}">${s.type === 'lectura' ? '📖' : s.type === 'actividad' ? '✏️' : '📝'} ${si + 1}</button>`;
  }).join('')}</div>`;
  html += stageNav;

  if (stage.type === 'lectura') {
    if (stage.videoUrl) {
      html += `<div class="video-container"><div class="video-label">🎬 Video de referencia provisional — será reemplazado por contenido propio</div><div class="video-wrapper"><iframe src="${stage.videoUrl}" title="${stage.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>`;
    } else {
      html += `<div class="video-placeholder"><div class="video-play-btn">▶</div><span>Video explicativo del tema</span></div>`;
    }
    html += `<div class="reading-content">${stage.content}</div>`;
    if (!completed) html += `<button class="btn-complete-stage" onclick="completeStage()">Marcar como completada ✓</button>`;
  } else if (stage.type === 'actividad') {
    html += `<div class="activity-content">`;
    html += `<div class="activity-scenario"><div class="scenario-header"><span class="scenario-icon">📋</span><h3>Caso Práctico: ${stage.title}</h3></div>`;
    html += `<div class="scenario-description"><p>Analiza el siguiente escenario y completa las actividades propuestas. Responde con tus propias palabras basándote en lo aprendido en la lectura y el video.</p></div></div>`;
    html += `<h4 style="margin:24px 0 16px;color:var(--primary-700);font-size:1.05rem;">📝 Actividades de Aprendizaje</h4>`;
    stage.items.forEach((item, i) => {
      const chk = completed ? 'checked' : '';
      html += `<div class="activity-exercise"><div class="exercise-header"><div class="activity-checkbox ${chk}" id="actChk${i}" onclick="toggleActivity(${i})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><div class="activity-text"><strong>Ejercicio ${i + 1}:</strong> ${item}</div></div>`;
      html += `<textarea class="activity-response" placeholder="Escribe tu respuesta aquí..." rows="3" ${completed ? 'disabled' : ''}></textarea></div>`;
    });
    html += '</div>';
    if (!completed) html += `<button class="btn-complete-stage" id="btnCompleteActivity" onclick="completeStage()" disabled>Completar Actividad ✓</button>`;
  } else if (stage.type === 'evaluacion') {
    if (completed) {
      const rec = userProgress[getProgressKey(currentCourseId, currentModuleIdx, currentStageIdx)];
      html += `<div class="eval-result active"><div class="eval-result-icon pass">🏆</div><h3 class="pass">¡Evaluación Aprobada!</h3><div class="eval-score pass">${rec.score}%</div><p>Has completado esta evaluación satisfactoriamente.</p></div>`;
    } else {
      html += `<p class="stage-description" style="margin-bottom:24px">Responde correctamente al menos el 80% de las preguntas para aprobar.</p>`;
      html += '<div class="evaluation-form" id="evalForm">';
      stage.questions.forEach((q, qi) => {
        html += `<div class="eval-question" id="evalQ${qi}"><div class="eval-question-number">Pregunta ${qi + 1} de ${stage.questions.length}</div><div class="eval-question-text">${q.q}</div><div class="eval-options">`;
        q.o.forEach((opt, oi) => {
          html += `<div class="eval-option" onclick="selectOption(${qi},${oi})" id="opt${qi}_${oi}"><div class="eval-option-radio"></div>${opt}</div>`;
        });
        html += '</div></div>';
      });
      html += `<button class="btn-evaluate" onclick="submitEvaluation()">Enviar Evaluación <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button></div>`;
      html += '<div class="eval-result" id="evalResult"></div>';
    }
  }
  el.innerHTML = html;
}

// ===== INTERACTIONS =====
let selectedAnswers = {};
function selectOption(qi, oi) {
  selectedAnswers[qi] = oi;
  const course = COURSES.find(c => c.id === currentCourseId);
  const qs = course.modules[currentModuleIdx].stages[currentStageIdx].questions;
  qs.forEach((_, i) => {
    qs[0]; // reference
    for (let j = 0; j < qs[i].o.length; j++) {
      const el = document.getElementById(`opt${i}_${j}`);
      if (el) el.classList.toggle('selected', i === qi && j === oi);
    }
  });
  // Fix: clear previous selections for this question only
  const question = qs[qi];
  question.o.forEach((_, j) => {
    document.getElementById(`opt${qi}_${j}`).classList.toggle('selected', j === oi);
  });
}

function submitEvaluation() {
  const course = COURSES.find(c => c.id === currentCourseId);
  const qs = course.modules[currentModuleIdx].stages[currentStageIdx].questions;
  if (Object.keys(selectedAnswers).length < qs.length) { showToast('Responde todas las preguntas', 'error'); return; }
  let correct = 0;
  qs.forEach((q, i) => {
    const isCorrect = selectedAnswers[i] === q.a;
    if (isCorrect) correct++;
    const el = document.getElementById(`evalQ${i}`);
    el.classList.add(isCorrect ? 'correct' : 'incorrect');
  });
  const score = Math.round(correct / qs.length * 100);
  const pass = score >= 80;
  document.getElementById('evalForm').style.display = 'none';
  const res = document.getElementById('evalResult');
  res.classList.add('active');

  if (pass) {
    res.innerHTML = `<div class="eval-result-icon pass">🏆</div><h3 class="pass">¡Felicitaciones!</h3><div class="eval-score pass">${score}%</div><p>Has aprobado con ${correct}/${qs.length} respuestas correctas.</p>`;
    completeStageWithScore(score);
    // Check if entire course is done
    const allDone = course.modules.every((m, mi) => m.stages.every((_, si) => isStageCompleted(currentCourseId, mi, si)));
    if (allDone) {
      const record = {
        id: Date.now(),
        courseId: currentCourseId,
        courseName: course.title,
        userName: currentUser.name,
        userId: currentUser.id,
        email: currentUser.email,
        company: currentUser.company,
        location: currentUser.location,
        score,
        date: new Date().toISOString(),
        displayDate: new Date().toLocaleDateString('es-CO'),
        hours: course.hours
      };
      // Add to global completions
      allCompletions.push(record);
      localStorage.setItem('aurora_completions', JSON.stringify(allCompletions));

      res.innerHTML += `<button class="btn-certificate" onclick="showCertificate()" style="margin-top:20px">🏆 Obtener Certificado</button>`;
      renderCourses();
    }
  } else {
    res.innerHTML = `<div class="eval-result-icon fail">❌</div><h3 class="fail">No Aprobado</h3><div class="eval-score fail">${score}%</div><p>Necesitas al menos 80%. Obtuviste ${correct}/${qs.length} correctas.</p><button class="btn-retry" onclick="retryEvaluation()">Reintentar</button>`;
  }
  selectedAnswers = {};
}

function retryEvaluation() {
  selectedAnswers = {};
  renderStage(COURSES.find(c => c.id === currentCourseId));
}

function toggleActivity(i) {
  const el = document.getElementById(`actChk${i}`);
  el.classList.toggle('checked');
  // Check if all are checked
  const course = COURSES.find(c => c.id === currentCourseId);
  const count = course.modules[currentModuleIdx].stages[currentStageIdx].items.length;
  let allChecked = true;
  for (let j = 0; j < count; j++) { if (!document.getElementById(`actChk${j}`).classList.contains('checked')) { allChecked = false; break; } }
  const btn = document.getElementById('btnCompleteActivity');
  if (btn) btn.disabled = !allChecked;
}

function completeStage() {
  const key = getProgressKey(currentCourseId, currentModuleIdx, currentStageIdx);
  userProgress[key] = { completed: true, date: new Date().toISOString() };
  localStorage.setItem('arl_progress', JSON.stringify(userProgress));
  showToast('¡Etapa completada!', 'success');
  const course = COURSES.find(c => c.id === currentCourseId);
  // Auto-advance
  const mod = course.modules[currentModuleIdx];
  if (currentStageIdx < mod.stages.length - 1) { currentStageIdx++; }
  else if (currentModuleIdx < course.modules.length - 1) { currentModuleIdx++; currentStageIdx = 0; }
  renderModuleSidebar(course); renderStage(course); updateCourseProgress(course);
}

function completeStageWithScore(score) {
  const key = getProgressKey(currentCourseId, currentModuleIdx, currentStageIdx);
  userProgress[key] = { completed: true, score, date: new Date().toISOString() };
  localStorage.setItem('aurora_progress', JSON.stringify(userProgress));
  const course = COURSES.find(c => c.id === currentCourseId);
  renderModuleSidebar(course); updateCourseProgress(course);
}

// ===== HISTORY RENDER =====
function renderUserHistory() {
  const grid = document.getElementById('userHistoryGrid');
  const summary = document.getElementById('userHistorySummary');
  const myCompletions = allCompletions.filter(c => c.userId === currentUser.id);

  summary.textContent = `Has completado ${myCompletions.length} curos de capacitación.`;

  if (myCompletions.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--gray-400);">No tienes certificados registrados aún. Comienza un curso para obtener uno.</div>';
    return;
  }

  grid.innerHTML = myCompletions.map(c => `
    <div class="history-card animate-fadeInUp">
      <div class="history-info">
        <h4>${c.courseName}</h4>
        <p>Fecha: ${c.displayDate} | Nota: ${c.score}% | ${c.hours} Horas</p>
      </div>
      <div class="history-actions">
        <button class="btn-history-download" onclick="currentCourseId='${c.courseId}';showCertificate()">
          <span>👁️ Ver</span>
        </button>
        <button class="btn-history-download" onclick="currentCourseId='${c.courseId}';downloadCertificate()">
          <span>📥 PDF</span>
        </button>
      </div>
    </div>
  `).join('');
}

// ===== ADMIN DASHBOARD =====
function renderAdminDashboard() {
  // Global Stats
  const totalUsers = allUsers.length;
  const totalCompletions = allCompletions.length;
  const avgScore = totalCompletions > 0
    ? Math.round(allCompletions.reduce((acc, c) => acc + c.score, 0) / totalCompletions)
    : 0;

  document.getElementById('statTotalUsers').textContent = totalUsers;
  document.getElementById('statTotalCompletions').textContent = totalCompletions;
  document.getElementById('statAvgScore').textContent = avgScore + '%';

  // Course Table
  const courseStats = COURSES.map(course => {
    const completions = allCompletions.filter(c => c.courseId === course.id);
    const avg = completions.length > 0
      ? Math.round(completions.reduce((acc, c) => acc + c.score, 0) / completions.length)
      : 0;
    return { title: course.title, count: completions.length, avg };
  }).sort((a, b) => b.avg - a.avg);

  document.getElementById('courseStatsTable').innerHTML = `
    <table class="admin-table">
      <thead>
        <tr><th>Curso</th><th>Estudiantes</th><th>Calificación Promedio</th></tr>
      </thead>
      <tbody>
        ${courseStats.map(s => `<tr><td>${s.title}</td><td>${s.count}</td><td>${s.avg}%</td></tr>`).join('')}
      </tbody>
    </table>
  `;

  // Company Table
  const companyMap = {};
  allCompletions.forEach(c => {
    const monthYear = new Date(c.date).toLocaleString('es-CO', { month: 'short', year: 'numeric' });
    const key = `${c.company}|${c.location}|${monthYear}`;
    if (!companyMap[key]) companyMap[key] = { name: c.company, loc: c.location, month: monthYear, count: 0 };
    companyMap[key].count++;
  });

  const companyStats = Object.values(companyMap).sort((a, b) => b.count - a.count);

  document.getElementById('companyStatsTable').innerHTML = `
    <table class="admin-table">
      <thead>
        <tr><th>Empresa</th><th>Ubicación</th><th>Mes</th><th>Capacitaciones</th></tr>
      </thead>
      <tbody>
        ${companyStats.map(s => `<tr><td>${s.name}</td><td>${s.loc}</td><td>${s.month}</td><td>${s.count}</td></tr>`).join('')}
      </tbody>
    </table>
  `;

  renderAdminUsers();
}

function renderAdminUsers() {
  const table = document.getElementById('usersListTable');
  if (!table) return;

  table.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cédula</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Empresa</th>
          <th>Ubicación</th>
          <th>Fecha Registro</th>
        </tr>
      </thead>
      <tbody>
        ${allUsers.map(u => `
          <tr>
            <td>${u.name}</td>
            <td>${u.id}</td>
            <td>${u.phone || '-'}</td>
            <td>${u.email}</td>
            <td>${u.company}</td>
            <td>${u.location}</td>
            <td>${new Date(u.date).toLocaleDateString()}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// ===== CERTIFICATE =====
function showCertificate() {
  const course = COURSES.find(c => c.id === currentCourseId);
  const rec = completedCourses.find(x => x.courseId === currentCourseId);
  if (!rec) return;
  document.getElementById('certUserName').textContent = currentUser.name;
  document.getElementById('certCourse').textContent = course.title;
  document.getElementById('certHours').textContent = course.hours + ' horas';
  document.getElementById('certScore').textContent = rec.score + '%';
  document.getElementById('certDate').textContent = rec.date;
  document.getElementById('certDesc').textContent = `Ha completado satisfactoriamente el curso de ${course.title} del programa de capacitaciones en Seguridad y Salud en el Trabajo (SG-SST), con una intensidad horaria de ${course.hours} horas.`;
  document.getElementById('certModal').classList.add('active');
}
function closeCertModal() { document.getElementById('certModal').classList.remove('active'); }

function downloadCertificate() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const w = 297, h = 210;
  // Background
  doc.setFillColor(255, 253, 247);
  doc.rect(0, 0, w, h, 'F');
  // Border
  doc.setDrawColor(0, 51, 102); doc.setLineWidth(3); doc.rect(8, 8, w - 16, h - 16);
  doc.setDrawColor(0, 102, 204); doc.setLineWidth(0.5); doc.rect(12, 12, w - 24, h - 24);
  // Header
  doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(0, 102, 204);
  doc.text('SEGUROS DE VIDA AURORA S.A.', w / 2, 30, { align: 'center' });
  doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(100);
  doc.text('NIT: 860.002.503-4', w / 2, 36, { align: 'center' });
  // Title
  doc.setFontSize(28); doc.setFont('helvetica', 'bold'); doc.setTextColor(0, 51, 102);
  doc.text('CERTIFICADO DE APROBACIÓN', w / 2, 55, { align: 'center' });
  doc.setDrawColor(0, 180, 216); doc.setLineWidth(1); doc.line(w / 2 - 60, 59, w / 2 + 60, 59);
  // Subtitle
  doc.setFontSize(11); doc.setFont('helvetica', 'normal'); doc.setTextColor(100);
  doc.text('Sistema de Gestión de Seguridad y Salud en el Trabajo', w / 2, 68, { align: 'center' });
  // Certify text
  doc.setFontSize(12); doc.setTextColor(80);
  doc.text('Se certifica que', w / 2, 82, { align: 'center' });
  // User name
  doc.setFontSize(24); doc.setFont('helvetica', 'bold'); doc.setTextColor(0, 51, 102);
  doc.text(currentUser.name.toUpperCase(), w / 2, 96, { align: 'center' });
  doc.setDrawColor(0, 102, 204); doc.setLineWidth(0.5); doc.line(w / 2 - 50, 99, w / 2 + 50, 99);
  // ID
  doc.setFontSize(10); doc.setFont('helvetica', 'normal'); doc.setTextColor(100);
  doc.text(`Identificación: ${currentUser.id}`, w / 2, 107, { align: 'center' });
  // Course info
  const course = COURSES.find(c => c.id === currentCourseId);
  const rec = completedCourses.find(x => x.courseId === currentCourseId);
  doc.setFontSize(11); doc.setTextColor(80);
  doc.text(`Ha completado satisfactoriamente el curso de`, w / 2, 120, { align: 'center' });
  doc.setFontSize(16); doc.setFont('helvetica', 'bold'); doc.setTextColor(0, 102, 204);
  doc.text(course.title.toUpperCase(), w / 2, 130, { align: 'center' });
  doc.setFontSize(10); doc.setFont('helvetica', 'normal'); doc.setTextColor(100);
  doc.text(`Intensidad horaria: ${course.hours} horas | Calificación: ${rec.score}% | Fecha: ${rec.date}`, w / 2, 139, { align: 'center' });
  // Signatures
  doc.setDrawColor(50); doc.setLineWidth(0.3);
  doc.line(55, 170, 125, 170); doc.line(172, 170, 242, 170);
  doc.setFontSize(9); doc.setTextColor(100);
  doc.text('Presidente Seguros de Vida Aurora', 90, 176, { align: 'center' });
  doc.text('Coordinador de Riesgos', 207, 176, { align: 'center' });
  // Footer
  doc.setFontSize(7); doc.setTextColor(150);
  doc.text('Este certificado es válido como soporte de capacitación para el SG-SST según Decreto 1072 de 2015', w / 2, h - 14, { align: 'center' });

  doc.save(`Certificado_${course.title.replace(/\s+/g, '_')}_${currentUser.name.replace(/\s+/g, '_')}.pdf`);
  showToast('Certificado descargado exitosamente', 'success');
}

function sendCertByEmail() {
  // Simulated email send — in production, integrate with EmailJS or backend
  showToast(`Certificado enviado a ${currentUser.email} (simulación)`, 'success');
  console.log('📧 Email simulation:', { to: currentUser.email, subject: 'Tu Certificado SG-SST', body: `Felicitaciones ${currentUser.name}, adjunto encontrarás tu certificado.` });
}

// ===== TOAST =====
function showToast(msg, type = 'info') {
  const t = document.getElementById('toast');
  t.className = `toast ${type}`;
  t.innerHTML = (type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ') + ' ' + msg;
  t.classList.add('active');
  setTimeout(() => t.classList.remove('active'), 3500);
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  const nav = document.getElementById('headerNav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute'; nav.style.top = '64px'; nav.style.left = '0'; nav.style.right = '0';
  nav.style.background = 'rgba(0,51,102,0.98)'; nav.style.flexDirection = 'column'; nav.style.padding = '20px';
  nav.style.gap = '16px';
}
