import { createContext, ReactNode, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface IProps {
  children?: ReactNode;
}

type SnackbarProps = {
  open: boolean;
  message: string;
  type: 'error' | 'success';
};

interface Snackbar {
  triggerAlert: (snackbarProps: SnackbarProps) => void;
}

export const SnackbarContext = createContext<Snackbar>({ triggerAlert: () => null });

const SnackbarProvider = ({ children }: IProps) => {
  const [alert, setAlert] = useState<SnackbarProps>({
    open: false,
    message: '',
    type: 'error',
  });

  const triggerAlert = (args: SnackbarProps) => {
    setAlert({ ...alert, ...args });
  };

  const handleClose = () => setAlert({ ...alert, open: false });

  return (
    <SnackbarContext.Provider value={{ triggerAlert }}>
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
          <p className='alert__message'>{alert.message}</p>
        </MuiAlert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
