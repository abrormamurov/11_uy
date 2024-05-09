import BooksGrid from "./BooksGrid";
import BooksList from "./BooksList";
import { useState } from "react";

function BooksContainer() {
  const [view, setView] = useState(false);

  return (
    <>
      <div className="mb-5 border-b py-3 flex items-center justify-between">
        <h3 className="font-medium">10 books</h3>
        <div>
          {view === true ? (
            <>
              {" "}
              <button size="large" onClick={() => setView(false)}>
                Grid
              </button>
            </>
          ) : (
            <>
              <button size="large" onClick={() => setView(true)}>
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
