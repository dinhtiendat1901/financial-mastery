import {Button, Flex, Group, Text} from "@mantine/core";
import React, {useState} from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {IconCalendar, IconFileSearch, IconRefresh} from "@tabler/icons-react";
import {DateInput} from "@mantine/dates";
import {useAppDispatch} from "../../store";
import {searchBalance} from "../../store/balance-action.ts";

dayjs.extend(customParseFormat);

export default function SearchArea() {
    const dispatch = useAppDispatch()
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);


    async function handleClickSearch() {
        const newStartDate = startDate ? new Date(startDate) : null;
        const newEndDate = endDate ? new Date(endDate) : null;
        if (newStartDate)
            newStartDate.setDate(newStartDate.getDate() + 1);
        if (newEndDate)
            newEndDate.setDate(newEndDate.getDate() + 1);
        await dispatch(searchBalance(newStartDate ? newStartDate.toISOString().split('T')[0] : null, newEndDate ? newEndDate.toISOString().split('T')[0] : null))

    }

    function handleClickReset() {
        setStartDate(null);
        setEndDate(null);

    }

    return (
        <>
            <Flex align='flex-end' justify='space-between'>
                <Group>
                    <Group>
                        <IconCalendar/>
                        <DateInput w={130} fw={700}
                                   clearable
                                   valueFormat="DD/MM/YYYY"
                                   value={startDate}
                                   onChange={setStartDate}
                                   placeholder="DD/MM/YYYY"
                                   maxDate={new Date()}/>
                        <DateInput w={130} fw={700}
                                   clearable
                                   valueFormat="DD/MM/YYYY"
                                   value={endDate}
                                   onChange={setEndDate}
                                   placeholder="DD/MM/YYYY"
                                   minDate={startDate}
                                   maxDate={new Date()}/>
                    </Group>
                </Group>
                <Group justify='flex-end'>
                    <Button size='xs' radius='xl' onClick={handleClickSearch} rightSection={<IconFileSearch size={15}
                    />}><Text fw={700}>Search</Text></Button>
                    <Button size='xs' radius='xl' variant='light' onClick={handleClickReset}
                            rightSection={<IconRefresh size={15}
                            />}><Text fw={700}>Reset</Text></Button>
                </Group>
            </Flex>
        </>

    )
}