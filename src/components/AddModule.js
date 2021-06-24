import React, { useState, useEffect, useRef } from 'react';


export default function AddModule({ isVisible, onClose, onSubmit }) {

    const [item, setItem] = useState({
        name: '',
        href: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        href: false
    });

    useEffect(() => {
        if (!isVisible) {
            setItem({ name: '', href: '' });
            setErrors({ name: false, href: false });
        }

    }, [isVisible]);


    const isInputsValid = () => {
        const newErrors = { ...errors };

        if (item.name.length < 1) newErrors.name = true;
        else newErrors.name = false;

        if (item.href.length < 1) newErrors.href = true;
        else newErrors.href = false;

        setErrors(newErrors);
        console.log('newErrors:', newErrors);

        return !(newErrors.name || newErrors.href);
    }

    const changeHandler = (ev) => {
        setErrors(prev => ({
            ...prev,
            [ev.target.name]: false
        }));
        
        setItem(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }));
    }

    const submitHandler = (ev) => {
        if (!isInputsValid()) return;

        onSubmit(item);
        onClose();
    }


    return (
        <div className={`AddModule ${isVisible && 'visible'}`}>
            <div className='AddModule__block'>
                <div className='AddModule__header'>
                    <div className='AddModule__header__title'>Add item</div>
                    <button onClick={onClose}>✖</button>
                </div>

                <div className='AddModule__main'>
                    <div className={`AddModule__input-wrapper ${errors.name && 'error'}`}>
                        <div className='AddModule__input-wrapper__label'>Name:</div>
                        <input name='name' type='text' value={item.name} onChange={changeHandler} />
                    </div>

                    <div className={`AddModule__input-wrapper ${errors.href && 'error'}`}>
                        <div className='AddModule__input-wrapper__label'>Url:</div>
                        <input name='href' type='text' value={item.href} onChange={changeHandler} />
                    </div>
                </div>

                <button className='AddModule__submit-btn' onClick={submitHandler}>Submit</button>

            </div>
        </div>
    )
}