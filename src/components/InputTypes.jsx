import React, { memo, useState } from "react";

function InputTypes(props) {
  const [val, setVal] = useState("");

  props.connector.setVal = setVal;
  props.connector.update(val);

  return (
    <div className="form-control">
      {console.log("child render")}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
    </div>
  );
}

export default memo(InputTypes);
