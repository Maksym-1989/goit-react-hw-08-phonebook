import React from "react";
import css from "./Sections.module.css";
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <section>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
