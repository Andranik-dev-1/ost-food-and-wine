import { sendContactMessageDto } from "@/types";
import axios from "axios";
import { toast } from "react-hot-toast";

const sendContactMessage = async ({
  name,
  number,
  title,
  message,
}: sendContactMessageDto) => {
  const text = `
    %0AԿոնտակտային հաղորդագրություն հաճախորդից
    %0A
    %0AԱնուն: ${name},
    %0Aհեռախոսահամար: ${number},
    %0A
    %0Aվերնագիր: ${title},
    %0Aհաղորդագրություն: ${message},
`;

  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;
  try {
    await axios.get(url);
    return toast.success("Message was sent successfuly");
  } catch (error) {
    return toast.error(
      "ISomthing went wrong , please try again later axiosi error"
    );
  }
};

export default sendContactMessage;
