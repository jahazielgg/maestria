export type DidacticUnitType = 'unidadAprendizaje' | 'proyectoAprendizaje' | 'moduloAprendizaje';
export type DurationType = 'semanas' | 'sesiones';

export interface BaseDidacticUnitDetails {
    type: DidacticUnitType;
    title: string;
    duration: number;
    durationType: DurationType;
    purpose: string;
    finalProduct: string;
    expectedLearnings: number;
}

export interface LearningUnitDetails extends BaseDidacticUnitDetails {
    type: 'unidadAprendizaje';
}

export interface LearningProjectDetails extends BaseDidacticUnitDetails {
    type: 'proyectoAprendizaje';
    centralProblem: string; // Problema o reto central
}

export interface LearningModuleDetails extends BaseDidacticUnitDetails {
    type: 'moduloAprendizaje';
    baseUnit: string; // Unidad base en la que se basa
    pedagogicalJustification: string; // Justificación pedagógica
}

export type DidacticUnitDetails = LearningUnitDetails | LearningProjectDetails | LearningModuleDetails;