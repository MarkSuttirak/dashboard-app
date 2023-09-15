import React, { Fragment, useContext, useState } from 'react'
import StepMaintainer from '../../components/StepMaintainer'
import { useFormik } from 'formik'
import { RadioGroup, Dialog, Transition } from '@headlessui/react';
import { businessInfoSchema, teamInfoSchema, userInfoSchema } from './validations/otherInfoSchema'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from 'react-oauth2-code-pkce'
import { partial } from '../../client/api'
import { useMutation } from 'react-query'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { classNames, setToken } from '../../utils/helper'
import RegisterStep from '../../components/registerStep'
import { Steps } from '../register'
import Spacer from '../../components/spacer'
import Select from '../../components/select'

const OtherInfo = () => {
    const { key } = useParams()
    const navigate = useNavigate()
    const [otherInfo, _] = useState({
        key
    })

    const setOtherInfo = (data) => _({
        ...otherInfo,
        ...data
    })

    const { mutate, isLoading } = useMutation((data) => partial.setupOauthAccount(data), {
        onSuccess: (res) => {
            setToken(res.token)
            navigate('/dashboard/instance-configuration')
        }
    })

    return (
        <>
            <div className="flex relative min-h-screen z-[999] bg-white">
                <div className="flex-1 flex-col hidden md:flex justify-center bg-[#F2F2F2]">
                    <RegisterStep active={1} />
                </div>
                <div className="flex flex-1 m-[30px] md:m-2 z-[999] basis-[20%] bg-white absolute md:relative register-screen">
                    <StepMaintainer state={{
                        otherInfo,
                        setOtherInfo
                    }}>
                        <UserInfoForm />
                        <BusinessInfoForm />
                        <TeamInfoForm onSubmit={mutate} />
                    </StepMaintainer>
                </div>
            </div>
            <Transition.Root show={isLoading} as={Fragment}>
                <Dialog as="div" className="relative z-[999]" onClose={() => { }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all w-full max-w-[400px] flex flex-col gap-y-4">
                                    <div class="moving-line" />
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="loading-icon">
                                                <div className="inner-icon"></div>
                                            </div>
                                            <div className="text-left">
                                                <Dialog.Title as="h3" className="subheading small">
                                                    Building your workspace
                                                </Dialog.Title>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='tab-desc'>
                                                In progress
                                            </p>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default OtherInfo


export const UserInfoForm = ({
    next,
    current,
    initialValues = {
        first_name: '',
        last_name: '',
        birth_date: '',
        email: '',
    },
    validationSchema,
    state
}) => {
    const mailingLists = [
        { id: 1, title: 'I am a solo entrepreneur', description: 'Last message sent an hour ago' },
        { id: 2, title: 'I am a business team member', description: 'Last message sent 2 weeks ago' },
    ]
    const { key } = useParams();
    const { idTokenData } = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            ...initialValues,
            key,
            email: idTokenData?.email,
        },
        validateOnChange: false,
        validationSchema: validationSchema ?? userInfoSchema,
        onSubmit: (data) => {
            state.setOtherInfo(data)
            next();
        }
    })

    return (
        <form
            className="m-auto w-full max-w-sm w-96 h-[600px]"
            onSubmit={formik.handleSubmit}
        >
            <Steps total={5} step={current} />
            <div className="anim-up">
                <h2 className="main-title mt-10">Fill in your information</h2>
                <p className="tab-desc">It was popularised in the 1960s with the release of Letraset.</p>
            </div>
            <div className={`space-y-4 mt-6 anim-up`}>
                <div className="flex gap-x-3">
                    <div>
                        <input
                            className="form-input"
                            placeholder="Name"
                            name="first_name"
                            onChange={formik.handleChange}
                            value={formik.values.first_name}
                        />
                        {
                            formik.errors.first_name && (
                                <p className="error">{formik.errors.first_name}</p>
                            )
                        }
                    </div>
                    <div>
                        <input
                            className="form-input"
                            placeholder="Surname"
                            name="last_name"
                            onChange={formik.handleChange}
                            value={formik.values.last_name}
                        />
                        {
                            formik.errors.last_name && (
                                <p className="error">{formik.errors.last_name}</p>
                            )
                        }
                    </div>
                </div>

                <div>
                    <input
                        type="date"
                        name="birth_date"
                        onChange={formik.handleChange}
                        value={formik.values.birth_date}
                        className="form-input"
                        placeholder="Birthdate"
                    />
                    {formik.errors.birth_date && (<p className="error">{formik.errors.birth_date}</p>)}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={`form-input ${formik.errors.email ? 'error' : ''}`}
                        placeholder="Email"
                    />
                    {formik.errors.email && (<p className="error">{formik.errors.email}</p>)}
                </div>

                <div>
                    <h2 className="subheading">Tell us more about you</h2>
                    <RadioGroup value={null} onChange={null}>
                        <div className="mt-4 grid grid-cols-1 gap-y-3">
                            {mailingLists.map((mailingList) => (
                                <RadioGroup.Option
                                    key={mailingList.id}
                                    value={mailingList}
                                    className={({ checked, active }) =>
                                        classNames(
                                            checked ? 'border-transparent' : 'border-gray-300',
                                            active ? 'border-[#0788F5] ring-2 ring-[#0788F5]' : '',
                                            'relative flex cursor-pointer rounded-lg border bg-white p-4 outline-none'
                                        )
                                    }
                                >
                                    {({ checked, active }) => (
                                        <>
                                            <span className="flex flex-1">
                                                <span className="flex flex-col">
                                                    <RadioGroup.Label as="span" className="subheading">
                                                        {mailingList.title}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description as="span" className="tab-desc">
                                                        {mailingList.description}
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

                    <div className={`anim-up-delay translate-y-[20px] opacity-0 mt-4`}>
                        <button
                            type='submit'
                            className={`primary-btn w-full justify-center ${!formik.isValid ? 'disabled' : ''}`}
                            disabled={!formik.isValid}
                        >Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export const BusinessInfoForm = ({
    current,
    prev,
    next,
    initialValues = {
        company: `Zaviago ${Math.floor(Math.random() * 1000)}`,
        industry: 'private',
        goal: [],
        country: 'Thailand',
    },
    validationSchema,
    state
}) => {
    const checkboxLists = [
        {
            title: 'Comments',
            key: 'comments',
        },
        {
            title: 'Candidates',
            key: 'candidates'
        },
        {
            title: 'Offers',
            key: 'offers'
        },
        {
            title: 'Games',
            key: 'games'
        },
        {
            title: 'Education',
            key: 'education'
        },
        {
            title: 'Drink Coffee',
            key: 'drink'
        }
    ]
    const industryOptions = [
        {
            value: 'private',
            label: 'Private',
        },
        {
            value: 'organisation',
            label: 'Organisation',
        },
        {
            value: 'playgame',
            label: 'To play a game',
        },
        {
            value: 'learn',
            label: 'To learn how to code',
        },
        {
            value: 'drink',
            label: 'To drink coffee',
        }
    ];

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: validationSchema ?? businessInfoSchema,
        onSubmit: (data) => {
            state.setOtherInfo(data)
            next();
        }
    })

    return (
        <form className="m-auto w-full max-w-sm w-96 h-[600px]" onSubmit={formik.handleSubmit}>
            <Steps total={5} step={current} />
            <div className="anim-up">
                <h2 className="main-title mt-8">What is your business about?</h2>
            </div>
            <div className={`space-y-4 mt-6 anim-up`}>
                <Select options={industryOptions}
                    value={industryOptions.find((option) => option.value === formik.values.industry)}
                    onChange={({ value }) => formik.setFieldValue('industry', value)}
                />

                <h2 className="subheading">What are your goals for this business?</h2>

                <div className="grid grid-cols-2 gap-4">
                    {checkboxLists.map((checkboxList) => (
                        <label htmlFor={checkboxList.key} onClick={(e) => {
                            if (!formik.values.goal.includes(checkboxList.key)) {
                                formik.setFieldValue('goal', [...formik.values.goal, checkboxList.key])
                            } else {
                                formik.setFieldValue('goal', formik.values.goal.filter((item) => item !== checkboxList.key))
                            }
                        }}>
                            <input
                                type="checkbox"
                                className={`checkbox-card-input ${formik.values.goal.includes(checkboxList.key) ? 'active' : ''}`}
                                name={checkboxList.key}
                                value={checkboxList.key}
                                checked={formik.values.goal.includes(checkboxList.key)}
                            />
                            <span className="tab-desc border checkbox-card">
                                {checkboxList.title}
                            </span>
                        </label>
                    ))}
                    {formik.errors.goal && (<p className="error">{formik.errors.goal}</p>)}
                </div>
            </div>

            <Spacer size={30} />
            <div className={`anim-up-delay translate-y-[20px] opacity-0 mt-4`}>
                <button className={`no-bg-btn w-1/4 justify-center`} onClick={prev}>Back</button>
                <button
                    className={`primary-btn w-1/4 justify-center ${!formik.isValid ? 'disabled' : ''}`}
                    disabled={!formik.isValid}
                >Next</button>
            </div>
        </form>
    )
}

export const TeamInfoForm = ({
    current,
    initialValues = {
        no_of_employees: 'Only me',
        accepted_user_terms: true,
    },
    validationSchema,
    onSubmit,
    state,
}) => {
    const memberOptions = ['Only me', '2-4 people', '5-10 people', 'More than 10 people'];
    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: validationSchema ?? teamInfoSchema,
        onSubmit: (data) => {
            return onSubmit({
                ...state.otherInfo,
                ...data
            })
        },
    })

    return (
        <form
            className="m-auto w-full max-w-sm w-96 h-[600px]"
            onSubmit={formik.handleSubmit}
        >
            <Steps total={5} step={current} />
            <div className="anim-up">
                <h2 className="main-title mt-8">How many people are there in your team?</h2>
            </div>
            <div className={`space-y-4 mt-6 anim-up`}>
                <RadioGroup className="mt-2" name='no_of_employees' value={formik.values.no_of_employees} onChange={(value) => formik.setFieldValue('no_of_employees', value)}>
                    <RadioGroup.Label className="sr-only"> How many people are there in your team? </RadioGroup.Label>
                    <div className="grid grid-cols-1 gap-3">
                        {memberOptions.map((option) => (
                            <RadioGroup.Option
                                key={option}
                                value={option}
                                className={({ active, checked }) =>
                                    classNames(
                                        active ? 'ring-2 ring-offset-2 ring-[#0788F5]' : '',
                                        checked
                                            ? 'bg-[#0788F5] border-transparent text-white'
                                            : 'bg-white border-gray-200 text-gray-900',
                                        'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium cursor-pointer'
                                    )
                                }
                            >
                                <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
                <button
                    className={`primary-btn w-1/4 justify-center ${!formik.isValid ? 'disabled' : ''}`}
                    disabled={!formik.isValid}
                >Next</button>
            </div>
        </form>
    )
}