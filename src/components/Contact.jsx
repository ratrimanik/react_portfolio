import React from "react";

const Contact = () => {
  const contact_info = [
    {
      logo: "mail",
      title: "Email",
      text: "ratrimanik2404@gmail.com",
      href: "mailto:ratrimanik2404@gmail.com",
    },
    {
      logo: "logo-instagram",
      title: "Instagram",
      text: "ratriimanik",
      href: "https://www.instagram.com/ratriimanik",
    },
    {
      logo: "logo-whatsapp",
      title: "Whatsapp",
      text: "+6282172658414",
      href: "https://wa.me/6282172658414",
    },
    {
      logo: "location",
      title: "Location",
      text: "Surabaya, Indonesia",
    },
  ];

  // Memisahkan contact_info menjadi dua baris
  const firstRow = contact_info.slice(0, 2);
  const secondRow = contact_info.slice(2);

  // Komponen untuk menampilkan info kontak
  const ContactItem = ({ contact }) => (
    <div className="rounded-xl bg-cyan-600 flex justify-center items-center md:w-80 w-full py-2 my-4 h-40">
      <div className="flex flex-col items-center mb-4">
        <div className="min-w-[3.5rem] text-3xl h-12 flex items-center justify-center text-white bg-cyan-600 rounded-full mr-2">
          <ion-icon name={contact.logo}></ion-icon>
        </div>
        <p className="md:text-base text-sm font-bold break-words">
          {contact.title}
        </p>
        <p className="text-[12px] break-words">{contact.text}</p>
        {contact.href && (
          <a
            href={contact.href}
            className="text-xs font-bold break-words mt-4 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send a message
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className=" gap-6 p-2 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="flex md:flex-row flex-col w-3/5 ">
              <div className="flex flex-col md:w-1/2  items-center">
                {firstRow.map((contact, i) => (
                  <ContactItem key={i} contact={contact} />
                ))}
              </div>
              <div className="flex flex-col md:w-1/2  items-center">
                {secondRow.map((contact, i) => (
                  <ContactItem key={i} contact={contact} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
