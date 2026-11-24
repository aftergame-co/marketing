import clsx from 'clsx'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const formClasses =
  'block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-gg-blue focus:outline-hidden focus:ring-cyan-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold"
    >
      {children}
    </label>
  )
}

export function TextField({ id, label, type = 'text', className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ id, label, className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}

export function ListField({ id, label, selected, setSelected, options, className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <ListboxButton className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-gg-blue focus:outline-hidden focus:ring-bg-blue sm:text-sm">
            <span className="block truncate text-left">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
              {options.map((person, personIdx) => (
                <ListboxOption
                  key={personIdx}
                  className={({ focus }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      focus ? 'bg-gg-blue-faint text-gg-blue' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gg-blue">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
