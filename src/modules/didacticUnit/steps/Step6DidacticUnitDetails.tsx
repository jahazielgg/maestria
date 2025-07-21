import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Alert,
    AlertTitle,
    Divider,
    Chip,
    Paper
} from '@mui/material'
import {
    School as SchoolIcon,
    Assignment as AssignmentIcon,
    Build as BuildIcon,
    Timeline as TimelineIcon,
    EmojiObjects as TargetIcon,
    EmojiEvents as ProductIcon,
    Numbers as NumbersIcon,
    NotificationImportant as ProblemIcon,
    Foundation as FoundationIcon,
    Psychology as PsychologyIcon
} from '@mui/icons-material';
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore';
import { useState, useEffect } from 'react';
import type { DidacticUnitType, DurationType, DidacticUnitDetails, LearningProjectDetails, LearningModuleDetails } from '../../../store/entities/DidacticUnitDetails';
import type { CurricularArea } from '../../../store/entities/CurriculumMap';

const UNIT_TYPE_INFO = {
    unidadAprendizaje: {
        title: "Unidad de Aprendizaje",
        description: "Secuencia de actividades organizada alrededor de un tema, con múltiples sesiones, integración de áreas y con propósito, productos intermedios y evaluaciones formativas.",
        icon: SchoolIcon,
        color: "#2196F3",
        recommendedDuration: { min: 3, max: 8, type: "semanas" as DurationType }
    },
    proyectoAprendizaje: {
        title: "Proyecto de Aprendizaje",
        description: "Secuencia más centrada en resolución de problemas reales, co-construida con estudiantes, con un producto final significativo.",
        icon: BuildIcon,
        color: "#4CAF50",
        recommendedDuration: { min: 4, max: 12, type: "semanas" as DurationType }
    },
    moduloAprendizaje: {
        title: "Módulo de Aprendizaje",
        description: "Secuencia breve, enfocada en contenido específico, puede servir como pre-requisito o intervención puntual dentro de una unidad o proyecto.",
        icon: AssignmentIcon,
        color: "#FF9800",
        recommendedDuration: { min: 2, max: 6, type: "sesiones" as DurationType }
    }
};

