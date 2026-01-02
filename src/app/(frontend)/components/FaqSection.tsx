'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What is the Actual Cost to Develop Custom Software?',
    answer:
      'Custom software development costs start at $15,000 and may increase depending on complexity and advanced features. Contact us for details.',
  },
  {
    question: "From Idea to Execution — Here's What We Offer?",
    answer:
      'Here are some of our services that you can consider according to your business needs: Enterprise Software (ERPs), Product Development, UI/UX Design and Development, Custom Software Development, SaaS Development, AI Development, Mobile App Development, and Digital Marketing Services, including On-Page SEO, Off-Page SEO, SMM, and more.',
  },
  {
    question: 'From Startups to Giants — Who We Work With?',
    answer:
      'Our software development expertise is beneficial for a range of industries such as healthcare, fintech, education, real estate, logistics, manufacturing, and eCommerce brands. Businesses can take advantage of our solutions across the US, UK, Australia, Canada, the Middle East, and the UAE.',
  },
  {
    question: 'How Can I Get Started with my Product/Software Development Project?',
    answer:
      'Contact us using the information provided on our Contact Us page or email us with your project requirements. Our team will get in touch with you shortly to consult and guide you through the entire process of working with our company.',
  },
  {
    question: 'What Automation and AI Tools Do You Offer?',
    answer:
      'The AI tools and automation solutions our team offers are Robotic Process Automation (RPA), chatbots, workflow automation systems, and AI-powered analytics dashboards to help streamline your business operations smoothly.',
  },
]

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="important_details_section">
      <div className="container">
        <div className="important_details_begin">

          {/* LEFT CONTENT */}
          <div className="faq_box_content">
            <div className="faq_heading">
              <h2>
                Important Details Before{' '}
                <span className="heading_red_st">We Begin</span>
              </h2>
            </div>

            <div className="faq_items">
              <div className="singlefaq_area accordion-wrapper">

                {faqData.map((item, index) => (
                  <div className="accordion-outer" key={index}>
                    
                    {/* QUESTION */}
                    <div
                      className="accordion-heading"
                      onClick={() => toggleAccordion(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.question}
                    </div>

                    {/* ANSWER */}
                    <div
                      className="accordion-content"
                      style={{
                        display: activeIndex === index ? 'block' : 'none',
                      }}
                    >
                      <p>{item.answer}</p>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* RIGHT IMAGES (UNCHANGED) */}
          <div className="faq_box_images">
            <div className="faq_images">
              <div className="faq_images_items1">
                <img src="images/faq-1.png" alt="faq" title="faq" />
              </div>
              <div className="faq_images_items2">
                <img src="images/faq-2.png" alt="faq" title="faq" />
              </div>
              <div className="faq_images_items3">
                <img src="images/faq-3.png" alt="faq" title="faq" />
              </div>
              <div className="faq_icon_box">
                <div className="faq_img">
                  <img
                    src="images/text-frame.png"
                    alt="faq"
                    title="faq"
                    className="rotate_img"
                  />
                  <div className="faq_icon">
                    <img src="images/faqicon.png" alt="faq icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FaqSection
