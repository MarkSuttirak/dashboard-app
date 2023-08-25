import HeaderSettings from "../components/headerSettings"
import Input from "../components/input"
import InputWithPrefix from "../components/inputWithPrefix"
import Select from "../components/select"
import Textarea from "../components/textarea"

export default function Profile() {
    return (
      <div className="page-section">
        <div className="dashboard-settings">
        <HeaderSettings />

          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="subheading">Profile</h3>
                <p className="tab-desc">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                  <div className="space-y-6 tab-settings">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <InputWithPrefix prefix='http://' label='Website' placeholder='www.example.com' id='company-website' name='company-website'/>
                      </div>
                    </div>
  
                    <div>
                      {/* <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        About
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="form-input"
                          placeholder="you@example.com"
                          defaultValue={''}
                        />
                      </div> */}
                      <Textarea id='about' label='About'/>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div>
  
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Photo</label>
                      <div className="mt-1 flex items-center">
                        <span className="avatar avatar-lg bg-gray-100 mr-5">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button
                          type="button"
                          className="white-outline-btn"
                        >
                          Change
                        </button>
                      </div>
                    </div>
  
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                    <button
                      type="submit"
                      className="primary-btn"
                    >
                      Save
                    </button>
                  </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block dashboard-settings" aria-hidden="true">
          <div className="py-10">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0 dashboard-settings">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="subheading">Personal Information</h3>
                <p className="tab-desc">Use a permanent address where you can receive mail.</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                  <div className="tab-settings">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <Input label="First name" name="first-name" id="first-name" />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <Input label="Last name" name="last-name" id="last-name" />
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <Input type="email" label="Email address" name="email" id="email" />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="subheading">
                          Country
                        </label>
                        <Select values={[
                          {
                            id: 'usa',
                            name: 'United States'
                          },
                          {
                            id: 'deu',
                            name: 'Germany'
                          },
                          {
                            id: 'uk',
                            name: 'United Kingdom'
                          },
                          {
                            id: 'tha',
                            name: 'Thailand'
                          },
                          {
                            id: 'jpn',
                            name: 'Japan'
                          },
                          {
                            id: 'chn',
                            name: 'China'
                          },
                          {
                            id: 'bra',
                            name: 'Brazil'
                          },
                          {
                            id: 'aus',
                            name: 'Australia'
                          },
                          {
                            id: 'ind',
                            name: 'India'
                          },
                          {
                            id: 'aut',
                            name: 'Austria'
                          },
                          {
                            id: 'can',
                            name: 'Canada'
                          },
                          {
                            id: 'fra',
                            name: 'France'
                          }
                        ]}/>
                      </div>
  
                      <div className="col-span-6">
                        <Input label="Street address" name="street-address" id="street-address" />
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <Input label="City" name="city" id="city" />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Input label="State / Province" name="region" id="region" />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Input label="ZIP / Postal code" name="postal-code" id="postal-code" />
                      </div>
                    </div>
                    <div className="text-right mt-6">
                    <button
                      type="submit"
                      className="primary-btn"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block dashboard-settings" aria-hidden="true">
          <div className="py-10">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </div>
    )
  }
  