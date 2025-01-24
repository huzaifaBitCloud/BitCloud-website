"use client";
import React from "react";
const Services_Tab: React.FC = () => {
  const mobileApplications = [
    {
      title: "Native App Development",
      image: "/images/native.jpeg",
      description:
        "We create high-performance native apps tailored for Android and iOS platforms, ensuring seamless user experience.",
    },
    {
      title: "Cross-Platform Solutions",
      image: "/images/cross plt.jpeg",
      description:
        "Our cross-platform mobile apps are designed to work smoothly across devices, reducing time and cost.",
    },
    {
      title: "Custom Mobile Features",
      image: "/images/cross-platform.jpg",
      description:
        "Add bespoke features like GPS, push notifications, and payment gateways to enhance your mobile app.",
    },
    {
      title: "Mobile App Design",
      image: "/images/mob app.jpeg",
      description:
        "Our design team creates intuitive and visually appealing mobile interfaces for improved user engagement.",
    },
  ];

  const webDevelopment = [
    {
      title: "Responsive Web Design",
      image: "/images/responsive web.jpeg",
      description:
        "Design websites that look great on any device, from desktops to smartphones, with responsive web design.",
    },
    {
      title: "Custom Web Applications",
      image: "/images/custom web design.png",
      description:
        "Develop scalable and custom web apps tailored to your unique business requirements.",
    },
    {
      title: "E-Commerce Development",
      image: "/images/e-commerce solutions.jpg",
      description:
        "Launch your online store with secure, user-friendly, and scalable e-commerce solutions.",
    },
    {
      title: "Web Performance Optimization",
      image: "/images/web performance.jpeg",
      description:
        "Enhance your website's speed, performance, and SEO rankings with our optimization services.",
    },
  ];

  const zohoServices = [
    {
      title: "Zoho CRM Setup",
      image: "/images/cross-platform.jpg",
      description:
        "Streamline your customer relationship management process with Zoho CRM implementation.",
    },
    {
      title: "Zoho Creator Customization",
      image: "/images/cross-platform.jpg",
      description:
        "Build custom workflows and applications with Zoho Creator to suit your business needs.",
    },
    {
      title: "Zoho Analytics Integration",
      image: "/images/cross-platform.jpg",
      description:
        "Visualize and analyze your data effectively with Zoho Analytics for informed decision-making.",
    },
    {
      title: "Zoho One Implementation",
      image: "/images/cross-platform.jpg",
      description:
        "Empower your team with an integrated suite of Zoho applications tailored for your business.",
    },
  ];
  const uiUxDesign = [
    {
      title: "User-Centered Design",
      image: "/images/user.jpeg",
      description:
        "Design interfaces that are intuitive and align with user expectations to improve usability.",
    },
    {
      title: "Wireframes & Prototyping",
      image: "/images/wireframe.jpeg",
      description:
        "Bring your ideas to life with interactive wireframes and prototypes before development.",
    },
    {
      title: "Visual Design",
      image: "/images/visual.jpeg",
      description:
        "Create visually appealing designs with attention to typography, color theory, and layout.",
    },
    {
      title: "Usability Testing",
      image: "/images/usablity.jpeg",
      description:
        "Test your designs with real users to identify and resolve usability challenges.",
    },
  ];
  const financeServices = [
    {
      title: "Accounting & Bookkeeping",
      image: "/images/cross-platform.jpg",
      description:
        "Maintain accurate financial records with our reliable accounting and bookkeeping services.",
    },
    {
      title: "Tax Planning & Compliance",
      image: "/images/cross-platform.jpg",
      description:
        "Stay compliant with tax regulations and optimize your tax planning strategies.",
    },
    {
      title: "Financial Advisory",
      image: "/images/cross-platform.jpg",
      description:
        "Get expert advice on budgeting, investments, and financial growth strategies tailored for your business.",
    },
    {
      title: "Payroll Management",
      image: "/images/cross-platform.jpg",
      description:
        "Ensure timely and accurate payroll processing with our reliable payroll management services.",
    },
  ];

  const services = [
    {
      id: "#mobile",
      title: "Mobile App Development",
      description:
        "We create feature-rich mobile applications tailored to your business needs, ensuring top performance and seamless user experience.",
      image: "/images/mobile.png",
    },
    {
      id: "#web",
      title: "Web Application Development",
      description:
        "Our web applications are built with modern technologies, providing scalability, responsiveness, and user-friendly interfaces.",
      image: "/images/web.jpg",
    },
    {
      id: "#zoho",
      title: "Zoho CRM Integration",
      description:
        "We specialize in Zoho CRM integrations to help you streamline your business operations and enhance customer relationship management.",
      image: "/images/zoho.jpg",
    },
    {
      id: "#ui",
      title: "UI/UX Design",
      description:
        "Our design team crafts intuitive and visually stunning interfaces to provide exceptional user experiences for your applications.",
      image: "/images/ui.jpg",
    },
    {
      id: "#finance",
      title: "Finance Solutions",
      description:
        "We deliver tailored financial solutions to help manage your accounts, optimize resources, and achieve business goals.",
      image: "/images/finance.jpg",
    },
  ];

  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[30vh]"
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
      <h2 className="heading">What We Do Best</h2>
      <p className="context">Our Digital Services</p>
      <div className="card-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image-section">
              <img
                src={service.image}
                alt={service.title}
                className="card-image"
              />
            </div>
            <div className="card-text-section">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
            <div className="card-button-section">
              <a href={service?.id} className="learn-more-button">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="heading" id="mobile">
        Mobile Application
      </h2>
      <p className="context">
        Transform your ideas into intuitive and powerful mobile apps that
        enhance user experience and drive engagement.
      </p>

      <div className="card-container">
        {mobileApplications.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image-section">
              <img
                src={service.image}
                alt={service.title}
                className="card-image"
              />
            </div>
            <div className="card-text-section">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="heading" id="web">
        Web Application
      </h2>
      <p className="context">
        Create dynamic, secure, and scalable web applications tailored to meet
        your business needs.
      </p>
      <div className="card-container">
        {webDevelopment.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image-section">
              <img
                src={service.image}
                alt={service.title}
                className="card-image"
              />
            </div>
            <div className="card-text-section">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="heading" id="ui">
        UI/UX Design
      </h2>
      <p className="context">
        Craft user-centric designs that are visually appealing and functionally
        robust for a seamless digital experience.
      </p>
      <div className="card-container">
        {uiUxDesign.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image-section">
              <img
                src={service.image}
                alt={service.title}
                className="card-image"
              />
            </div>
            <div className="card-text-section">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="heading" id="zoho">
        Zoho CRM
      </h2>
      <p className="context">
        Simplify and automate your business operations with seamless Zoho CRM
        integrations and customizations.
      </p>
      <div className="card-container">
        {zohoServices.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image-section">
              <img
                src={service.image}
                alt={service.title}
                className="card-image"
              />
            </div>
            <div className="card-text-section">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="heading" id="finance">
        Finance and Accounting
      </h2>
      <p className="context">
        Enhance your business decision-making with our precise financial
        solutions and expert analysis.
      </p>
      <div className="card-container" style={{ marginBottom: "5%" }}>
        {financeServices.map((service, index) => (
          <div key={index} className="card">
            <div className="card-image-section">
              <img
                src={service.image}
                alt={service.title}
                className="card-image"
              />
            </div>
            <div className="card-text-section">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services_Tab;
