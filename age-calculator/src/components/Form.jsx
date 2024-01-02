import { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import FormField from "./FormField";

function Form({ setResult }) {
  const [day, setDay] = useState({ value: "", error: null });
  const [month, setMonth] = useState({ value: "", error: null });
  const [year, setYear] = useState({ value: "", error: null });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!day.error && !month.error && !year.error) {
      const startDate = new Date(year.value, month.value - 1, day.value);
      const endDate = new Date();
      const diff = endDate - startDate;

      const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
      const diffYear = Math.floor(diffDay / 365);

      const remainingDays = diffDay % 365;

      const diffMonth = Math.floor(remainingDays / 30);

      const remainingMonths = remainingDays % 30;

      setResult({
        days: remainingMonths,
        months: diffMonth,
        years: diffYear,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-5">
        <FormField formLabel="Day" field={day} setField={setDay} />
        <FormField formLabel="Month" field={month} setField={setMonth} />
        <FormField formLabel="Year" field={year} setField={setYear} />
      </div>
      <div className="mt-1 flex items-center">
        <hr className="flex-[0.95]" />
        <button className="btn flex[0.1]" type="submit">
          <ArrowIcon w={30} h={30} />
        </button>
      </div>
    </form>
  );
}

export default Form;
