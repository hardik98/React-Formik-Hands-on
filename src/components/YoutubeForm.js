import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Validation with schema using third party lib called "YUP"
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  channel: Yup.string().required("Required Channel"),
  social: Yup.object({
    fb: Yup.string().required("Required"),
  }),
});

// Custom Validation on your own
const validate = (values) => {
  // VALIDATE FORM FIELD
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const onSubmit = (values) => {
  // CALL API
  console.log(values);
};

const initialValues = {
  name: "",
  email: "",
  channel: "",
  address: "",
  social: {
    fb: "",
    insta: "",
  },
  phoneNumbers: ["", ""],
};

export default function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        {/* RENDER PROP : IN order to render custom component using formik values/props */}

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              console.log("props", props);
              return <input {...props.field} type="text" />;
            }}
          </Field>
          <ErrorMessage name="address" />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.fb" />
          <ErrorMessage name="social.fb" />
        </div>

        <div className="form-control">
          <label htmlFor="instagram">Instagram</label>
          <Field type="text" id="instagram" name="social.insta" />
          <ErrorMessage name="social.insta" />
        </div>

        <div className="form-control">
          <label htmlFor="primary">Primary Phone</label>
          <Field type="text" id="primary" name="phoneNumbers[0]" />
        </div>

        <div className="form-control">
          <label htmlFor="secondary">Secondary Phone</label>
          <Field type="text" id="secondary" name="phoneNumbers[1]" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
