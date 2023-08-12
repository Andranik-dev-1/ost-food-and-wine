import Image from "next/image";

import Container from "../ui/container";
import Button from "../ui/button";

const AboutSection = () => {
  return (
    <section className="py-5 md:py-8" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
          <div className="flex flex-col justify-center items-stretch">
            <h2 className="font-bold text-orange-600 text-2xl sm:text-3xl lg:text-4xl sm:max-w-xl max-w-xs mb-8">
              Օստ Ուտելիք և Գինի-ի մասին
            </h2>
            <p className="mb-4 ">
              «Օստ Ուտելիք և Գինի»-ում մենք հավատում ենք, որ սնունդը միայն
              սնունդը չէ. դա արվեստի մի տեսակ է, որը պետք է նշել և գնահատել: Մեր
              ճաշացանկը պարունակում է ճաշատեսակների լայն տեսականի, որոնցից
              յուրաքանչյուրը պատրաստված է մանրուքների նկատմամբ առավելագույն
              խնամքով և ուշադրությամբ: Մեր ֆիրմային նախուտեստներից մինչև մեր ճոխ
              հիմնական ճաշատեսակներ, մեր ճաշացանկի ամեն ինչ պատրաստված է միայն
              ամենաթարմ և ամենաբարձր որակի բաղադրիչներից:
            </p>
            <p className="">
              «Օստ Ուտելիք և Գինի»-ում մենք ձգտում ենք ստեղծել ջերմ, հյուրընկալ
              և հրավիրող միջավայր: Մեր ռեստորանը նախատեսված է մեր հյուրերին
              հարմարավետ և հանգստացնող ճաշկերույթ ապահովելու համար, անկախ
              նրանից՝ դուք գալիս եք երկու հոգու ռոմանտիկ ընթրիքի, թե խմբակային
              տոնակատարության ընտանիքի և ընկերների հետ:
            </p>
          </div>
          <div className="flex flex-col justify-center items-stretch">
            <Image
              src="/images/about-sec.png"
              alt="img"
              width="1360"
              height="1020"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
          <div className="flex flex-col justify-center items-stretch order-last lg:order-first">
            <Image
              src="/images/about-sec-wine.png"
              alt="img"
              width="1360"
              height="1020"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-stretch">
            <div>
              <p className="mb-4">
                Մենք նաև հպարտ ենք մեր ընդարձակ գինիների ցանկով, որտեղ
                ներկայացված են աշխարհի լավագույն գինիներից մի քանիսը: Մեր
                գինիների ընտրանին խնամքով մշակվել է մեր ճաշատեսակները ատարելապես
                լրացնելու համար՝ ապահովելով, որ յուրաքանչյուր կում կամ խայթոց
                համի պայթյուն է, որը ձեզ ավելի շատ ցանկություն կառաջացնի:
              </p>
              <p className="mb-4">
                Բարձր հմուտ խոհարարների և բարեհամբույր անձնակազմի մեր թիմը
                նվիրված է ձեզ մատուցելու բացառիկ սպասարկում և հյուրընկալություն՝
                ձեր այցելությունը Օստ Ուտելիք և Գինի դարձնելով իսկապես
                անմոռանալի փորձ:
              </p>
              <p>
                Շնորհակալություն Օստ Ուտելիք և Գինի-ն ընտրելու համար, և մենք
                անհամբեր սպասում ենք շուտով սպասարկել ձեզ:
              </p>
              <div className="flex justify-center mt-6">
                <Button>Դիտել Մեր Գինիները</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
