import type { EducationLevel } from "../useDidacticUnitStore"

export interface GeneralData {
    unitTitle: string
    educationLevel: EducationLevel | ''
    grade: string
    estimatedDuration: string
    unitPurpose: string
    significantSituation: string
    expectedProduct: string
    centralProblem?: string // Only for learningProject
    baseUnit?: string // Only for learningModule
    pedagogicalJustification?: string // Only for learningModule
}

