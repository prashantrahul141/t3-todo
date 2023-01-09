import type { FC } from 'react';
import type { ColorResult } from 'react-color';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import ErrorAlert from '@components/common/ErrorAlert';

const FolderForm: FC<{
  titleText: string;
  folderName: string | undefined;
  folderDesc: string | undefined;
  folderColor: string | undefined;
  callBackFunc: (
    folderName: string,
    folderDesc: string | null,
    folderColor: string
  ) => void;
  buttonText: string;
}> = ({
  titleText,
  folderName = undefined,
  folderDesc = undefined,
  folderColor = undefined,
  callBackFunc,
  buttonText,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentFolderName, setCurrentFolderName] = useState('');
  const [currentFolderDesc, setcurrentFolderDesc] = useState('');
  const [currentColor, setCurrentColor] = useState('#ff6900');
  const [showError, setShowError] = useState(false);

  if (folderColor !== undefined) {
    setCurrentColor(folderColor);
  }
  // folder form, use for creating and editing folders
  return (
    <>
      <form onChange={() => setShowError(false)}>
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
            minLength={2}
            maxLength={25}
            onChange={(e) => setCurrentFolderName(e.target.value)}
          />

          {/* Folder description */}
          <textarea
            className='textarea-descinput my-3 w-full'
            placeholder='Folder description'
            value={folderDesc}
            onChange={(e) => setcurrentFolderDesc(e.target.value)}></textarea>

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
              e.preventDefault();
              if (currentFolderName.length > 0) {
                callBackFunc(
                  currentFolderName,
                  currentFolderDesc,
                  currentColor
                );
              } else {
                setShowError(true);
              }
            }}
            className='btn-signin'>
            {buttonText}
          </button>
        </div>
      </form>
      {showError && <ErrorAlert text='You missed something!'></ErrorAlert>}
    </>
  );
};

export default FolderForm;
