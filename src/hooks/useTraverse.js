import React from "react";

export const useTraverse = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId) {
      return {
        ...tree,
        items: [
          {
            id: new Date(),
            name: item,
            items: [],
            isFolder,
          },
          ...tree.items,
        ],
      };
    } else {
      let latestNode;
      latestNode = tree.items.map((ele) =>
        insertNode(ele, folderId, item, isFolder)
      );
      return { ...tree, items: latestNode };
    }
  };

  return { insertNode };
};
