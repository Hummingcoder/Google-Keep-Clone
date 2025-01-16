import React from "react";
import NotesInput from "../components/createNotes/NotesInput";
import { useDispatch, useSelector } from "react-redux";
import Note from "../components/Note";
import {
  MdOutlineArchive,
  MdOutlineLightbulb,
  MdOutlineUnarchive,
} from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { addToArchive, addToTrash } from "../store/notesSlice";
import Empty from "../components/Empty";

const Home = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("hand");
    dispatch(addToTrash({ from: "notes", id }));
  };
  const handleArchive = (id) => {
    console.log("hand");
    dispatch(addToArchive(id));
  };

  return (
    <section className="w-full h-fit flex flex-col items-center justify-start gap-20  ">
      <NotesInput />
      {notes.length === 0 ? (
        <div className="w-full h-full pt-12">
          <Empty
            img={<MdOutlineLightbulb />}
            txt={"Notes you add appear here"}
          />
        </div>
      ) : (
        <div className="w-full">
          {notes.find((note) => note.pinned === true) && (
            <p className="text-gray-500 text-[12px] font-semibold ml-6 mb-2">
              PINNED
            </p>
          )}
          <div className="w-full max-w-[1440px]  h-fit mb-6  columns-1 sm:columns-2 lg:columns-4 xl:5 [&>article:not(:first-child)]:mt-5">
            {notes.map(
              (note) =>
                note.pinned === true && (
                  <Note key={note.id} {...note}>
                    <button
                      onClick={() => handleArchive(note.id)}
                      title="archive"
                      className="text-[15px] md:text-[20px] w-[30px] h-[30px] flex items-center justify-center rounded-full"
                    >
                      <MdOutlineArchive />
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      title="delete"
                      className=" text-[13px] md:text-[16px] w-[30px] h-[30px] flex items-center justify-center rounded-full"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </Note>
                )
            )}
          </div>
          {notes.find((note) => note.pinned === true) && (
            <p className="text-gray-500 text-[12px] font-semibold ml-6 mb-2">
              OTHERS
            </p>
          )}
          <div className="w-full max-w-[1440px]  h-fit mb-6  columns-1 sm:columns-2 lg:columns-4 xl:5 [&>article:not(:first-child)]:mt-5">
            {notes.map(
              (note) =>
                note.pinned === false && (
                  <Note key={note.id} {...note}>
                    <button
                      onClick={() => handleArchive(note.id)}
                      title="archive"
                      className="text-[15px] md:text-[20px] w-[30px] h-[30px] flex items-center justify-center rounded-full"
                    >
                      <MdOutlineArchive />
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      title="delete"
                      className=" text-[13px] md:text-[16px] w-[30px] h-[30px] flex items-center justify-center rounded-full"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </Note>
                )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
