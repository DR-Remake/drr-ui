import React, { useState } from "react";

const useGenerateInputs = ({ array }: { array: string[] }) => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>(
    array.reduce((acc: { [key: string]: string }, currentVal: string) => {
      acc[currentVal] = "";
      return acc;
    }, {})
  );

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setInputs({ ...inputs, [key]: e.target.value });
  };

  return (
    <>
      {Object.entries(inputs).map(([key, value]: [string, string], i: number) => {
        return (
          <React.Fragment key={`inputGenerator${i}`}>
            <h1>{key}</h1>
            <input
              onChange={(e) => handleInputs(e, key)}
              value={value}
              placeholder={`Please provide ${key.toLowerCase()}...`}
              type="text"
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default useGenerateInputs;
