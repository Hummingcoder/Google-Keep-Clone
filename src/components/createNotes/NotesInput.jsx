import React, { useRef, useState } from "react";
import useClickOut from "./useClickOut";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/notesSlice";
import { v4 as uuidv4 } from "uuid";
import { TbPinned, TbPinnedFilled } from "react-icons/tb";

const NotesInput = () => {
  const [active, setactive] = useState(false);
  const dispatch = useDispatch();
  const clickOutRef = useRef(null);
  const [data, setdata] = useState({
    title: "",
    text: "",
    pinned: false,
  });

  const handleAddNotes = () => {
    setactive(false);
    if (data.title.trim() !== "" || data.text.trim() !== "") {
      const tempData = {
        id: uuidv4(),
        title: data.title,
        text: data.text,
        pinned: data.pinned,
      };
      if (data.title.length != 0 || data.text.length != 0) {
        dispatch(addNote(tempData));
      }
    }
    setdata({
      title: "",
      text: "",
      pinned: false,
    });
  };

  useClickOut(clickOutRef, handleAddNotes);

  return (
    <section
      ref={clickOutRef}
      className="w-full h-fit max-w-[600px] rounded-md  text-darkBackground dark:text-lightGrey bg-white dark:bg-[#2f2f2f] shadow-lg flex flex-col items-start justify-normal px-3 py-2 gap-3"
    >
      {active === true && (
        <div className="w-full flex items-center justify-between">
          <input
            className="w-full bg-transparent dark:placeholder:text-gray-400 placeholder:text-darkHover  h-fit font-[500] text-lg border-none outline-none"
            type="text"
            maxLength={100}
            placeholder="Title"
            value={data.title}
            onChange={(e) =>
              setdata((data) => ({ ...data, title: e.target.value }))
            }
          />
          <button
            className=" p-1 hover:bg-gray-100 dark:hover:bg-darkHover  w-[44px] h-[40px] flex items-center justify-center rounded-full"
            onClick={() =>
              setdata((data) => ({ ...data, pinned: !data.pinned }))
            }
          >
            {data.pinned === true ? (
              <TbPinnedFilled size={24} />
            ) : (
              <TbPinned size={24} />
            )}
          </button>
        </div>
      )}
      <ReactTextareaAutosize
        placeholder="Take a note..."
        onClick={() => setactive(true)}
        className="resize-none bg-transparent dark:placeholder:text-gray-400 placeholder:text-darkHover w-full h-auto overflow-hidden border-none outline-none"
        value={data.text}
        onChange={(e) => setdata((data) => ({ ...data, text: e.target.value }))}
      />
      {active === true && (
        <button
          onClick={handleAddNotes}
          className="self-end text-center w-[80px] py-1 pb-[4px]  hover:bg-gray-100 dark:hover:bg-darkHover text-lg rounded-full"
        >
          Close
        </button>
      )}
    </section>
  );
};

export default NotesInput;
