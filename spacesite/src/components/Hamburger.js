import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import hambIcon from '../assets/shared/icon-hamburger.svg';
import './Hamburger.css';
import { Link, Outlet } from 'react-router-dom';


export default function Hamburger() {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <ul>
                <li><Link to="/">00 Home</Link></li>
                <li><Link to="/destination">01 Destination</Link></li>
                <li><Link to="/crew">02 Crew</Link></li>
                <li><Link to="/technology">03 Technology</Link></li>
            </ul>
            
            
                {/*<a id="Home" className="menu-item" href="#">00 Home</a> < br/>
                <a id="Home" className="menu-item" href="#">01 Destination</a>< br/>
                <a id="Home" className="menu-item" href="#">02 Crew</a>< br/>
                <a id="Home" className="menu-item" href="#" >03 Technology</a>< br/> */}
        </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
            <Button>
                <img src={hambIcon} alt='menu' onClick={toggleDrawer('right', true)}/>
            </Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
            </React.Fragment>
        
        </div>
    );
}
