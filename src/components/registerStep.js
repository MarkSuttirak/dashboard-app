import { CheckIcon } from '@heroicons/react/24/solid'

export default function RegisterStep({active}){
  const steps = [
    { id: '01', name: 'Phone Number', description: 'Enter your phone number to receive an OTP to verify your identity.', status: active},
    { id: '02', name: 'Register', description: 'Fill in the denominator information for your business.', status: active},
    // { id: '03', name: 'Preview', description: 'Penatibus eu quis ante.', status: 'upcoming' },
  ]

  if (active === 0) {
    steps[0].status = 'current'
    steps[1].status = 'upcoming'
  } else if (active === 1) {
    steps[0].status = 'complete'
    steps[1].status = 'current'
  }

  return (
    <nav className="m-auto max-w-[480px] px-8" aria-label="Progress">
      <ol
        role="list"
        className="overflow-hidden rounded-md"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.id} className="relative overflow-hidden lg:flex-1">
            <div>
              {step.status === 'complete' ? (
                <a href={step.href} className="group">
                  <span
                    className='px-6 py-5 flex items-center text-sm font-medium'
                  >
                    <span className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0788F5]">
                        <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                      <span className="text-base font-medium">{step.name}</span>
                      <span className="text-sm font-medium text-gray-500">{step.description}</span>
                    </span>
                  </span>
                </a>
              ) : step.status === 'current' ? (
                <a href={step.href} aria-current="step">
                  <span
                    className='px-6 py-5 flex items-center text-sm font-medium'
                  >
                    <span className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0788F5]">
                        <CheckIcon className="h-6 w-6 text-[#0788F5]" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                      <span className="text-base font-medium text-[#0788F5]">{step.name}</span>
                      <span className="text-sm font-medium text-gray-500">{step.description}</span>
                    </span>
                  </span>
                </a>
              ) : (
                <a href={step.href} className="group">
                  <span
                    className='px-6 py-5 flex items-center text-sm font-medium'
                  >
                    <span className="flex-shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                        <CheckIcon className="h-6 w-6 text-gray-300" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                      <span className="text-base font-medium">{step.name}</span>
                      <span className="text-sm font-medium text-gray-500">{step.description}</span>
                    </span>
                  </span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}