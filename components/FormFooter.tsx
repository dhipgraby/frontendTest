import React from 'react';

export default function FormFooter() {
    return (
        <ul className="diagnosis-steps">
            <li className="diagnosis-steps__item">
                <span className="diagnosis-steps__hex">
                    <svg className="icon diagnosis-steps__icon textWrite" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <desc>Introduce el NIF y la actividad de tu negocio</desc>
                        <g>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M13.25,0.75 c1.5,0,9.5,0,9.5,0"></path>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M13.25,35.25 c1.5,0,9.5,0,9.5,0"></path>
                            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="18" y1="0.845" x2="18" y2="35.25"></line>
                        </g>
                    </svg>
                </span>
                <p>Introduce el NIF y la actividad de tu negocio</p>
            </li>
            <li className="diagnosis-steps__item">
                <span className="diagnosis-steps__hex">
                    <svg className="icon diagnosis-steps__icon tick" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <desc>Contesta un breve cuestionario</desc>
                        <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="2.333,21.167 10.667,29.5 33.667,6.5 "></polyline>
                    </svg>
                </span>
                <p>Contesta un breve cuestionario</p>
            </li>
            <li className="diagnosis-steps__item">
                <span className="diagnosis-steps__hex">
                    <svg className="icon diagnosis-steps__icon grafic" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <desc>Consigue una evaluación y consejos de mejora</desc>
                        <g>
                            <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="2.825,4.27 2.825,31.191 31.526,31.191"></polyline>
                            <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="8.34,19.587 16.142,11.786 20.508,16.152 30.138,6.521"></polyline>
                            <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="25.162,6.521 30.138,6.521 30.138,11.498"></polyline>
                        </g>
                    </svg>
                </span>
                <p>Consigue una evaluación y consejos de mejora</p>
            </li>
        </ul>
    );
}
