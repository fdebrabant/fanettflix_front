import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

export default function SimpleMenu() {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
     };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleClickRedirectSF() {
        history.push("/genre/3");
    };

    function handleClickRedirectH() {
        history.push("/genre/1");
    };

    function handleClickRedirectT() {
        history.push("/genre/2");
    };

  return (
    <div>
      <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Genre
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem 
            onClick={function(event){
                        handleClose();
                        handleClickRedirectH();
                    }}> Horreur
        </MenuItem>
        <MenuItem 
            onClick={function(event){
                        handleClose();
                        handleClickRedirectT();
                    }}> Thriller
        </MenuItem>
        <MenuItem 
            onClick={function(event){
                        handleClose();
                        handleClickRedirectSF();
                    }}> Science Fiction
        </MenuItem>
      </Menu>
    </div>
  );
}
