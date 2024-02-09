import { IListComponents } from "@/store/wizardStore";
import { Button, Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export function gerationComponentsOnScreen(list: IListComponents[]) {
  const componentsList: Array<React.ReactNode> = [];

  list.map((item) => {
    if (item.component === "input") {
      const inputElement: React.ReactNode = (
        <Input placeholder={item.text} size={item.size ?? "middle"} />
      );

      componentsList.push(inputElement);
    } else if (item.component === "textarea") {
      const textAreaElement: React.ReactNode = (
        <TextArea size={item.size ?? "middle"} placeholder={item.text} />
      );

      componentsList.push(textAreaElement);
    } else if (item.component === "button") {
      const buttonElement: React.ReactNode = (
        <Button size={item.size ?? "middle"}>{item.text}</Button>
      );

      componentsList.push(buttonElement);
    } else if (item.component === "label") {
      const labelElement: React.ReactNode = <label>{item.text}</label>;

      componentsList.push(labelElement);
    } else if (item.component === "checkbox") {
      const checkBoxElement: React.ReactNode = (
        <Checkbox> {item.text} </Checkbox>
      );

      componentsList.push(checkBoxElement);
    }
  });

  return componentsList;
}
