import {
  IListComponents,
  useListComponents,
  usePageWizardStore,
  useWizardStore,
} from "@/store/wizardStore";
import { firstLetterUpperCase } from "@/utils/firstLetterUpperCase";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, List, Radio, Select } from "antd";
import { useEffect, useState } from "react";
import { AssistantListComponent } from "../assistantListComponent";

const radioGroupOptions = [
  { label: "Horizontal", value: "horizontal" },
  { label: "Vertical", value: "vertical" },
];
const componentsOptions = [
  { label: "Button", value: "button" },
  { label: "Input", value: "input" },
  { label: "Text Area", value: "textarea" },
  { label: "Label", value: "label" },
  { label: "CheckBox", value: "checkbox" },
];

export function StepsWizard() {
  const { listComponents, addToComponent, removeItem, cleanList } =
    useListComponents();
  const {
    data,
    cleanObjectData,
    addDirection,
    addTitle,
    addName,
    addComponents,
    countCurrentStep,
  } = usePageWizardStore();

  const { listStepsItens, addPageWizard, addStepItem } = useWizardStore();

  const [selectItem, setSelectItem] = useState<IListComponents>(
    {} as IListComponents
  );
  const [direction, setDirection] = useState<string>("horizontal");
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");

  function handleDirection(e: any) {
    setDirection(e.target.value);
    addDirection(e.target.value);
  }

  function handleTitle(e: any) {
    setTitle(e.target.value);
    addTitle(e.target.value);
  }
  function handleName(e: any) {
    setName(e.target.value);
    addName(e.target.value);
  }

  function handleSelectItem(e: any, type: "component" | "text" | "size") {
    if (type === "component") {
      setSelectItem((prevState) => {
        return { ...prevState, component: e };
      });
    } else if (type === "text") {
      setSelectItem((prevState) => {
        return { ...prevState, text: e.target.value };
      });
    } else if (type === "size") {
      setSelectItem((prevState) => {
        return { ...prevState, size: e.target.value };
      });
    }
  }
  function OnConfirmItemSelected() {
    addToComponent(selectItem);
    console.log(data.components);
  }

  function cleanAll() {
    cleanList();
    setTitle("");
    setDirection("horizontal");
  }

  useEffect(() => {
    addComponents(listComponents);
  }, [listComponents]);

  useEffect(() => {
    if (listStepsItens.length !== 0) {
      addPageWizard(data);
      cleanObjectData();
      cleanAll();
    }
  }, [listStepsItens]);

  return (
    <div className="flex flex-col gap-8">
      {data.currentStep === 0 && (
        <>
          <div className="flex flex-col gap-4 justify-center items-center">
            <label
              htmlFor=""
              className="flex flex-col gap-4 justify-center items-center"
              >
              Escolha o Nome da Wizard:
            </label>
            <Input onChange={handleName} value={name} />
          </div>
          
          <div className="flex flex-col gap-4 justify-center items-center">
            <label htmlFor="">Escolha a orientação do Wizard:</label>
            <Radio.Group
              optionType="button"
              options={radioGroupOptions}
              value={direction}
              onChange={handleDirection}
            />
          </div>
        </>
      )}
      
      <div className="flex flex-col gap-4 justify-center items-center">
        <label htmlFor="">Escolha o nome da página do Wizard:</label>
        <Input onChange={handleTitle} value={title} />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <label className="text-center" htmlFor="">
          Escolha o componente que deseja adicionar em seu Wizard:
        </label>
        <div className="flex flex-col w-full  gap-4 lg:flex-row  justify-center items-center ">
          <Select
            className="lg:w-full placeholder:text-black"
            options={componentsOptions}
            placeholder="Selecione uma opção"
            onChange={(e) => handleSelectItem(e, "component")}
          />
          <div className="flex flex-col gap-2">
            <Button type="primary" onClick={OnConfirmItemSelected} 
            disabled={
              selectItem.component === "" ||
              selectItem.component === null ||
              selectItem.component === undefined
             }>
              Confirmar
            </Button>
          </div>
        </div>

        {(selectItem.component === "input" ||
          selectItem.component === "button" ||
          selectItem.component === "textarea") && (
          <AssistantListComponent onChangeList={handleSelectItem} />
        )}
        {(selectItem.component === "label" ||
          selectItem.component === "checkbox") && (
          <AssistantListComponent
            typeOptions={false}
            onChangeList={handleSelectItem}
          />
        )}
      </div>
      <div>
        <List
          bordered
          header={<div>Lista de components adicionados</div>}
          dataSource={listComponents}
          size="large"
          renderItem={(item) => {
            return (
              <List.Item>
                <div className="flex justify-between w-full bg-white p-2 rounded-md">
                  {firstLetterUpperCase(item.component)}
                  <DeleteOutlined
                    style={{ color: "#ef4444" }}
                    onClick={() => removeItem(item.component)}
                  />
                </div>
              </List.Item>
            );
          }}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <Button
          size="large"
          type="primary"
          onClick={() => {
            addStepItem(data.stepItems);
            countCurrentStep();
          }}
          disabled={
            data.stepItems.title === "" ||
            data.stepItems.title === null ||
            data.stepItems.title === undefined
          }
        >
          Criar Página
        </Button>
        <Button
          size="large"
          type="primary"
          danger
          onClick={() => {
            cleanObjectData();
            cleanAll();
          }}
        >
          Limpar Opções
        </Button>
      </div>
    </div>
  );
}
