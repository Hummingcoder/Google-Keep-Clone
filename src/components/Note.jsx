import React, { Children, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineUnarchive } from "react-icons/md";
import { TbPinned, TbPinnedFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Pin } from "../store/notesSlice";
const Note = ({ children, id, title, text, pinned, pinBtn = true }) => {
  const dispatch = useDispatch();

  return (
    <article className=" break-inside-avoid bg-white text-darkBackground dark:bg-[#2f2f2f] dark:text-lightGrey dark:shadow-lg shadow-md w-full h-fit max-w-[300px] xl:min-w-[280px] rounded-md px-2 py-4 flex flex-col items-start justify-start gap-2">
      <div className="px-2 w-full flex flex-col items-center gap-2">
        {pinBtn === true && (
          <button
            onClick={() => dispatch(Pin(id))}
            className="self-end cursor-pointer"
          >
            {pinned === true ? (
              <TbPinnedFilled size={20} />
            ) : (
              <TbPinned size={20} />
            )}
          </button>
        )}

        {title.length > 0 && (
          <p className="w-full text-lg font-[500]">{title}</p>
        )}
        {text.length > 0 && (
          <ReactTextareaAutosize
            disabled
            className="resize-none w-full bg-transparent"
            value={text}
          />
        )}
      </div>
      <div className="w-full flex items-start justify-start gap-1">
        {children}
      </div>
    </article>
  );
};

export default Note;
