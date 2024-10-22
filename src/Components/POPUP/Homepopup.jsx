import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Homehhh from './Homehhh.jsx'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Homepopup(props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    props.onClose()
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialogContent-root': {
            padding: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          },
          '& .MuiDialogActions-root': {
            padding: 0,
          },
          '& .MuiPaper-root': {
            width: '1000px', 
            height: '700px',
            display:'flex',
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Homehhh />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}