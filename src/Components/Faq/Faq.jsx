import React, { useState, useCallback } from "react";
import './Faq.css';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(0);  // Set the default to 0 for the first item

    const faqs = [
        { question: "What should I study for cybersecurity?", answer: "To prepare for a successful career in cybersecurity, you should study a combination of foundational concepts, technical skills, and practical experience. Below is an outline of key areas you should focus on to build your cybersecurity knowledge..." },
        { question: "How do I choose a cybersecurity career?", answer: "Choosing a career in cybersecurity can be exciting due to the diverse range of roles available, and there’s a lot to consider when making a decision. Here’s a step-by-step guide to help you choose the right cybersecurity career path.." },
        { question: "Can I learn cyber security in 6 months?", answer: "Yes, it is possible to learn the basics of cybersecurity within 6 months, especially with a focused approach. While becoming an expert typically takes years of experience, a beginner can acquire foundational knowledge and basic skills in a relatively short time. Here’s a roadmap to help you get started..." },
        { question: "What is the highest paying job in cyber security?", answer: "The highest-paying jobs in cybersecurity are typically those that require advanced expertise, significant experience, and often leadership responsibilities. Some of the highest-paying roles include..." },
        { question: "What is the lowest salary in cyber security?", answer: "The lowest salary in cybersecurity can vary widely depending on several factors such as the country, specific role, level of experience, company, and industry. However, in general terms, for entry-level cybersecurity positions, salaries in the United States might start at...." },
    ];

    const toggleFAQ = useCallback((index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }, [activeIndex]);

    return (
        <React.Fragment>
            <section className="faq-section">
                <div className="srcn_container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="frequently-right-row">
                                <div class="icon-box-wrapper">
                                    <span>FAQs </span>
                                    <h2>A Dedication to Supporting All Aspects of Your Life.</h2>
                                    <div class="elementor-icon-box-content">
                                        <p >In every step of your journey, I dedicate myself to being a steady presence, offering encouragement, guidance, and care. No challenge is too small, no dream too big. I promise to support you through moments of doubt and triumph alike, helping you unlock your potential and embrace your truth. Whether it’s in work, in relationships, or in your own self-discovery, I stand beside you—whenever you need encouragement, wisdom, or simply a reminder of your strength.</p>
                                        <h6>Let's Talk: Engage with Us in a Conversation Tailored Just for You.</h6>
                                    </div>
                                    <div class="btns">
                                        <a href="/About">Know More About</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="faq-container">
                                <div>
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                        >
                                            <div
                                                role="button"
                                                aria-expanded={activeIndex === index}
                                                className="faq-question"
                                                onClick={() => toggleFAQ(index)}
                                                tabIndex={0}
                                                onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(index)}
                                            >
                                                {faq.question}
                                                <span className="faq-icon">{activeIndex === index ? "x" : "+"}</span>
                                            </div>
                                            {activeIndex === index && (
                                                <div className="faq-answer">{faq.answer}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Faq;
