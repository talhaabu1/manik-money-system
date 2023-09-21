import { useNavigate } from "react-router-dom";
import { useDeleteTractorMutation } from "../../../features/api/mutationApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

const DeleteModal = ({ id }) => {
  //? delete call Mutation and sideEffect ⤵
  const [deletePost, { isLoading, data }] = useDeleteTractorMutation();
  const navigate = useNavigate();
  //? delete call Mutation and sideEffect ⤴

  //? delete function ⤵
  const deleteFncu = async (action) => {
    if (action) {
      deletePost(id);
    } else {
      console.log("Not SUCC");
    }
  };
  //? delete function ⤴

  //? loading useEffect and navigate ⤵
  useEffect(() => {
    if (isLoading) {
      toast.loading("Deleting...", { id: "delete" });
    }
    if (data?.data?.deletedCount > 0) {
      toast.success("Delete Success", { id: "delete" });
      navigate("/alltractor");
    }
  }, [data, isLoading]);
  //? loading useEffect and navigate ⤴
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box modalBg">
          <h3 className="font-bold text-2xl text-center text-red-400">
            Are You Sure !
          </h3>
          <p className=" text-center text-lg mt-4 font-bold text-blue-500">
            This Iitem is Delete ?
          </p>
          <div className="">
            <form method="dialog" className=" flex justify-between mt-7">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => deleteFncu(true)}
                className="btn btn-warning">
                Yes
              </button>
              <button
                onClick={() => deleteFncu(false)}
                className="btn btn-info">
                No
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
