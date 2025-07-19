import { Box, Typography, Fade, Card, CardContent, Checkbox, FormControlLabel } from '@mui/material'
import { Groups as GroupsIcon, Psychology as PsychologyIcon, Balance as BalanceIcon, 
         Park, Gavel as GavelIcon, EmojiEvents as TrophyIcon, 
         Favorite as HeartIcon } from "@mui/icons-material";

import LanguageIcon from '@mui/icons-material/Language';
// =>
const IconComponent = LanguageIcon; // ya tiene props, incluyendo sx



export const TRANSVERSAL_APPROACH_COLORS: Record<string, string> = {
    'Enfoque intercultural': '#FF6B6B',
    'Enfoque de atención a la diversidad': '#4ECDC4', 
    'Enfoque de igualdad de género': '#45B7D1',
    'Enfoque ambiental': '#96CEB4',
    'Enfoque de derechos': '#FFEAA7',
    'Enfoque búsqueda de la excelencia': '#DDA0DD',
    'Enfoque orientación al bien común': '#FFB347'
};

export const TRANSVERSAL_APPROACH_ICONS: Record<string, React.ComponentType> = {
    'Enfoque intercultural': GroupsIcon,
    'Enfoque de atención a la diversidad': PsychologyIcon,
    'Enfoque de igualdad de género': BalanceIcon,
    'Enfoque ambiental': Park,
    'Enfoque de derechos': GavelIcon,
    'Enfoque búsqueda de la excelencia': TrophyIcon,
    'Enfoque orientación al bien común': HeartIcon
};

export const TRANSVERSAL_APPROACH_DESCRIPTIONS: Record<string, string> = {
    'Enfoque intercultural': 'Busca el reconocimiento de las diferencias culturales como una de las características de la sociedad peruana, promoviendo el diálogo intercultural.',
    'Enfoque de atención a la diversidad': 'Reconoce que todos los estudiantes tienen derecho a oportunidades y logros de aprendizaje de calidad, independientemente de sus diferencias.',
    'Enfoque de igualdad de género': 'Busca brindar las mismas oportunidades a hombres y mujeres, eliminando situaciones de desigualdad y discriminación.',
    'Enfoque ambiental': 'Orienta la educación hacia la formación de una conciencia crítica y colectiva sobre la problemática ambiental y la condición del cambio climático.',
    'Enfoque de derechos': 'Reconoce a los estudiantes como sujetos de derechos y no como objetos de cuidado, promoviendo su participación activa.',
    'Enfoque búsqueda de la excelencia': 'Significa utilizar al máximo las facultades y adquirir estrategias para el éxito de las propias metas a nivel personal y social.',
    'Enfoque orientación al bien común': 'Busca que el conocimiento, los valores y la educación sean bienes que todos compartimos, promoviendo acciones en beneficio de todos.'
};

export interface TransversalApproachCardProps {
    approach: string;
    isSelected: boolean;
    onToggle: (approach: string) => void;
    index: number;
}

export default function TransversalApproachCard({ approach, isSelected, onToggle, index }: TransversalApproachCardProps) {
    const color = TRANSVERSAL_APPROACH_COLORS[approach] || '#95A5A6';
    const IconComponent = TRANSVERSAL_APPROACH_ICONS[approach];
    const description = TRANSVERSAL_APPROACH_DESCRIPTIONS[approach] || '';

    return (
        <Fade in={true} timeout={300} style={{ transitionDelay: `${index * 100}ms` }}>
            <Card
                sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid',
                    borderColor: isSelected ? color : 'divider',
                    bgcolor: isSelected ? `${color}08` : 'background.paper',
                    transform: isSelected ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: isSelected ? `0 4px 20px ${color}30` : '0 2px 4px rgba(0,0,0,0.1)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 25px ${color}25`,
                        borderColor: color,
                    }
                }}
                onClick={() => onToggle(approach)}
            >
                <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                        <Checkbox
                            checked={isSelected}
                            onChange={() => onToggle(approach)}
                            sx={{
                                color: color,
                                '&.Mui-checked': {
                                    color: color,
                                },
                                p: 0,
                                mt: 0.5
                            }}
                        />
                        
                        <Box 
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 48,
                                height: 48,
                                borderRadius: '12px',
                                bgcolor: `${color}15`,
                                color: color,
                                mt: 0.5
                            }}
                        >
                            {IconComponent && <IconComponent />}
                        </Box>

                        <Box flex={1}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: isSelected ? color : 'text.primary',
                                    fontWeight: isSelected ? 600 : 500,
                                    mb: 1,
                                    lineHeight: 1.3
                                }}
                            >
                                {approach}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    lineHeight: 1.4,
                                    opacity: isSelected ? 1 : 0.8
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Fade>
    );
}