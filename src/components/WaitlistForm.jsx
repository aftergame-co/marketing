import { useState } from 'react'
import { ListField, TextField } from '@/components/Fields'
import { Button } from './Button'
import clsx from 'clsx'

const userTypeOptions = [
  { name: 'Game player' },
  { name: 'Game designer' },
]

export function WaitlistForm({lightMode}) {
  const [selected, setSelected] = useState(userTypeOptions[0])

  return (
    <form>
      <div className="grid xl:grid-cols-6 lg:col-span-1 gap-4 items-end text-left">
        {/* <ListField
          className="col-span-6"
          id="waitlist-usertype"
          label="You are..."
          selected={selected}
          setSelected={setSelected}
          options={userTypeOptions}
        /> */}
        <TextField
          className={clsx(
            'col-span-4',
            lightMode ? 'text-white' : 'text-gray-900'
          )}
          id="waitlist-email"
          label="Find out what all the fuss is about"
          name="waitlist-email"
          placeholder="Email"
          type="email"
        />
        <Button
          type="submit"
          color={lightMode ? 'white' : 'gg'}
          className={clsx(
            'col-span-2',
            lightMode ? 'text-gg-blue hover:text-gg-red active:text-gg-red' : 'bg-gg-blue hover:bg-gg-red active:bg-gg-red'
          )}
        >
          Join the waitlist
        </Button>
      </div>
    </form>
  )
}
