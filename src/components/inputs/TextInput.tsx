import { InputProps } from "../../app.types";

const TextInput = (props: InputProps) => {
  return (
    <div className="w-full md:w-[800px] relative">
      <input
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onTextChange}
        placeholder={props.placeholder || ""}
        autoComplete="off"
        className={`peer w-full pt-12 pb-4 px-4 rounded-none text-white text-xl md:text-2xl border-b border-zinc-300 focus:outline-none focus:border-white placeholder-transparent focus:placeholder-zinc-500 ${
          props.value ? "bg-[#242424]" : "bg-transparent focus:bg-[#242424]"
        } ${
          props.id === "your-budget"
            ? props.value
              ? "px-14"
              : "focus:px-14"
            : props.value
            ? "px-8"
            : "focus:px-8"
        }`}
      />
      <label
        htmlFor={props.id}
        className={`absolute left-4 top-10 text-xl md:text-2xl ${
          props.value
            ? "text-sm left-8 top-4 text-lime-500"
            : "peer-focus:text-sm peer-focus:left-8 peer-focus:top-4 peer-focus:text-lime-500"
        } pointer-events-none transition-all duration-200`}
      >
        {props.label}
      </label>

      {props.id === "your-budget" && (
        <span
          className={`text-2xl absolute top-12 left-8 ${
            props.value ? "block" : "hidden peer-focus:block"
          }`}
        >
          $
        </span>
      )}
    </div>
  );
};

export default TextInput;
