"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  // we can declare server actions inside components using the "use server" directive
  // const deleteReservation = () => {
  //   "use server";
  // };

  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this reservation?")) {
      startTransition(() => onDelete(bookingId));
    }
  };

  return (
    <button
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
      onClick={handleDelete}
    >
      {!isPending ? (
        <>
          <TrashIcon
            className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors"
            onClick={() => deleteReservation(bookingId)}
          />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
