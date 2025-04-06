import {Table, Text} from "@mantine/core";
import React from "react";
import {useAppSelector} from "../../store";


export default function TableBody() {
    const listBalances = useAppSelector(state => state.balance.listBalance);
    return (
        <>
            <Table.Tbody>{listBalances.map((balance, index) => (
                <Table.Tr key={index}>
                    <Table.Td><Text fw={700}>{balance.time}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{balance.couple}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{balance.asset}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{balance.type}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{balance.status}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{balance.value}</Text></Table.Td>
                </Table.Tr>))
            }</Table.Tbody>
        </>
    )
}