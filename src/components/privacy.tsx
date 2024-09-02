"use client";

import { useState } from "react";

const Privacy = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Interpretation and Definitions",
      content_one: (
        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
      ),
      content_two: (
        <p>
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the Privacy Policy Generator.
        </p>
      ),
    },
    {
      title: "Collecting and Using Your Personal Data",
    },
    {
      title: "Use of Your Personal Data",
    },
    {
      title: "Retention of Your Personal Data",
    },
    {
      title: "Transfer of Your Personal Data",
    },
    {
      title: "Delete Your Personal Data",
    },
    {
      title: "Disclosure of Your Personal Data",
    },
  ];

  return (
    <div className="bg-[#110427] min-h-screen p-4">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="m-2 bg-gradient-to-r to-[#370099] p-[3px] rounded-md from-[#FF7F50]"
        >
          <div className="rounded-md bg-[#110427]">
            <div
              className="flex items-center justify-between cursor-pointer p-4"
              onClick={() => toggleAccordion(index)}
            >
              <h1 className="text-white">{item.title}</h1>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform transition-transform duration-300 ${
                  openAccordionIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2C5.58929 2 2 5.58929 2 10C2 14.4107 5.58929 18 10 18C14.4107 18 18 14.4107 18 10C18 5.58929 14.4107 2 10 2ZM9 13C9 13.5523 9.44772 14 10 14C10.5523 14 11 13.5523 11 13V7.35355L12.8536 9.20711C13.0488 9.40237 13.3536 9.40237 13.5488 9.20711C13.7441 9.01184 13.7441 8.70711 13.5488 8.51184L10.5488 5.51184C10.3536 5.31658 10.0488 5.31658 9.85355 5.51184L6.85355 8.51184C6.65829 8.70711 6.65829 9.01184 6.85355 9.20711C7.04882 9.40237 7.35355 9.40237 7.54882 9.20711L9 7.35355V13Z"
                  fill="#F0EBF8"
                />
              </svg>
            </div>

            {openAccordionIndex === index && (
              <div className="p-4 pt-0 text-white">
                <div className="h-0.5 mb-4 w-full mx-auto bg-gradient-to-r from-[#3B0995] via-[#FF7F50] to-[#3B0995]"></div>
                <div className="my-2">{item.content_one}</div>
                {item.content_two}
                <div className="my-2">
                  <h1>Interpretation</h1>
                  <p>
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                </div>
                <div>
                  <h1>Definitions</h1>
                  <p>For the purposes of this Privacy Policy:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Account means a unique account created for You to access
                      our Service or parts of our Service.
                    </li>
                    <li>
                      Affiliate means an entity that controls, is controlled by,
                      or is under common control with a party, where control
                      means ownership of 50% or more of the shares, equity
                      interest, or other securities entitled to vote for
                      election of directors or other managing authority.
                    </li>
                    <li>
                      Company (referred to as either the Company, We, Us or Our
                      in this Agreement) refers to BeyondOTC, 982 Pearl Court
                      Riverside, CA 92503.
                    </li>
                    <li>
                      Cookies are small files that are placed on Your computer,
                      mobile device, or any other device by a website,
                      containing the details of Your browsing history on that
                      website among its many uses.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Privacy;
