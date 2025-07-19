import { Box, Typography, Fade, Chip, Card, CardContent, Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react';
import { type Competency } from '../../../store/entities/CurriculumMap';
import { ExpandMore as ExpandIcon } from "@mui/icons-material";


export interface SelectedCompetency extends Competency {
    selectedAbilities: string[];
}

export const COMPETENCY_COLORS: Record<string, string> = {
    'Comunicación': '#E74C3C',
    'Castellano como Segunda Lengua': '#F39C12',
    'Inglés': '#3498DB',
    'Arte y Cultura': '#9B59B6',
    'Personal Social': '#E67E22',
    'Desarrollo Personal, Ciudadanía y Cívica': '#E67E22',
    'Ciencias Sociales': '#34495E',
    'Educación Religiosa': '#8E44AD',
    'Educación Física': '#27AE60',
    'Matemática': '#2980B9',
    'Ciencia y Tecnología': '#16A085',
    'Educación para el Trabajo': '#F1C40F',
    'Descubrimiento del Mundo': '#95A5A6'
};

export interface CompetencyCardProps {
    competency: Competency;
    selectedCompetency: SelectedCompetency | undefined;
    onCompetencyToggle: (competency: Competency) => void;
    onAbilityToggle: (competency: Competency, ability: string) => void;
    index: number;
}

export default function CompetencyCard({ competency, selectedCompetency, onCompetencyToggle, onAbilityToggle, index }: CompetencyCardProps) {
    const [expanded, setExpanded] = useState(false);
    const color = COMPETENCY_COLORS[competency.area] || '#95A5A6';
    const isCompetencySelected = !!selectedCompetency;

    return (
        <Fade in={true} timeout={300} style={{ transitionDelay: `${index * 100}ms` }}>
            <Card
                sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid',
                    borderColor: isCompetencySelected ? color : 'divider',
                    bgcolor: isCompetencySelected ? `${color}08` : 'background.paper',
                    transform: isCompetencySelected ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: isCompetencySelected ? `0 4px 20px ${color}30` : '0 2px 4px rgba(0,0,0,0.1)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 25px ${color}25`,
                        borderColor: color,
                    }
                }}
            >
                <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                        <Checkbox
                            checked={isCompetencySelected}
                            onChange={() => onCompetencyToggle(competency)}
                            sx={{
                                color: color,
                                '&.Mui-checked': {
                                    color: color,
                                },
                                p: 0,
                                mt: 0.5
                            }}
                        />
                        <Box flex={1}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: isCompetencySelected ? color : 'text.primary',
                                    fontWeight: isCompetencySelected ? 600 : 500,
                                    mb: 1,
                                    lineHeight: 1.3
                                }}
                            >
                                {competency.name}
                            </Typography>

                            <Chip
                                label={competency.area}
                                size="small"
                                sx={{
                                    bgcolor: `${color}15`,
                                    color: color,
                                    fontWeight: 500,
                                    mb: 2
                                }}
                            />

                            {/* Habilidades (capacidades) */}
                            {competency.abilities && competency.abilities.length > 0 && (
                                <Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        gap={1}
                                        mb={1}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setExpanded(!expanded);
                                        }}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <Typography variant="body2" color="text.secondary" fontWeight={500}>
                                            Capacidades ({selectedCompetency?.abilities.length || 0}/{competency.abilities.length})
                                        </Typography>
                                        <ExpandIcon
                                            sx={{
                                                fontSize: 18,
                                                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.2s ease'
                                            }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            overflow: 'hidden',
                                            maxHeight: expanded ? '500px' : isCompetencySelected ? '120px' : '60px',
                                            transition: 'max-height 0.3s ease-in-out'
                                        }}
                                    >
                                        <Box sx={{ pl: 1 }}>
                                            {competency.abilities.map((ability, i) => {
                                                const isAbilitySelected = selectedCompetency?.selectedAbilities?.includes(ability) || false;

                                                return (
                                                    <FormControlLabel
                                                        key={i}
                                                        control={
                                                            <Checkbox
                                                                checked={isAbilitySelected}
                                                                disabled={!isCompetencySelected}
                                                                onChange={() => onAbilityToggle(competency, ability)}
                                                                size="small"
                                                                sx={{
                                                                    color: color,
                                                                    '&.Mui-checked': {
                                                                        color: color,
                                                                    },
                                                                    '&.Mui-disabled': {
                                                                        opacity: 0.3
                                                                    }
                                                                }}
                                                            />
                                                        }
                                                        label={
                                                            <Typography
                                                                variant="body2"
                                                                color={isCompetencySelected ? "text.secondary" : "text.disabled"}
                                                                sx={{
                                                                    lineHeight: 1.4,
                                                                    fontWeight: isAbilitySelected ? 500 : 400
                                                                }}
                                                            >
                                                                {ability}
                                                            </Typography>
                                                        }
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'flex-start',
                                                            mb: 0.5,
                                                            ml: 0,
                                                            opacity: isCompetencySelected ? 1 : 0.5
                                                        }}
                                                    />
                                                );
                                            })}
                                        </Box>
                                    </Box>

                                    {isCompetencySelected && selectedCompetency && selectedCompetency.selectedAbilities.length === 0 && (
                                        <Typography
                                            variant="caption"
                                            color="warning.main"
                                            sx={{
                                                display: 'block',
                                                mt: 1,
                                                fontStyle: 'italic',
                                                bgcolor: 'warning.light',
                                                p: 1,
                                                borderRadius: 1
                                            }}
                                        >
                                            ⚠️ Selecciona al menos una capacidad para esta competencia
                                        </Typography>
                                    )}
                                </Box>
                            )}
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Fade>
    );
}
