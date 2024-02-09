import { SizeType } from "antd/es/config-provider/SizeContext";
import { create } from "zustand";

export interface IListComponents {
  component: string;
  text: string;
  size: SizeType;
}

export interface Items {
  title: string;
  description?: string;
}

interface IWIzardPageProps {
  direction: "horizontal" | "vertical";
  components: IListComponents[];
  currentStep: number;
  stepItems: Items;
}

interface IPagewizard {
  data: IWIzardPageProps;
  cleanObjectData: () => void;
  addName: (name: string) => void;
  addDirection: (direction: "horizontal" | "vertical") => void;
  addComponents: (components: IListComponents[]) => void;
  countCurrentStep: () => void;
}

interface IComponents {
  listComponents: IListComponents[];
  addToComponent: (item: IListComponents) => void;
  removeItem: (item: string) => void;
  cleanList: () => void;
}

interface IWizard {
  listPageWizard: IWIzardPageProps[];
  listStepsItens: Items[];
  addPageWizard: (page: IWIzardPageProps) => void;
  addStepItem: (item: Items) => void;
}

export const usePageWizardStore = create<IPagewizard>((set) => {
  return {
    data: {
      currentStep: 0,
      stepItems: {
        title: "",
      },
      components: [],
      direction: "horizontal",
    },

    cleanObjectData: () =>
      set((state) => ({
        data: {
          ...state.data,
          components: [],
          stepItems: {
            title: "",
          },
        },
        stepItems: {
          title: "",
        },
      })),
    addDirection(direction) {
      set((state) => ({ data: { ...state.data, direction } }));
    },
    addName(name) {
      set((state) => ({
        data: {
          ...state.data,
          stepItems: { ...state.data.stepItems, title: name },
        },
      }));
    },
    addComponents(components) {
      set((state) => ({ data: { ...state.data, components } }));
    },
    countCurrentStep: () =>
      set((state) => ({
        data: { ...state.data, currentStep: state.data.currentStep + 1 },
      })),
  };
});

export const useListComponents = create<IComponents>((set) => {
  return {
    listComponents: [],
    addToComponent: (item: IListComponents) =>
      set((state) => ({ listComponents: [...state.listComponents, item] })),
    removeItem: (item: string) =>
      set((state) => ({
        listComponents: state.listComponents.filter(
          (component) => item !== component.component
        ),
      })),
    cleanList: () => set((_) => ({ listComponents: [] })),
  };
});

export const useWizardStore = create<IWizard>((set) => {
  return {
    listPageWizard: [],
    listStepsItens: [],
    addPageWizard(page) {
      set((state) => ({
        listPageWizard: [...state.listPageWizard, page],
      }));
    },

    addStepItem(item) {
      set((state) => ({
        listStepsItens: [...state.listStepsItens, item],
      }));
    },
  };
});
