import React from "react";
import Heading from "../components/headingprops";
import FaqBox from "../components/Faqbox";

const FaqPage = () => {
  return (
    <div className="w-[1920px] bg-white">
      <Heading Heading="FAQ Page" home="Home" pagename="Faq" />

      <div className="w-[1320px] h-[942px]  m-auto ">
        <div className="w-[771px] h-[88px] mt-[120px] m-auto absolute ml-[280px] ">
          <h1 className="w-[510px] h-[56px] text-[48px] text-cheftextcolor m-auto  ">
            Questions Looks Here
          </h1>
          <p className="w-[771px] h-[24px] text-[14px] mt-[8px] text-center leading-6 text-coloricon">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </p>
        </div>
        {/* faq-textdiv */}
        <div className="grid grid-cols-2 gap-5 w-[1320px] h-[558px]  mt-[264px] absolute">
          {/* Faqtextdiv1 */}
          <FaqBox heading="How we serve food?" sign="+" />
          {/* Faqtextdiv2 */}
          <FaqBox heading="How can we get in touch with you?" sign="-" />
          {/* Faqtextdiv3 */}

          <FaqBox heading="How is our food quality?" sign="+" />
          {/* Faqtextdiv4 */}

          <FaqBox heading="What will be delivered? And When?" sign="+" />

          {/* Faqtextdiv5 */}

          <FaqBox heading="How do we give home delivery?" sign="+" />

          {/* Faqtextdiv6 */}

          <FaqBox heading="Is this restaurant 24 hours open?" sign="+" />
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
