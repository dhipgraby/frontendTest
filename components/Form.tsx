'use client'
import React, { useState, useEffect } from 'react';
import { ACTIVITY } from "@/dto/form.dto";
import useForm from '@/hooks/useForm';

interface FormProps {
    activities: ACTIVITY[];
}

const Form: React.FC<FormProps> = ({ activities }) => {

    const {
        handleNifChange,
        handleActivitySelect,
        handleActivityInputChange,
        selectedActivity,
        nif,
        searchInput,
        filteredActivities,
        isActivityListVisible,
        setIsActivityListVisible
    } = useForm({ activities })

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <h1 className="title title--main">Evalúa y mejora tu negocio</h1>
                <div className="form-group">
                    <input
                        type="text"
                        name="nif"
                        placeholder="NIF"
                        className="form-field"
                        value={nif}
                        onChange={handleNifChange}
                    />
                </div>
                <div className="form-group">
                    <div className="form-predictive" onClick={() => setIsActivityListVisible(!isActivityListVisible)}>
                        <input
                            type="text"
                            placeholder="Sector de actividad"
                            name="activity_sector"
                            id="lo6zuo4g"
                            autoComplete={'false'}
                            className="form-field form-predictive__field"
                            value={selectedActivity ? selectedActivity.description : searchInput !== '' ? searchInput : ''}
                            onChange={handleActivityInputChange}
                        />
                        <button className="form-predictive__button">
                            Elegir
                            <svg className="icon arrow-select" viewBox="0 0 27 15" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M24.005,2l-9.239,9.239c-0.974,0.974-2.553,0.974-3.527,0L2,2"></path>
                            </svg>
                        </button>
                        {isActivityListVisible && (
                            <ul className='options-list'>
                                {
                                    (filteredActivities.length) ?
                                        filteredActivities.map((el) =>
                                            <li key={el.code} className='options-list__item' onClick={() => handleActivitySelect(el)}>
                                                {el.description}
                                            </li>
                                        )
                                        :
                                        activities.map((el) =>
                                            <li key={el.code} className='options-list__item' onClick={() => handleActivitySelect(el)}>
                                                {el.description}
                                            </li>
                                        )
                                }
                            </ul>
                        )}
                    </div>
                </div>
                <div className="form-actions">
                    <button className="btn btn--xl"><span>Continuar</span>
                        <svg className="icon btn__icon arrow" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" stroke="currentColor" strokeWidth="1.302" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M7.891,1l4.665,4.665c0.601,0.6,0.601,1.573,0,2.174l-4.665,4.664"></path>
                                <line fill="none" stroke="currentColor" strokeWidth="1.302" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="12.839" y1="6.751" x2="1" y2="6.751"></line>
                            </g>
                        </svg>
                    </button>
                </div>
            </form>
        </>
    );
}

export default Form;
