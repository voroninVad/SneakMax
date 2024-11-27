import StepWizard from "react-step-wizard";
import style from "./index.module.css";
import React, { FC } from "react";
import Slide2 from "./Slide2";
import Slide1 from "./Slide1";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

type Props = {
    nextSlide: () => void;
};

const Step1: FC<Props> = ({ nextSlide }) => {
  return (
    <div>
      <h1>Step 1</h1>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

const Step2: FC<Props> = ({ nextSlide }) => {
  return (
    <div>
      <h1>Step 2</h1>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

const Step3 = () => {
  return (
    <div>
      <h1>Step 3</h1>
      <button onClick={() => alert("Form submitted!")}>Submit</button>
    </div>
  );
};

const Survey: FC<Props> = ({ nextSlide }) => {
  return (
      // <StepWizard>
      //   <Step1 nextSlide={nextSlide}/>
      //   <Step2 nextSlide={nextSlide} />
      //   <Step3 />
      // </StepWizard>
      <Slide4 nextSlide={nextSlide}/>
  );
};

export default Survey;
