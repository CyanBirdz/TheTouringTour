import React from 'react';
import backgroundImage from './background-call-to-action.jpg';

const TheQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Can I go on my own for a special activity thats not on the Itinerary?",
      answer:
        "Yes, but the participant needs to inform the staff and  has to be  18 or older, or be accompany by an adult,",
    },
    {
      id: 2,
      question: "Can I go to a different park? ",
      answer:
        "Inform a month before the tour, and our staff will do its best to make it happen.",
    },
    {
      id: 3,
      question: "Are there Scholarships?",
      answer:
        "Please contact our director at simanofusa@gmail.com",
    },
    {
      id: 4,
      question: "Can my family room together?",
      answer:
        "Yes, Just communicate how many people and their names",
    },
    {
      id: 5,
      question: "Can we go to a restaurant on my own? ",
      answer:
        "Communicate with staff prior before going",
    },
    {
      id: 6,
      question: "Do I need my Instrument?",
      answer:
        "Cellos, Bass and Percusion dont need to bring their Instrument but all other Instruments have to ",
    },
    {
      id: 7,
      question: "If my kid is vegetatian",
      answer:
        "Please end an email to Simanoftour2024@gmail.com to communicate all dietary restrictions",
    },
    {
      id: 8,
      question: "Who is in charge of my kid, hotel and airpot?",
      answer:
        "Coomunicate with our director to program a private pick up transport at simanofusa@gmail.com",
    },
  
    {
      id: 9,
      question: "Seguro de viaje",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 10,
      question: "Discount for Alumni?",
      answer:
        "Yes all Alumni from Siman Orchestral Foundation receive a 20% discount",
    },
    // More questions...
  ];

  return (
    <div className='bg-blue-400 w-screen'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-black">
            Frequently asked questions
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{' '}
            <a
              href="#"
              className="font-semibold text-black hover:text-black"
            >
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10 text-black">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-xl font-bold leading-7 text-black ">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-black">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheQ;
