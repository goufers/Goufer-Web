/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Select from "react-select";
import WorldFlag from "react-world-flags";
import countryList from "country-list";

interface CountryOption {
  value: string;
  label: JSX.Element;
}

const countries: CountryOption[] = countryList.getData().map((country) => ({
  value: country.code,
  label: (
    <div className="flex items-center">
      <WorldFlag code={country.code} style={{ width: 20, marginRight: 10 }} />
      {country.name}
    </div>
  ),
}));

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "170px",
    height: "40px",
    marginTop: "0.75rem", // mt-3 in Tailwind
    borderRadius: "20px", // rounded-[50px] in Tailwind
    outline: "none",
    boxShadow: "none",
    borderColor: "#54A954",
    "&:hover": {
      borderColor: "#54A954",
    },
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: "0",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const CountryDropdown: React.FC = () => {
  return <Select options={countries} styles={customStyles} placeholder="Select Country" />;
};

export default CountryDropdown;
