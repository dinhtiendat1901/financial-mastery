import {Table, Text} from "@mantine/core";
import React from "react";
import {useAppSelector} from "../../store";


export default function TableBody() {
    const listPayments = useAppSelector(state => state.payment.listPayment);
    return (
        <>
            <Table.Tbody>{listPayments.map((payment, index) => (
                <Table.Tr key={index}>
                    <Table.Td><Text fw={700}>{payment.name}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{payment.value}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{payment.time}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{payment.status}</Text></Table.Td>
                </Table.Tr>))
            }</Table.Tbody>
        </>
    )
}