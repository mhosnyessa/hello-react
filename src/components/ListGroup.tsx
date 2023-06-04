import { useState } from "react";

import { MouseEvent } from "react";

/// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem}: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <p>Nothing found</p>
      ) : (
        //
        <>
          <ul className="list-group">
            {items.map(
              (item, idx) => (
                <li
                  className={
                    selectedIndex === idx
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  key={item}
                  onClick={(e) => {
                    let nw = selectedIndex === idx ? -1 : idx;
                    setSelectedIndex(nw);
                    onSelectItem(item);
                  }}
                >
                  {item}
                </li>
              )

              //
            )}
          </ul>
        </>
        //
      )}
    </>
  );
}

export default ListGroup;
