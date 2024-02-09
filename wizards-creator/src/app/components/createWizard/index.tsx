"use client";
import { StepsWizard } from "../stepsWizard";
import { ViewerWizard } from "../viewerWizard";

export function WizardCreate() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-start items-start h-full flex-col lg:flex-row">
        <div className="border-r-2 border-primary w-full lg:w-2/6 p-5 h-full flex justify-center bg-slate-300 rounded-md">
          <StepsWizard />
        </div>
        <div className="h-full w-full lg:w-4/6 flex flex-col justify-start items-start">
          <ViewerWizard />
        </div>
      </div>
    </div>
  );
}
