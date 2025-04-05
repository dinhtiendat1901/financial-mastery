import {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import {CloseButton, Combobox, Input, InputBase, Text, useCombobox} from '@mantine/core';

interface ComboBoxItem {
    value: string,
    label: string
}

interface ComboBoxProp {
    sendValueToParentFn: (item: ComboBoxItem) => void;
    listItem: ComboBoxItem[];
    canClear: boolean;
    label: string;
}

const ComboBox = forwardRef(function ComboBox({sendValueToParentFn, listItem, canClear, label}: ComboBoxProp, ref) {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });
    const [value, setValue] = useState<any>(null);

    useEffect(() => {
        if (!canClear) {
            setValue(<Text fw={700}>{listItem[0]?.label}</Text>)
            sendValueToParentFn(listItem[0])
        }
    }, [listItem]);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                setValue(null)
            }
        };
    });

    const options = listItem.map((item) => (
        <Combobox.Option value={item.value} key={item.value}>
            <Text fw={700}>{item.label}</Text>
        </Combobox.Option>
    ));


    return (
        <Combobox
            store={combobox}
            withinPortal={true}
            onOptionSubmit={(id, options) => {
                setValue(options.children);
                sendValueToParentFn(listItem.find(item => item.value === id))
                combobox.closeDropdown();
            }}>

            <Combobox.Target>
                <InputBase label={label}
                           component="button"
                           type="button"
                           pointer
                           rightSection={
                               (value !== null) && canClear ? (
                                   <CloseButton
                                       size="sm"
                                       onMouseDown={(event) => event.preventDefault()}
                                       onClick={() => {
                                           setValue(null)
                                           sendValueToParentFn(undefined)
                                       }}
                                       aria-label="Clear value"
                                   />) : (<Combobox.Chevron/>)
                           }
                           onClick={() => combobox.toggleDropdown()}
                           rightSectionPointerEvents={value === null ? 'none' : 'all'}>
                    {value || <Input.Placeholder fw={700}>Pick value</Input.Placeholder>}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
})

export default ComboBox