export type EducationLevel = 'inicial' | 'primaria' | 'secundaria';

export type Cycle =
  | 'Ciclo I'
  | 'Ciclo II'
  | 'Ciclo III'
  | 'Ciclo IV'
  | 'Ciclo V'
  | 'Ciclo VI'
  | 'Ciclo VII'

export type Grade =
  | '0 a 2 años'
  | '3 a 5 años'
  | '1ro'
  | '2do'
  | '3ro'
  | '4to'
  | '5to'
  | '6to'


export type CurricularArea = string

export type Competency = {
  name: string
  area: CurricularArea,
  abilities: string[]
}

export const levelsToCycles: Record<EducationLevel, Cycle[]> = {
  inicial: ['Ciclo I', 'Ciclo II'],
  primaria: ['Ciclo III', 'Ciclo IV', 'Ciclo V'],
  secundaria: ['Ciclo VI', 'Ciclo VII'],
};

export const cyclesToGrades: Record<Cycle, Grade[]> = {
  'Ciclo I': ['0 a 2 años'],
  'Ciclo II': ['3 a 5 años'],
  'Ciclo III': ['1ro', '2do'],
  'Ciclo IV': ['3ro', '4to'],
  'Ciclo V': ['5to', '6to'],
  'Ciclo VI': ['1ro', '2do'],
  'Ciclo VII': ['3ro', '4to', '5to'],
}

export const cyclesToAreas: Record<Cycle, CurricularArea[]> = {
  'Ciclo I': ['Comunicación', 'Personal Social', 'Matemática', 'Descubrimiento del Mundo'],
  'Ciclo II': ['Comunicación', 'Castellano como Segunda Lengua', 'Personal Social', 'Matemática', 'Ciencia y Tecnología'],
  'Ciclo III': ['Comunicación', 'Castellano como Segunda Lengua', 'Inglés', 'Arte y Cultura', 'Personal Social', 'Educación Religiosa', 'Educación Física', 'Matemática', 'Ciencia y Tecnología'],
  'Ciclo IV': ['Comunicación', 'Castellano como Segunda Lengua', 'Inglés', 'Arte y Cultura', 'Personal Social', 'Educación Religiosa', 'Educación Física', 'Matemática', 'Ciencia y Tecnología'],
  'Ciclo V': ['Comunicación', 'Castellano como Segunda Lengua', 'Inglés', 'Arte y Cultura', 'Personal Social', 'Educación Religiosa', 'Educación Física', 'Matemática', 'Ciencia y Tecnología'],
  'Ciclo VI': ['Comunicación', 'Castellano como Segunda Lengua', 'Inglés', 'Arte y Cultura', 'Desarrollo Personal, Ciudadanía y Cívica', 'Ciencias Sociales', 'Educación Religiosa', 'Educación Física', 'Matemática', 'Ciencia y Tecnología', 'Educación para el Trabajo'],
  'Ciclo VII': ['Comunicación', 'Castellano como Segunda Lengua', 'Inglés', 'Arte y Cultura', 'Desarrollo Personal, Ciudadanía y Cívica', 'Ciencias Sociales', 'Educación Religiosa', 'Educación Física', 'Matemática', 'Ciencia y Tecnología', 'Educación para el Trabajo'],
}

export const abilitiesByCompetency: Record<string, string[]> = {
  'Construye su identidad': [
    "Se valora a sí mismo",
    "Autorregula sus emociones",
    "Reflexiona y argumenta éticamente",
    "Vive su sexualidad de manera plena y responsable"
  ],
  'Convive y participa democráticamente en la búsqueda del bien común': [
    "Interactúa con todas las personas",
    "Construye y asume acuerdos y normas",
    "Maneja conflictos de manera constructiva",
    "Delibera sobre asuntos públicos",
    "Participa en acciones que promueven el bienestar común"
  ],
}


