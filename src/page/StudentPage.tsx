import {Group, Stack} from "@mantine/core";

import StudentTable from "../component/student/StudentTable.tsx";
import ActionButton from "../component/student/ActionButton.tsx";
import {useAppDispatch} from "../store";
import {useEffect} from "react";
import {fetchStudent} from "../store/student-action.ts";

export default function StudentPage() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchStudent())
    }, [dispatch]);
    return <Stack gap='sm'>
        <Stack mt={70}>
            <Group justify='flex-end'>
                <ActionButton/>
            </Group>
            <StudentTable/>
        </Stack>
    </Stack>
}