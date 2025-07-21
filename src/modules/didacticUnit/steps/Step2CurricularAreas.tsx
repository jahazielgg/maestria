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

  const canProceed = selectedCurricularAreas.length > 0;

  return (
    <Box className="px-6 py-10 max-w-6xl mx-auto space-y-8">
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
        Áreas Curriculares
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
          <Typography variant="body2" color="text.secondary">
            <strong>{educationLevel?.charAt(0).toUpperCase()}{educationLevel?.slice(1)}</strong> → 
            <strong> {cycle}</strong> → 
            <strong> {grade}</strong>
          </Typography>
        </Box>
      </Fade>

      {/* Selección de Áreas */}
      <Box>
        <Typography variant="h5" marginBottom={2}>
          Selecciona las áreas curriculares
        </Typography>

        {/* Contador y límite */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
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

      </Box>
    </Box>
  );
}