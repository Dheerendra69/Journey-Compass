import React from "react";
import { useFormikContext } from "formik";
import { isEmpty } from "lodash-es";

function FormErrors() {
  const { errors } = useFormikContext();

  if (isEmpty(errors)) return null;

  return (
    <div className="container my-3">
      <ul className="list-unstyled alert alert-danger px-3 py-2">
        {Object.entries(errors).map(([key, messages]) =>
          /** @type {string[]} */ (messages).map((message) => (
            <li key={`${key} ${message}`}>
              <strong>{key}:</strong> {message}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default FormErrors;
