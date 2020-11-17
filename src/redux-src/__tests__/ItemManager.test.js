import { GetIcon, ITEM_FILE, ITEM_FOLDER } from "../ItemManager";
import FileIcon from "../../icons/iconfinder_document-text-file-sheet-doc_2931167.svg";
import FolderIcon from "../../icons/iconfinder_folder-storage-files_2931141.svg";

describe('ItemManager', () => {
  describe('GetIcon', () => {

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

  });

  describe('GetItemAt', () => {

  });
});
