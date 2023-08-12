import axios from "axios";
import { toast } from "react-hot-toast";

const sendFeedback = async (comment: string) => {
  if (!comment || comment.trim() === "") {
    return toast.error("The comment can not be empty");
  }
  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${comment}`;
  try {
    await axios.get(url);
    return toast.success("Comment was sent successfuly");
  } catch (error) {
    return toast.error(
      "ISomthing went wrong , please try again later axiosi error"
    );
  }
};

export default sendFeedback;
