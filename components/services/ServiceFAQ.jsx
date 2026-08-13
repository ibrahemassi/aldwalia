'use client';
import React from 'react';

function ServiceFAQ({ service }) {
  // Generate service-specific FAQs
  const generateFAQs = (serviceName) => {
    const faqTemplates = {
      'Web Applications': [
        {
          question: "What technologies do you use for web development?",
          answer: "We use modern technologies including React, Next.js, Node.js, and various databases depending on your specific requirements."
        },
        {
          question: "How long does it take to develop a web application?",
          answer: "Development time varies based on complexity, typically ranging from 4-12 weeks for most projects."
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer: "Yes, we offer comprehensive maintenance and support packages to ensure your application runs smoothly."
        }
      ],
      'Mobile Applications': [
        {
          question: "Do you develop for both iOS and Android?",
          answer: "Yes, we develop native apps for both platforms as well as cross-platform solutions using React Native."
        },
        {
          question: "How do you handle app store submissions?",
          answer: "We handle the entire app store submission process, including optimization and compliance requirements."
        },
        {
          question: "What about app updates and maintenance?",
          answer: "We provide regular updates and maintenance to keep your app current with the latest features and security."
        }
      ],
      'POS Systems': [
        {
          question: "Can your POS system integrate with existing systems?",
          answer: "Yes, our POS systems are designed to integrate seamlessly with your existing business systems and software."
        },
        {
          question: "What payment methods do you support?",
          answer: "We support all major payment methods including credit cards, digital wallets, and contactless payments."
        },
        {
          question: "Is training included with the POS system?",
          answer: "Yes, we provide comprehensive training for your staff to ensure smooth operation of the system."
        }
      ],
      'SaaS Solutions': [
        {
          question: "How scalable are your SaaS solutions?",
          answer: "Our SaaS platforms are built with scalability in mind, capable of growing with your business needs."
        },
        {
          question: "What about data security and compliance?",
          answer: "We implement enterprise-grade security measures and ensure compliance with relevant regulations."
        },
        {
          question: "Do you provide white-label solutions?",
          answer: "Yes, we can customize our SaaS solutions with your branding and specific requirements."
        }
      ],
      'AI Automation': [
        {
          question: "What types of processes can be automated?",
          answer: "We can automate various business processes including data entry, customer service, and workflow management."
        },
        {
          question: "How do you ensure AI accuracy and reliability?",
          answer: "We use advanced AI models and implement rigorous testing to ensure high accuracy and reliability."
        },
        {
          question: "Can AI solutions be customized for specific industries?",
          answer: "Yes, we tailor AI solutions to meet the specific needs and requirements of different industries."
        }
      ],
      'SEO': [
        {
          question: "How long does it take to see SEO results?",
          answer: "SEO is a long-term strategy, typically showing initial results within 3-6 months of implementation."
        },
        {
          question: "Do you provide monthly SEO reports?",
          answer: "Yes, we provide detailed monthly reports showing your website's performance and improvements."
        },
        {
          question: "What SEO techniques do you use?",
          answer: "We use white-hat SEO techniques including technical optimization, content strategy, and link building."
        }
      ],
      'Google Ads': [
        {
          question: "How do you optimize for maximum ROI?",
          answer: "We continuously monitor and optimize campaigns, adjusting bids, targeting, and ad copy for best performance."
        },
        {
          question: "What types of Google Ads campaigns do you manage?",
          answer: "We manage search, display, shopping, and remarketing campaigns across all Google Ads platforms."
        },
        {
          question: "Do you provide conversion tracking setup?",
          answer: "Yes, we set up comprehensive conversion tracking to measure the success of your advertising campaigns."
        }
      ],
      'ERP': [
        {
          question: "How long does ERP implementation take?",
          answer: "ERP implementation typically takes 6-12 months depending on the complexity and scope of the project."
        },
        {
          question: "Can ERP systems be customized?",
          answer: "Yes, we customize ERP systems to match your specific business processes and requirements."
        },
        {
          question: "What training and support do you provide?",
          answer: "We provide comprehensive training for all users and ongoing technical support after implementation."
        }
      ],
      'UI/UX Design': [
        {
          question: "What is your design process?",
          answer: "Our process includes research, wireframing, prototyping, user testing, and final design delivery."
        },
        {
          question: "Do you design for accessibility?",
          answer: "Yes, we ensure all our designs meet accessibility standards and are usable by people with disabilities."
        },
        {
          question: "Can you work with existing brand guidelines?",
          answer: "Absolutely, we work within your existing brand guidelines to maintain consistency across all designs."
        }
      ]
    };

    return faqTemplates[serviceName] || [
      {
        question: "What services do you provide?",
        answer: "We provide comprehensive solutions tailored to your specific business needs and requirements."
      },
      {
        question: "How do you ensure quality?",
        answer: "We follow industry best practices and conduct thorough testing to ensure the highest quality deliverables."
      },
      {
        question: "What about ongoing support?",
        answer: "We provide ongoing support and maintenance to ensure your solutions continue to perform optimally."
      }
    ];
  };

  const faqs = generateFAQs(service.name);

  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-accord">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/arw2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Frequently Asked Questions</h6>
                <h3>
                  Common questions about <br /> our {service.name.toLowerCase()} services.
                </h3>
              </div>
              <div className="accordion bord">
                {faqs.map((faq, index) => (
                  <div key={index} className={`item ${index === 0 ? 'active' : ''} wow fadeInUp`} data-wow-delay={`${(index + 1) * 0.2}s`}>
                    <div onClick={openAccordion} className="title">
                      <h6>{faq.question}</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceFAQ;

