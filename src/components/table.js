import { useLayoutEffect, useRef, useState } from 'react'
import { Download04 } from "@untitled-ui/icons-react/build/cjs";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Table = ({info}) => {
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedInfo, setSelectedInfo] = useState([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedInfo.length > 0 && selectedInfo.length < info.length
    setChecked(selectedInfo.length === info.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedInfo])

  function toggleAll() {
    setSelectedInfo(checked || indeterminate ? [] : info)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <div className="min-w-full p-[1px] align-middle">
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
              <th scope="col" className="table-head-text">
                Invoice
              </th>
              <th scope="col" className="table-head-text">
                Billing date
              </th>
              <th scope="col" className="table-head-text">
                Status
              </th>
              <th scope="col" className="table-head-text">
                Amount
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Download</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {info.map((i) => (
              <tr key={i.invoice} className={selectedInfo.includes(i) ? 'bg-gray-50' : undefined}>
                <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                  <input
                    type="checkbox"
                    className="table-checkbox"
                    value={i.invoice}
                    checked={selectedInfo.includes(i)}
                    onChange={(e) =>
                      setSelectedInfo(
                        e.target.checked
                          ? [...selectedInfo, i]
                          : selectedInfo.filter((p) => p !== i)
                      )
                    }
                  />
                </td>
                <td
                  className={classNames(
                    'table-title',
                    selectedInfo.includes(i) ? 'text-indigo-600' : 'text-gray-900'
                  )}
                >
                  {i.invoice}
                </td>
                <td className="table-desc">{i.billing_date}</td>
                <td className="table-desc">{i.status}</td>
                <td className="table-desc">{i.amount}</td>
                <td className="table-link pr-5 w-8">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900 flex gap-x-2 justify-end">
                    <Download04 />
                    Download<span className="sr-only">, {i.invoice}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table