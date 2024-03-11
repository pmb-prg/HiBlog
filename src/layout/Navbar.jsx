import {useEffect, useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Switch} from "@nextui-org/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Link, redirect } from "react-router-dom";
import styles from "./Navbar.module.css";



export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(false)

      redirect("/home")


  useEffect(() =>{
    if(theme){
      document.documentElement.classList.remove("dark")
    } else{
      document.documentElement.classList.add("dark")
    }
  },[theme])
  const menuItems = [
    "Home",
    "Authors",
    "Blogs",
    "Courses",
    "Creator",   
  ];


  const changeThemeHandler = () => {
    setTheme(theme ? false : true);
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className={styles.navbar}>
      <NavbarContent className=" flex absolute left-4 lg:left-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className=" mr-8">
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit text-2xl"><span className=" text-sky-500">Hi</span>Blog</p>
        </NavbarBrand>
        <NavbarItem className={styles.items}>
          <Link color="foreground" to="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className={styles.items}>
          <Link color="foreground" to="#">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem className={styles.items}>
          <Link color="foreground" to="#">
          Courses
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Switch
          defaultSelected
          size="lg"
          color="primary"
          startContent={<FaSun />}
          endContent={<BsMoonStarsFill />}
          onChange={changeThemeHandler}
          checked={theme}
        />
      </NavbarContent>

      <NavbarMenu  className={styles.menu}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full font-bold"
              to={`/${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
