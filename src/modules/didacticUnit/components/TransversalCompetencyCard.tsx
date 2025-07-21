import { Box, Card, CardContent, Checkbox, Chip, Typography, Fade, FormControlLabel } from '@mui/material';
import { ExpandMore as ExpandIcon } from "@mui/icons-material";
import type { TransversalCompetency } from '../../../store/entities/CurriculumMap';
import { useState } from 'react';

export interface SelectedTransversalCompetency extends TransversalCompetency {
    selectedAbilities: string[];
}

interface TransversalCompetencyCardProps {
    competency: TransversalCompetency;
    selectedCompetency: SelectedTransversalCompetency | undefined;
    onCompetencyToggle: (competency: TransversalCompetency) => void;
    onAbilityToggle: (competency: TransversalCompetency, ability: string) => void;
    index: number;
}

const TRANSVERSAL_COLOR = '#9C27B0'; // Purple color for transversal competencies

export default function TransversalCompetencyCard({ 
    competency, 
    selectedCompetency, 
    onCompetencyToggle, 
    onAbilityToggle,
    index 
}: TransversalCompetencyCardProps) {
    const isCompetencySelected = !!selectedCompetency;

    const [expanded, setExpanded] = useState(false);
    
    return (
        <Fade in={true} timeout={300} style={{ transitionDelay: `${index * 100}ms` }}>
            <Card
                sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid',
                    borderColor: isCompetencySelected ? TRANSVERSAL_COLOR : 'divider',
                    bgcolor: isCompetencySelected ? `${TRANSVERSAL_COLOR}08` : 'background.paper',
                    transform: isCompetencySelected ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: isCompetencySelected ? `0 4px 20px ${TRANSVERSAL_COLOR}30` : '0 2px 4px rgba(0,0,0,0.1)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 25px ${TRANSVERSAL_COLOR}25`,
                        borderColor: TRANSVERSAL_COLOR,
                    }
                }}
            >
                <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="flex-start" gap={2}>
                        <Checkbox
                            checked={isCompetencySelected}
                            onChange={() => onCompetencyToggle(competency)}
                            sx={{
                                color: TRANSVERSAL_COLOR,
                                '&.Mui-checked': {
                                    color: TRANSVERSAL_COLOR,
                                },
                                p: 0,
                                mt: 0.5
                            }}
                        />
                        {/* Competencia Transversal */}
                        <Box flex={1}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: isCompetencySelected ? TRANSVERSAL_COLOR : 'text.primary',
                                    fontWeight: isCompetencySelected ? 600 : 500,
                                    mb: 1,
                                    lineHeight: 1.3
                                }}
                            >
                                {competency.name}
                            </Typography>

                            <Chip
                                label="Competencia Transversal"
                                size="small"
                                sx={{
                                    bgcolor: `${TRANSVERSAL_COLOR}15`,
                                    color: TRANSVERSAL_COLOR,
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
                                            Capacidades ({selectedCompetency?.selectedAbilities.length || 0}/{competency.abilities.length})
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
                                                                    color: TRANSVERSAL_COLOR,
                                                                    '&.Mui-checked': {
                                                                        color: TRANSVERSAL_COLOR,
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
