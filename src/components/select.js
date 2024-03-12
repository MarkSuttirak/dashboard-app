import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Select({ options, value, onChange, width, height, border }) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative" style={{ width: width, height: height }}>
            <Listbox.Button style={{ border: border }}>
              <span className="block truncate text-left">{value?.value}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"> */}
              <Listbox.Options className="form-options">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      classNames(
                        option.value === value.value ? 'active' : '',
                        'form-option-value'
                      )
                    }
                    value={option}
                  >
                    <>
                      <span className={classNames(value ? 'font-semibold' : 'font-normal', 'block truncate')}>
                        {option?.label}
                      </span>

                      {option.value === value.value ? (
                        <span
                          className={classNames(
                            option.value === value.value ? 'text-white' : 'text-[#0788F5]',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}