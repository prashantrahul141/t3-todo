import type { FC } from 'react';
import type { ColorResult } from 'react-color';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';

const FolderForm: FC<{
  titleText: string;
  folderName: string | undefined;
  folderColor: string | undefined;
  callBackFunc: (folderName: string, folderColor: string) => void;
  buttonText: string;
}> = ({
  titleText,
  folderName = undefined,
  folderColor = undefined,
  callBackFunc,
  buttonText,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentFolderName, setCurrentFolderName] = useState('');
  const [currentColor, setCurrentColor] = useState('#ff6900');

  if (folderColor !== undefined) {
    setCurrentColor(folderColor);
  }

  return (
    <>
      <form>
        <div className='absolute top-1/4 left-1/2 w-full max-w-lg -translate-x-1/2 p-2 '>
          {/* Title */}
          <p className='mb-12 text-center font-spaceGrotesk text-3xl text-themePrimary-100'>
            {titleText}
          </p>

          {/* Folder name */}
          <input
            type='text'
            placeholder='Folder Name'
            className='input-nameinput my-3 w-full'
            value={folderName}
            required
            onChange={(e) => setCurrentFolderName(e.target.value)}
          />

          {/* Color picker */}
          <div className='my-7 flex items-center font-lato sm:my-4'>
            <span className='tracking-wide text-themePrimary-100'>
              Choose a Folder Color &nbsp;
            </span>
            <button
              className={`bg-transparen ml-16 h-10 w-10 rounded-lg `}
              style={{ backgroundColor: currentColor }}
              onClick={(e) => {
                e.preventDefault();
                setShowColorPicker(!showColorPicker);
              }}></button>
          </div>
          {showColorPicker && (
            <TwitterPicker
              className='mt-1'
              triangle='top-right'
              onChangeComplete={(color: ColorResult) =>
                setCurrentColor(color.hex)
              }
            />
          )}

          {/* Submit button */}
          <button
            type='submit'
            onClick={(e) => {
              if (currentFolderName.length > 0) {
                e.preventDefault();
                callBackFunc(currentFolderName, currentColor);
              }
            }}
            className='btn-signin'>
            {buttonText}
          </button>
        </div>
      </form>
    </>
  );
};

export default FolderForm;
