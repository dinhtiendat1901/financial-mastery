import {Group, Stack} from "@mantine/core";
import ActionButton from "../component/payment/ActionButton.tsx";
import PaymentTable from "../component/payment/PaymentTable.tsx";

export default function PaymentPage() {
    return <Stack gap='sm'>
        <Stack mt={70}>
            <Group justify='flex-end'>
                <ActionButton/>
            </Group>
            <PaymentTable/>
        </Stack>
    </Stack>
}