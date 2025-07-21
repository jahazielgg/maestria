import type { Cycle, Grade } from "./entities/CurriculumMap";
import type { DidacticUnitStore } from "./entities/DidacticUnitStore"
import { create } from "zustand";

export type DidacticUnitType = 'learningUnit' | 'learningProject' | 'learningModule'
export type Modality = 'inPerson' | 'virtual' | 'hybrid'

export const useDidacticUnitStore = create<DidacticUnitStore>((set) => ({
    currentStep: 0,
    unitType: null,
    generalData: null,
    selectedCurricularAreas: [],

    selectedCompetencies: [],
    setSelectedCompetencies: (competencies) => set({ selectedCompetencies: competencies }),

    selectedTransversalApproaches: [],
    setSelectedTransversalApproaches: (approaches) => set({ selectedTransversalApproaches: approaches }),


    selectedTransversalCompetencies: [],
    setSelectedTransversalCompetencies: (transversalCompetencies) => set({ selectedTransversalCompetencies: transversalCompetencies }),

    significantSituation: '',
    setSignificantSituation: (situation) => set({ significantSituation: situation }),

    didacticUnitDetails: null,
    setDidacticUnitDetails: (details) => set({ didacticUnitDetails: details }),

    setUnitType: (type) => set({ unitType: type }),
    setGeneralData: (data) => set({ generalData: data }),

    setSelectedCurricularAreas: (areas) => set({ selectedCurricularAreas: areas }),

    setCurrentStep: (step) => set({ currentStep: step }),

    nextStep: () => set((s) => ({ currentStep: s.currentStep + 1 })),
    prevStep: () => set((s) => ({ currentStep: s.currentStep - 1 })),

    educationLevel: null,
    setEducationLevel: (level) => set({ educationLevel: level, cycle: null, grade: null }),
    cycle: null,
    setCycle: (cycle: Cycle | null) => set({ cycle, grade: null }),
    grade: null,
    setGrade: (grade: Grade | null) => set({ grade }),


    reset: () =>
        set({
            currentStep: 0,
            unitType: null,
            generalData: null,
            selectedCurricularAreas: [],
            educationLevel: null,
            cycle: null,
            grade: null,
            selectedCompetencies: [],
            selectedTransversalApproaches: [],
            selectedTransversalCompetencies: []
        })
}))