export const competenciesByCycle: Record<Cycle, Competency[]> = {
  'Ciclo I': [
    {
      name: 'Construye su identidad', area: 'Personal Social',
      abilities: [
        "Se valora a sí mismo",
        "Autorregula sus emociones",
        "Reflexiona y argumenta éticamente",
        "Vive su sexualidad de manera plena y responsable"]
    }, //id: 1
    {
      name: 'Convive y participa democráticamente en la búsqueda del bien común', area: 'Personal Social',
      abilities: [
        "Interactúa con todas las personas",
        "Construye y asume acuerdos y normas",
        "Maneja conflictos de manera constructiva",
        "Delibera sobre asuntos públicos",
        "Participa en acciones que promueven el bienestar común"]
    }, //asi para todos los ciclos...
    {
      name: 'Se desenvuelve de manera autónoma a través de su motricidad',
      area: 'Psicomotriz',
      abilities: [
        "Comprende su cuerpo",
        "Se expresa corporalmente"
      ]
    }, //id: 2
    {
      name: 'Se comunica oralmente en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 7
    {
      name: "Resuelve problemas de cantidad",
      area: 'Descubrimiento del Mundo',
      abilities: [
        "Traduce cantidades a expresiones numéricas",
        "Comunica su comprensión sobre los números y las operaciones",
        "Usa estrategias y procedimientos de estimación y cálculo",
        "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
      ]
    }, //id: 23
    {
      name: "Resuelve problemas de forma, movimiento y localización",
      area: 'Descubrimiento del Mundo',
      abilities: [
        "Modela objetos con formas geométricas y sus transformaciones",
        "Comunica su comprensión sobre las formas y relaciones geométricas",
        "Usa estrategias y procedimientos para orientarse en el espacio",
        "Argumenta afirmaciones sobre relaciones geométricas"
      ]
    }, //id: 26
    {
      name: "Indaga mediante métodos científicos para construir conocimientos",
      area: 'Descubrimiento del Mundo',
      abilities: [
        "Problematiza situaciones",
        "Diseña estrategias para hacer indagación",
        "Genera y registra datos e información",
        "Analiza datos e información",
        "Evalúa y comunica el proceso y los resultados de su indagación"
      ]
    } //id: 20
  ],
  'Ciclo II': [
    {
      name: 'Construye su identidad',
      area: 'Personal Social',
      abilities: [
        "Se valora a sí mismo",
        "Autorregula sus emociones",
        "Reflexiona y argumenta éticamente",
        "Vive su sexualidad de manera plena y responsable"]
    }, //id: 1
    {
      name: 'Convive y participa democráticamente en la búsqueda del bien común',
      area: 'Personal Social',
      abilities: [
        "Interactúa con todas las personas",
        "Construye y asume acuerdos y normas",
        "Maneja conflictos de manera constructiva",
        "Delibera sobre asuntos públicos",
        "Participa en acciones que promueven el bienestar común"]
    }, //id: 16
    {
      name: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas",
      area: 'Personal Social',
      abilities: [
        "Conoce a Dios y asume su identidad religiosa como persona digna, libre y trascendente",
        "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa"
      ]
    }, //id: 30
    {
      name: 'Se desenvuelve de manera autónoma a través de su motricidad',
      area: 'Psicomotriz',
      abilities: [
        "Comprende su cuerpo",
        "Se expresa corporalmente"
      ]
    }, //id: 2
    {
      name: 'Se comunica oralmente en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 7
    {
      name: 'Lee diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 8
    {
      name: 'Escribe diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 9
    {
      name: 'Crea proyectos desde los lenguajes artísticos',
      area: 'Comunicación',
      abilities: [
        "Explora y experimenta los lenguajes de las artes",
        "Aplica procesos de creación",
        "Evalúa y comunica sus procesos y proyectos."
      ]
    }, //id: 6
    {
      name: "Se comunica oralmente en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 10
    {
      name: "Resuelve problemas de cantidad",
      area: 'Matemática',
      abilities: [
        "Traduce cantidades a expresiones numéricas",
        "Comunica su comprensión sobre los números y las operaciones",
        "Usa estrategias y procedimientos de estimación y cálculo",
        "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
      ]
    }, //id: 23
    {
      name: "Resuelve problemas de forma, movimiento y localización",
      area: 'Matemática',
      abilities: [
        "Modela objetos con formas geométricas y sus transformaciones",
        "Comunica su comprensión sobre las formas y relaciones geométricas",
        "Usa estrategias y procedimientos para orientarse en el espacio",
        "Argumenta afirmaciones sobre relaciones geométricas"
      ]
    }, //id: 26
    {
      name: "Indaga mediante métodos científicos para construir conocimientos",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Problematiza situaciones",
        "Diseña estrategias para hacer indagación",
        "Genera y registra datos e información",
        "Analiza datos e información",
        "Evalúa y comunica el proceso y los resultados de su indagación"
      ]
    } //id: 20
  ],
  // Ciclo III, Ciclo IV y Ciclo V tienen las mismas competencias
  'Ciclo III': [
    {
      name: 'Construye su identidad',
      area: 'Personal Social',
      abilities: [
        "Se valora a sí mismo",
        "Autorregula sus emociones",
        "Reflexiona y argumenta éticamente",
        "Vive su sexualidad de manera plena y responsable"]
    }, //id: 1
    {
      name: 'Convive y participa democráticamente en la búsqueda del bien común',
      area: 'Personal Social',
      abilities: [
        "Interactúa con todas las personas",
        "Construye y asume acuerdos y normas",
        "Maneja conflictos de manera constructiva",
        "Delibera sobre asuntos públicos",
        "Participa en acciones que promueven el bienestar común"]
    }, //id: 16
    {
      name: "Construye interpretaciones históricas",
      area: 'Personal Social',
      abilities: [
        "Interpreta críticamente fuentes diversas",
        "Comprende el tiempo histórico",
        "Explica y argumenta procesos históricos"
      ]
    }, //id: 17
    {
      name: "Gestiona responsablemente el espacio y el ambiente",
      area: 'Personal Social',
      abilities: [
        "Comprende las relaciones entre los elementos naturales y sociales",
        "Maneja fuentes de información para comprender el espacio geográfico y el ambiente.",
        "Genera acciones para preservar el ambiente local y global."
      ]
    }, //id: 18
    {
      name: "Gestiona responsablemente los recursos económicos",
      area: 'Personal Social',
      abilities: [
        "Comprende las relaciones entre los elementos del sistema económico y financiero",
        "Toma decisiones económicas y financieras"
      ]
    }, //id: 19
    {
      name: "Se desenvuelve de manera autónoma a través de su motricidad",
      area: 'Educación Física',
      abilities: [
        "Comprende su cuerpo",
        "Se expresa corporalmente"
      ]
    }, //id: 2
    {
      name: "Asume una vida saludable",
      area: 'Educación Física',
      abilities: [
        "Comprende las relaciones entre la actividad física, alimentación, postura e higiene y la salud",
        "Incorpora prácticas que mejoran su calidad de vida"
      ]
    }, //id: 3
    {
      name: "Interactúa a través de sus habilidades sociomotrices",
      area: 'Educación Física',
      abilities: [
        "Se relaciona utilizando sus habilidades sociomotrices",
        "Crea y aplica estrategias y tácticas de juego"
      ]
    }, //id: 4
    {
      name: 'Se comunica oralmente en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 7
    {
      name: 'Lee diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 8
    {
      name: 'Escribe diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 9
    {
      name: "Aprecia de manera crítica manifestaciones artístico-culturales",
      area: 'Arte y Cultura',
      abilities: [
        "Percibe manifestaciones artístico-culturales",
        "Contextualiza las manifestaciones artístico-culturales",
        "Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales"
      ]
    }, //id: 5
    {
      name: "Crea proyectos desde los lenguajes artísticos",
      area: 'Arte y Cultura',
      abilities: [
        "Explora y experimenta los lenguajes de las artes",
        "Aplica procesos de creación",
        "Evalúa y comunica sus procesos y proyectos."
      ]
    }, //id: 6
    {
      name: "Se comunica oralmente en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 10
    {
      name: "Lee diversos tipos de textos escritos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 11
    {
      name: "Escribe diversos tipos de textos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 12
    {
      name: "Se comunica oralmente en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 13
    {
      name: "Lee diversos tipos de textos escritos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 14
    {
      name: "Escribe diversos tipos de textos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 15
    {
      name: "Resuelve problemas de cantidad",
      area: 'Matemática',
      abilities: [
        "Traduce cantidades a expresiones numéricas",
        "Comunica su comprensión sobre los números y las operaciones",
        "Usa estrategias y procedimientos de estimación y cálculo",
        "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
      ]
    }, //id: 23
    {
      name: "Resuelve problemas de regularidad, equivalencia y cambio",
      area: 'Matemática',
      abilities: [
        "Traduce datos y condiciones a expresiones algebraicas",
        "Comunica su comprensión sobre las relaciones algebraicas",
        "Usa estrategias y procedimientos para encontrar reglas generales",
        "Argumenta afirmaciones sobre relaciones de cambio y equivalencia"
      ]
    }, //id: 24
    {
      name: "Resuelve problemas de gestión de datos e incertidumbre",
      area: 'Matemática',
      abilities: [
        "Representa datos con gráficos y medidas estadísticas o probabilísticas",
        "Comunica la comprensión de los conceptos estadísticos y probabilísticos",
        "Usa estrategias y procedimientos para recopilar y procesar datos",
        "Sustenta conclusiones o decisiones basado en información obtenida"
      ]
    }, //id: 25
    {
      name: "Resuelve problemas de forma, movimiento y localización",
      area: 'Matemática',
      abilities: [
        "Modela objetos con formas geométricas y sus transformaciones",
        "Comunica su comprensión sobre las formas y relaciones geométricas",
        "Usa estrategias y procedimientos para orientarse en el espacio",
        "Argumenta afirmaciones sobre relaciones geométricas"
      ]
    }, //id: 26
    {
      name: "Indaga mediante métodos científicos para construir conocimientos",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Problematiza situaciones",
        "Diseña estrategias para hacer indagación",
        "Genera y registra datos e información",
        "Analiza datos e información",
        "Evalúa y comunica el proceso y los resultados de su indagación"
      ]
    },
    {
      name: "Explica el mundo físico basándose en conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Comprende y usa conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
        "Evalúa las implicancias del saber y del quehacer científico y tecnológico"
      ]
    },
    {
      name: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Determina una alternativa de solución tecnológica",
        "Diseña la alternativa de solución tecnológica",
        "Implementa y valida alternativas de solución tecnológica",
        "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica"
      ]
    },
    {
      name: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas",
      area: 'Educación Religiosa',
      abilities: [
        "Conoce a Dios y asume su identidad religiosa como persona digna, libre y trascendente",
        "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa"
      ]
    },
    {
      name: "Asume la experiencia el encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa",
      area: 'Educación Religiosa',
      abilities: [
        "Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa",
        "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida."
      ]
    }
  ],
  "Ciclo IV": [
    {
      name: 'Construye su identidad',
      area: 'Personal Social',
      abilities: [
        "Se valora a sí mismo",
        "Autorregula sus emociones",
        "Reflexiona y argumenta éticamente",
        "Vive su sexualidad de manera plena y responsable"]
    }, //id: 1
    {
      name: 'Convive y participa democráticamente en la búsqueda del bien común',
      area: 'Personal Social',
      abilities: [
        "Interactúa con todas las personas",
        "Construye y asume acuerdos y normas",
        "Maneja conflictos de manera constructiva",
        "Delibera sobre asuntos públicos",
        "Participa en acciones que promueven el bienestar común"]
    }, //id: 16
    {
      name: "Construye interpretaciones históricas",
      area: 'Personal Social',
      abilities: [
        "Interpreta críticamente fuentes diversas",
        "Comprende el tiempo histórico",
        "Explica y argumenta procesos históricos"
      ]
    }, //id: 17
    {
      name: "Gestiona responsablemente el espacio y el ambiente",
      area: 'Personal Social',
      abilities: [
        "Comprende las relaciones entre los elementos naturales y sociales",
        "Maneja fuentes de información para comprender el espacio geográfico y el ambiente.",
        "Genera acciones para preservar el ambiente local y global."
      ]
    }, //id: 18
    {
      name: "Gestiona responsablemente los recursos económicos",
      area: 'Personal Social',
      abilities: [
        "Comprende las relaciones entre los elementos del sistema económico y financiero",
        "Toma decisiones económicas y financieras"
      ]
    }, //id: 19
    {
      name: "Se desenvuelve de manera autónoma a través de su motricidad",
      area: 'Educación Física',
      abilities: [
        "Comprende su cuerpo",
        "Se expresa corporalmente"
      ]
    }, //id: 2
    {
      name: "Asume una vida saludable",
      area: 'Educación Física',
      abilities: [
        "Comprende las relaciones entre la actividad física, alimentación, postura e higiene y la salud",
        "Incorpora prácticas que mejoran su calidad de vida"
      ]
    }, //id: 3
    {
      name: "Interactúa a través de sus habilidades sociomotrices",
      area: 'Educación Física',
      abilities: [
        "Se relaciona utilizando sus habilidades sociomotrices",
        "Crea y aplica estrategias y tácticas de juego"
      ]
    }, //id: 4
    {
      name: 'Se comunica oralmente en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 7
    {
      name: 'Lee diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 8
    {
      name: 'Escribe diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 9
    {
      name: "Aprecia de manera crítica manifestaciones artístico-culturales",
      area: 'Arte y Cultura',
      abilities: [
        "Percibe manifestaciones artístico-culturales",
        "Contextualiza las manifestaciones artístico-culturales",
        "Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales"
      ]
    }, //id: 5
    {
      name: "Crea proyectos desde los lenguajes artísticos",
      area: 'Arte y Cultura',
      abilities: [
        "Explora y experimenta los lenguajes de las artes",
        "Aplica procesos de creación",
        "Evalúa y comunica sus procesos y proyectos."
      ]
    }, //id: 6
    {
      name: "Se comunica oralmente en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 10
    {
      name: "Lee diversos tipos de textos escritos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 11
    {
      name: "Escribe diversos tipos de textos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 12
    {
      name: "Se comunica oralmente en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 13
    {
      name: "Lee diversos tipos de textos escritos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 14
    {
      name: "Escribe diversos tipos de textos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 15
    {
      name: "Resuelve problemas de cantidad",
      area: 'Matemática',
      abilities: [
        "Traduce cantidades a expresiones numéricas",
        "Comunica su comprensión sobre los números y las operaciones",
        "Usa estrategias y procedimientos de estimación y cálculo",
        "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
      ]
    }, //id: 23
    {
      name: "Resuelve problemas de regularidad, equivalencia y cambio",
      area: 'Matemática',
      abilities: [
        "Traduce datos y condiciones a expresiones algebraicas",
        "Comunica su comprensión sobre las relaciones algebraicas",
        "Usa estrategias y procedimientos para encontrar reglas generales",
        "Argumenta afirmaciones sobre relaciones de cambio y equivalencia"
      ]
    }, //id: 24
    {
      name: "Resuelve problemas de gestión de datos e incertidumbre",
      area: 'Matemática',
      abilities: [
        "Representa datos con gráficos y medidas estadísticas o probabilísticas",
        "Comunica la comprensión de los conceptos estadísticos y probabilísticos",
        "Usa estrategias y procedimientos para recopilar y procesar datos",
        "Sustenta conclusiones o decisiones basado en información obtenida"
      ]
    }, //id: 25
    {
      name: "Resuelve problemas de forma, movimiento y localización",
      area: 'Matemática',
      abilities: [
        "Modela objetos con formas geométricas y sus transformaciones",
        "Comunica su comprensión sobre las formas y relaciones geométricas",
        "Usa estrategias y procedimientos para orientarse en el espacio",
        "Argumenta afirmaciones sobre relaciones geométricas"
      ]
    }, //id: 26
    {
      name: "Indaga mediante métodos científicos para construir conocimientos",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Problematiza situaciones",
        "Diseña estrategias para hacer indagación",
        "Genera y registra datos e información",
        "Analiza datos e información",
        "Evalúa y comunica el proceso y los resultados de su indagación"
      ]
    },
    {
      name: "Explica el mundo físico basándose en conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Comprende y usa conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
        "Evalúa las implicancias del saber y del quehacer científico y tecnológico"
      ]
    },
    {
      name: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Determina una alternativa de solución tecnológica",
        "Diseña la alternativa de solución tecnológica",
        "Implementa y valida alternativas de solución tecnológica",
        "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica"
      ]
    },
    {
      name: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas",
      area: 'Educación Religiosa',
      abilities: [
        "Conoce a Dios y asume su identidad religiosa como persona digna, libre y trascendente",
        "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa"
      ]
    },
    {
      name: "Asume la experiencia el encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa",
      area: 'Educación Religiosa',
      abilities: [
        "Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa",
        "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida."
      ]
    }
  ],
  "Ciclo V": [
    {
      name: 'Construye su identidad',
      area: 'Personal Social',
      abilities: [
        "Se valora a sí mismo",
        "Autorregula sus emociones",
        "Reflexiona y argumenta éticamente",
        "Vive su sexualidad de manera plena y responsable"]
    }, //id: 1
    {
      name: 'Convive y participa democráticamente en la búsqueda del bien común',
      area: 'Personal Social',
      abilities: [
        "Interactúa con todas las personas",
        "Construye y asume acuerdos y normas",
        "Maneja conflictos de manera constructiva",
        "Delibera sobre asuntos públicos",
        "Participa en acciones que promueven el bienestar común"]
    }, //id: 16
    {
      name: "Construye interpretaciones históricas",
      area: 'Personal Social',
      abilities: [
        "Interpreta críticamente fuentes diversas",
        "Comprende el tiempo histórico",
        "Explica y argumenta procesos históricos"
      ]
    }, //id: 17
    {
      name: "Gestiona responsablemente el espacio y el ambiente",
      area: 'Personal Social',
      abilities: [
        "Comprende las relaciones entre los elementos naturales y sociales",
        "Maneja fuentes de información para comprender el espacio geográfico y el ambiente.",
        "Genera acciones para preservar el ambiente local y global."
      ]
    }, //id: 18
    {
      name: "Gestiona responsablemente los recursos económicos",
      area: 'Personal Social',
      abilities: [
        "Comprende las relaciones entre los elementos del sistema económico y financiero",
        "Toma decisiones económicas y financieras"
      ]
    }, //id: 19
    {
      name: "Se desenvuelve de manera autónoma a través de su motricidad",
      area: 'Educación Física',
      abilities: [
        "Comprende su cuerpo",
        "Se expresa corporalmente"
      ]
    }, //id: 2
    {
      name: "Asume una vida saludable",
      area: 'Educación Física',
      abilities: [
        "Comprende las relaciones entre la actividad física, alimentación, postura e higiene y la salud",
        "Incorpora prácticas que mejoran su calidad de vida"
      ]
    }, //id: 3
    {
      name: "Interactúa a través de sus habilidades sociomotrices",
      area: 'Educación Física',
      abilities: [
        "Se relaciona utilizando sus habilidades sociomotrices",
        "Crea y aplica estrategias y tácticas de juego"
      ]
    }, //id: 4
    {
      name: 'Se comunica oralmente en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 7
    {
      name: 'Lee diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 8
    {
      name: 'Escribe diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 9
    {
      name: "Aprecia de manera crítica manifestaciones artístico-culturales",
      area: 'Arte y Cultura',
      abilities: [
        "Percibe manifestaciones artístico-culturales",
        "Contextualiza las manifestaciones artístico-culturales",
        "Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales"
      ]
    }, //id: 5
    {
      name: "Crea proyectos desde los lenguajes artísticos",
      area: 'Arte y Cultura',
      abilities: [
        "Explora y experimenta los lenguajes de las artes",
        "Aplica procesos de creación",
        "Evalúa y comunica sus procesos y proyectos."
      ]
    }, //id: 6
    {
      name: "Se comunica oralmente en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 10
    {
      name: "Lee diversos tipos de textos escritos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 11
    {
      name: "Escribe diversos tipos de textos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 12
    {
      name: "Se comunica oralmente en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 13
    {
      name: "Lee diversos tipos de textos escritos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 14
    {
      name: "Escribe diversos tipos de textos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 15
    {
      name: "Resuelve problemas de cantidad",
      area: 'Matemática',
      abilities: [
        "Traduce cantidades a expresiones numéricas",
        "Comunica su comprensión sobre los números y las operaciones",
        "Usa estrategias y procedimientos de estimación y cálculo",
        "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
      ]
    }, //id: 23
    {
      name: "Resuelve problemas de regularidad, equivalencia y cambio",
      area: 'Matemática',
      abilities: [
        "Traduce datos y condiciones a expresiones algebraicas",
        "Comunica su comprensión sobre las relaciones algebraicas",
        "Usa estrategias y procedimientos para encontrar reglas generales",
        "Argumenta afirmaciones sobre relaciones de cambio y equivalencia"
      ]
    }, //id: 24
    {
      name: "Resuelve problemas de gestión de datos e incertidumbre",
      area: 'Matemática',
      abilities: [
        "Representa datos con gráficos y medidas estadísticas o probabilísticas",
        "Comunica la comprensión de los conceptos estadísticos y probabilísticos",
        "Usa estrategias y procedimientos para recopilar y procesar datos",
        "Sustenta conclusiones o decisiones basado en información obtenida"
      ]
    }, //id: 25
    {
      name: "Resuelve problemas de forma, movimiento y localización",
      area: 'Matemática',
      abilities: [
        "Modela objetos con formas geométricas y sus transformaciones",
        "Comunica su comprensión sobre las formas y relaciones geométricas",
        "Usa estrategias y procedimientos para orientarse en el espacio",
        "Argumenta afirmaciones sobre relaciones geométricas"
      ]
    }, //id: 26
    {
      name: "Indaga mediante métodos científicos para construir conocimientos",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Problematiza situaciones",
        "Diseña estrategias para hacer indagación",
        "Genera y registra datos e información",
        "Analiza datos e información",
        "Evalúa y comunica el proceso y los resultados de su indagación"
      ]
    },
    {
      name: "Explica el mundo físico basándose en conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Comprende y usa conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
        "Evalúa las implicancias del saber y del quehacer científico y tecnológico"
      ]
    },
    {
      name: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Determina una alternativa de solución tecnológica",
        "Diseña la alternativa de solución tecnológica",
        "Implementa y valida alternativas de solución tecnológica",
        "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica"
      ]
    },
    {
      name: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas",
      area: 'Educación Religiosa',
      abilities: [
        "Conoce a Dios y asume su identidad religiosa como persona digna, libre y trascendente",
        "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa"
      ]
    },
    {
      name: "Asume la experiencia el encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa",
      area: 'Educación Religiosa',
      abilities: [
        "Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa",
        "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida."
      ]
    }
  ],
  "Ciclo VI": [
    {
      name: 'Construye su identidad',
      area: 'Desarrollo Personal, Ciudadanía y Cívica',
      abilities: [
        "Se valora a sí mismo",
        "Autorregula sus emociones",
        "Reflexiona y argumenta éticamente",
        "Vive su sexualidad de manera plena y responsable"]
    }, //id: 1
    {
      name: 'Convive y participa democráticamente en la búsqueda del bien común',
      area: 'Desarrollo Personal, Ciudadanía y Cívica',
      abilities: [
        "Interactúa con todas las personas",
        "Construye y asume acuerdos y normas",
        "Maneja conflictos de manera constructiva",
        "Delibera sobre asuntos públicos",
        "Participa en acciones que promueven el bienestar común"]
    }, //id: 16
    {
      name: "Construye interpretaciones históricas",
      area: 'Ciencias Sociales',
      abilities: [
        "Interpreta críticamente fuentes diversas",
        "Comprende el tiempo histórico",
        "Explica y argumenta procesos históricos"
      ]
    }, //id: 17
    {
      name: "Gestiona responsablemente el espacio y el ambiente",
      area: 'Ciencias Sociales',
      abilities: [
        "Comprende las relaciones entre los elementos naturales y sociales",
        "Maneja fuentes de información para comprender el espacio geográfico y el ambiente.",
        "Genera acciones para preservar el ambiente local y global."
      ]
    }, //id: 18
    {
      name: "Gestiona responsablemente los recursos económicos",
      area: 'Ciencias Sociales',
      abilities: [
        "Comprende las relaciones entre los elementos del sistema económico y financiero",
        "Toma decisiones económicas y financieras"
      ]
    }, //id: 19
    {
      name: "Se desenvuelve de manera autónoma a través de su motricidad",
      area: 'Educación Física',
      abilities: [
        "Comprende su cuerpo",
        "Se expresa corporalmente"
      ]
    }, //id: 2
    {
      name: "Asume una vida saludable",
      area: 'Educación Física',
      abilities: [
        "Comprende las relaciones entre la actividad física, alimentación, postura e higiene y la salud",
        "Incorpora prácticas que mejoran su calidad de vida"
      ]
    }, //id: 3
    {
      name: "Interactúa a través de sus habilidades sociomotrices",
      area: 'Educación Física',
      abilities: [
        "Se relaciona utilizando sus habilidades sociomotrices",
        "Crea y aplica estrategias y tácticas de juego"
      ]
    }, //id: 4
    {
      name: 'Se comunica oralmente en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 7
    {
      name: 'Lee diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 8
    {
      name: 'Escribe diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 9
    {
      name: "Aprecia de manera crítica manifestaciones artístico-culturales",
      area: 'Arte y Cultura',
      abilities: [
        "Percibe manifestaciones artístico-culturales",
        "Contextualiza las manifestaciones artístico-culturales",
        "Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales"
      ]
    }, //id: 5
    {
      name: "Crea proyectos desde los lenguajes artísticos",
      area: 'Arte y Cultura',
      abilities: [
        "Explora y experimenta los lenguajes de las artes",
        "Aplica procesos de creación",
        "Evalúa y comunica sus procesos y proyectos."
      ]
    }, //id: 6
    {
      name: "Se comunica oralmente en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 10
    {
      name: "Lee diversos tipos de textos escritos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 11
    {
      name: "Escribe diversos tipos de textos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 12
    {
      name: "Se comunica oralmente en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 13
    {
      name: "Lee diversos tipos de textos escritos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 14
    {
      name: "Escribe diversos tipos de textos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 15
    {
      name: "Resuelve problemas de cantidad",
      area: 'Matemática',
      abilities: [
        "Traduce cantidades a expresiones numéricas",
        "Comunica su comprensión sobre los números y las operaciones",
        "Usa estrategias y procedimientos de estimación y cálculo",
        "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
      ]
    }, //id: 23
    {
      name: "Resuelve problemas de regularidad, equivalencia y cambio",
      area: 'Matemática',
      abilities: [
        "Traduce datos y condiciones a expresiones algebraicas",
        "Comunica su comprensión sobre las relaciones algebraicas",
        "Usa estrategias y procedimientos para encontrar reglas generales",
        "Argumenta afirmaciones sobre relaciones de cambio y equivalencia"
      ]
    }, //id: 24
    {
      name: "Resuelve problemas de gestión de datos e incertidumbre",
      area: 'Matemática',
      abilities: [
        "Representa datos con gráficos y medidas estadísticas o probabilísticas",
        "Comunica la comprensión de los conceptos estadísticos y probabilísticos",
        "Usa estrategias y procedimientos para recopilar y procesar datos",
        "Sustenta conclusiones o decisiones basado en información obtenida"
      ]
    }, //id: 25
    {
      name: "Resuelve problemas de forma, movimiento y localización",
      area: 'Matemática',
      abilities: [
        "Modela objetos con formas geométricas y sus transformaciones",
        "Comunica su comprensión sobre las formas y relaciones geométricas",
        "Usa estrategias y procedimientos para orientarse en el espacio",
        "Argumenta afirmaciones sobre relaciones geométricas"
      ]
    }, //id: 26
    {
      name: "Indaga mediante métodos científicos para construir conocimientos",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Problematiza situaciones",
        "Diseña estrategias para hacer indagación",
        "Genera y registra datos e información",
        "Analiza datos e información",
        "Evalúa y comunica el proceso y los resultados de su indagación"
      ]
    },
    {
      name: "Explica el mundo físico basándose en conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Comprende y usa conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
        "Evalúa las implicancias del saber y del quehacer científico y tecnológico"
      ]
    },
    {
      name: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Determina una alternativa de solución tecnológica",
        "Diseña la alternativa de solución tecnológica",
        "Implementa y valida alternativas de solución tecnológica",
        "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica"
      ]
    },
    {
      name: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas",
      area: 'Educación Religiosa',
      abilities: [
        "Conoce a Dios y asume su identidad religiosa como persona digna, libre y trascendente",
        "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa"
      ]
    },
    {
      name: "Asume la experiencia el encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa",
      area: 'Educación Religiosa',
      abilities: [
        "Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa",
        "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida."
      ]
    },
    {
      name: "Gestiona proyectos de emprendimiento económico o social",
      area: 'Educación para el Trabajo',
      abilities: [
        "Crea propuestas de valor",
        "Trabaja cooperativamente para lograr objetivos y metas",
        "Aplica habilidades técnicas",
        "Evalúa los resultados del proyecto de emprendimiento"
      ]
    }
  ],
  "Ciclo VII": [
    {
      name: 'Construye su identidad',
      area: 'Desarrollo Personal, Ciudadanía y Cívica',
      abilities: [
        "Se valora a sí mismo",
        "Autorregula sus emociones",
        "Reflexiona y argumenta éticamente",
        "Vive su sexualidad de manera plena y responsable"]
    }, //id: 1
    {
      name: 'Convive y participa democráticamente en la búsqueda del bien común',
      area: 'Desarrollo Personal, Ciudadanía y Cívica',
      abilities: [
        "Interactúa con todas las personas",
        "Construye y asume acuerdos y normas",
        "Maneja conflictos de manera constructiva",
        "Delibera sobre asuntos públicos",
        "Participa en acciones que promueven el bienestar común"]
    }, //id: 16
    {
      name: "Construye interpretaciones históricas",
      area: 'Ciencias Sociales',
      abilities: [
        "Interpreta críticamente fuentes diversas",
        "Comprende el tiempo histórico",
        "Explica y argumenta procesos históricos"
      ]
    }, //id: 17
    {
      name: "Gestiona responsablemente el espacio y el ambiente",
      area: 'Ciencias Sociales',
      abilities: [
        "Comprende las relaciones entre los elementos naturales y sociales",
        "Maneja fuentes de información para comprender el espacio geográfico y el ambiente.",
        "Genera acciones para preservar el ambiente local y global."
      ]
    }, //id: 18
    {
      name: "Gestiona responsablemente los recursos económicos",
      area: 'Ciencias Sociales',
      abilities: [
        "Comprende las relaciones entre los elementos del sistema económico y financiero",
        "Toma decisiones económicas y financieras"
      ]
    }, //id: 19
    {
      name: "Se desenvuelve de manera autónoma a través de su motricidad",
      area: 'Educación Física',
      abilities: [
        "Comprende su cuerpo",
        "Se expresa corporalmente"
      ]
    }, //id: 2
    {
      name: "Asume una vida saludable",
      area: 'Educación Física',
      abilities: [
        "Comprende las relaciones entre la actividad física, alimentación, postura e higiene y la salud",
        "Incorpora prácticas que mejoran su calidad de vida"
      ]
    }, //id: 3
    {
      name: "Interactúa a través de sus habilidades sociomotrices",
      area: 'Educación Física',
      abilities: [
        "Se relaciona utilizando sus habilidades sociomotrices",
        "Crea y aplica estrategias y tácticas de juego"
      ]
    }, //id: 4
    {
      name: 'Se comunica oralmente en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 7
    {
      name: 'Lee diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 8
    {
      name: 'Escribe diversos tipos de textos en lengua materna',
      area: 'Comunicación',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 9
    {
      name: "Aprecia de manera crítica manifestaciones artístico-culturales",
      area: 'Arte y Cultura',
      abilities: [
        "Percibe manifestaciones artístico-culturales",
        "Contextualiza las manifestaciones artístico-culturales",
        "Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales"
      ]
    }, //id: 5
    {
      name: "Crea proyectos desde los lenguajes artísticos",
      area: 'Arte y Cultura',
      abilities: [
        "Explora y experimenta los lenguajes de las artes",
        "Aplica procesos de creación",
        "Evalúa y comunica sus procesos y proyectos."
      ]
    }, //id: 6
    {
      name: "Se comunica oralmente en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 10
    {
      name: "Lee diversos tipos de textos escritos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 11
    {
      name: "Escribe diversos tipos de textos en castellano como segunda lengua",
      area: 'Castellano como Segunda Lengua',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 12
    {
      name: "Se comunica oralmente en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información de textos orales",
        "Infiere e interpreta información de textos orales",
        "Adecua, organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza recursos no verbales y paraverbales de forma estratégica",
        "Interactúa estratégicamente con distintos interlocutores",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
      ]
    }, //id: 13
    {
      name: "Lee diversos tipos de textos escritos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Obtiene información del texto escrito",
        "Infiere e interpreta información del texto",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 14
    {
      name: "Escribe diversos tipos de textos en inglés como lengua extranjera",
      area: 'Inglés',
      abilities: [
        "Adecúa el texto a la situación comunicativa",
        "Organiza y desarrolla las ideas de forma coherente y cohesionada",
        "Utiliza convenciones del lenguaje escrito de forma pertinente",
        "Reflexiona y evalúa la forma, el contenido y el contexto del texto escrito"
      ]
    }, //id: 15
    {
      name: "Resuelve problemas de cantidad",
      area: 'Matemática',
      abilities: [
        "Traduce cantidades a expresiones numéricas",
        "Comunica su comprensión sobre los números y las operaciones",
        "Usa estrategias y procedimientos de estimación y cálculo",
        "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
      ]
    }, //id: 23
    {
      name: "Resuelve problemas de regularidad, equivalencia y cambio",
      area: 'Matemática',
      abilities: [
        "Traduce datos y condiciones a expresiones algebraicas",
        "Comunica su comprensión sobre las relaciones algebraicas",
        "Usa estrategias y procedimientos para encontrar reglas generales",
        "Argumenta afirmaciones sobre relaciones de cambio y equivalencia"
      ]
    }, //id: 24
    {
      name: "Resuelve problemas de gestión de datos e incertidumbre",
      area: 'Matemática',
      abilities: [
        "Representa datos con gráficos y medidas estadísticas o probabilísticas",
        "Comunica la comprensión de los conceptos estadísticos y probabilísticos",
        "Usa estrategias y procedimientos para recopilar y procesar datos",
        "Sustenta conclusiones o decisiones basado en información obtenida"
      ]
    }, //id: 25
    {
      name: "Resuelve problemas de forma, movimiento y localización",
      area: 'Matemática',
      abilities: [
        "Modela objetos con formas geométricas y sus transformaciones",
        "Comunica su comprensión sobre las formas y relaciones geométricas",
        "Usa estrategias y procedimientos para orientarse en el espacio",
        "Argumenta afirmaciones sobre relaciones geométricas"
      ]
    }, //id: 26
    {
      name: "Indaga mediante métodos científicos para construir conocimientos",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Problematiza situaciones",
        "Diseña estrategias para hacer indagación",
        "Genera y registra datos e información",
        "Analiza datos e información",
        "Evalúa y comunica el proceso y los resultados de su indagación"
      ]
    },
    {
      name: "Explica el mundo físico basándose en conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Comprende y usa conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
        "Evalúa las implicancias del saber y del quehacer científico y tecnológico"
      ]
    },
    {
      name: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno",
      area: 'Ciencia y Tecnología',
      abilities: [
        "Determina una alternativa de solución tecnológica",
        "Diseña la alternativa de solución tecnológica",
        "Implementa y valida alternativas de solución tecnológica",
        "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica"
      ]
    },
    {
      name: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas",
      area: 'Educación Religiosa',
      abilities: [
        "Conoce a Dios y asume su identidad religiosa como persona digna, libre y trascendente",
        "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa"
      ]
    },
    {
      name: "Asume la experiencia el encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa",
      area: 'Educación Religiosa',
      abilities: [
        "Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa",
        "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida."
      ]
    },
    {
      name: "Gestiona proyectos de emprendimiento económico o social",
      area: 'Educación para el Trabajo',
      abilities: [
        "Crea propuestas de valor",
        "Trabaja cooperativamente para lograr objetivos y metas",
        "Aplica habilidades técnicas",
        "Evalúa los resultados del proyecto de emprendimiento"
      ]
    }
  ],
}

export const transversalApproaches: string[] = [
  'Enfoque intercultural',
  'Enfoque de atención a la diversidad',
  'Enfoque de igualdad de género',
  'Enfoque ambiental',
  'Enfoque de derechos',
  'Enfoque búsqueda de la excelencia',
  'Enfoque orientación al bien común'
]

export const transversalCompetencies: string[] = [
  "Se desenvuelve en entornos virtuales generados por las TIC",
  "Gestiona su aprendizaje de manera autónoma"
]