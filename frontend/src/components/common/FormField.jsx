export default function EdwFormField({
  label,
  name,
  type = "text",
  options = [],
  defaultValue,
  required = false,
  onChange,
  hasError,
  block = false,
  ...props
}) {
  return (
    <div className={`edw-form-field ${block ? "edw-form-field--block" : ""}`} {...props}>
      <label className="edw-form-field-label" htmlFor={`field-${name}`}>
        {label}
        {required && <span className="edw-form-field-required">*</span>}
      </label>
      <div className="edw-form-field-input">
        {type === "textarea" ? (
          <textarea
            id={`field-${name}`}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
            rows={6}
            required={required}
          />
        ) : type === "select" ? (
          <select id={`field-${name}`} name={name} defaultValue={defaultValue} onChange={onChange} required={required}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : type === "radio" ? (
          <div className="edw-form-field-input-radio">
            {options.map((option) => (
              <label key={option.value} className="edw-form-field-input-radio-label">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  onChange={onChange}
                  required={required}
                  checked={defaultValue === option.value}
                />
                <span className="edw-form-field-input-radio-label-btn">{option.label}</span>
              </label>
            ))}
          </div>
        ) : (
          <input
            type={type}
            id={`field-${name}`}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
            required={required}
            autoComplete="off"
          />
        )}
        {hasError && <p className="edw-form-field-error">{hasError}</p>}
      </div>
    </div>
  );
}