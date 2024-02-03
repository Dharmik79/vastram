/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
import React, { Fragment } from 'react';
import Input from '../widget/input';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from '../icons/closeIcon';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const ModalWrapper = ({
  open,
  setOpen,
  title,
  children,
  modalFooter,
  width = 'sm:max-w-4xl',
  childrenClass,
  falseFooter = false,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    customPopover: {
      width: '50% !important', // Adjust the width as needed
      top: '120px !important', // Adjust the top position as needed
      left: '400px !important', // Adjust the left position as needed
    },
  }));

  const openPopOver = Boolean(anchorEl);
  const id = openPopOver ? 'simple-popover' : undefined;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center lg:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full ${width}`}
              >
                <div className="flex items-center justify-between h-16 gap-3 px-5 bg-gray-100">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="flex">
                    {props?.dropOff && (
                      <>
                        <button
                          aria-describedby={id}
                          onClick={handleClick}
                          className="primary-btn mr-5"
                        >
                          Drop Off Request
                        </button>
                        <Popover
                          id={id}
                          open={openPopOver}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          PaperProps={{
                            className: useStyles.customPopover,
                          }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                            <div>
                              <Input
                                name="notes"
                                label="Reason:"
                                type="textarea"
                                placeholder="Please Enter the Reason"
                                value={state?.notes}
                                handleChange={(e) => {
                                  setState({
                                    ...state,
                                    notes: e.target.value,
                                  });
                                }}
                              />
                            </div>
                            <div className="flex items-center">
                              <div className="m-2">
                                <button
                                  className="flex items-center justify-center w-full gap-1 px-3 py-2 text-sm transition bg-white border rounded-md hover:bg-primary hover:text-white border-primary text-primary"
                                  onClick={() => {
                                    props.handleDropOffRequest(state?.notes);
                                  }}
                                >
                                  Submit
                                </button>
                              </div>
                              <div className="m-2">
                                <button
                                  className="flex items-center justify-center w-full gap-1 px-3 py-2 text-sm transition bg-white border rounded-md"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </Typography>
                        </Popover>
                      </>
                    )}

                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 transition hover:rotate-90"
                      onClick={setOpen}
                    >
                      <span className="sr-only">Close panel</span>
                      <CloseIcon />
                    </button>
                  </div>
                </div>
                <div
                  className={`p-5 h-[calc(100vh_-_270px)] overflow-auto ${childrenClass}`}
                >
                  {children}
                </div>
                {!falseFooter && (
                  <div className="flex items-center justify-end gap-3 px-4 py-4 bg-gray-100 modal-footer">
                    {modalFooter}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalWrapper;
