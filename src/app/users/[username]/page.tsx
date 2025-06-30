import AppLineChart from '@/components/AppLineChart'
import CardList from '@/components/CardList'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { BadgeCheck, Briefcase, Candy, Citrus, LocateIcon, MailIcon, PhoneCallIcon, Shield, User } from 'lucide-react'
import React from 'react'

const SinglePage = () => {
  return (
    <div>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/users/ajibola">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Ajibola Israel</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
         {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between ">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className='ml-10'>Edit User</Button>
                </SheetTrigger>
                <EditUser/>
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <User className=' border-0 border-black-900/80 bg-white-500/50 rounded-full w-5 h-5'/>
                <span className="font-bold">Username:</span>
                <span>Ajibola Israel</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className=' border-0 border-black-900/80 bg-white-500/50 rounded-full w-5 h-5'/>
                <span className="font-bold">Email:</span>
                <span>ajibolaisrael1@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCallIcon className=' border-0 border-black-900/80 bg-white-500/50 rounded-full w-5 h-5'/>
                <span className="font-bold">Phone:</span>
                <span>00000000000</span>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon className=' border-0 border-black-900/80 bg-white-500/50 rounded-full w-5 h-5'/>
                <span className="font-bold">Location:</span>
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                 <Briefcase className=' border-0 border-black-900/80 bg-white-500/50 rounded-full w-5 h-5'/>
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 26.05.2025
            </p>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Popular Content" />
          </div>
        </div>
        {/* RIGHT */}
         <div className='w-full xl:w-2/3 space-y-4'>
            {/* User card container */}
            <div className='bg-primary-foreground p-4 rounded-lg' >
                <div className='flex items-center gap-2'>
                  <Avatar className='size-10'>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback> AI </AvatarFallback>
                  </Avatar>
                  <h1 className='text-xl font-semibold'>Ajibola Israel</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis voluptatum velit voluptate
                    recusandae quis dolores rem esse dignissimos 
                    officia! Earum labore dolore incidunt molestias quis? Harum ab quaerat eum eaque!
                </p>
            </div>

            {/* Chart continer */}
            <div className='bg-primary-foreground p-4 rounded-lg' >
              <AppLineChart/>
            </div>

              {/* User card container */}
            <div className='bg-primary-foreground p-4 rounded-lg' >
                <div className='flex items-center gap-2'>
                  <Avatar className='size-10'>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback> AI </AvatarFallback>
                  </Avatar>
                  <h1 className='text-xl font-semibold'>Ajibola Israel</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis voluptatum velit voluptate
                    recusandae quis dolores rem esse dignissimos 
                    officia! Earum labore dolore incidunt molestias quis? Harum ab quaerat eum eaque!
                </p>
            </div>

             <div className='bg-primary-foreground p-4 rounded-lg' >
              <AppLineChart/>
            </div>


         </div>
      </div>
    </div>
  )
}

export default SinglePage