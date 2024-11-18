"use client"
import { Menu } from '@/models/menu';
import SubMenu from './subMenu';
import React, { useState } from 'react';
import Link from 'next/link';

export default function MainMenu({menu}: {menu: Menu}) {
    const [subMenu, setSubMenu] = useState(false);

    return (
        <li>
            {menu.subMenu.length != 0 && (
                <>
                    <a onClick={() => setSubMenu(!subMenu)}>{menu.name}</a>
                    <div className={subMenu ? "block": "hidden"}>
                        <SubMenu sMenu={menu.subMenu}/>
                    </div>
                </>
            )}
            {
                menu.subMenu.length == 0 && (
                    <Link href={menu.link}>{menu.name}</Link>
                )
            }
        </li>
    )
}
