import { FaLocationDot } from "react-icons/fa6";
import { LuClock4, LuMail, LuPhoneCall } from "react-icons/lu";

import Button from "@/components/ui/button";

const InfoCards = ({ contactInfoTexts }: { contactInfoTexts: any }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
      <div className="flex rounded-lg border hover:border-orange-500 transition-colors p-3">
        <div>
          <Button className="p-3">
            <FaLocationDot className="text-xl" />
          </Button>
        </div>
        <div className="ml-2">
          <p className="font-bold text-lg">{contactInfoTexts.locationText}</p>
          <p className="text-sm">
            {contactInfoTexts.addressText}
            <br />
            {contactInfoTexts.addressTextRegion}
          </p>
        </div>
      </div>
      <div className="flex rounded-lg border hover:border-orange-500 transition-colors p-3">
        <div>
          <Button className="p-3">
            <LuClock4 className="text-xl" />
          </Button>
        </div>
        <div className="ml-2">
          <p className="font-bold text-lg">{contactInfoTexts.openHoursText}</p>
          <p className="text-sm">{"11:00 AM - 23:00 PM"}</p>
        </div>
      </div>
      <div className="flex rounded-lg border hover:border-orange-500 transition-colors p-3">
        <div>
          <Button className="p-3">
            <LuMail className="text-xl" />
          </Button>
        </div>
        <div className="ml-2">
          <p className="font-bold text-lg">{contactInfoTexts.emailText}</p>
          <p className="text-sm">ostfoodsandwine@gmail.com</p>
        </div>
      </div>
      <div className="flex rounded-lg border hover:border-orange-500 transition-colors p-3">
        <div>
          <Button className="p-3">
            <LuPhoneCall className="text-xl" />
          </Button>
        </div>
        <div className="ml-2">
          <p className="font-bold text-lg">{contactInfoTexts.callText}</p>
          <p className="text-sm">
            {"(010) 234 334"}
            <br />
            {"(010) 600 808"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
