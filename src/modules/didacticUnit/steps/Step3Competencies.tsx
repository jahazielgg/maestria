import { Box, Typography, Grid, Fade, Chip } from '@mui/material'
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore'
import { competenciesByCycle, transversalCompetencies, type Competency, type TransversalCompetency } from '../../../store/entities/CurriculumMap';
import { CheckCircle as CheckIcon } from "@mui/icons-material";
import CompetencyCard, { COMPETENCY_COLORS, type SelectedCompetency } from '../components/CompetencyCard';
import TransversalCompetencyCard, { type SelectedTransversalCompetency } from '../components/TransversalCompetencyCard';

export default function Step3Competencies() {
    const {
        educationLevel,
        cycle,
        grade,
        selectedCurricularAreas,
        selectedCompetencies,
        setSelectedCompetencies,
        selectedTransversalCompetencies,
        setSelectedTransversalCompetencies,
    } = useDidacticUnitStore();

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

    // Manejo de competencias transversales
    const handleTransversalCompetencyToggle = (competency: TransversalCompetency) => {
        const existingIndex = selectedTransversalCompetencies.findIndex(c => c.name === competency.name);

        if (existingIndex >= 0) {
            // Remover competencia transversal
            setSelectedTransversalCompetencies(selectedTransversalCompetencies.filter((_, i) => i !== existingIndex));
        } else {
            // Agregar competencia transversal con todas las capacidades seleccionadas por defecto
            const newSelectedTransversalCompetency: SelectedTransversalCompetency = {
                ...competency,
                selectedAbilities: [...competency.abilities] // Seleccionar todas las capacidades por defecto
            };
            setSelectedTransversalCompetencies([...selectedTransversalCompetencies, newSelectedTransversalCompetency]);
        }
    };

    const handleTransversalAbilityToggle = (competency: TransversalCompetency, ability: string) => {
        const competencyIndex = selectedTransversalCompetencies.findIndex(c => c.name === competency.name);

        if (competencyIndex >= 0) {
            const updatedCompetencies = [...selectedTransversalCompetencies];
            const selectedCompetency = updatedCompetencies[competencyIndex];

            const abilityIndex = selectedCompetency.selectedAbilities.indexOf(ability);

            if (abilityIndex >= 0) {
                // Remover capacidad
                selectedCompetency.selectedAbilities = selectedCompetency.selectedAbilities.filter((_, i) => i !== abilityIndex);
            } else {
                // Agregar capacidad
                selectedCompetency.selectedAbilities = [...selectedCompetency.selectedAbilities, ability];
            }

            setSelectedTransversalCompetencies(updatedCompetencies);
        }
    }

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
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Competencias
            </Typography>
            
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

            {/* Selección de Competencias */}
            <Box>
                <Typography variant="h5" marginBottom={2}>
                    Selecciona las competencias
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={4}>
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

                {/* Competencias Transversales */}
                <Box>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#9C27B0',
                            fontWeight: 600,
                            mb: 2,
                            mt: 4
                        }}
                    >
                        Competencias Transversales
                    </Typography>

                    <Typography variant="body2" color="text.secondary" mb={3}>
                        Las competencias transversales son aplicables a todos los niveles y áreas curriculares.
                        Puedes seleccionar las que sean relevantes para tu unidad didáctica.
                    </Typography>

                    <Grid container spacing={3}>
                        {transversalCompetencies.map((competency, index) => {
                            const selectedCompetency = selectedTransversalCompetencies.find(c => c.name === competency.name) as SelectedTransversalCompetency | undefined;

                            return (
                                <Grid size={{ xs: 12, lg: 6 }} key={competency.name}>
                                    <TransversalCompetencyCard
                                        competency={competency}
                                        selectedCompetency={selectedCompetency}
                                        onCompetencyToggle={handleTransversalCompetencyToggle}
                                        onAbilityToggle={handleTransversalAbilityToggle}
                                        index={index}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>

                {/* Resumen de competencias seleccionadas */}
                {(selectedCompetencies.length > 0 || selectedTransversalCompetencies.length > 0) && (
                    <Fade in={true} timeout={300}>
                        <Box
                            sx={{
                                mt: 4,
                                p: 3,
                                border: '2px solid',
                                borderColor: 'success.main',
                                borderRadius: 2,
                                bgcolor: 'success.50'
                            }}
                        >
                            <Typography variant="h6" color="success.main" mb={2}>
                                Competencias Seleccionadas ({selectedCompetencies.length + selectedTransversalCompetencies.length})
                            </Typography>
                            <Box display="flex" flexDirection="column" gap={2}>
                                {/* Competencias por área */}
                                {selectedCompetencies.map((competency) => {
                                    const color = COMPETENCY_COLORS[competency.area] || '#95A5A6';
                                    return (
                                        <Box key={competency.name} sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'white' }}>
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

                                {/* Competencias transversales */}
                                {selectedTransversalCompetencies.map((competency: SelectedTransversalCompetency) => {
                                    const color = '#9C27B0';
                                    return (
                                        <Box key={competency.name} sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, bgcolor: 'white' }}>
                                            <Typography variant="subtitle2" sx={{ color, fontWeight: 600, mb: 0.5 }}>
                                                {competency.name}
                                            </Typography>
                                            <Box display="flex" gap={1} mb={1} flexWrap="wrap">
                                                <Chip
                                                    label="Competencia Transversal"
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
                                                    {competency.selectedAbilities.map((ability: string, i: number) => (
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
                    </Fade>
                )}
            </Box>
        </Box>
    );
}   