"use client";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next-intl/client";
import React, { useCallback, useEffect, useState } from "react";
import { Form as AntdForm, Input, Radio, FormItemProps } from "antd";
import Summary from "../../cart/components/summary";
import Skeleton from "@/components/ui/skeleton";
import { OrderFormValues, PaymentMethods } from "@/types";
import sendOrder from "@/actions/telegram/send-order";

const Form = () => {
  const [form] = AntdForm.useForm();
  const { TextArea } = Input;
  const [mounted, setMounted] = useState(false);

  const cartItems = useCart((state) => state.items);
  const totalAmount = useCart((state) => state.totalAmount);
  const deliveryPrice = useCart((state) => state.deliveryPrice);
  const removeAll = useCart((state) => state.removeAll);
  const router = useRouter();

  useEffect(() => {
    if (cartItems.length <= 0) {
      router.push("/cart");
    }
  }, [cartItems]);

  useEffect(() => {
    setMounted(true);
    askForLocation();
  }, []);

  const askForLocation = useCallback(async () => {
    try {
      const position: any = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
        });
      });

      const { latitude, longitude } = position.coords;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
        {
          headers: {
            "Accept-Language": "en-US,en;q=0.9", // Set the desired language here
          },
        }
      );
      const data = await response.json();

      form.setFieldsValue({
        address: data.display_name,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onFinish = async (values: OrderFormValues) => {
    await sendOrder(values, cartItems, totalAmount, deliveryPrice);
    form.resetFields();
    removeAll();
  };

  if (!mounted) {
    return (
      <div className="w-full">
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="w-full spect-square rounded-xl h-screen flex flex-col gap-5">
            <div className="w-full h-1/5 aspect-square rounded-xl">
              <Skeleton className="h-full" />
            </div>
            <div className="w-full h-1/5 aspect-square rounded-xl">
              <Skeleton className="h-full" />
            </div>
            <div className="w-full h-1/5 aspect-square rounded-xl">
              <Skeleton className="h-full" />
            </div>
            <div className="w-full h-1/5 aspect-square rounded-xl">
              <Skeleton className="h-full" />
            </div>
          </div>
          <div className="w-full spect-square rounded-xl h-screen flex flex-col gap-5">
            <div className="w-full h-1/5 aspect-square rounded-xl">
              <Skeleton className="h-full" />
            </div>
            <div className="w-full h-1/5 aspect-square rounded-xl">
              <Skeleton className="h-full" />
            </div>
            <div className="w-full h-1/5 aspect-square rounded-xl">
              <Skeleton className="h-full" />
            </div>
            <div className="w-full h-1/5 aspect-square rounded-xl">
              <Skeleton className="h-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <AntdForm
        form={form}
        layout="vertical"
        onFinish={onFinish}
        size="large"
        autoComplete="off"
      >
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <AntdForm.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
              tooltip="This is a required field"
            >
              <Input placeholder="your name" />
            </AntdForm.Item>

            <AntdForm.Item
              label="Number"
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number to contact!",
                },
              ]}
              tooltip="This is a required field"
            >
              <Input placeholder="your number" type="number" />
            </AntdForm.Item>
            <AntdForm.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
              tooltip="This is a required field"
            >
              <Input placeholder="your adrress" />
            </AntdForm.Item>

            <AntdForm.Item
              label="Payment method"
              name="paymentMethod"
              rules={[
                { required: true, message: "Please check payment method!" },
              ]}
            >
              <Radio.Group>
                <Radio value={PaymentMethods.Cash}>cash</Radio>
                <Radio value={PaymentMethods.PosTerminal}>posterminal</Radio>
              </Radio.Group>
            </AntdForm.Item>
          </div>
          <div>
            <AntdForm.Item
              label="Մանրամասներ"
              name="details"
              tooltip="This is a required field"
            >
              <TextArea
                rows={5}
                placeholder="Նշումներ պատվերի մասին (Ոչ Պարտադիր) or bnakaran padyezd ban"
              />
            </AntdForm.Item>
            <Summary locale="am" buttonText="Order" submit />
          </div>
        </div>
      </AntdForm>
    </div>
  );
};

export default Form;
