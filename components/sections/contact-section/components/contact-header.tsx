const ContactHeader = ({ contactHeaderTexts }: { contactHeaderTexts: any }) => {
  return (
    <>
      <h2 className="font-bold text-orange-600 text-2xl sm:text-3xl lg:text-4xl sm:max-w-2xl max-w-xs">
        {contactHeaderTexts.header}
      </h2>
      <div className="border-b-2 border-orange-600 my-3"></div>
      <p className="mb-5">{contactHeaderTexts.subheader}</p>
    </>
  );
};

export default ContactHeader;
