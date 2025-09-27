import React from "react";
import Select from "react-select";

const customStyle = {
  valueContainer: (provided) => ({
    ...provided,
    fontSize: 14,
    textAlign: "left",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#686a6f",
  }),
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
    color: "#686a6f",
  }),
  menu: (provided) => ({
    ...provided,
    border: "1px solid #e9ebee",
    boxShadow: "none",
    zIndex: 10,
    backgroundColor: "#f4f5f8",
  }),
  option: (provided, state) => ({
    ...provided,
    color: "#333333",
    padding: "14px 30px",
    backgroundColor: state.isSelected ? "#ffaa17" : "#f4f5f8",
    transition: "all 0.4s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ffaa17",
    },
    fontSize: 20,
    fontFamily: "Teko, sans-serif",
    textAlign: "left",
    fontWeight: 400,
  }),
  control: (base) => ({
    ...base,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: 8,
    "&:hover": {
      borderColor: "transparent",
    },
    backgroundColor: "#f4f5f8",
    padding: 14,
    marginBottom: 10,
  }),
};

/**
 * @param {React.ComponentProps<typeof Select>} props
 */

const CustomSelect = ({
  options = [],
  styles = {},
  isSearchable = false,
  components = {},
  ...props
}) => {
  const customStyle2 = {
    option: (provided, state) => ({
      ...provided,
      ...customStyle.option(provided, state),
      borderBottom:
        state.label === options[options.length - 1].label
          ? "none"
          : "0.5px solid #e9ebee",
      borderRadius:
        state.label === options[options.length - 1].label ? "0 0 8px 8px" : 0,
    }),
  };

  return (
    <Select
      options={options}
      styles={{ ...customStyle, ...customStyle2, ...styles }}
      isSearchable={isSearchable}
      components={{
        IndicatorSeparator: () => null,
        ...components,
      }}
      {...props}
    />
  );
};

export default CustomSelect;
