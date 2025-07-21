import { Box, Typography, Grid, Alert, AlertTitle } from '@mui/material'
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore';
import { transversalApproaches } from '../../../store/entities/CurriculumMap';
import { Info as InfoIcon } from '@mui/icons-material';
import TransversalApproachCard from '../components/TransversalApproachCard';

export default function Step4TransversalApproaches() {
    const { selectedTransversalApproaches, setSelectedTransversalApproaches } = useDidacticUnitStore();

    const handleApproachToggle = (approach: string) => {
        const isCurrentlySelected = selectedTransversalApproaches.includes(approach);
        
        if (isCurrentlySelected) {
            // Remover del array
            setSelectedTransversalApproaches(
                selectedTransversalApproaches.filter(selected => selected !== approach)
            );
        } else {
            // Agregar al array
            setSelectedTransversalApproaches([...selectedTransversalApproaches, approach]);
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
               Enfoques Transversales
            </Typography>
            
            <Alert 
                severity="info" 
                icon={<InfoIcon />}
                sx={{ 
                    mb: 4, 
                    '& .MuiAlert-message': { 
                        width: '100%' 
                    } 
                }}
            >
                <AlertTitle sx={{ fontWeight: 600 }}>
                    Selecciona los enfoques transversales
                </AlertTitle>
                Los enfoques transversales son comunes a todo nivel, ciclo y área. No se eligen por área específica, 
                sino por su pertinencia a la situación significativa. Puedes seleccionar más de uno según el contexto 
                y propósito formativo de tu sesión.
                <Box sx={{ mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Seleccionados:</strong> {selectedTransversalApproaches.length} de {transversalApproaches.length}
                    </Typography>
                </Box>
            </Alert>

            <Grid container spacing={3}>
                {transversalApproaches.map((approach, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={approach}>
                        <TransversalApproachCard
                            approach={approach}
                            isSelected={selectedTransversalApproaches.includes(approach)}
                            onToggle={handleApproachToggle}
                            index={index}
                        />
                    </Grid>
                ))}
            </Grid>

            {selectedTransversalApproaches.length === 0 && (
                <Alert 
                    severity="warning" 
                    sx={{ mt: 3 }}
                >
                    <AlertTitle>Ningún enfoque seleccionado</AlertTitle>
                    Se recomienda seleccionar al menos un enfoque transversal para darle mayor sentido 
                    pedagógico a tu unidad didáctica.
                </Alert>
            )}

            {selectedTransversalApproaches.length > 0 && (
                <Alert 
                    severity="success" 
                    sx={{ mt: 3 }}
                >
                    <AlertTitle>Enfoques seleccionados</AlertTitle>
                    Has seleccionado {selectedTransversalApproaches.length} enfoque{selectedTransversalApproaches.length > 1 ? 's' : ''}: {' '}
                    {selectedTransversalApproaches.join(', ')}.
                </Alert>
            )}
        </Box>
    );
}