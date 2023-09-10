import { CartItem, OrderFormValues, PaymentMethods } from "@/types";
import axios from "axios";
import { toast } from "react-hot-toast";

const sendOrder = async (
  formData: OrderFormValues,
  cartItems: CartItem[],
  totalAmount: number
) => {
  const ordersString = cartItems
    .map((item) => {
      return `%0A${item.name["am"]} - x ${item.count}`;
    })
    .join("");

  const payment =
    formData.paymentMethod === PaymentMethods.PosTerminal
      ? "կրեդիտ քարտով"
      : "կանխիկ դրամով";

  const message = `
  %0AԱնուն: ${formData.name},
  %0Aհեռախոսահամար: ${formData.number},
  %0AՀասցե: ${formData.address},
  %0AՎճարման եղանակ: ${payment},
  %0A
  ${ordersString}
  %0A
  %0AՆշումներ պատվերի մասին: ${formData.details},
  %0A
  %0AՊատվերի գինը: ${totalAmount},
  `;

  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
  try {
    await axios.get(url);
    return toast.success("Order was sent successfuly");
  } catch (error) {
    return toast.error(
      "ISomthing went wrong , please try again later axiosi error"
    );
  }
};

export default sendOrder;
