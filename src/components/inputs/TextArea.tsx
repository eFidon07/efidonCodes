import { useRef } from "react";
import { TextAreaProps } from "../../app.types";

const TextArea = (props: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;

    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <div className="w-full md:w-[800px] relative">
      <textarea
        ref={textareaRef}
        name={props.name}
        id={props.id}
        value={props.value}
        onInput={handleInput}
        onChange={props.onTextChange}
        rows={1}
        className={`peer w-full pt-12 pb-4 rounded-none px-4 text-white text-xl md:text-2xl border-b border-zinc-300 focus:outline-none focus:border-white placeholder-transparent focus:placeholder-zinc-500 ${
          props.value ? "bg-[#242424]" : "bg-transparent focus:bg-[#242424]"
        } ${props.value ? "px-8" : "focus:px-8"}`}
      ></textarea>

      <label
        htmlFor={props.id}
        className={`absolute left-4 top-10 ${
          props.value
            ? "text-sm left-8 top-4 text-lime-500"
            : "text-xl md:text-2xl peer-focus:text-sm peer-focus:left-8 peer-focus:top-4 peer-focus:text-lime-500"
        } pointer-events-none transition-all duration-200`}
      >
        {props.label}
      </label>
    </div>
  );
};

export default TextArea;
