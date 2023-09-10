"use client";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next-intl/client";
import React, { useCallback, useEffect, useState } from "react";
import { Form as AntdForm, Input, Radio, FormItemProps } from "antd";
import Summary from "../../../../../components/ui/summary";
import Skeleton from "@/components/ui/skeleton";
import { OrderFormValues, PaymentMethods } from "@/types";
import sendOrder from "@/actions/telegram/send-order";

const Form = ({ texts, locale }: { texts: any; locale: string }) => {
  const [form] = AntdForm.useForm();
  const { TextArea } = Input;
  const [mounted, setMounted] = useState(false);

  const cartItems = useCart((state) => state.items);
  const totalAmount = useCart((state) => state.totalAmount);
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
    await sendOrder(values, cartItems, totalAmount);
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
              label={texts.nameLabel}
              name="name"
              rules={[{ required: true, message: texts.nameErrorMessage }]}
            >
              <Input placeholder={texts.namePlaceholder} />
            </AntdForm.Item>

            <AntdForm.Item
              label={texts.phoneLabel}
              name="number"
              rules={[
                {
                  required: true,
                  message: texts.phoneErrorMessage,
                },
              ]}
            >
              <Input placeholder={texts.phonePlaceholder} type="number" />
            </AntdForm.Item>

            <AntdForm.Item
              label={texts.addressLabel}
              name="address"
              rules={[{ required: true, message: texts.addressErrorMessage }]}
            >
              <Input placeholder={texts.addressPlaceholder} />
            </AntdForm.Item>

            <AntdForm.Item
              label={texts.paymentMethod}
              name="paymentMethod"
              initialValue={PaymentMethods.Cash}
              rules={[
                { required: true, message: "Please check payment method!" },
              ]}
            >
              <Radio.Group>
                <Radio value={PaymentMethods.Cash}>{texts.paymentByCash}</Radio>
                {/* <Radio value={PaymentMethods.PosTerminal}>posterminal</Radio> */}
              </Radio.Group>
            </AntdForm.Item>
          </div>
          <div>
            <AntdForm.Item label={texts.detailsText} name="details">
              <TextArea rows={5} placeholder={texts.detailsLabel} />
            </AntdForm.Item>
            <Summary
              locale={locale}
              summaryTexts={{
                deliveryAreas: texts.deliveryAreas,
                deliveryAmount: texts.deliveryAmount,
                buttonText: texts.orderText,
                orderSubtotal: texts.orderSubtotal,
                total: texts.total,
              }}
              submit
            />
          </div>
        </div>
      </AntdForm>
    </div>
  );
};

export default Form;
