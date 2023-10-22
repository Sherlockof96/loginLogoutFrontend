import React, { useState } from 'react';

function Form(
    { labels, handleSubmit, submitText, handleChange,
        labelClass="w-full flex justify-center dark:text-light p-2", 
        formClass="flex-col items-center justify-center w-full p-12",
        buttonClass = "relative group text-dark w-full flex justify-center p-5",
        buttonSpanClass = "inline-block bg-light border border-solid border-dark p-2 dark:bg-light"
    }) {
   

    return (
        <form onSubmit={handleSubmit} className={`${formClass}`}>
            {labels.map((label) => (
                <div key={label.label} className={`${labelClass}`}>
                    <label className='flex justify-center'>{label.label}</label>
                    <input type={label.inputType} id={label.label} name={label.label} onChange={handleChange} />
                    <br />
                </div>
            ))}
            <button type="submit" className={`${buttonClass}`}><span className={`${buttonSpanClass}`}>{submitText}</span></button>
        </form>
    );
}

export default Form;
