'use client'
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'

export default function Sort() {
    const handleValueChange = (value: string) => {
        console.log(value)

    }
  return (
    <div className='w-64 py-4'>
        <p className='m-5 text-xl'>Sort by</p>
        <ToggleGroup type="single" defaultValue='latest' className='flex-col gap-3' onValueChange={handleValueChange}>
              <ToggleGroupItem value="latest">
                Latest
              </ToggleGroupItem>
              <ToggleGroupItem value="low">
                Low
              </ToggleGroupItem>
              <ToggleGroupItem value="high" >
                High
              </ToggleGroupItem>
            </ToggleGroup>
    </div>
  )
}
