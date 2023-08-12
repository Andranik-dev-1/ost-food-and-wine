"use client";
import { Form, Input } from "antd";
import Button from "@/components/ui/button";
import sendContactMessage from "@/actions/telegram/send-contact-message";
import { sendContactMessageDto } from "@/types";

const ContactForm = ({ locale }: { locale: string }) => {
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
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item name="number">
          <Input placeholder="Your Phone" />
        </Form.Item>
      </div>
      <Form.Item name="title">
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: "Please input your message!" }]}
      >
        <TextArea
          showCount
          maxLength={300}
          style={{ height: 120, resize: "none" }}
          placeholder="disable resize"
        />
      </Form.Item>
      <div className="text-center">
        <Button type="submit" full className="mt-5">
          Ուղարկել հաղորդագրություն
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
