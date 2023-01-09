import type { FC } from 'react';
import type { ColorResult } from 'react-color';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import Link from 'next/link';
import ErrorAlert from '@components/common/ErrorAlert';
import { api } from '@utils/api';

const NoteForm: FC<{
  titleText: string;
  noteName: string | undefined;
  noteFolderName: string | undefined;
  noteColor: string | undefined;
  callBackFunc: (
    NoteName: string,
    noteFolderName: string,
    NoteColor: string
  ) => void;
  buttonText: string;
}> = ({
  titleText,
  noteName = undefined,
  noteFolderName = undefined,
  noteColor = undefined,
  callBackFunc,
  buttonText,
}) => {
  // note form, use for creating and editing note

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentNoteName, setCurrentNoteName] = useState('');
  const [currentNoteFolderName, setCurrentNoteFolderName] = useState({
    seleteted: false,
    value: 'DEFAULT',
  });
  const [currentColor, setCurrentColor] = useState('#ff6900');
  const [showError, setShowError] = useState(false);

  if (noteColor !== undefined) {
    setCurrentColor(noteColor);
  }

  const allFolders = api.folder.list.useQuery();

  return (
    <>
      <form onChange={() => setShowError(false)}>
        <div className='absolute top-1/4 left-1/2 w-full max-w-lg -translate-x-1/2 p-2 '>
          {/* Title */}
          <p className='mb-12 text-center font-spaceGrotesk text-3xl text-themePrimary-100'>
            {titleText}
          </p>

          {/* Note name */}
          <input
            type='text'
            placeholder='Note Name'
            className='input-nameinput my-3 w-full'
            value={noteName}
            required
            minLength={2}
            maxLength={25}
            onChange={(e) => setCurrentNoteName(e.target.value)}
          />

          {/* Choose Folder */}
          <div className='my-3 flex w-full border border-themePrimary-100/0'>
            <select
              required
              className='select-folder mr-3 flex-auto font-lato text-lg'
              defaultValue={noteFolderName ? noteFolderName : 'Pick a folder'}
              onChange={(e) =>
                setCurrentNoteFolderName({
                  value: e.target.value,
                  seleteted: true,
                })
              }>
              {allFolders.data?.folders.map((eachFolder) => {
                return (
                  <option
                    value={eachFolder.id}
                    key={eachFolder.id}
                    className='select-option'>
                    {eachFolder.name}
                  </option>
                );
              })}
              <option className='select-option'>Pick a folder</option>
            </select>

            <Link href='/new/folder'>
              <button className='btn-signin m-0 w-max'>Create</button>
            </Link>
          </div>

          {/* Color picker */}
          <div className='my-4 flex items-center font-lato sm:my-4'>
            <span className='tracking-wide text-themePrimary-100'>
              Choose a Note Color &nbsp;
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
              if (
                currentNoteName.length > 0 &&
                currentNoteFolderName.seleteted
              ) {
                callBackFunc(
                  currentNoteName,
                  currentNoteFolderName.value,
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

export default NoteForm;
