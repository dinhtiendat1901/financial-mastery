import {Button, Group, Modal, NumberInput, Stack, Text, TextInput} from '@mantine/core';
import {isNotEmpty, useForm} from '@mantine/form';
import {useAppDispatch} from "../../store";
import {handleKeyPress, showNotification} from "../../utils/utils.ts";
import classes from "../../css/Modal.module.css";
import {createStudent} from "../../store/student-action.ts";

interface FormValue {
    name: string,
    age: number
}

const initialValues: FormValue = {
    name: '',
    age: 1
}

interface CreateModalProp {
    close: () => void;
    opened: boolean;
}


export default function CreateModal({close, opened}: CreateModalProp) {
    const dispatch = useAppDispatch()
    const form = useForm({
        mode: 'uncontrolled',
        initialValues,
        validate: {
            name: isNotEmpty('Enter your name'),
            age: isNotEmpty('Enter your age')
        },
    });

    async function handleCreate(values: FormValue) {
        await dispatch(createStudent({
            name: values.name,
            age: values.age
        }));
        form.reset();
        close();
        showNotification('Created')
    }

    function onCloseForm() {
        form.reset();
        close();
    }


    return (

        <Modal opened={opened} onClose={onCloseForm} size='lg' title='Create Student' closeOnClickOutside={false}
               classNames={{
                   title: classes.title
               }}>
            <form onSubmit={form.onSubmit(handleCreate)}>
                <Stack>
                    <TextInput fw={700}
                               withAsterisk
                               label="Name"
                               placeholder="Your name"
                               key={form.key('name')}
                               {...form.getInputProps('name')}
                               onKeyPress={handleKeyPress}/>

                    <NumberInput fw={700}
                                 allowNegative={false}
                                 max={50}
                                 min={1}
                                 step={5}
                                 withAsterisk
                                 label="Your age"
                                 key={form.key('age')}
                                 {...form.getInputProps('age')}/>
                </Stack>

                <Group justify="flex-end" mt="md">
                    <Button type="submit"><Text fw={700}>Create</Text></Button>
                </Group>
            </form>
        </Modal>
    );
}