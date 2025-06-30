"use client"

import React from 'react'
import { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { CalendarIcon } from 'lucide-react'
import { Button } from './ui/button'
import { format } from "date-fns";
import { Calendar } from './ui/calendar'

const ToDoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false)
  return (
    <div>
        <h1 className='text-lg font-medium mb-4'>Todo-List</h1>
        <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild> 
                    <Button>
                        <CalendarIcon/> 
                         {date ? format(date, "PPP") : <span>Pick a date</span>}
                     </Button>
                </PopoverTrigger>
                <PopoverContent className='p-0 w-auto'> 
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                        className="rounded-lg border"
                    />
               </PopoverContent>
        </Popover>

        <div className=' flex flex-col gap-4'>
            <ScrollArea className=' max-h-[400px] mt-4 overflow-y-auto'>
                {/* List  items*/}
                <Card className='p-4 mt-4'>
                        <div className=' flex items-center gap-4'>
                            <Checkbox id='item1'/>
                            <label htmlFor="item1" className=' text-sm text-muted-foreground '> 
                                Lorem ipsum dolor sit amet consectetur 
                            </label>
                        </div>
                </Card>

                 {/* List  items*/}
                <Card className='p-4 mt-4'>
                        <div className=' flex items-center gap-4'>
                            <Checkbox id='item1' checked/>
                            <label htmlFor="item1" className=' text-sm text-muted-foreground '> 
                                Lorem ipsum dolor sit amet consectetur 
                            </label>
                        </div>
                </Card>

                 {/* List  items*/}
                <Card className='p-4 mt-4'>
                        <div className=' flex items-center gap-4'>
                            <Checkbox id='item1'/>
                            <label htmlFor="item1" className=' text-sm text-muted-foreground '> 
                                Lorem ipsum dolor sit amet consectetur 
                            </label>
                        </div>
                </Card>

                 {/* List  items*/}
                <Card className='p-4 mt-4'>
                        <div className=' flex items-center gap-4'>
                            <Checkbox id='item1'/>
                            <label htmlFor="item1" className=' text-sm text-muted-foreground '> 
                                Lorem ipsum dolor sit amet consectetur 
                            </label>
                        </div>
                </Card>

                 {/* List  items*/}
                <Card className='p-4 mt-4'>
                        <div className=' flex items-center gap-4'>
                            <Checkbox id='item1' checked/>
                            <label htmlFor="item1" className=' text-sm text-muted-foreground '> 
                                Lorem ipsum dolor sit amet consectetur 
                            </label>
                        </div>
                </Card>

                 {/* List  items*/}
                <Card className='p-4 mt-4'>
                        <div className=' flex items-center gap-4'>
                            <Checkbox id='item1'/>
                            <label htmlFor="item1" className=' text-sm text-muted-foreground '> 
                                Lorem ipsum dolor sit amet consectetur 
                            </label>
                        </div>
                </Card>

                 {/* List  items*/}
                <Card className='p-4 mt-4'>
                        <div className=' flex items-center gap-4'>
                            <Checkbox id='item1'/>
                            <label htmlFor="item1" className=' text-sm text-muted-foreground '> 
                                Lorem ipsum dolor sit amet consectetur 
                            </label>
                        </div>
                </Card>

            </ScrollArea>
        </div>

    </div>
  )
}

export default ToDoList