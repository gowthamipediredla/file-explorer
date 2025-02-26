import React, { useState } from "react";

export const Folder = ({ explorer, handleInsertNode, level = 0 }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const onAddClick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setShowInput({ ...showInput, visible: false });
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
    }
  };
  return (
    <div className="folder-container" style={{ marginLeft: level * 15 + "px" }}>
      {explorer.isFolder ? (
        <div className="folder">
          <div
            className="mb-2"
            onClick={(e) => {
              e.stopPropagation;
              setExpand((prev) => !prev);
            }}
          >
            {explorer.name} 🗂️
            <>
              <button onClick={(e) => onAddClick(e, true)}>
                Add Folder🗂️ +
              </button>
              <button onClick={(e) => onAddClick(e, false)}>
                Add File 📁 +
              </button>
            </>
          </div>
          <div style={{ display: expand ? "block" : "none" }}>
            {showInput.visible && (
              <input
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={handleKeyDown}
              />
            )}
            {explorer.items.map((ele) => (
              <Folder
                explorer={ele}
                level={level + 1}
                handleInsertNode={handleInsertNode}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>{explorer.name} 📁</div>
      )}
    </div>
  );
};
