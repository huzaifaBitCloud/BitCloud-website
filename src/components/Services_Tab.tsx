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
      description:
        "We design and develop user-friendly websites that are visually stunning, optimized for search engines, and convert visitors into leads or customers.",
    },
    {
      heading: "Custom CMS Solutions:",
      description:
        "Empower your team with a Content Management System (CMS) that allows for easy content updates and management.",
    },
    {
      heading: "Ecommerce Powerhouses:",
      description:
        "Build a user-friendly online store with secure payment gateways and a seamless shopping experience.",
    },
    {
      heading: "Responsive Design:",
      description:
        "Ensure your website looks incredible and functions flawlessly across all devices.",
    },
    {
      heading: "Ongoing Support:",
      description:
        "We offer maintenance and support plans to keep your website secure, updated, and performing at its best.",
    },
  ];
  const mobileDescription = [
    {
      heading: "Native Apps for Every Need:",
      description:
        "Develop native iOS and Android apps that leverage the full potential of each platform, providing a smooth and engaging user experience.",
    },
    {
      heading: "Custom Functionality:",
      description:
        "We can design and develop bespoke features to meet your specific business needs.",
    },
    {
      heading: "Engaging User Interfaces: ",
      description:
        "Create intuitive and visually appealing UI/UX designs that keep users coming back for more.",
    },
    {
      heading: "App Store Optimization: c",
      description:
        "Increase your app's visibility and downloads with effective App Store Optimization (ASO) strategies.",
    },
  ];
  const zohoDescription = [
    {
      heading: "Zoho CRM:",
      description:
        "Zoho CRM is a customer relationship management (CRM) platform that helps businesses strengthen their connections with customers. By centralizing all your customer data and interactions, Zoho CRM streamlines your sales process.",
    },
    {
      heading: "Zoho Creator:",
      description:
        "Frustrated with clunky software that doesn't fit your unique business needs? We can help! As a Zoho Creator authorized service provider, we empower you to build custom applications tailored to your exact workflows.  ",
    },
    {
      heading: "Zoho Books: ",
      description:
        "Struggling to manage your finances and stay on top of bookkeeping? Our expertise as a Zoho Books authorized service provider can streamline your financial operations. Zoho Books is a user-friendly accounting software that allows us to automate tasks like invoicing, bill payments, and bank reconciliation.",
    },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "webapp":
        return (
          <div className="w-[90%] mx-auto mt-2">
            <div className="w-[100%] grid md:grid-cols-3 gap-4">
              <div className="w-[100%] order-2 md:order-1 col-span-2 p-6 border">
                {tableDescription?.map((item, ind) => {
                  return (
                    <div key={ind} className="my-4">
                      <h2 className="font-bold">
                        {item?.heading}
                        <span className="font-normal ml-2">
                          {item?.description}
                        </span>
                      </h2>
                    </div>
                  );
                })}
              </div>
              <div className="flex order-1 md:order-2 items-center justify-end w-[100%] col-span-1 p-4 border">
                <div className="w-[400px] p-2 ">
                  <img
                    src="./images/web-developer.jpg"
                    alt="web-developer"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "mobileapp":
        return (
          <div className="w-[90%] mx-auto  mt-2">
            <div className="w-[100%] grid grid-cols-3 gap-4">
              <div className="w-[100%] col-span-2 p-6">
                {mobileDescription?.map((item, ind) => {
                  return (
                    <div key={ind} className="my-4">
                      <h2 className="font-bold">
                        {item?.heading}
                        <span className="font-normal ml-2">
                          {item?.description}
                        </span>
                      </h2>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-end w-[100%] col-span-1 p-4">
                <div className="w-[400px] p-2 ">
                  <img
                    src="./images/mobile-app.jpg"
                    alt="web-developer"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "zoho_crm":
        return (
          <div className="w-[90%] mx-auto mt-2">
            <div className="w-[100%] grid grid-cols-3 gap-4">
              <div className="w-[100%] col-span-2 p-6">
                {zohoDescription?.map((item, ind) => {
                  return (
                    <div key={ind} className="my-4">
                      <h2 className="font-bold">
                        {item?.heading}
                        <span className="font-normal ml-2">
                          {item?.description}
                        </span>
                      </h2>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-end w-[100%] col-span-1 p-4">
                <div className="w-[400px] p-2 ">
                  <img
                    src="./images/contact-image.jpeg"
                    alt="web-developer"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "finances":
        return (
          <div className="w-[90%] mx-auto mt-2">
            <div className="w-[100%] grid grid-cols-3 gap-4">
              <div className="w-[100%] col-span-2 p-6">
                {tableDescription?.map((item, ind) => {
                  return (
                    <div key={ind} className="my-4">
                      <h2 className="font-bold">
                        {item?.heading}
                        <span className="font-normal ml-2">
                          {item?.description}
                        </span>
                      </h2>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-end w-[100%] col-span-1 p-4">
                <div className="w-[400px] p-2 ">
                  <img
                    src="./images/web-developer.jpg"
                    alt="web-developer"
                    className="rounded-lg"
                  />
                </div>
              </div>
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
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://static.zohocdn.com/sites/stock-images/images/zpstock-image-37.jpg)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-center max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12">
          <div className="w-[70%] mx-auto place-self-center flex flex-col items-center justify-center text-center px-auto">
            <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
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
      <div className="p-4 mb-10">{renderContent()}</div>
    </div>
  );
};

export default Services_Tab;
