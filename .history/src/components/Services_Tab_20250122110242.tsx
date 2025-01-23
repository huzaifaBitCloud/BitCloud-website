"use client";
import React, { useState } from "react";

const Services_Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("webapp");

  const tabsData = [
    { id: "webapp", label: "Web Development" },
    { id: "mobileapp", label: "Mobile App" },
    { id: "zoho_crm", label: "Zoho CRM" },
    { id: "finances", label: "Finances & Accounting" },
  ];
  const tableDescription = [
    {
      heading: "Websites that Work:",
      imageSrc: "/images/image2.jpg",
      description:
        "We design and develop user-friendly websites that are visually stunning, optimized for search engines, and convert visitors into leads or customers.",
    },
    {
      heading: "Custom CMS Solutions:",
      imageSrc: "/images/web-developer.jpg",
      description:
        "Empower your team with a Content Management System (CMS) that allows for easy content updates and management.",
    },
    {
      heading: "Ecommerce Powerhouses:",
      imageSrc: "/images/image2.jpg",
      description:
        "Build a user-friendly online store with secure payment gateways and a seamless shopping experience.",
    },
    {
      heading: "Responsive Design:",
      imageSrc: "/images/web-developer.jpg",
      description:
        "Ensure your website looks incredible and functions flawlessly across all devices.",
    },
    {
      heading: "Ongoing Support:",
      imageSrc: "/images/image2.jpg",
      description:
        "We offer maintenance and support plans to keep your website secure, updated, and performing at its best.",
    },
  ];
  const mobileDescription = [
    {
      heading: "Native Apps for Every Need:",
      imageSrc: "/images/image2.jpg",
      description:
        "Develop native iOS and Android apps that leverage the full potential of each platform, providing a smooth and engaging user experience.",
    },
    {
      heading: "Custom Functionality:",
      imageSrc: "/images/image2.jpg",
      description:
        "We can design and develop bespoke features to meet your specific business needs.",
    },
    {
      heading: "Engaging User Interfaces: ",
      imageSrc: "/images/image2.jpg",
      description:
        "Create intuitive and visually appealing UI/UX designs that keep users coming back for more.",
    },
    {
      heading: "App Store Optimization: c",
      imageSrc: "/images/image2.jpg",
      description:
        "Increase your app's visibility and downloads with effective App Store Optimization (ASO) strategies.",
    },
  ];
  const zohoDescription = [
    {
      heading: "Zoho CRM:",
      imageSrc: "/images/image2.jpg",
      description:
        "Zoho CRM is a customer relationship management (CRM) platform that helps businesses strengthen their connections with customers. By centralizing all your customer data and interactions, Zoho CRM streamlines your sales process.",
    },
    {
      heading: "Zoho Creator:",
      imageSrc: "/images/image2.jpg",
      description:
        "Frustrated with clunky software that doesn't fit your unique business needs? We can help! As a Zoho Creator authorized service provider, we empower you to build custom applications tailored to your exact workflows.  ",
    },
    {
      heading: "Zoho Books: ",
      imageSrc: "/images/image2.jpg",
      description:
        "Struggling to manage your finances and stay on top of bookkeeping? Our expertise as a Zoho Books authorized service provider can streamline your financial operations. Zoho Books is a user-friendly accounting software that allows us to automate tasks like invoicing, bill payments, and bank reconciliation.",
    },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "webapp":
        return (
          <div className="w-[90%] mx-auto mt-2">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {zohoDescription?.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className="border p-6 rounded-lg shadow-md flex flex-col items-start text-left card-services"
                  >
                    <div className="mb-4">
                      <img
                        src={item?.imageSrc}
                        alt="icon"
                        className="w-10 h-10"
                      />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-blue-700">
                      {item?.heading}
                    </h2>
                    <p className="text-gray-600">{item?.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case "mobileapp":
        return (
          <div className="w-[90%] mx-auto  mt-2">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {mobileDescription?.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className="border p-6 rounded-lg shadow-md flex flex-col items-start text-left card-services"
                  >
                    <div className="mb-4">
                      <img
                        src={item?.imageSrc}
                        alt="icon"
                        className="w-10 h-10"
                      />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-blue-700">
                      {item?.heading}
                    </h2>
                    <p className="text-gray-600">{item?.description}</p>
                  </div>
                );
              })}
              {/* </div> */}
            </div>
          </div>
        );
      case "zoho_crm":
        return (
          <div className="w-[90%] mx-auto mt-2">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {zohoDescription?.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className="border p-6 rounded-lg shadow-md flex flex-col items-start text-left card-services"
                  >
                    <div className="mb-4">
                      <img
                        src={item?.imageSrc}
                        alt="icon"
                        className="w-10 h-10"
                      />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-blue-700">
                      {item?.heading}
                    </h2>
                    <p className="text-gray-600">{item?.description}</p>
                  </div>
                );
              })}
              {/* <div className="flex items-center justify-end w-[100%] col-span-1 p-4">
                <div className="w-[400px] p-2 ">
                  <img
                    src="./images/contact-image.jpeg"
                    alt="web-developer"
                    className="rounded-lg"
                  />
                </div>
              </div> */}
            </div>
          </div>
        );
      case "finances":
        return (
          <div className="w-[90%] mx-auto mt-3">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {tableDescription?.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className="border p-6 rounded-lg shadow-md flex flex-col items-start text-left card-services"
                  >
                    <div className="mb-4">
                      <img
                        src={item?.imageSrc}
                        alt="icon"
                        className="w-10 h-10"
                      />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-blue-700">
                      {item?.heading}
                    </h2>
                    <p className="text-gray-600">{item?.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[80vh]"
        style={{
          backgroundImage: `url(https://static.zohocdn.com/sites/stock-images/images/zpstock-image-37.jpg)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-center py-12 lg:grid-cols-12 h-[100%]">
          <div className="w-[50%] mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-xl font-extrabold leading-none md:text-3xl xl:text-4xl text-white zoomIn">
              Empowering your business with seamless web, mobile, and Zoho
              solutions, while keeping your finances in perfect balance.
            </h1>
          </div>
        </div>
      </div>
      <div className="text-sm font-medium text-center text-black">
        <ul className="flex flex-wrap -mb-px justify-center">
          {tabsData.map((tab) => (
            <li className="me-2" key={tab.id}>
              <button
                className={`inline-block p-4 ${
                  activeTab === tab.id
                    ? "text-white bg-blue-600"
                    : "border-transparent hover:text-white hover:bg-blue-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mb-4 mt-3">
        <h1 className="font-extrabold text-xl">
          Discover the Power of BitCloud <br />Designed to Deliver the Ultimate User
          Experience
        </h1>
        <p className="font-semibold text-md">
          At BitCloud, we are committed to building an exceptional platform that
          puts users first. <br />Experience a seamless blend of innovation,
          reliability, and performance that empowers you to achieve more.
        </p>
      </div>
      <div className="p-4 mb-10">{renderContent()}</div>
    </div>
  );
};

export default Services_Tab;
