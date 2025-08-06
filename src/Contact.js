import React from "react";

const Contact = () => {
    return (
        <Wrapper>
            <h2 className="contact-heading font-custom text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
                Contact Us
            </h2>
            <div className="w-full h-[60vh]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466693.1287910362!2d84.23669836210262!3d27.589431919383987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e0!3m2!1sen!2snp!4v1697188825607!5m2!1sen!2snp"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="w-full py-16 bg-gray-100">
                <h1 className="font-custom font-bold text-3xl md:text-4xl text-center text-gray-800 mb-10">
                    Have Any Questions?
                </h1>
                <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-12 md:p-20">
                    <div
                        className="contact-input grid gap-10"
                        onSubmit={(e) => e.preventDefault()}
                        action="https://formspree.io/f/xoqoylll"
                        method="POST"
                    >
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="font-custom p-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                            name="UserName"
                            required
                            autoComplete="off"
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            className="font-custom p-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                            required
                            autoComplete="off"
                        />
                        <textarea
                            placeholder="Type your message"
                            className="font-custom p-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                            cols="30"
                            rows="10"
                            name="Message"
                            required
                            autoComplete="off"
                        ></textarea>
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 text-white font-custom py-4 px-10 transition-transform duration-300 hover:bg-blue-700 hover:scale-105 send-btn text-xl"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    align-items: center;

    .contact-heading {
        margin-top: 3rem;
    }

    .contact-input {
        display: grid;
        gap: 2.5rem;
    }

    @media (max-width: 768px) {
        .contact-heading {
            font-size: 2rem;
        }

        .contact-input {
            padding: 3rem;
        }

        .send-btn {
            font-size: 1.125rem;
            padding: 1rem 2.5rem;
        }
    }

    @media (max-width: 480px) {
        .contact-heading {
            font-size: 1.5rem;
        }

        .contact-input {
            padding: 2rem;
        }

        .send-btn {
            font-size: 1rem;
            padding: 0.75rem 2rem;
        }
    }
`;

export default Contact;