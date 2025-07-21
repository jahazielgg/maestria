import { Box, Typography, Grid, FormControl, InputLabel, MenuItem, Select, ToggleButton, ToggleButtonGroup, Chip, IconButton } from '@mui/material'
import { Edit as EditIcon, CheckCircle as CheckIcon } from '@mui/icons-material'
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore'
import { levelsToCycles, cyclesToGrades } from '../../../store/entities/CurriculumMap'
import EducationLevelCard from '../components/EducationLevelCard'
import { useState } from 'react'

const LEVEL_OPTIONS = [
    {
        title: "Inicial",
        description: "Para estudiantes de 0 a 5 años. Desarrolla habilidades básicas y emocionales.",
        imageUrl: "/src/img/level-inicial.jpg",
        value: "inicial",
    },
    {
        title: "Primaria",
        description: "Para estudiantes de 6 a 11 años. Aprende competencias fundamentales.",
        imageUrl: "/src/img/level-primaria.jpg",
        value: "primaria",
    },
    {
        title: "Secundaria",
        description: "Para estudiantes de 12 a 17 años. Desarrolla pensamiento crítico y autonomía.",
        imageUrl: "/src/img/level-secundaria.jpg",
        value: "secundaria",
    },
]

export default function Step1LevelCycleGrade() {
    const {
        educationLevel,
        setEducationLevel,
        cycle,
        setCycle,
        grade,
        setGrade,
    } = useDidacticUnitStore();

    const [isEditingLevel, setIsEditingLevel] = useState(false);

    const availableCycles = educationLevel ? levelsToCycles[educationLevel] : [];
    const availableGrades = cycle ? cyclesToGrades[cycle] : [];

    const selectedLevelOption = LEVEL_OPTIONS.find(opt => opt.value === educationLevel);

    const handleLevelChange = (newLevel: string) => {
        setEducationLevel(newLevel as any);
        // Resetear selecciones dependientes
        setCycle(null);
        setGrade(null);
        setIsEditingLevel(false);
    };

    const handleEditLevel = () => {
        setIsEditingLevel(true);
        // Resetear selecciones dependientes al editar
        setCycle(null);
        setGrade(null);
    };

    return (
        <Box className="px-6 py-10 max-w-5xl mx-auto space-y-8">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Nivel Educativo, Ciclo y Grado
            </Typography>            
            {/* Nivel Educativo - Vista Expandida o Compacta */}
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Vista compacta con nivel seleccionado */}
                <Box
                    sx={{
                        p: 3,
                        border: '2px solid',
                        borderColor: 'primary.main',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        opacity: educationLevel && !isEditingLevel ? 1 : 0,
                        transform: educationLevel && !isEditingLevel ? 'translateY(0)' : 'translateY(-10px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        pointerEvents: educationLevel && !isEditingLevel ? 'auto' : 'none',
                        position: educationLevel && !isEditingLevel ? 'static' : 'absolute',
                        width: '100%',
                        zIndex: educationLevel && !isEditingLevel ? 2 : 1
                    }}
                >
                    <CheckIcon color="primary" />
                    <Box flex={1}>
                        <Typography variant="h6" color="primary.main">
                            Nivel Educativo: {selectedLevelOption?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {selectedLevelOption?.description}
                        </Typography>
                    </Box>
                    <IconButton
                        onClick={handleEditLevel}
                        color="primary"
                        sx={{
                            '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'white',
                                transition: 'all 0.2s ease'
                            }
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                </Box>

                {/* Vista expandida para seleccionar */}
                <Box
                    sx={{
                        opacity: !educationLevel || isEditingLevel ? 1 : 0,
                        transform: !educationLevel || isEditingLevel ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: !educationLevel || isEditingLevel ? '0.1s' : '0s',
                        pointerEvents: !educationLevel || isEditingLevel ? 'auto' : 'none',
                        position: !educationLevel || isEditingLevel ? 'static' : 'absolute',
                        width: '100%',
                        zIndex: !educationLevel || isEditingLevel ? 2 : 1
                    }}
                >
                    <Typography
                        variant="h5"
                        marginBottom={3}
                        sx={{
                            opacity: !educationLevel || isEditingLevel ? 1 : 0,
                            transform: !educationLevel || isEditingLevel ? 'translateY(0)' : 'translateY(-10px)',
                            transition: 'all 0.3s ease',
                            transitionDelay: !educationLevel || isEditingLevel ? '0.2s' : '0s'
                        }}
                    >
                        ¿Para qué nivel educativo estás planificando?
                    </Typography>
                    <Grid container spacing={4}>
                        {LEVEL_OPTIONS.map((lvl, index) => (
                            <Grid size={{ xs: 12, sm: 12, md: 4 }} key={lvl.value}>
                                <Box
                                    sx={{
                                        opacity: !educationLevel || isEditingLevel ? 1 : 0,
                                        transform: !educationLevel || isEditingLevel ? 'translateY(0)' : 'translateY(30px)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transitionDelay: !educationLevel || isEditingLevel ? `${0.1 + index * 0.1}s` : '0s'
                                    }}
                                >
                                    <EducationLevelCard
                                        title={lvl.title}
                                        description={lvl.description}
                                        imageUrl={lvl.imageUrl}
                                        selected={educationLevel === lvl.value}
                                        onClick={() => handleLevelChange(lvl.value)}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    {isEditingLevel && (
                        <Box
                            display="flex"
                            justifyContent="center"
                            mt={2}
                            sx={{
                                opacity: isEditingLevel ? 1 : 0,
                                transform: isEditingLevel ? 'translateY(0)' : 'translateY(10px)',
                                transition: 'all 0.3s ease',
                                transitionDelay: isEditingLevel ? '0.5s' : '0s'
                            }}
                        >
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ fontStyle: 'italic' }}
                            >
                                Selecciona un nivel para continuar
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Ciclo - Solo se muestra si hay nivel seleccionado y no se está editando */}
            {educationLevel && !isEditingLevel && (
                <Box
                    sx={{
                        opacity: 0,
                        animation: 'fadeInUp 0.5s ease forwards',
                        '@keyframes fadeInUp': {
                            '0%': { opacity: 0, transform: 'translateY(20px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        }
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Selecciona el ciclo
                    </Typography>
                    <ToggleButtonGroup
                        color="primary"
                        exclusive
                        value={cycle}
                        onChange={(_, val) => val && setCycle(val)}
                        sx={{
                            '& .MuiToggleButton-root': {
                                px: 3,
                                py: 1.5,
                                '&.Mui-selected': {
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    }
                                }
                            }
                        }}
                    >
                        {availableCycles.map((c) => (
                            <ToggleButton key={c} value={c}>
                                {c}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Box>
            )}

            {/* Grado - Solo se muestra si hay ciclo seleccionado */}
            {cycle && !isEditingLevel && (
                <Box
                    sx={{
                        opacity: 0,
                        animation: 'fadeInUp 0.5s ease 0.2s forwards',
                        '@keyframes fadeInUp': {
                            '0%': { opacity: 0, transform: 'translateY(20px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        }
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Selecciona el grado
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel>Grado</InputLabel>
                        <Select
                            value={grade || ""}
                            label="Grado"
                            onChange={(e) => setGrade(e.target.value as any)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'primary.main',
                                        borderWidth: 2
                                    }
                                }
                            }}
                        >
                            {availableGrades.map((g) => (
                                <MenuItem key={g} value={g}>
                                    {g}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            )}
        </Box>
    );
}