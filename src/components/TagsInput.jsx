import React from 'react';

function TagsInput({ field, form }) {
  return (
    <>
      <input
        onKeyDown={(
          /** @type {import('react').KeyboardEvent<HTMLInputElement>} */ e
        ) => {
          const { value } = /** @type {HTMLInputElement} */ (e.target);

          if (e.key === 'Enter' && value.trim()) {
            e.preventDefault();
            form.setFieldValue(field.name, [...field.value, value.trim()]);
            e.target.value = '';
          }
        }}
        type="text"
        className="form-control mb-3"
        placeholder="Enter tags"
      />

      <div className="d-flex flex-wrap gap-2">
        {field?.value?.map((tag, idx) => (
          <span
            key={idx}
            className="badge bg-secondary d-flex align-items-center"
            style={{ paddingRight: "0.5rem" }}
          >
            <span className="me-1">{tag}</span>
            <i
              className="bi bi-x-lg"
              style={{ cursor: "pointer" }}
              onClick={() =>
                form.setFieldValue(
                  field.name,
                  field.value.filter((item) => item !== tag)
                )
              }
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default TagsInput;
