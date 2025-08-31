import React from 'react';
import styles from './styles.module.css';

interface BookingFormProps {
  className?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2>Build booking-form component</h2>
      {/* Component implementation */}
    </div>
  );
};

export default BookingForm;
