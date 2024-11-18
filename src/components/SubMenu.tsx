import React, { useState } from 'react';
import { Menu } from '@/models/menu';
import Link from 'next/link';

export default function SubMenu({sMenu}: {sMenu: Menu[]}) {
  const [subMenu, setSubMenu] = useState(false)
  return <ul>
    {sMenu.map((m: Menu, i: number) => {
      return (
        <li key={i}>
          {
            m.subMenu.length != 0 && (
              <>
                <a onClick={() => setSubMenu(!subMenu)}>
                  {m.name}
                </a>
                <div className={subMenu ? "block": "hidden"}>
                  <SubMenu sMenu={m.subMenu} />
                </div>
              </>
            )
          }
          {
            m.subMenu.length == 0 && (
              <>
                <Link href={m.link}>
                  {m.name}
                </Link>
              </>
            )
          }
        </li>
      )
    })}
  </ul>
}
