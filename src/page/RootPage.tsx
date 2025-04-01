import {AppShell, Box, LoadingOverlay} from "@mantine/core";
import {Outlet} from "react-router-dom";
import NavbarSimple from "../component/NavbarSimple.tsx";
import {useAppSelector} from "../store";

export default function RootPage() {
    const loading = useAppSelector(state => state.load.loading);
    return <AppShell navbar={{
        width: 350,
        breakpoint: 'sm'
    }} padding="md">
        <Box>
            <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{radius: "sm", blur: 0}}/>
            <AppShell.Navbar p="md">
                <NavbarSimple/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </Box>
    </AppShell>
}