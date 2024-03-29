import { forwardRef, useRef, useImperativeHandle } from 'react';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <>
      <dialog
        ref={dialog}
        className='backdrop:bg-stone-900/90
      p-5 rounded-md shadow-md bg-stone-100 '
      >
        {children}
        <form method='dialog' className='mt-4'>
          <button
            className='border-none btn btn-neutral text-stone-400
           hover:text-stone-100 mt-2'
          >
            Close
          </button>
        </form>
      </dialog>
    </>
  );
});

export default Modal;
