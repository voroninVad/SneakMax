import StepWizard from "react-step-wizard";
import style from "./index.module.css";
import React, { FC } from "react";
import Slide2 from "./Slide2";
import Slide1 from "./Slide1";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

type Props = {
  nextStep: () => void;
  firstStep: () => void;
};

const Survey: FC<Props> = ({ nextStep,firstStep }) => {
  return (    
    <section className={style.survey}>
      <StepWizard >
      <Slide1 nextStep={nextStep}/>
      <Slide2 nextStep={nextStep}/>
      <Slide3 nextStep={nextStep}/>
      <Slide4 firstStep={firstStep}/>
    </StepWizard>
    </section>
  );
};

export default Survey;
