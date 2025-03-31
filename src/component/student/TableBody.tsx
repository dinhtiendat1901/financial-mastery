import {ActionIcon, Table, Text} from "@mantine/core";
import React, {useState} from "react";
import {useAppSelector} from "../../store";
import {IconTrash} from "@tabler/icons-react";

import {useDisclosure} from "@mantine/hooks";
import DeleteModal from "./DeleteModal.tsx";


export default function TableBody() {
    const listStudents = useAppSelector(state => state.student.listStudent);

    const [deleteModalOpened, deleteModalCtl] = useDisclosure(false);
    const [deleteStudentId, setDeleteStudentId] = useState(0);


    function handleClickDelete(id: number) {
        setDeleteStudentId(id);
        deleteModalCtl.open()
    }


    return (
        <>
            <Table.Tbody>{listStudents.map((student) => (
                <Table.Tr key={student.id}>
                    <Table.Td><Text fw={700}>{student.name}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{student.age}</Text></Table.Td>
                    <Table.Td>
                        <ActionIcon variant='subtle' color='red' pl='5' pr='5' onClick={() => {
                            handleClickDelete(student.id)
                        }}><IconTrash
                            size={21}/></ActionIcon>
                    </Table.Td>
                </Table.Tr>))
            }</Table.Tbody>
            <DeleteModal opened={deleteModalOpened} close={deleteModalCtl.close} studentId={deleteStudentId}/>
        </>
    )
}