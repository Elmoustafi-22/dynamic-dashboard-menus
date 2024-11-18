import { Menu } from "@/models/menu";
const menuList : Menu[] = [
    { name: "Dashboard", link: "#", subMenu: [] },
    {
        name: "Product",
        link: "#",
        subMenu: [
            { name: "Add New", link: "#", subMenu: [] },
            { name: "List", link: "#", subMenu: [
                    {
                        name: "Inventory",
                        link: "#",
                        subMenu: [],
                    },
                    {
                        name: "Invoice",
                        link: "#",
                        subMenu: [],
                    },
                ],
            },
            {
                name: "Business",
                link: "#",
                subMenu: [
                    {
                        name: "Outlet",
                        link: "#",
                        subMenu: [],
                    },
                ],
            },
            {
                name: "Employee",
                link: "#",
                subMenu: [
                    { name: "Add New", link: "#", subMenu: [] },
                    { name: "List", link: "#", subMenu: []},
                ]
            },
            {
                name: "Shipment",
                link: "#",
                subMenu: [],
            },
            {
                name: "Marketing",
                link: "#",
                subMenu: [],
            },
        ],
    },
    { name: "Settings", link: "#", subMenu: [] },
]

const MenuBar = () => {
    return <ul>

    </ul>
}

export default MenuBar;