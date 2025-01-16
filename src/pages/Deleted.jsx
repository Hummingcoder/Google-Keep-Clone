import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "../components/Note";
import { MdDeleteForever, MdRestoreFromTrash } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { Delete, RecoverFromTrash } from "../store/notesSlice";
import Empty from "../components/Empty";

const Deleted = () => {
  const trash = useSelector((state) => state.notes.trash);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(Delete(id));
  };
  const handleRestore = (id) => {
    dispatch(RecoverFromTrash(id));
  };

  if (trash.length === 0) {
    return (
      <div className="w-full h-[80vh]">
        <Empty img={<FaRegTrashAlt />} txt={"No notes in Trash"} />
      </div>
    );
  }

  return (
    <section className="w-full max-w-[1440px]  h-fit mb-6  columns-1 sm:columns-2 lg:columns-4 xl:5 [&>article:not(:first-child)]:mt-5 pt-4 lg:pt-12">
      {trash.map((note) => (
        <Note key={note.id} {...note} pinBtn={false}>
          <button
            onClick={() => handleRestore(note.id)}
            title="Restore"
            className="text-[15px] md:text-[20px] w-[30px] h-[30px] flex items-center justify-center rounded-full"
          >
            <MdRestoreFromTrash size={20} />
          </button>
          <button
            onClick={() => handleDelete(note.id)}
            title="Delete"
            className=" text-[13px] md:text-[16px] w-[30px] h-[30px] flex items-center justify-center rounded-full"
          >
            <MdDeleteForever size={20} />
          </button>
        </Note>
      ))}
    </section>
  );
};

export default Deleted;
