import {ActionIcon, Group, Modal, Stack, Text} from "@mantine/core";
import {IconCircleCheck, IconXboxX} from "@tabler/icons-react";
import {useAppDispatch} from "../../store";
import {deleteStudent} from "../../store/student-action.ts";
import {showNotification} from "../../utils/utils.ts";

interface DeleteModalProp {
    close: () => void;
    opened: boolean;
    studentId: number;
}

export default function DeleteModal({close, opened, studentId}: DeleteModalProp) {
    const dispatch = useAppDispatch()

    async function handleClickConfirm() {
        dispatch(deleteStudent(studentId))
        close()
        showNotification('Deleted')

    }

    return (
        <Modal opened={opened} onClose={close} withCloseButton={false} closeOnEscape={false}
               closeOnClickOutside={false}>
            <Stack align='center'>
                <Text fw={700}>Do you want to delete <Text span fw={900} c='red'>Student {studentId}</Text> ?</Text>
                <Group justify='center'>
                    <ActionIcon variant='subtle' color='green' radius='xl'
                                onClick={handleClickConfirm}><IconCircleCheck/></ActionIcon>
                    <ActionIcon variant='subtle' color='red' radius='xl' onClick={close}><IconXboxX/></ActionIcon>
                </Group>
            </Stack>
        </Modal>
    )
}