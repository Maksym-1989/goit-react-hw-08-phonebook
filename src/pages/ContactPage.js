import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import Section from "../components/section/Section";
import ContactList from "../components/contactList/ContactList";
import Filter from "../components/Filter/Filter";

const ContactPage = () => {
  return (
    <div className='form-container'>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default ContactPage;