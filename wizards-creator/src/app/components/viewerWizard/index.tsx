import {
  useListComponents,
  usePageWizardStore,
  useWizardStore,
} from "@/store/wizardStore";
import { gerationComponentsOnScreen } from "@/utils/gerationComponentsOnScreen";
import { Button, Steps } from "antd";
import { useMemo, useState } from "react";

export function ViewerWizard() {
  const pageWizard = usePageWizardStore();
  const { listPageWizard, listStepsItens } = useWizardStore();

  const { listComponents } = useListComponents();
  const [current, setCurrent] = useState<number>(0);

  const onChangeCurrent = (value: number) => {
    setCurrent(value);
    pageWizard.countCurrentStep();
    console.log(current);
  };

  const listComponentsSelectedUser = useMemo(() => {
    const listComponentsVerification =
      listPageWizard.length === 0
        ? listComponents
        : current < listPageWizard.length
        ? listPageWizard[current].components
        : listComponents;

    return gerationComponentsOnScreen(listComponentsVerification);
  }, [listComponents, listPageWizard, current]);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen w-full">
      <div className="flex flex-col justify-center items-center">
        <Steps
          current={pageWizard.data.currentStep}
          onChange={onChangeCurrent}
          items={
            listPageWizard.length === 0
              ? [pageWizard.data.stepItems]
              : [...listStepsItens, pageWizard.data.stepItems]
          }
          direction={pageWizard.data.direction}
        />
        <div className="flex flex-col gap-8 justify-start items-center w-full h-full mt-10">
          {listComponentsSelectedUser.map((Component, index) => (
            <div key={index}>{Component}</div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-8 mt-8 self-end align-bottom ">
        <Button type="primary" size="large">
          Salvar Wizard
        </Button>
        <Button type="primary" danger size="large">
          Limpar Wizard
        </Button>
      </div>
    </div>
  );
}
