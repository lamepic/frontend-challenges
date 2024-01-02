import { validateDate } from "../utils/validateInput";

function FormField({ formLabel, field, setField }) {
  const handleOnChange = (e) => {
    const value = e.target.value;
    const validate = validateDate({ formLabel, value });
    setField({
      value,
      error: validate ?? null,
    });
  };
  return (
    <label className="flex flex-col gap-1 text w-[24%]">
      <span
        className={`${
          field.error ? "text-red-600" : "text-smokey-grey"
        } font-bold  text-xs tracking-[0.2rem] uppercase`}
      >
        {formLabel}
      </span>
      <input
        type="number"
        value={field.value}
        onChange={handleOnChange}
        className={`${
          field.error ? "border-red-600" : "border-gray-300"
        } border rounded py-1.5 px-2 text-xl font-bold outline-purple caret-purple`}
      />
      {field.error && (
        <span className="text-[10px] text-red-600 italic font-normal">
          {field.error}
        </span>
      )}
    </label>
  );
}

export default FormField;
