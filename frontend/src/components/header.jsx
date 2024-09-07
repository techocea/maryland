import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import logo from "../assets/anniversary-logo.jpg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { NavItems } from "../utils/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation
      isBordered
      maxWidth="xl"
      className="bg-[#131313]"
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      <NavbarContent className="sm:hidden -ml-24" justify="center">
        <NavbarBrand>
          <img
            src={logo}
            width="150"
            height="50"
            className="max-w-[18vw] w-full"
            alt="logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <NavbarBrand className="hidden lg:flex">
          <img
            src={logo}
            width="150"
            height="50"
            className="max-w-[6vw] w-full"
            alt="logo"
          />
        </NavbarBrand>
      </NavbarContent>
      <nav className="hidden lg:flex items-center list-none gap-x-8 text-white">
        {NavItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {index === 2 ? (
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 text-white bg-transparent data-[hover=true]:bg-transparent text-lg"
                      radius="sm"
                      variant="light"
                    >
                      Services
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="Brescia services"
                  className="w-[340px] "
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {item.services.map((service) => (
                    <DropdownItem
                      key={service}
                      className="py-2 px-4 hover:bg-slate-200 hover:text-primary"
                    >
                      <Link to={service.to}>{service.label}</Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link className="w-full" to={item.to}>
                {item.title}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </nav>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="warning" variant="flat">
            <Link to="/contact">Register</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {NavItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" to={item.to}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
