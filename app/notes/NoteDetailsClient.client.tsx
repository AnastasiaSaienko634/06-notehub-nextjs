"use client";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import css from "./Notes.module.css";

const NoteDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const formatteDate = data.updatedAt
    ? `Updated at: ${data.updatedAt}`
    : `Created at: ${data.createdAt}`;
  return (
    <div className={css.container}>
      {isLoading && <Loader isLoading={isLoading} />}
      {data && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{data.title}</h2>
            </div>
            <p className={css.content}>{data.content}</p>
            <p className={css.date}>{formatteDate}</p>
          </div>
          {isError && <ErrorMessage />}
        </div>
      )}
    </div>
  );
};

export default NoteDetailsPage;
