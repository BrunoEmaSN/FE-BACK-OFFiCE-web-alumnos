import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { useLocation, useNavigate } from "react-router-dom";
import { theme } from '../../theme/theme';

const pages = [
    'Alumnos',
    'Asistencias',
    'Clases',
    'Docentes',
    'Materias',
    'MesasExamenes',
];

export const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(!open);
    };
    const navigate = useNavigate();
    const location = useLocation();

    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box
            component="nav"
            sx={{ width: { sm: !isMdUp ? 0 : 240 }, flexShrink: { sm: 0 }}}
        >
            <AppBar position="fixed" sx={{ boxShadow: 'none', bgcolor: 'transparent' }}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={1}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={toggleDrawer}
                                sx={{
                                    color: '/' === location.pathname ? '#fff' : '#006766',
                                    '&:hover': {
                                        color: '#006766',
                                        bgcolor: '#fff',
                                    }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={8}>

                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                sx={{
                                    color: '/' === location.pathname ? '#fff' : '#006766',
                                    '&:hover': {
                                        color: '#006766',
                                        bgcolor: '#fff',
                                    }
                                }}
                            >
                                <LogoutRoundedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                variant={isMdUp ? "permanent" : "persistent"}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        bgcolor: '#006766',
                        width: 240,
                    },
                }}
                open={open}
            >
                <Box
                    style={{
                        display: isMdUp ? 'none' : 'flex',
                        alignItems: 'center',
                        padding: theme.spacing(0, 1),
                        ...theme.mixins.toolbar,
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton
                        onClick={toggleDrawer}
                        sx={{
                            color: '#fff',
                            '&:hover': {
                                color: '#222F3E',
                                bgcolor: '#00C6B7',
                            }
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </Box>
                <List>
                    <ListItem
                        button
                        onClick={() => navigate('/')}
                        selected={'/' === location.pathname}
                    >
                        <ListItemText
                            primary="Inicio"
                            sx={{ color: '#fff' }}
                        />
                    </ListItem>
                    { pages.map((page) => (
                        <ListItem
                            button
                            key={page}
                            onClick={() => navigate(page)}
                            selected={`/${page}` === location.pathname}
                        >
                            <ListItemText
                                primary={page}
                                sx={{ color: '#fff' }}
                            />
                        </ListItem>
                    )) }
                </List>
            </Drawer>
        </Box>
    )
}