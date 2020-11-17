import {GetIcon, IsItem, ITEM_FILE, ITEM_FOLDER} from "../ItemManager";
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

  });
});
