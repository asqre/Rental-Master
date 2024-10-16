import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import "react-datepicker/dist/react-datepicker.css";
import "./chakra-react-datepicker.css";

const customDateInput = ({ value, onClick, onChange }, ref) => (
  <Input
    autoComplete="off"
    background="white"
    value={value}
    ref={ref}
    onClick={onClick}
    onChange={onChange}
  />
);
customDateInput.displayName = "DateInput";

const CustomInput = forwardRef(customDateInput);

const icon = <CalendarIcon fontSize="sm" />;

const DatePicker = ({ selectedDate, onChange, ...props }) => {
  const isDateSelectable = (date) => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return date >= startOfMonth && date <= endOfMonth;
  };

  return (
    <InputGroup className="dark-theme">
      <ReactDatePicker
        selected={selectedDate}
        onChange={onChange}
        className="react-datepicker__input-text"
        customInput={<CustomInput />}
        dateFormat="MM/dd/yyyy"
        filterDate={isDateSelectable}
        {...props}
      />
      <InputRightElement color="gray.500" children={icon} />
    </InputGroup>
  );
};

export default DatePicker;
