import {AppShell, Box, LoadingOverlay} from "@mantine/core";
import {Outlet} from "react-router-dom";
import NavbarSimple from "../component/NavbarSimple.tsx";

export default function RootPage() {
    return <AppShell navbar={{
        width: 350,
        breakpoint: 'sm'
    }} padding="md">
        <Box>
            <LoadingOverlay visible={false} zIndex={1000} overlayProps={{radius: "sm", blur: 0}}/>
            <AppShell.Navbar p="md">
                <NavbarSimple/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </Box>
    </AppShell>
}