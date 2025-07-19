import type { DidacticUnitType } from "../useDidacticUnitStore";
import type { Cycle, EducationLevel, Grade } from "./CurriculumMap";
import type { GeneralData } from "./GeneralData";

export interface DidacticUnitStore {
    currentStep: number,
    nextStep: () => void,
    prevStep: () => void,
    

    educationLevel: EducationLevel | null,
    setEducationLevel: (level: EducationLevel) => void,
    cycle: Cycle | null,
    setCycle: (cycle: Cycle) => void,
    grade: Grade | null,
    setGrade: (grade: Grade) => void,
    
    unitType: DidacticUnitType | null
    generalData: GeneralData | null
    selectedCurricularAreas: string[],
    setUnitType: (type: DidacticUnitType) => void
    setGeneralData: (data: GeneralData) => void
    setSelectedCurricularAreas: (areas: string[]) => void
    setCurrentStep: (step: number) => void
    reset: () => void
}