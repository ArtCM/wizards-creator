"use client";
import { StepsWizard } from "../stepsWizard";
import { ViewerWizard } from "../viewerWizard";

export function WizardCreate() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-start items-center h-full">
        <div className="border-r-2 border-gray-950 w-2/6 p-5 min-h-screen flex justify-center ">
          <StepsWizard />
        </div>
        <div className="min-h-screen w-full flex flex-col justify-start items-start">
          <ViewerWizard />
        </div>
      </div>
    </div>
  );
}
