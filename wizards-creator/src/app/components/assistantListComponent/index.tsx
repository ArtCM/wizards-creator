import { Input, Space } from "antd";
import Radio, { Group } from "antd/es/radio";

interface AssistantListComponentProps {
  typeOptions?: boolean;
  onChangeList: (e: any, type: "component" | "text" | "size") => void;
}

export function AssistantListComponent({
  onChangeList,
  typeOptions = true,
}: AssistantListComponentProps) {
  return (
    <div className=" w-full justify-start items-start">
      <div className="w-3/6 flex flex-col gap-4 mt-4">
        <div className="flex gap-4 w-full">
          <label htmlFor="">Texto:</label>
          <Input onChange={(e) => onChangeList(e, "text")} />
        </div>

        {typeOptions && (
          <div className="flex gap-4 w-full">
            <label htmlFor="">Size:</label>
            <Group onChange={(e) => onChangeList(e, "size")}>
              <Space direction="vertical">
                <Radio value="small">Small</Radio>
                <Radio value="middle">Middle</Radio>
                <Radio value="large">Large</Radio>
              </Space>
            </Group>
          </div>
        )}
      </div>
    </div>
  );
}
