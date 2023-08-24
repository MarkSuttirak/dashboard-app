import { useState } from 'react'
import { Switch } from '@headlessui/react'

const SwitchWithDesc = ({title, desc}) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        <Switch.Label as="h2" className="subheading" passive>
          {title}
        </Switch.Label>
        <Switch.Description as="p" className="tab-desc">
          {desc}
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`switch-toggle${enabled ? ' active' : ''}`}
      >
        <span
          aria-hidden="true"
          className={`switch-toggle-inner ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </Switch>
    </Switch.Group>
  )
}

export default SwitchWithDesc;