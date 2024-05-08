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
          <div>
            <BooksGrid />,
            <BooksGrid />,
            <BooksGrid />,
          </div>
        </>
      ) : (
        <>
          <div>
            <BooksList />
            <BooksList />
            <BooksList />
          </div>
        </>
      )}
    </>
  );
}

export default BooksContainer;
