import { useMemo } from "react";
import { useDidacticUnitStore } from "../../../store/useDidacticUnitStore";
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";

const curricularAreasByLevel: 
Record<'initial' | 'primary' | 'secondary', string[]> = {
    initial: ['Personal Social', 'Psicomotriz', 'Comunicación', 
        'Descubrimiento del Mundo', 'Matemática', 
        'Ciencia y Tecnología'],
    primary: ['Personal Social', 'Educación Física', 'Arte y Cultura', 
        'Comunicación', 'Inglés', 'Matemática', 
        'Ciencia y Tecnología', 'Educación Religiosa'],
    secondary: ['Desarrollo Personal, Ciudadanía y Cívica', 
        'Ciencias Sociales', 'Educación Física',
        'Arte y Cultura', 'Comunicación', 
        'Inglés', 'Matemática', 
        'Ciencia y Tecnología', 'Educación para el Trabajo',
        'Educación Religiosa']
}

export default function Step3CurricularAreas() {
    const {
        generalData,
        selectedCurricularAreas,
        setSelectedCurricularAreas,
    } = useDidacticUnitStore();
    
    
    const currentAreas = useMemo(() => {
        return curricularAreasByLevel[generalData?.educationLevel as 'initial' | 'primary' | 'secondary' ?? 'primary'] || []
    }, [generalData?.educationLevel])

    const toggleArea = (area: string) => {
        if (selectedCurricularAreas.includes(area)) {
        setSelectedCurricularAreas(selectedCurricularAreas.filter((a) => a !== area))
        } else {
        setSelectedCurricularAreas([...selectedCurricularAreas, area])
        }
    }

    return (
        <Box className="p-6 max-w-3xl mx-auto">
           <Typography variant="h5" gutterBottom>
            Selecciona las Áreas Curriculares
            </Typography> 
            <Typography variant="body1" color="text.secondary" mb={2}>
                Basado en el nivel educativo seleccionado, estas son las áreas curriculares disponibles:
            </Typography>

            <FormGroup>
                {currentAreas.map((area) => (
                    <FormControlLabel
                        key={area}
                        control={
                            <Checkbox
                                checked={selectedCurricularAreas.includes(area)}
                                onChange={() => toggleArea(area)}
                            />
                        }
                        label={area}
                    />
                ))}
            </FormGroup>
        </Box>
    )

}