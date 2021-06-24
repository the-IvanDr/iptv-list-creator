import React, { useEffect } from 'react';
import Image from 'next/image'

export default function SuccessAlert({ isVisible, hide }) {

    useEffect(() => {
        if (isVisible) setTimeout(() => hide(), 2000);

    }, [isVisible, hide]);

    return (
        <div className={`SuccessAlert ${isVisible && 'visible'}`}>
            <Image
                src='/success-icon.png'
                alt='success-icon'

                height={30}
                width={30}
            />
            <span>Update successful!</span>
        </div>
    )
}