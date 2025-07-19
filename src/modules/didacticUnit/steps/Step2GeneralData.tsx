import { Box, Typography, TextField, MenuItem, Grid } from '@mui/material'
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore'
import { useEffect, useState } from 'react'
import type { GeneralData } from '../../../store/entities/GeneralData'

const educationLevels = [
    {
        label: 'Inicial',
        value: 'initial'
    },
    {
        label: 'Primaria',
        value: 'primary'
    },
    {
        label: 'Secundaria',
        value: 'secondary'
    }
]

const gradesByLevel: Record<string, string[]> = {
  initial: ['3 años', '4 años', '5 años'],
  primary: ['1º', '2º', '3º', '4º', '5º', '6º'],
  secondary: ['1º', '2º', '3º', '4º', '5º'],
}

export default function Step2GeneralData() {
  const { unitType, setGeneralData } = useDidacticUnitStore()
const [localData, setLocalData] = useState<GeneralData>({
  unitTitle: '',
  educationLevel: '',
  grade: '',
  estimatedDuration: '',
  unitPurpose: '',
  significantSituation: '',
  expectedProduct: '',
  centralProblem: '',
  baseUnit: '',
  pedagogicalJustification: '',
})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setLocalData((prev) => ({ ...prev, [name]: value }))
  }

  // Auto guardar en Zustand (opcional)
  useEffect(() => setGeneralData(localData), [localData, setGeneralData])

  return (
    <Box className="p-6 max-w-4xl mx-auto">
      <Typography variant="h5" gutterBottom>
        Información General
      </Typography>

      <Grid container spacing={3} mt={1}>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Título de la Unidad"
            name="unitTitle"
            value={localData.unitTitle}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            select
            fullWidth
            label="Nivel Educativo"
            name="educationLevel"
            value={localData.educationLevel}
            onChange={handleChange}
          >
            {educationLevels.map((lvl) => (
              <MenuItem key={lvl.value} value={lvl.value}>
                {lvl.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={6}>
          <TextField
            select
            fullWidth
            label="Grade"
            name="grade"
            value={localData.grade}
            onChange={handleChange}
            disabled={!localData.educationLevel}
          >
            {(gradesByLevel[localData.educationLevel] || []).map((grade) => (
              <MenuItem key={grade} value={grade}>
                {grade}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Duración Estimada (ej. 4 semanas)"
            name="estimatedDuration"
            value={localData.estimatedDuration}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Situación Significativa"
            name="significantSituation"
            value={localData.significantSituation}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Propósito de la Unidad"
            name="unitPurpose"
            value={localData.unitPurpose}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            label="Producto Esperado"
            name="expectedProduct"
            value={localData.expectedProduct}
            onChange={handleChange}
          />
        </Grid>

        {unitType === 'learningProject' && (
          <Grid size={12}>
            <TextField
              fullWidth
              label="Problema Central"
              name="centralProblem"
              value={localData.centralProblem}
              onChange={handleChange}
            />
          </Grid>
        )}

        {unitType === 'learningModule' && (
          <>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Unidad Base"
                name="baseUnit"
                value={localData.baseUnit}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                multiline
                label="Justificación Pedagógica"
                name="pedagogicalJustification"
                value={localData.pedagogicalJustification}
                onChange={handleChange}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  )
}