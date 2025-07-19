import { 
    Box, 
    Typography, 
    TextField, 
    Alert, 
    AlertTitle, 
    Card, 
    CardContent, 
    Chip,
    Grid,
    Paper
} from '@mui/material'
import { 
    Info as InfoIcon, 
    Lightbulb as LightbulbIcon,
    School as SchoolIcon,
    Psychology as PsychologyIcon,
    EmojiEvents as ChallengeIcon
} from '@mui/icons-material';
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore';
import { useState } from 'react';

const SITUATION_EXAMPLES = [
    {
        title: "Problemática ambiental local",
        description: "Los estudiantes investigan la contaminación del río de su comunidad y proponen soluciones.",
        context: "Ambiental",
        color: "#4CAF50"
    },
    {
        title: "Tradiciones culturales",
        description: "Explorar las festividades y costumbres de la comunidad para valorar la identidad cultural.",
        context: "Intercultural",
        color: "#FF9800"
    },
    {
        title: "Emprendimiento juvenil",
        description: "Crear un proyecto de negocio que resuelva una necesidad de la comunidad escolar.",
        context: "Económico",
        color: "#2196F3"
    },
    {
        title: "Salud y bienestar",
        description: "Analizar los hábitos alimenticios y proponer un plan de vida saludable.",
        context: "Social",
        color: "#E91E63"
    },
    {
        title: "Tecnología educativa",
        description: "Usar herramientas digitales para crear contenido educativo sobre un tema de interés.",
        context: "Tecnológico",
        color: "#9C27B0"
    },
    {
        title: "Convivencia escolar",
        description: "Desarrollar estrategias para mejorar las relaciones interpersonales en el aula.",
        context: "Social-emocional",
        color: "#607D8B"
    }
];

export default function Step5SignificantSituation() {
    const { significantSituation, setSignificantSituation, selectedTransversalApproaches } = useDidacticUnitStore();
    const [selectedExample, setSelectedExample] = useState<string | null>(null);

    const handleExampleClick = (description: string) => {
        setSignificantSituation(description);
        setSelectedExample(description);
    };

    const getCharacterCount = () => significantSituation.length;
    const getCharacterStatus = () => {
        const count = getCharacterCount();
        if (count < 100) return { color: 'warning.main', message: 'Muy breve' };
        if (count < 200) return { color: 'info.main', message: 'Adecuado' };
        if (count < 400) return { color: 'success.main', message: 'Bien detallado' };
        return { color: 'error.main', message: 'Quizás muy extenso' };
    };

    const status = getCharacterStatus();

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Paso 5: Situación Significativa
            </Typography>
            
            <Alert 
                severity="info" 
                icon={<InfoIcon />}
                sx={{ mb: 4 }}
            >
                <AlertTitle sx={{ fontWeight: 600 }}>
                    Define el contexto de aprendizaje
                </AlertTitle>
                La situación significativa contextualiza la sesión con una problemática, reto o contexto 
                cercano al estudiante. Debe ser relevante, desafiante y conectada con su realidad para 
                dar sentido a las competencias y áreas elegidas.
            </Alert>

            {/* Ejemplos de situaciones significativas */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LightbulbIcon color="primary" />
                    Ejemplos de situaciones significativas
                </Typography>
                
                <Grid container spacing={2}>
                    {SITUATION_EXAMPLES.map((example, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card
                                sx={{
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    border: selectedExample === example.description ? `2px solid ${example.color}` : '1px solid',
                                    borderColor: selectedExample === example.description ? example.color : 'divider',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 4px 12px ${example.color}30`
                                    }
                                }}
                                onClick={() => handleExampleClick(example.description)}
                            >
                                <CardContent sx={{ p: 2 }}>
                                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                                        <Typography variant="subtitle1" fontWeight={600}>
                                            {example.title}
                                        </Typography>
                                        <Chip 
                                            label={example.context}
                                            size="small"
                                            sx={{ 
                                                bgcolor: `${example.color}15`,
                                                color: example.color,
                                                fontWeight: 500
                                            }}
                                        />
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {example.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Campo de texto para la situación significativa */}
            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SchoolIcon color="primary" />
                    Describe tu situación significativa
                </Typography>
                
                <TextField
                    fullWidth
                    multiline
                    rows={6}
                    value={significantSituation}
                    onChange={(e) => setSignificantSituation(e.target.value)}
                    placeholder="Describe la situación, problemática o reto que enfrentarán los estudiantes. Por ejemplo: 'En nuestra comunidad se ha observado un incremento en la generación de residuos sólidos, lo que está afectando la salud y el ambiente. Los estudiantes investigarán las causas de este problema y propondrán alternativas de solución desde su rol como ciudadanos responsables...'"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: 'primary.main',
                            },
                        },
                    }}
                />
                
                <Box display="flex" justifyContent="between" alignItems="center" mt={1}>
                    <Typography variant="caption" color={status.color}>
                        {getCharacterCount()} caracteres - {status.message}
                    </Typography>
                </Box>
            </Paper>

            {/* Conexión con enfoques transversales seleccionados */}
            {selectedTransversalApproaches.length > 0 && (
                <Alert severity="success" sx={{ mb: 3 }}>
                    <AlertTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PsychologyIcon />
                        Enfoques transversales a considerar
                    </AlertTitle>
                    Recuerda integrar en tu situación significativa los siguientes enfoques que seleccionaste:
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedTransversalApproaches.map((approach) => (
                            <Chip
                                key={approach}
                                label={approach}
                                size="small"
                                color="success"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                </Alert>
            )}

            {/* Validaciones y sugerencias */}
            {significantSituation.length === 0 && (
                <Alert severity="warning">
                    <AlertTitle>Campo requerido</AlertTitle>
                    La situación significativa es fundamental para contextualizar el aprendizaje. 
                    Te sugerimos usar uno de los ejemplos como punto de partida.
                </Alert>
            )}

            {significantSituation.length > 0 && significantSituation.length < 100 && (
                <Alert severity="info">
                    <AlertTitle>Desarrolla más la situación</AlertTitle>
                    Una buena situación significativa debe ser más detallada. Considera agregar:
                    el contexto específico, el desafío o problema, y cómo se conecta con la realidad del estudiante.
                </Alert>
            )}

            {significantSituation.length >= 200 && (
                <Alert severity="success" icon={<ChallengeIcon />}>
                    <AlertTitle>¡Excelente situación significativa!</AlertTitle>
                    Has creado una descripción detallada que ayudará a contextualizar el aprendizaje 
                    de manera significativa para tus estudiantes.
                </Alert>
            )}
        </Box>
    );
}