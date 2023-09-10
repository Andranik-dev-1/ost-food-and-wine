"use client";
import { Form, Input } from "antd";
import Button from "@/components/ui/button";
import sendFeedback from "@/actions/telegram/send-feedback";

const FooterForm = ({ texts }: { texts: any }) => {
  const [form] = Form.useForm();

  const onFinish = async ({ comment }: { comment: string }) => {
    await sendFeedback(comment);
    form.resetFields();
  };

  return (
    <Form form={form} size="large" onFinish={onFinish} autoComplete="off">
      <div className="flex items-center justify-center mx-auto w-full sm:max-w-xl">
        <Form.Item
          name="comment"
          className="w-full mr-3 basis-full"
          rules={[{ required: true, message: "Field can't be empty!" }]}
        >
          <Input placeholder={texts.feedbackInputPlaceholder} />
        </Form.Item>
        <Form.Item>
          <Button type="submit">{texts.feedbackBtn}</Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default FooterForm;
