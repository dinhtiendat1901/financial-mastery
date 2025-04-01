import {useState} from 'react';
import {Button, Code, Group, Text} from '@mantine/core';
import {IconBrandChrome, IconWallet} from '@tabler/icons-react';

import classes from '../css/NavbarSimple.module.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {Payment} from "../store/payment-slice.ts";

const data = [
    {link: '/', label: 'Students', icon: IconBrandChrome},
    {link: '/payment', label: 'Payments', icon: IconWallet},

];

export default function NavbarSimple() {
    const [active, setActive] = useState('Students');

    async function handleOpenBrowser() {
        await axios.get<Payment[]>(`${import.meta.env.VITE_PLAYWRIGHT_SERVER_URL}/open_browser`)
    }

    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={item.label === active || undefined}
            to={item.link}
            key={item.label}
            onClick={() => {
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5}/>
            <span><Text fw={900}>{item.label}</Text></span>
        </Link>
    ));

    return (
        <>
            <nav className={classes.navbar}>
                <div className={classes.navbarMain}>
                    <Group className={classes.header} justify="space-between">
                        <Code fw={700}>v3.1.2</Code>
                    </Group>
                    {links}
                </div>
                <Button leftSection={<IconBrandChrome size={21}/>} onClick={handleOpenBrowser} variant="filled"><Text
                    size='19' fw={700}>Open Browser</Text></Button>
            </nav>
        </>
    );
}