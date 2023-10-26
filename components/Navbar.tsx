'use client'
import { useState } from "react"
import Link from "next/link";

export default function Navbar() {

    const [showMenu, setShowMenu] = useState<Boolean>(false)

    return (
        <>
            <nav className='main-header flex items-center min-w-screen'>
                <div className="wrapper">
                    <ul className='bg-black flex w-full items-center justify-between sm:hidden'>
                        <li onClick={() => setShowMenu(prev => !prev)} className='w-full pt-1 ml-3 cursor-pointer'>
                            <span className="menu material-symbols-outlined">
                                {showMenu ? 'MENU OPEN' : 'MENU CLOSED'}
                            </span>
                        </li>
                        <li className='w-1/6 pt-1 text-right'>
                            <Link href={"/"}>
                                <span className="logo material-symbols-outlined">
                                    LOGO
                                </span>
                            </Link>
                        </li>
                    </ul>

                    <ul className='hidden w-full items-center justify-between sm:flex'>
                        <li className='flex gap-8 justify-between items-center'>
                            <h1 className="main-logo">
                                <Link title="Coach PYME" href="/coach-es-informa/">
                                    <strong>Coach</strong>PYME
                                </Link>
                            </h1>

                        </li>
                        <li className='w-fit justify-end'>
                            <Link href="/admin" className="active main-nav__item">INICIO</Link>
                            <Link href="/faucet" className="main-nav__item">Qué obtengo</Link>
                            <a title="Acceder" className="btn" href="/coach-es-informa/iniciar-sesion">Acceder</a>
                        </li>
                    </ul>
                </div>
            </nav >

            {/* Conditionally render dropdown based on showMenu state */}
            <ul className={`bg-black w-full origin-top hover:shadow-lg transition-all duration-300 absolute z-10 top-12 flex-col gap-3 nav-menu ${showMenu ? '' : 'hidden'} `
            }>

                <li className='w-full'>
                    <Link onClick={() => setShowMenu(false)} href="/admin" className="w-full px-2">Admin</Link>
                </li>
                <li className="mt-4">
                    <Link onClick={() => setShowMenu(false)} href="/faucet" className="px-2">Claim</Link>
                </li>
                <li
                    onClick={() => setShowMenu(false)}
                    className="mt-4">
                    <button className="rounded-lg bg-black text-white p-3">
                        LOGIN
                    </button>
                </li>
            </ul>
        </>
    );
}
