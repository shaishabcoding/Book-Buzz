import { useLoaderData } from "react-router-dom";

const Faq = () => {
  const faqs = useLoaderData();
  return (
    <div className="mx-3 mt-2 lg:mt-6 mb-6 lg:mb-16">
      <h2 className="lg:text-5xl text-3xl font-bold text-center mb-4 lg:mb-10 font-playfair bg-gray-300 rounded-lg p-6 lg:p-8">
        Frequently Asked Question
      </h2>
      <div className="join join-vertical w-full">
        {faqs.map(({ question, answer }, idx) => (
          <div
            key={idx}
            className="collapse collapse-arrow join-item border border-base-300"
          >
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">{question}</div>
            <div className="collapse-content">
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
