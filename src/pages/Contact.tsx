const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-600">We'd love to hear from you. Whether you have a question, feedback, or a partnership inquiry, our team is ready to answer all your questions.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800">Contact Information</h2>
              <p className="mt-4 text-slate-600">For general inquiries, please reach out to us at:</p>
              <p className="mt-2 font-medium text-green-600">contact@factorbeam.com</p>
              <p className="mt-4 text-slate-600">Our mailing address:</p>
              <p className="mt-2 text-slate-600">123 Tech Park, Nagpur, Maharashtra, 440001, India</p>
            </div>
            <div>
              <form action="#" method="POST" className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-slate-300 rounded-md" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-slate-300 rounded-md" />
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-2 border border-slate-300 rounded-md"></textarea>
                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
