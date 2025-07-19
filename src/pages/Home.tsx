import Step1UnitType from "../modules/didacticUnit/steps/Step1LevelCycleGrade";
import Step2GeneralData from "../modules/didacticUnit/steps/Step2GeneralData";
import Step3CurricularAreas from "../modules/didacticUnit/steps/Step3CurricularAreas";

function Home() {
    return (
        <div>
            <Step1UnitType />
            <Step2GeneralData />
            <Step3CurricularAreas />
        </div>
    )
}

export default Home;