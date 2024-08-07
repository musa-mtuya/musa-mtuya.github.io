import ContactForm from "./ContactForm";

export const FindMe = () => (
  <div className="bg-blue-900 p-5 rounded-lg mt-2">
    <div id="contacts">
      <div id="contacts_title" className="font-semibold mb-2">
        Find Me
      </div>
      <div className="opacity-70">
        Feel free to reach out to me using the form below. Whether you have a
        question, a project idea, or just want to say hello, I'd love to hear
        from you! Please fill out your name, email address, and message, and
        I'll get back to you as soon as possible.
      </div>
      <div className="mt-4">
        <ContactForm />
      </div>
    </div>
  </div>
);
