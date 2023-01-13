import { FormEvent } from 'react';

/**
 *
 */
type FormSelectProps = {
    currentValue: string;
    options: string[];
    placeHolder?: string;
    isDisabled?: boolean;
    onChange: (value: string) => void;
};

/**
 *
 */
function FormSelect({
    currentValue,
    options,
    placeHolder = '',
    isDisabled = false,
    onChange,
}: FormSelectProps) {
    return (
        <select
            className={`form-select ${isDisabled ? 'disabled' : ''}`}
            name="Formselect"
            id="Formselect"
            value={currentValue || ''}
            disabled={isDisabled}
            onChange={(e: FormEvent) => {
                onChange((e.target as HTMLSelectElement).value);
            }}
        >
            {options.map((option: string) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}

            {options.length == 0 && <option value="">{placeHolder}</option>}
        </select>
    );
}

export default FormSelect;
