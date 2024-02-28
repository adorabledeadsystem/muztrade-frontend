import React from 'react'
import { useLocation } from 'react-router-dom'
import NewPageHeader from './NewPageHeader';

export default function NewsCard() {

    const location = useLocation();
    const data = location.state?.data;

    return (
        <>
             <NewPageHeader />
            <div className="newsCardPage">
                <h3 className="newsCardPage__title Monrat500">{data.title}</h3>
                <div className="newsCardPage__image">
                    <img
                        src={'https://api.muztrade.com:4444' + data.src}
                        alt="newscard"
                        width={485}
                        height={268}
                    />
                </div>
                <p className="newsCardPage__text Monrat400">
                    {data.description}
                </p>
            </div>
        </>
    );
}

