import {Stack} from "@mantine/core";
import SearchArea from "../component/balance/SearchArea.tsx";
import classes from "../css/Border.module.css"
import BalanceTable from "../component/balance/BalanceTable.tsx";

export default function BalancePage() {
    return <Stack gap='sm'>
        <Stack className={classes.group} p={15}>
            <SearchArea/>
        </Stack>
        <Stack mt={70}>
            <BalanceTable/>
        </Stack>
    </Stack>
}