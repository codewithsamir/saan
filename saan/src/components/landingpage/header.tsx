"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/util/service";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-600 to-blue-800 text-white py-2 sm:py-4 sticky top-0 left-0 z-50 shadow-md">
      <div className="w-full relative sm:w-[85%] mx-auto flex justify-between items-center flex-col sm:flex-row gap-4 sm:gap-0 px-4">
        {/* Logo/Name */}
        <Link href="/">
          <h1 className="text-2xl font-bold">SAAN Coaching<span className="hidden sm:inline"> & Training Center</span></h1>
        </Link>

        <div className="flex items-center gap-5">
          {/* Services Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-500 hover:to-yellow-600">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white text-gray-800 shadow-lg rounded-md">
                  <ul className="grid w-[225px] sm:w-[300px]  p-2">
                    {services.map((service:any) => (
                      <ListItem key={service.id} title={service.title} href={`/services/${service.id}`}>
                        {/* {service.id} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Us */}
          <Button asChild className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-yellow-500">
            <Link href="#contactus">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & LinkProps
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        {/* Wrap the Link component with proper ref forwarding */}
        <Link {...props} legacyBehavior passHref>
          <a
            ref={ref}
            className={
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-yellow-500 hover:text-white " +
              className
            }
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
