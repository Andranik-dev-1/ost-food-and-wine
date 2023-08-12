const ContactHeader = ({ locale }: { locale: string }) => {
  return (
    <>
      <h2 className="font-bold text-orange-600 text-2xl sm:text-3xl lg:text-4xl sm:max-w-2xl max-w-xs">
        Կապ մեզ հետ
      </h2>
      <div className="border-b-2 border-orange-600 my-3"></div>
      <p className="mb-5">
        Սեղան պատվիրելու, feedback uxarkleu karciq haytnelu կամ հարցեր տալու
        համար դիմեք մեզ։ Մեր թիմն այստեղ է օգնելու և ձեր փորձը անմոռանալի
        դարձնելու համար:
      </p>
    </>
  );
};

export default ContactHeader;
