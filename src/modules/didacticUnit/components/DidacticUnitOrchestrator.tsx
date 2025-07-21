import { useState } from 'react'
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material'
import { useDidacticUnitStore } from '../../../store/useDidacticUnitStore'
import Step1LevelCycleGrade from '../steps/Step1LevelCycleGrade'
import Step2CurricularAreas from '../steps/Step2CurricularAreas'
import Step3Competencies from '../steps/Step3Competencies'
import Step4TransversalApproaches from '../steps/Step4TransversalApproach'
import Step5SignificantSituation from '../steps/Step5SignificantSituation'
import Step6DidacticUnitDetails from '../steps/Step6DidacticUnitDetails'


const steps = [
  { label: 'Nivel, Ciclo y Grado', Component: Step1LevelCycleGrade },
  { label: 'Áreas Curriculares', Component: Step2CurricularAreas },
  { label: 'Competencias', Component: Step3Competencies },
  { label: 'Enfoques Transversales', Component: Step4TransversalApproaches },
  { label: 'Situación Significativa', Component: Step5SignificantSituation },
  { label: 'Detalles de la Unidad', Component: Step6DidacticUnitDetails },
]

export default function DidacticUnitOrchestrator() {
  const [activeStep, setActiveStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const store = useDidacticUnitStore()
  const {
    educationLevel,
    cycle,
    grade,
    selectedCurricularAreas,
    selectedCompetencies,
    selectedTransversalApproaches,
    significantSituation,
    didacticUnitDetails
  } = store

  const isNextDisabled = () => {
    switch (activeStep) {
      case 0:
        return !(educationLevel && cycle && grade)
      case 1:
        return selectedCurricularAreas.length === 0
      case 2:
        return selectedCompetencies.length === 0 || selectedCompetencies.some(c => c.selectedAbilities.length === 0)
      case 3:
        return false // Transversales opcional
      case 4:
        return !significantSituation || significantSituation.length === 0
      case 5:
        return !(didacticUnitDetails?.title && didacticUnitDetails?.purposeByArea)
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)
    const payload = {
      educationLevel,
      cycle,
      grade,
      selectedCurricularAreas,
      selectedCompetencies,
      selectedTransversalApproaches,
      significantSituation,
      didacticUnitDetails
    }

    try {
      const response = await fetch('/api/didactic-units', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const text = await response.text()
        throw new Error(text || 'Error al generar la unidad didáctica')
      }

      setSubmitSuccess(true)
    } catch (error: any) {
      setSubmitError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0))
  }

  const { Component } = steps[activeStep]

  return (
    <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', py: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(({ label }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 5 }}>
        <Component />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button disabled={activeStep === 0 || isSubmitting} onClick={handleBack}>
          Atrás
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={isNextDisabled() || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
              Generando...
            </>
          ) : activeStep === steps.length - 1 ? (
            'Finalizar'
          ) : (
            'Siguiente'
          )}
        </Button>
      </Box>

      <Snackbar
        open={submitSuccess}
        autoHideDuration={6000}
        onClose={() => setSubmitSuccess(false)}
      >
        <Alert
          onClose={() => setSubmitSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Unidad didáctica generada correctamente.
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!submitError}
        autoHideDuration={6000}
        onClose={() => setSubmitError(null)}
      >
        <Alert
          onClose={() => setSubmitError(null)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {submitError}
        </Alert>
      </Snackbar>
    </Box>
  )
}
