import { GetIcon, GetItemAt, IsItem, ITEM_FILE, ITEM_FOLDER } from "../item-manager";
import FileIcon from "../../icons/iconfinder_document-text-file-sheet-doc_2931167.svg";
import FolderIcon from "../../icons/iconfinder_folder-storage-files_2931141.svg";

describe('Item Manager', () => {
  describe('Get Icon', () => {
    const testCases = [
      [ITEM_FILE, FileIcon],
      [ITEM_FOLDER, FolderIcon],
      ['Default', null],
    ]

    it.each(testCases)('GetIcon: %s', (itemType, icon) => {
      const result = GetIcon(itemType, icon);
      expect(result).toEqual(icon);
    });
  });

  describe('IsItem', () => {
    const testCases = [
      [ITEM_FILE, true],
      [ITEM_FOLDER, true],
      ["Unknown", false],
    ]

    it.each(testCases)('IsItem: %s', (itemType, bool) => {
      const result = IsItem(itemType, bool);
      expect(result).toEqual(bool);
    });
  });

  describe('GetItemAt', () => {
    const item = (xPos, yPos) => ({
      xPos,
      yPos
    });

    const testCases = [
      [0, 0, []],
      [81, 0, [item(0, 0)]],
      [0, 0, [item(81, 0)]],
      [0, 81, [item(0, 0)]],
      [0, 0, [item(0, 81)]],
    ]

    it.each(testCases)("GetItemAt: %s", (xPos, yPos, allItems) => {
      const result = GetItemAt(xPos, yPos, allItems);
      expect(result).toBeNull();
    });
  });
});
