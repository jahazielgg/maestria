import { Box, Typography, Grid, Fade, IconButton, Chip } from '@mui/material'
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore'
import { useState } from 'react';
import { cyclesToAreas } from '../../../store/entities/CurriculumMap';
import { CheckCircle as CheckIcon, Edit as EditIcon } from "@mui/icons-material";

import AreaCard, { AREA_STYLES } from '../components/AreaCard';

export default function Step2CurricularAreas() {
  const {
    educationLevel,
    cycle,
    grade,
    selectedCurricularAreas,
    setSelectedCurricularAreas,
  } = useDidacticUnitStore();

  const [isEditingAreas, setIsEditingAreas] = useState(false);

  const availableAreas = cycle ? cyclesToAreas[cycle] : [];
  const maxSelections = educationLevel === 'inicial' ? 2 : 3;

  const handleAreaToggle = (area: string) => {
    const isSelected = selectedCurricularAreas.includes(area);
    
    if (isSelected) {
      // Remover área
      setSelectedCurricularAreas(selectedCurricularAreas.filter(a => a !== area));
    } else {
      // Agregar área (respetando el límite)
      if (selectedCurricularAreas.length < maxSelections) {
        setSelectedCurricularAreas([...selectedCurricularAreas, area]);
      }
    }
  };

  const handleEditAreas = () => {
    setIsEditingAreas(true);
  };

  const handleCompleteSelection = () => {
    setIsEditingAreas(false);
  };

  const canProceed = selectedCurricularAreas.length > 0;

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
          <Typography variant="body2" color="text.secondary">
            <strong>{educationLevel?.charAt(0).toUpperCase()}{educationLevel?.slice(1)}</strong> → 
            <strong> {cycle}</strong> → 
            <strong> {grade}</strong>
          </Typography>
        </Box>
      </Fade>

      {/* Selección de Áreas - Vista Expandida o Compacta */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Vista compacta con áreas seleccionadas */}
        <Box 
          sx={{ 
            p: 3, 
            border: '2px solid', 
            borderColor: canProceed ? 'success.main' : 'divider',
            borderRadius: 2,
            opacity: canProceed && !isEditingAreas ? 1 : 0,
            transform: canProceed && !isEditingAreas ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: canProceed && !isEditingAreas ? 'auto' : 'none',
            position: canProceed && !isEditingAreas ? 'static' : 'absolute',
            width: '100%',
            zIndex: canProceed && !isEditingAreas ? 2 : 1
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" color="success.main">
              Áreas Curriculares Seleccionadas ({selectedCurricularAreas.length})
            </Typography>
            <IconButton 
              onClick={handleEditAreas}
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
          <Box display="flex" gap={1} flexWrap="wrap">
            {selectedCurricularAreas.map((area) => {
              const style = AREA_STYLES[area as keyof typeof AREA_STYLES];
              const color = style?.color || '#95A5A6';

              return (
                <Chip
                  key={area}
                  label={area}
                  sx={{
                    bgcolor: `${color}20`,
                    color: color,
                    fontWeight: 500,
                    '& .MuiChip-deleteIcon': {
                      color: color
                    }
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* Vista expandida para seleccionar */}
        <Box
          sx={{
            opacity: !canProceed || isEditingAreas ? 1 : 0,
            transform: !canProceed || isEditingAreas ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: !canProceed || isEditingAreas ? '0.1s' : '0s',
            pointerEvents: !canProceed || isEditingAreas ? 'auto' : 'none',
            position: !canProceed || isEditingAreas ? 'static' : 'absolute',
            width: '100%',
            zIndex: !canProceed || isEditingAreas ? 2 : 1
          }}
        >
          <Typography 
            variant="h5" 
            marginBottom={2}
            sx={{
              opacity: !canProceed || isEditingAreas ? 1 : 0,
              transform: !canProceed || isEditingAreas ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'all 0.3s ease',
              transitionDelay: !canProceed || isEditingAreas ? '0.2s' : '0s'
            }}
          >
            Selecciona las áreas curriculares
          </Typography>

          {/* Contador y límite */}
          <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            mb={4}
            sx={{
              opacity: !canProceed || isEditingAreas ? 1 : 0,
              transform: !canProceed || isEditingAreas ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'all 0.3s ease',
              transitionDelay: !canProceed || isEditingAreas ? '0.25s' : '0s'
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Máximo {maxSelections} áreas para este nivel
            </Typography>
            <Typography 
              variant="subtitle2" 
              color={selectedCurricularAreas.length === maxSelections ? 'warning.main' : 'primary.main'}
            >
              {selectedCurricularAreas.length}/{maxSelections} seleccionadas
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {availableAreas.map((area, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={area}>
                <AreaCard
                  area={area}
                  selected={selectedCurricularAreas.includes(area)}
                  onClick={() => handleAreaToggle(area)}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>

          {isEditingAreas && canProceed && (
            <Box 
              display="flex" 
              justifyContent="center" 
              mt={4}
              sx={{
                opacity: isEditingAreas ? 1 : 0,
                transform: isEditingAreas ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.3s ease',
                transitionDelay: isEditingAreas ? '0.5s' : '0s'
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
      {canProceed && !isEditingAreas && (
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
              ✨ ¡Excelente! Ahora podrás seleccionar las competencias específicas
            </Typography>
          </Box>
        </Fade>
      )}
    </Box>
  );
}