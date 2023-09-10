import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="w-full h-screen p-8 flex justify-center items-center">
      <Spin size="large" className="text-orange-600" />
    </div>
  );
};

export default Loading;
