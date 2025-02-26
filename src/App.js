import React, { useState } from "react";
import "./styles.css";
import { explorer } from "./folderData";
import { useTraverse } from "./hooks/useTraverse";
import { Folder } from "./components/Folder";
export default function App() {
  const { insertNode } = useTraverse();
  const [explorerData, setExplorerData] = useState(explorer);
  const handleInsertNode = (id, item, isFolder) => {
    const finalTree = insertNode(explorerData, id, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
