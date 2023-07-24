import React, { useState } from 'react'

function Input(props) {
    const { type, className, placeholderText, labelClass, labelText, varient="default", hasIcon, icon, spacing="p-2x", iconPosition="right" } = props;
    const [inputValue, setInputValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const groupClass = `input-group input-group--${varient} gap-2x`;

    let inputClassName = className ? `form-control ${className} ${spacing}` : `form-control ${spacing}`;
    if(hasError){
        inputClassName = className ? `form-control ${className} ${spacing} form-control--error` : `form-control form-control--error ${spacing}`;
    }
    let labelClassName = labelClass ? `form-label ${labelClass}` : "form-label";
    let iconClassName = `input-group__icon input-group__icon--${iconPosition}`;
    

    return (
        <div className={groupClass}>
            <label className={labelClassName}>{labelText}</label>
            <div>
                <div className={hasIcon ? `form-icon form-icon--${iconPosition}` : null}>
                    <input
                        className={inputClassName} 
                        type={!showPassword ? type : "text"} 
                        placeholder={placeholderText} 
                        value={inputValue} 
                        onChange={handleInputChange}
                    />
                    {hasIcon && type !== "password" ? (
                        <span className={iconClassName}>
                            {icon}
                        </span>
                    ): null}
                    {hasIcon && type === "password" ? (
                        <span className={iconClassName} onClick={handleShowPassword}>
                            {icon}
                        </span>
                    ): null}
                </div>
                <p className='color-danger--base'>This is a error message</p>
            </div>
        </div>
    )
}

export default Input