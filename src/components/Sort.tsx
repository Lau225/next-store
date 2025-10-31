'use client'
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group'
import { useSortStore } from '@/store'
export default function Sort() {
    const {setValue} = useSortStore()
    const handleValueChange = (value: 'latest' | 'low' | 'high') => {
        setValue(value)
    }
  return (
    <div className='w-64 py-4'>
        <p className='m-5 text-xl'>Sort by</p>
        <ToggleGroup type="single" defaultValue='latest' className='flex-col gap-3 pr-5' onValueChange={handleValueChange}>
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
