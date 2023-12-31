import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CheckCircle } from '@untitled-ui/icons-react/build/cjs'

const mailingLists = [
  { id: 1, title: 'Free', description: 'Limited websites', services: ['Access to all basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20GB individual data each user', 'Basic chat and email support'], price: 'Free' },
  { id: 2, title: 'Pro', description: 'Unlimited websites', services: ['200+ integrations', 'Advanced reporting and analytics', 'Up to 20 individual users', '40GB individual data each user', 'Priority chat and email support'], price: '฿750/month' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CardSelect({title}) {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="main-heading">{title}</RadioGroup.Label>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-[#0788F5] ring-2 ring-[#0788F5]' : '',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-md font-medium text-gray-900">
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Label as="span" className="block font-bold text-gray-900 text-[40px] cal-sans">
                      {mailingList.price}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                      <ul className='flex flex-col gap-y-2'>
                        {mailingList.services.map((service) => (
                          <li className='flex gap-x-2 items-center'>
                            <CheckCircle />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-[#0788F5]')}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-[#0788F5]' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
