import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useDidacticUnitStore } from "../../../store/useDidacticUnitStore";
import Step3CurricularAreas from "../steps/Step3Competencies";
import Step1LevelCycleGrade from "../steps/Step1LevelCycleGrade";
import Step2CurricularAreas from "../steps/Step2CurricularAreas";
import Step4TransversalApproaches from "../steps/Step4TransversalApproach";
import Step5SignificantSituation from "../steps/Step5SignificantSituation";
import Step6DidacticUnitDetails from "../steps/Step6DidacticUnitDetails";

const steps = ['Nivel', 'Áreas Curriculares', 'Competencias', 'Enfoques Transversales', 'Situación Significativa', 'Detalles de la Unidad Didáctica'];


export default function DidacticUnitWizard() {
    const { 
        currentStep, 
        nextStep,
        prevStep, 
        unitType, 
        selectedCurricularAreas,
        generalData,
        

    } = useDidacticUnitStore();

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <Step1LevelCycleGrade />;
            case 1:
                return <Step2CurricularAreas />;
            case 2:
                return <Step3CurricularAreas />;
            case 3:
                return <Step4TransversalApproaches />;
            case 4:
                return <Step5SignificantSituation />;
            case 4:
                return <Step6DidacticUnitDetails />;
            default:
                return null;
        }
    }

    const isStep2Incomplete = () => {
        if (!generalData) return true

        const baseFieldsMissing =
            !generalData.unitTitle ||
            !generalData.unitPurpose ||
            !generalData.significantSituation ||
            !generalData.estimatedDuration ||
            !generalData.educationLevel ||
            !generalData.grade ||
            !generalData.expectedProduct

        const projectMissing = unitType === 'learningProject' && !generalData.centralProblem
        const moduleMissing =
            unitType === 'learningModule' &&
            (!generalData.baseUnit || !generalData.pedagogicalJustification)

        return baseFieldsMissing || projectMissing || moduleMissing
    }



    return (
        <Box className="p-6 max-w-5xl mx-auto">
            <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}><StepLabel>{label}</StepLabel></Step>
                ))}
            </Stepper>

            <Box mt={4}>{renderStep()}</Box>

            <Box display={"flex"} justifyContent={"space-between"} mt={4}>
                <Button disabled={currentStep === 0} onClick={prevStep}>
                    Regresar
                </Button>

                <Button
                    variant="contained"
                    onClick={nextStep}
                    disabled={
                        (currentStep === 0 && !unitType) ||
                        (currentStep === 1 && isStep2Incomplete()) ||
                        (currentStep === 2 && selectedCurricularAreas.length === 0)
                    }>
                    {currentStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>
            </Box>
        </Box>
    )
}    
