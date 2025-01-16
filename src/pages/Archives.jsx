import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "../components/Note";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { addToTrash, RecoverFromArchive } from "../store/notesSlice";
import Empty from "../components/Empty";

const Archives = () => {
  const archive = useSelector((state) => state.notes.archived);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(addToTrash({ from: "arch", id }));
  };
  const handleArchive = (id) => {
    dispatch(RecoverFromArchive(id));
  };

  if (archive.length === 0) {
    return (
      <div className="w-full h-[80vh]">
        <Empty
          img={<MdOutlineArchive />}
          txt={"Your archived notes appear here"}
        />
      </div>
    );
  }

  return (
    <section className="w-full max-w-[1440px]  h-fit mb-6  columns-1 sm:columns-2 lg:columns-4 xl:5 [&>article:not(:first-child)]:mt-5 pt-4 lg:pt-12">
      {archive.map((note) => (
        <Note key={note.id} {...note} pinBtn={false}>
          <button
            onClick={() => handleArchive(note.id)}
            title="unarchive"
            className="text-[15px] md:text-[20px] w-[30px] h-[30px] flex items-center justify-center rounded-full"
          >
            <MdOutlineUnarchive />
          </button>
          <button
            onClick={() => handleDelete(note.id)}
            title="delete"
            className=" text-[13px] md:text-[16px] w-[30px] h-[30px] flex items-center justify-center rounded-full"
          >
            <FaRegTrashAlt />
          </button>
        </Note>
      ))}
    </section>
  );
};

export default Archives;
