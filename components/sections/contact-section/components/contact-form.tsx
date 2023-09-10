"use client";
import { Form, Input } from "antd";
import Button from "@/components/ui/button";
import sendContactMessage from "@/actions/telegram/send-contact-message";
import { sendContactMessageDto } from "@/types";

const ContactForm = ({
  formTexts,
  locale,
}: {
  formTexts: any;
  locale: string;
}) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const onFinish = async (values: sendContactMessageDto) => {
    await sendContactMessage(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      size="large"
      onFinish={onFinish}
      autoComplete="off"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <Form.Item
          name="name"
          rules={[{ required: true, message: formTexts.nameValidation }]}
        >
          <Input placeholder={formTexts.namePlaceholder} />
        </Form.Item>
        <Form.Item name="number">
          <Input placeholder={formTexts.phonePlaceholder} />
        </Form.Item>
      </div>
      <Form.Item name="title">
        <Input placeholder={formTexts.subjectPlaceholder} />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: formTexts.messageValidation }]}
      >
        <TextArea
          showCount
          maxLength={300}
          style={{ height: 120, resize: "none" }}
          placeholder={formTexts.messagePlaceholder}
        />
      </Form.Item>
      <div className="text-center">
        <Button type="submit" full className="mt-5">
          {formTexts.btnText}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
