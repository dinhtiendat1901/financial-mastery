import {Table, Text} from "@mantine/core";
import React from "react";
import classes from '../../css/TableScrollArea.module.css';
import cx from 'clsx';

export default function TableHeader({scrolled}) {
    return (
        <Table.Thead className={cx(classes.header, {[classes.scrolled]: scrolled})}>
            <Table.Tr>
                <Table.Th w={'15%'}><Text fw={900}>Time</Text></Table.Th>
                <Table.Th w={'15%'}><Text fw={900}>Couple</Text></Table.Th>
                <Table.Th w={'15%'}><Text fw={900}>Asset</Text></Table.Th>
                <Table.Th w={'15%'}><Text fw={900}>Type</Text></Table.Th>
                <Table.Th w={'15%'}><Text fw={900}>Status</Text></Table.Th>
                <Table.Th><Text fw={900}>Value</Text></Table.Th>
            </Table.Tr>
        </Table.Thead>
    )
}