export default function Step6DidacticUnitDetails() {
    const { didacticUnitDetails, setDidacticUnitDetails, selectedCurricularAreas } = useDidacticUnitStore();
    const [selectedType, setSelectedType] = useState<DidacticUnitType>('unidadAprendizaje');
    const [formData, setFormData] = useState({
        title: '',
        duration: 1,
        durationType: 'semanas' as DurationType,
        purposeByArea: {} as Record<CurricularArea, string>,
        finalProduct: '',
        expectedLearnings: 1,
        // Campos específicos
        centralProblem: '', // Para proyecto
        baseUnit: '', // Para módulo
        pedagogicalJustification: '' // Para módulo
    });

    useEffect(() => {
        if (didacticUnitDetails) {
            setSelectedType(didacticUnitDetails.type);
            setFormData({
                title: didacticUnitDetails.title,
                duration: didacticUnitDetails.duration,
                durationType: didacticUnitDetails.durationType,
                purposeByArea: didacticUnitDetails.purposeByArea,
                finalProduct: didacticUnitDetails.finalProduct,
                expectedLearnings: didacticUnitDetails.expectedLearnings,
                centralProblem: (didacticUnitDetails as LearningProjectDetails).centralProblem || '',
                baseUnit: (didacticUnitDetails as LearningModuleDetails).baseUnit || '',
                pedagogicalJustification: (didacticUnitDetails as LearningModuleDetails).pedagogicalJustification || ''
            });
        }
    }, [didacticUnitDetails]);

    const handleTypeChange = (type: DidacticUnitType) => {
        setSelectedType(type);
        const recommended = UNIT_TYPE_INFO[type].recommendedDuration;
        setFormData(prev => ({
            ...prev,
            duration: recommended.min,
            durationType: recommended.type
        }));
    };

    const handleFieldChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Actualizar el store
        const updatedDetails: DidacticUnitDetails = {
            type: selectedType,
            title: field === 'title' ? value : formData.title,
            duration: field === 'duration' ? value : formData.duration,
            durationType: field === 'durationType' ? value : formData.durationType,
            purposeByArea: field === 'purposeByArea' ? value : formData.purposeByArea,
            finalProduct: field === 'finalProduct' ? value : formData.finalProduct,
            expectedLearnings: field === 'expectedLearnings' ? value : formData.expectedLearnings,
            ...(selectedType === 'proyectoAprendizaje' && {
                centralProblem: field === 'centralProblem' ? value : formData.centralProblem
            }),
            ...(selectedType === 'moduloAprendizaje' && {
                baseUnit: field === 'baseUnit' ? value : formData.baseUnit,
                pedagogicalJustification: field === 'pedagogicalJustification' ? value : formData.pedagogicalJustification
            })
        } as DidacticUnitDetails;

        setDidacticUnitDetails(updatedDetails);
    };

    const handlePurposeChange = (area: CurricularArea, value: string) => {
        const updatedPurposes = {
            ...formData.purposeByArea,
            [area]: value
        };

        setFormData(prev => ({
            ...prev,
            purposeByArea: updatedPurposes
        }));

        setDidacticUnitDetails({
            ...formData,
            type: selectedType,
            purposeByArea: updatedPurposes,
            ...(selectedType === 'proyectoAprendizaje' && {
                centralProblem: formData.centralProblem
            }),
            ...(selectedType === 'moduloAprendizaje' && {
                baseUnit: formData.baseUnit,
                pedagogicalJustification: formData.pedagogicalJustification
            })
        });
    };


    const currentTypeInfo = UNIT_TYPE_INFO[selectedType];
    const IconComponent = currentTypeInfo.icon;

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Estructura de la Unidad Didáctica
            </Typography>

            {/* Selector de tipo de unidad */}
            <Paper sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Selecciona el tipo de unidad didáctica
                </Typography>

                <Grid container spacing={2}>
                    {Object.entries(UNIT_TYPE_INFO).map(([type, info]) => {
                        const TypeIcon = info.icon;
                        const isSelected = selectedType === type;

                        return (
                            <Grid size={{ xs: 12, md: 4 }} key={type}>
                                <Card
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        border: '2px solid',
                                        borderColor: isSelected ? info.color : 'divider',
                                        bgcolor: isSelected ? `${info.color}08` : 'background.paper',
                                        '&:hover': {
                                            borderColor: info.color,
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                    onClick={() => handleTypeChange(type as DidacticUnitType)}
                                >
                                    <CardContent>
                                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                                            <TypeIcon sx={{ color: info.color, fontSize: 32 }} />
                                            <Typography variant="h6" fontWeight={600} color={isSelected ? info.color : 'inherit'}>
                                                {info.title}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {info.description}
                                        </Typography>
                                        <Chip
                                            label={`${info.recommendedDuration.min}-${info.recommendedDuration.max} ${info.recommendedDuration.type}`}
                                            size="small"
                                            sx={{ bgcolor: `${info.color}15`, color: info.color }}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Paper>

            {/* Formulario de detalles */}
            <Paper sx={{ p: 3, mb: 4 }}>
                <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <IconComponent sx={{ color: currentTypeInfo.color, fontSize: 32 }} />
                    <Typography variant="h6" fontWeight={600}>
                        Detalles de {currentTypeInfo.title}
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {/* Título */}
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Título de la unidad"
                            value={formData.title}
                            onChange={(e) => handleFieldChange('title', e.target.value)}
                            placeholder="Ej: Cuidamos nuestro medio ambiente"
                            InputProps={{
                                startAdornment: <TargetIcon sx={{ color: 'text.secondary', mr: 1 }} />
                            }}
                        />
                    </Grid>

                    {/* Duración */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Duración"
                            value={formData.duration}
                            onChange={(e) => handleFieldChange('duration', parseInt(e.target.value) || 1)}
                            inputProps={{ min: 1 }}
                            InputProps={{
                                startAdornment: <TimelineIcon sx={{ color: 'text.secondary', mr: 1 }} />
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                            <InputLabel>Tipo de duración</InputLabel>
                            <Select
                                value={formData.durationType}
                                label="Tipo de duración"
                                onChange={(e) => handleFieldChange('durationType', e.target.value)}
                            >
                                <MenuItem value="semanas">Semanas</MenuItem>
                                <MenuItem value="sesiones">Sesiones</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Propósito */}
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                            Propósito de la unidad por área curricular
                        </Typography>
                        {selectedCurricularAreas.map((area) => (
                            <Box key={area} sx={{ mb: 3 }}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    label={`Propósito para el área de ${area}`}
                                    value={formData.purposeByArea[area] || ''}
                                    onChange={(e) => handlePurposeChange(area, e.target.value)}
                                    placeholder="Describe el propósito pedagógico para esta área..."
                                    InputProps={{
                                        startAdornment: <PsychologyIcon sx={{ color: 'text.secondary', mr: 1, mt: 1 }} />
                                    }}
                                />
                            </Box>
                        ))}
                    </Grid>


                    {/* Producto final */}
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            multiline
                            rows={2}
                            label="Producto final esperado"
                            value={formData.finalProduct}
                            onChange={(e) => handleFieldChange('finalProduct', e.target.value)}
                            placeholder="¿Qué van a crear o producir los estudiantes?"
                            InputProps={{
                                startAdornment: <ProductIcon sx={{ color: 'text.secondary', mr: 1, mt: 1 }} />
                            }}
                        />
                    </Grid>

                    {/* Número de aprendizajes esperados */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Número de aprendizajes esperados"
                            value={formData.expectedLearnings}
                            onChange={(e) => handleFieldChange('expectedLearnings', parseInt(e.target.value) || 1)}
                            inputProps={{ min: 1, max: 20 }}
                            helperText="¿Cuántos logros de aprendizaje planeas?"
                            InputProps={{
                                startAdornment: <NumbersIcon sx={{ color: 'text.secondary', mr: 1 }} />
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Campos específicos por tipo */}
                {selectedType === 'proyectoAprendizaje' && (
                    <Box sx={{ mt: 3 }}>
                        <Divider sx={{ mb: 3 }} />
                        <Alert severity="info" sx={{ mb: 2 }}>
                            <AlertTitle>Campo específico para Proyecto de Aprendizaje</AlertTitle>
                        </Alert>
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            label="Problema o reto central"
                            value={formData.centralProblem}
                            onChange={(e) => handleFieldChange('centralProblem', e.target.value)}
                            placeholder="¿Cuál es el problema real que resolverán los estudiantes?"
                            InputProps={{
                                startAdornment: <ProblemIcon sx={{ color: 'text.secondary', mr: 1, mt: 1 }} />
                            }}
                        />
                    </Box>
                )}

                {selectedType === 'moduloAprendizaje' && (
                    <Box sx={{ mt: 3 }}>
                        <Divider sx={{ mb: 3 }} />
                        <Alert severity="info" sx={{ mb: 2 }}>
                            <AlertTitle>Campos específicos para Módulo de Aprendizaje</AlertTitle>
                        </Alert>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Unidad base"
                                    value={formData.baseUnit}
                                    onChange={(e) => handleFieldChange('baseUnit', e.target.value)}
                                    placeholder="¿En qué unidad previa se basa este módulo?"
                                    InputProps={{
                                        startAdornment: <FoundationIcon sx={{ color: 'text.secondary', mr: 1 }} />
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    label="Justificación pedagógica"
                                    value={formData.pedagogicalJustification}
                                    onChange={(e) => handleFieldChange('pedagogicalJustification', e.target.value)}
                                    placeholder="¿Por qué es necesario este módulo específico?"
                                    InputProps={{
                                        startAdornment: <PsychologyIcon sx={{ color: 'text.secondary', mr: 1, mt: 1 }} />
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </Paper>

            {/* Validaciones */}
            {!formData.title && (
                <Alert severity="warning" sx={{ mb: 2 }}>
                    <AlertTitle>Título requerido</AlertTitle>
                    El título ayuda a identificar claramente la unidad didáctica.
                </Alert>
            )}

            {!formData.purposeByArea && (
                <Alert severity="info" sx={{ mb: 2 }}>
                    <AlertTitle>Define el propósito</AlertTitle>
                    El propósito orienta toda la secuencia de aprendizaje.
                </Alert>
            )}

            {formData.title && formData.purposeByArea && (
                <Alert severity="success">
                    <AlertTitle>¡Excelente configuración!</AlertTitle>
                    Has definido los elementos básicos para tu {currentTypeInfo.title.toLowerCase()}.
                </Alert>
            )}
        </Box>
    );
}