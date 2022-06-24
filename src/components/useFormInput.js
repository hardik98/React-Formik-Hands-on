import React from "react";

export default function useFormInput(initialValue) {
  const input = {
    value: initialValue,
    update: function (val) {
      input.value = val;
    },
    setVal: function (val) {
      return val;
    },
  };
  return input;
}
