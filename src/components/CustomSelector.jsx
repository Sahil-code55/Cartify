import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const CustomSelect = ({ options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-56">

      <button
        onClick={() => setOpen(!open)}
        style={{padding:"0 1.25rem"}}
        className="w-full h-14 rounded-2xl border border-white/10 bg-zinc-900  flex items-center justify-between text-white hover:border-[#38BDF8]"
      >
        {selected}
        <IoChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div 
        style={{marginTop:"0.5rem"}}
        className="absolute  w-full text-white rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden z-50 hover:border-[#38BDF8]">

          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              style={{padding:"0.75rem 1.25rem"}}
              className="w-full  text-left hover:bg-blue-400 hover:text-white transition"
            >
              {option}
            </button>
          ))}

        </div>
      )}
    </div>
  );
};

export default CustomSelect;