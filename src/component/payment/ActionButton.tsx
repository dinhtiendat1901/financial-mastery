import {Button, Text} from "@mantine/core";
import {IconReload} from "@tabler/icons-react";
import {useAppDispatch} from "../../store";
import {fetchPayment} from "../../store/payment-action.ts";

export default function ActionButton() {
    const dispatch = useAppDispatch()

    async function handleLoad() {
        await dispatch(fetchPayment())
    }

    return (
        <>
            <Button leftSection={<IconReload size={21}/>} onClick={handleLoad} variant="light"><Text
                size='19' fw={700}>Load</Text></Button>
        </>);
}