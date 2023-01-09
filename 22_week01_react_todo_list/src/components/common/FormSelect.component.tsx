import { FormEvent } from 'react';

/**
 *
 */
type FormSelectProps = {
    currentValue: string;
    options: string[];
    isDisabled?: boolean;
    onChange: (value: string) => void;
};

/**
 *
 */
function FormSelect({ currentValue, options, isDisabled = false, onChange }: FormSelectProps) {
    return (
        <select
            className={`form-input form-select ${isDisabled ? 'disabled' : ''}`}
            name="Formselect"
            id="Formselect"
            value={currentValue || ''}
            disabled={isDisabled || options.length === 0}
            onChange={(e: FormEvent) => {
                onChange((e.target as HTMLSelectElement).value);
            }}
        >
            {options.map((option: string) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default FormSelect;
