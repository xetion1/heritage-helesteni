import React from 'react';
import styles from './styles.module.css';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build contact-form component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default ContactForm;
