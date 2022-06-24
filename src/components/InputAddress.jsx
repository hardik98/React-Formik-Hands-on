import React, { memo } from "react";

function InputAddress(props) {
  const { onChange, value } = props;
  return (
    <div className="form-control">
      {console.log("Address render")}
      <label htmlFor="name">Address</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default memo(InputAddress);
