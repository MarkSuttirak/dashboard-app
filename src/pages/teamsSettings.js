import HeaderSettings from "../components/headerSettings";
import { useLayoutEffect, useRef, useState } from 'react'
import { Download04 } from "@untitled-ui/icons-react/build/cjs";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Spacer from "../components/spacer";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Admin',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const TeamsSettings = () => {
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedInfo, setSelectedInfo] = useState([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedInfo.length > 0 && selectedInfo.length < people.length
    setChecked(selectedInfo.length === people.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedInfo])

  function toggleAll() {
    setSelectedInfo(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <div className="page-section">
      <div className="dashboard-settings">
        <HeaderSettings />

        <div>
        <div className="text-left">
          <h2 className="main-heading">Add team members</h2>
          <p className="tab-desc">You haven’t added any team members to your project yet.</p>
        </div>
        <form className="mt-6 sm:flex sm:items-center" action="#">
          <label htmlFor="emails" className="sr-only">
            Email addresses
          </label>
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <input
              type="text"
              name="emails"
              id="emails"
              className="form-input"
              placeholder="Enter an email"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Can edit</option>
                <option>Can view</option>
              </select>
            </div>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <button
              type="submit"
              className="primary-btn"
            >
              Send invite
            </button>
          </div>
        </form>
      </div>

      <Spacer size={40}/>
        <div className="pb-5 flex items-center justify-between">
          <h3 className="main-heading">Members</h3>
          <button
            type="button"
            className="primary-btn"
          >
            Add Member
          </button>
        </div>

        <div className="flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="table-overview">
                {selectedInfo.length > 0 && (
                  <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                    <button
                      type="button"
                      className="white-outline-btn"
                    >
                      Bulk edit
                    </button>
                    <button
                      type="button"
                      className="white-outline-btn"
                    >
                      Delete all
                    </button>
                  </div>
                )}
                <table className="table-info">
                  <thead className="table-head">
                    <tr>
                      <th scope="col" className="relative w-12">
                        <input
                          type="checkbox"
                          className="table-checkbox"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th scope="col" className="table-head-text first-col">
                        Name
                      </th>
                      <th scope="col" className="table-head-text">
                        Role
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          <input
                            type="checkbox"
                            className="table-checkbox"
                            value={person.name}
                            checked={selectedInfo.includes(person)}
                            onChange={(e) =>
                              setSelectedInfo(
                                e.target.checked
                                  ? [...selectedInfo, person]
                                  : selectedInfo.filter((p) => p !== person)
                              )
                            }
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="avatar avatar-md" src={person.image} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{person.name}</div>
                              <div className="text-gray-500">{person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="table-desc">{person.role}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {person.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <nav
                className="flex items-center justify-between py-4"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">{people.length}</span> of <span className="font-medium">{people.length}</span> results
                  </p>
                </div>
                <div className="flex flex-1 justify-end gap-x-3">
                  <a
                    href="#"
                    className="white-outline-btn"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="white-outline-btn"
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamsSettings;