import BooksGrid from "./BooksGrid";
import BooksList from "./BooksList";
import { useState } from "react";

function BooksContainer() {
  const [view, setView] = useState(false);

  return (
    <>
      <div className="mb-5 border-b py-3 flex items-center justify-between">
        <h3 className="font-bold text-2xl p-10">10 books</h3>
        <div className="p-10">
          {view === true ? (
            <>
              {" "}
              <button
                className="text-2xl font-bold"
                size="large"
                onClick={() => setView(false)}
              >
                Grid
              </button>
            </>
          ) : (
            <>
              <button
                className="text-2xl font-bold"
                size="large"
                onClick={() => setView(true)}
              >
                List
              </button>
            </>
          )}
        </div>
      </div>
      {view === true ? (
        <>
          <div className="flex justify-evenly	scroll-mb-96	">
            <BooksGrid />,
            <BooksGrid />,
            <BooksGrid />,
          </div>
        </>
      ) : (
        <>
          <div className="gap-10 scroll-mb-96">
            <BooksList className="scroll-mb-96" />
            <BooksList className="mb-10" />
            <BooksList className="mb-10" />
          </div>
        </>
      )}
    </>
  );
}

export default BooksContainer;
