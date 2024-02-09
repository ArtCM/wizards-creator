"use client";
import { useSaveWizardsStore } from "@/store/wizardStore";
import { gerationComponentsOnScreen } from "@/utils/gerationComponentsOnScreen";
import { Steps } from "antd";
import { useMemo, useState } from "react";

export default function CreatedWizard({ params }: { params: { id: number } }) {
  const { listWizardSaves } = useSaveWizardsStore();
  const [current, setCurrent] = useState<number>(0);

  const onChangeCurrent = (value: number) => {
    setCurrent(value);
    console.log(current);
  };

  const componentsWizardCreated = useMemo(() => {
    return gerationComponentsOnScreen(
      listWizardSaves[params.id].listPageWizard[current].components
    );
  }, [current]);

  return (
    <div>
      <div className="flex flex-col">
        <Steps
          current={current}
          items={listWizardSaves[params.id].listStepsItens}
          direction={
            listWizardSaves[params.id].listPageWizard[params.id].direction
          }
          onChange={onChangeCurrent}
        />
      </div>

      <div className="mt-6 flex flex-col itens-center justify-center">
        {componentsWizardCreated.map((component, index) => (
          <div className="my-2 text-center" key={index}>{component}</div>
        ))}
      </div>
    </div>
  );
}