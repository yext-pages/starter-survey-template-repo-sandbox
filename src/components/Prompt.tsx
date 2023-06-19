import * as React from "react";
import cx from "classnames";
import { useFormContext } from "react-hook-form";

type Props = {
  //Insert Props Here
  promptType: string;
  className?: string;
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: any;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  options?: string[];
};

const Prompt = ({ className, name, label, options, defaultValue, promptType, placeholder, onChange, required }: Props) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (

    <div className={cx(className)}>

    {label && (
      <label className="text-s font-semibold tracking-wider text-black">
        {label}
      </label>
    )}

    {promptType == 'Single-option select' && (
      options.map((o) => (
        <div className="flex gap-2 items-center" key={o}>
          <input
            {...register(name, { required: true })}
            type="radio"
            value={o}
          />
          <label htmlFor={o}>{o}</label>
        </div>
      )))}

    {promptType == 'Multi-option select' && (
      options.map((o) => (
        <div className="flex gap-2 items-center" key={o}>
          <input
            {...register(name, { required: true })}
            type="checkbox"
            value={o}
          />
          <label htmlFor={o}>{o}</label>
        </div>
      )))}

      {promptType == 'Short response' && (
        <div className="relative mt-1 ">
          <input
            defaultValue={defaultValue}
            {...register(name, {
              required: required
            })}
            className={cx(
              "w-full rounded-md border border-gray-300  py-2 px-4   focus:border-blue-500 focus:outline-none focus:ring-blue-400 group-hover:border-blue-500 group-hover:ring-1 group-hover:ring-blue-500"
            )}
            placeholder={placeholder}
            onChange={onChange}
          ></input>
        </div>
      )}

      {promptType == 'Long response' && (
        <div className={cx(className)}>
        <div className="flex w-full flex-col group">
          <textarea
            defaultValue={defaultValue}
            {...register(name, { required: required })}
            rows={5}
            className="mt-1 w-full rounded-md border border-gray-300 py-2 px-4   focus:ring-blue-500 focus:border-none group-hover:border-blue-500 group-hover:ring-1 group-hover:ring-blue-500 focus:border-blue-500"
            placeholder={placeholder}
          />
        </div>
      </div>
      )}


    </div>
  );
};

export default Prompt;
