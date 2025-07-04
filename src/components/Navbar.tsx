"use client"


import { ChevronDown, LogOut, Moon, Settings, Sun, User, } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { SidebarTrigger, } from './ui/sidebar'

const Navbar = () => {
    // write like this since theme not used used the other 
    // const { theme, setTheme} = useTheme();
    const {setTheme} = useTheme();
    // const {toggleSidebar} = useSidebar(); for custom button
  return (
    <div>
        <nav className='p-4 flex items-center justify-between sticky top-0 bg-background z-10'>
            {/* left side */}
            {/* use can just use this sidebar trigger directly */}
            <SidebarTrigger/>
            {/* if i want a custom button */}
            {/* first input this  const {toggleSidebar} = useSidebar(); */}
            {/* <Button onClick={toggleSidebar}> sideBar</Button> */}

            {/* right side */}
            <div className=" flex items-center gap-4">

                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button>
                                   Dashboard <ChevronDown className='ml-auto'/>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align='end'>
                                     <DropdownMenuItem>
                                       <Link href='/'>Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                       <Link href='/users/ajibola'>Users</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                       <Link href='/payments'>Payments</Link>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                </DropdownMenu>
                {/* <Link href="/"> Dashboard</Link>
                <Link href="/users/ajibola">page</Link> */}

                {/* theme menu */}
                 <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

                    {/* user menu */}
                <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                {/* the side offest here is to give space between the icon and dropdown menu */}
                <DropdownMenuContent sideOffset={10}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User className='h-[1.2rem] w-[1.2rem] mr-2 ' />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className='h-[1.2rem] w-[1.2rem] mr-2 '/>
                        Settings    
                    </DropdownMenuItem>
                    {/* the destructive is to change the color of the logout to red  */}
                    <DropdownMenuItem variant='destructive'> 
                        <LogOut className='h-[1.2rem] w-[1.2rem] mr-2 '/>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    </div>
  )
}

export default Navbar