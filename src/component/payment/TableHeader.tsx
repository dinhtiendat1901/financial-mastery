import {Table, Text} from "@mantine/core";
import React from "react";
import classes from '../../css/TableScrollArea.module.css';
import cx from 'clsx';

export default function TableHeader({scrolled}) {
    return (
        <Table.Thead className={cx(classes.header, {[classes.scrolled]: scrolled})}>
            <Table.Tr>
                <Table.Th w={'20%'}><Text fw={900}>Name</Text></Table.Th>
                <Table.Th w={'30%'}><Text fw={900}>Value</Text></Table.Th>
                <Table.Th w={'30%'}><Text fw={900}>Time</Text></Table.Th>
                <Table.Th w={250}><Text fw={900}>Status</Text></Table.Th>
            </Table.Tr>
        </Table.Thead>
    )
}