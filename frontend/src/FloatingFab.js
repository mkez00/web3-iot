import * as React from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

function FloatingFab(){
    return (
      <Fab style={style} size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    );
}

export default FloatingFab;