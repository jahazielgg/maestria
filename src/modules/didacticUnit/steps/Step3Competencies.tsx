import { Box, Typography, Grid, Fade, IconButton, Chip } from '@mui/material'
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore'
import { useState } from 'react';
import { competenciesByCycle, type Competency } from '../../../store/entities/CurriculumMap';
import { CheckCircle as CheckIcon, Edit as EditIcon } from "@mui/icons-material";
import CompetencyCard, { COMPETENCY_COLORS, type SelectedCompetency } from '../components/CompetencyCard';

export default function Step3Competencies() {
    const {
        educationLevel,
        cycle,
        grade,
        selectedCurricularAreas,
        selectedCompetencies,
        setSelectedCompetencies,
    } = useDidacticUnitStore();

    const [isEditingCompetencies, setIsEditingCompetencies] = useState(false);

    // Obtener competencias disponibles basadas en el ciclo y áreas seleccionadas
    const availableCompetencies = cycle ?
        (competenciesByCycle[cycle] || []).filter(comp =>
            selectedCurricularAreas.includes(comp.area)
        ) : [];

    const handleCompetencyToggle = (competency: Competency) => {
        const existingIndex = selectedCompetencies.findIndex(c => c.name === competency.name);

        if (existingIndex >= 0) {
            // Remover competencia
            setSelectedCompetencies(selectedCompetencies.filter((_, i) => i !== existingIndex));
        } else {
            // Agregar competencia con todas las capacidades seleccionadas por defecto
            const newSelectedCompetency: SelectedCompetency = {
                ...competency,
                selectedAbilities: [...competency.abilities] // Seleccionar todas las capacidades por defecto
            };
            setSelectedCompetencies([...selectedCompetencies, newSelectedCompetency]);
        }
    };

    const handleAbilityToggle = (competency: Competency, ability: string) => {
        const competencyIndex = selectedCompetencies.findIndex(c => c.name === competency.name);

        if (competencyIndex >= 0) {
            const updatedCompetencies = [...selectedCompetencies];
            const selectedCompetency = updatedCompetencies[competencyIndex];

            const abilityIndex = selectedCompetency.selectedAbilities.indexOf(ability);

            if (abilityIndex >= 0) {
                // Remover capacidad
                selectedCompetency.selectedAbilities = selectedCompetency.selectedAbilities.filter((_, i) => i !== abilityIndex);
            } else {
                // Agregar capacidad
                selectedCompetency.selectedAbilities = [...selectedCompetency.selectedAbilities, ability];
            }

            setSelectedCompetencies(updatedCompetencies);
        }
    };

    const handleEditCompetencies = () => {
        setIsEditingCompetencies(true);
    };

    const handleCompleteSelection = () => {
        setIsEditingCompetencies(false);
    };

    const canProceed = selectedCompetencies.length > 0 && selectedCompetencies.every(c => c.selectedAbilities.length > 0);

    // Agrupar competencias por área para mejor organización
    const competenciesByArea = availableCompetencies.reduce((acc, comp) => {
        if (!acc[comp.area]) {
            acc[comp.area] = [];
        }
        acc[comp.area].push(comp);
        return acc;
    }, {} as Record<string, Competency[]>);

    return (
        <Box className="px-6 py-10 max-w-6xl mx-auto space-y-8">
            {/* Resumen del Step anterior */}
            <Fade in={true} timeout={300}>
                <Box
                    sx={{
                        p: 2.5,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        bgcolor: 'grey.50',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <CheckIcon color="success" />
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            <strong>{educationLevel?.charAt(0).toUpperCase()}{educationLevel?.slice(1)}</strong> →
                            <strong> {cycle}</strong> →
                            <strong> {grade}</strong>
                        </Typography>
                        <Box display="flex" gap={1} mt={1} flexWrap="wrap">
                            {selectedCurricularAreas.map((area) => {
                                const color = COMPETENCY_COLORS[area] || '#95A5A6';
                                return (
                                    <Chip
                                        key={area}
                                        label={area}
                                        size="small"
                                        sx={{
                                            bgcolor: `${color}20`,
                                            color: color,
                                            fontWeight: 500,
                                            fontSize: '0.75rem'
                                        }}
                                    />
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Fade>

            {/* Selección de Competencias - Vista Expandida o Compacta */}
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Vista compacta con competencias seleccionadas */}
                <Box
                    sx={{
                        p: 3,
                        border: '2px solid',
                        borderColor: canProceed ? 'success.main' : 'divider',
                        borderRadius: 2,
                        opacity: canProceed && !isEditingCompetencies ? 1 : 0,
                        transform: canProceed && !isEditingCompetencies ? 'translateY(0)' : 'translateY(-20px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        pointerEvents: canProceed && !isEditingCompetencies ? 'auto' : 'none',
                        position: canProceed && !isEditingCompetencies ? 'static' : 'absolute',
                        width: '100%',
                        zIndex: canProceed && !isEditingCompetencies ? 2 : 1
                    }}
                >
                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                        <Typography variant="h6" color="success.main">
                            Competencias Seleccionadas ({selectedCompetencies.length})
                        </Typography>
                        <IconButton
                            onClick={handleEditCompetencies}
                            color="success"
                            sx={{
                                '&:hover': {
                                    bgcolor: 'success.main',
                                    color: 'white',
                                    transition: 'all 0.2s ease'
                                }
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={2}>
                        {selectedCompetencies.map((competency) => {
                            const color = COMPETENCY_COLORS[competency.area] || '#95A5A6';
                            return (
                                <Box key={competency.name} sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                                    <Typography variant="subtitle2" sx={{ color, fontWeight: 600, mb: 0.5 }}>
                                        {competency.name}
                                    </Typography>
                                    <Box display="flex" gap={1} mb={1} flexWrap="wrap">
                                        <Chip
                                            label={competency.area}
                                            size="small"
                                            sx={{
                                                bgcolor: `${color}15`,
                                                color: color,
                                                fontWeight: 500
                                            }}
                                        />
                                        <Chip
                                            label={`${competency.selectedAbilities.length} capacidad${competency.selectedAbilities.length !== 1 ? 'es' : ''}`}
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                borderColor: color,
                                                color: color,
                                                fontWeight: 500
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary" fontWeight={500} mb={0.5} display="block">
                                            Capacidades seleccionadas:
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                            {competency.selectedAbilities.map((ability, i) => (
                                                <Typography
                                                    key={i}
                                                    component="li"
                                                    variant="caption"
                                                    color="text.secondary"
                                                    sx={{ mb: 0.25, lineHeight: 1.3 }}
                                                >
                                                    {ability}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                {/* Vista expandida para seleccionar */}
                <Box
                    sx={{
                        opacity: !canProceed || isEditingCompetencies ? 1 : 0,
                        transform: !canProceed || isEditingCompetencies ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: !canProceed || isEditingCompetencies ? '0.1s' : '0s',
                        pointerEvents: !canProceed || isEditingCompetencies ? 'auto' : 'none',
                        position: !canProceed || isEditingCompetencies ? 'static' : 'absolute',
                        width: '100%',
                        zIndex: !canProceed || isEditingCompetencies ? 2 : 1
                    }}
                >
                    <Typography
                        variant="h5"
                        marginBottom={2}
                        sx={{
                            opacity: !canProceed || isEditingCompetencies ? 1 : 0,
                            transform: !canProceed || isEditingCompetencies ? 'translateY(0)' : 'translateY(-10px)',
                            transition: 'all 0.3s ease',
                            transitionDelay: !canProceed || isEditingCompetencies ? '0.2s' : '0s'
                        }}
                    >
                        Selecciona las competencias
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={4}
                        sx={{
                            opacity: !canProceed || isEditingCompetencies ? 1 : 0,
                            transform: !canProceed || isEditingCompetencies ? 'translateY(0)' : 'translateY(-10px)',
                            transition: 'all 0.3s ease',
                            transitionDelay: !canProceed || isEditingCompetencies ? '0.25s' : '0s'
                        }}
                    >
                        Selecciona las competencias específicas que trabajarás en esta unidad didáctica.
                        Puedes elegir múltiples competencias de las áreas seleccionadas.
                    </Typography>

                    {/* Competencias agrupadas por área */}
                    <Box gap={4}>
                        {Object.entries(competenciesByArea).map(([area, competencies], areaIndex) => {
                            const color = COMPETENCY_COLORS[area] || '#95A5A6';

                            return (
                                <Box key={area} mb={4}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color,
                                            fontWeight: 600,
                                            mb: 3,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2
                                        }}
                                    >
                                        {area}
                                        <Chip
                                            label={`${competencies.length} competencia${competencies.length !== 1 ? 's' : ''}`}
                                            size="small"
                                            sx={{
                                                bgcolor: `${color}15`,
                                                color: color,
                                                fontWeight: 500
                                            }}
                                        />
                                    </Typography>

                                    <Grid container spacing={3}>
                                        {competencies.map((competency, index) => {
                                            const selectedCompetency = selectedCompetencies.find(c => c.name === competency.name);

                                            return (
                                                <Grid size={{ xs: 12, lg: 6 }} key={competency.name}>
                                                    <CompetencyCard
                                                        competency={competency}
                                                        selectedCompetency={selectedCompetency}
                                                        onCompetencyToggle={handleCompetencyToggle}
                                                        onAbilityToggle={handleAbilityToggle}
                                                        index={index + (areaIndex * 2)}
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                            );
                        })}
                    </Box>

                    {availableCompetencies.length === 0 && (
                        <Box textAlign="center" py={8}>
                            <Typography variant="h6" color="text.secondary" mb={2}>
                                No se encontraron competencias
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Asegúrate de haber seleccionado áreas curriculares en el paso anterior.
                            </Typography>
                        </Box>
                    )}

                    {isEditingCompetencies && canProceed && (
                        <Box
                            display="flex"
                            justifyContent="center"
                            mt={4}
                            sx={{
                                opacity: isEditingCompetencies ? 1 : 0,
                                transform: isEditingCompetencies ? 'translateY(0)' : 'translateY(10px)',
                                transition: 'all 0.3s ease',
                                transitionDelay: isEditingCompetencies ? '0.5s' : '0s'
                            }}
                        >
                            <Box
                                component="button"
                                onClick={handleCompleteSelection}
                                sx={{
                                    px: 4,
                                    py: 2,
                                    border: '2px solid',
                                    borderColor: 'success.main',
                                    borderRadius: 2,
                                    bgcolor: 'success.main',
                                    color: 'white',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        bgcolor: 'success.dark',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)'
                                    }
                                }}
                            >
                                Confirmar selección
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Indicador de progreso */}
            {canProceed && !isEditingCompetencies && (
                <Fade in={true} timeout={600}>
                    <Box
                        textAlign="center"
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'success.light',
                        }}
                    >
                        <Typography variant="body2" color="success.main" fontWeight={500}>
                            ✨ ¡Perfecto! Ahora podrás seleccionar los enfoques transversales
                        </Typography>
                    </Box>
                </Fade>
            )}
        </Box>
    );
}