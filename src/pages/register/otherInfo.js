import React, { Fragment, useContext, useState, useEffect } from 'react'
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
import { Button } from '../../components/ui/button';
import { Checkbox } from "../../components/ui/checkbox"
import { Link } from 'react-router-dom';
import dataEng from 'src/locales/en/translation.json'
import dataThai from 'src/locales/th/translation.json'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
import { Input } from '../../components/ui/input';
import { DatePicker } from 'src/components/ui/datepicker';
import { useTranslation } from "react-i18next";

const OtherInfo = () => {
    const { t } = useTranslation()
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
                                    <div className="moving-line" />
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-x-2 items-center">
                                            <div className="loading-icon">
                                                <div className="inner-icon"></div>
                                            </div>
                                            <div className="text-left">
                                                <Dialog.Title as="h3" className="subheading">
                                                    {t('creating_status.building_workspace')}
                                                </Dialog.Title>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='main-desc'>
                                                {t('in_progress')}
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
    const {t,i18n} = useTranslation();
    const mailingLists = [
        { id: 1, title: t('entrepreneur_title'), description: t('entrepreneur_desc') },
        { id: 2, title: t('business_team_title'), description: t('business_team_desc') },
    ]
    const { key } = useParams();
    const { idTokenData } = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            ...initialValues,
            key
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
            className="register-formbox"
            onSubmit={formik.handleSubmit}
        >
            <Steps total={5} step={current} />
            <div className="anim-up">
                <h2 className="main-heading mt-10">{t('fill_info_title')}</h2>
                <p className="subheading">{t('fill_info_desc')}</p>
            </div>
            <div className={`space-y-4 mt-6 anim-up`}>
                <div className="flex gap-x-3">
                    <div>
                        <label htmlFor='first_name' className="subheading mb-2 font-medium">{t('first_name')}</label>
                        <Input
                            className="form-input"
                            placeholder={t('first_name')}
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
                        <label htmlFor='last_name' className="subheading mb-2 font-medium">{t('last_name')}</label>
                        <Input
                            className="form-input"
                            placeholder={t('last_name')}
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
                    <label htmlFor='birth_date' className="subheading mb-2 font-medium">{t('date_of_birth')}</label>
                    <Input
                        type="date"
                        name="birth_date"
                        onChange={formik.handleChange}
                        value={formik.values.birth_date}
                        className="form-input"
                        placeholder="25/12/1999"
                    />
                    {formik.errors.birth_date && (<p className="error">{formik.errors.birth_date}</p>)}
                </div>

                <div>
                    <label htmlFor='email' className="subheading mb-2 font-medium">{t('email')}</label>
                    <Input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className='form-input'
                        placeholder="mail@example.com"
                    />
                    {formik.errors.email && (<p className="error">{formik.errors.email}</p>)}
                </div>

                <div>
                    <h2 className="subheading">{t('additional_detail')}</h2>
                    <RadioGroup value={null} onChange={null}>
                        <div className="mt-4 grid grid-cols-1 gap-y-3">
                            {mailingLists.map((mailingList) => (
                                <RadioGroup.Option
                                    key={mailingList.id}
                                    value={mailingList}
                                    className={({ checked, active }) =>
                                        classNames(
                                            checked ? 'border-[#0788F5]' : 'border-gray-300',
                                            active ? 'border-[#0788F5] ring-2 ring-[#0788F5]' : '',
                                            'relative flex cursor-pointer rounded-lg border bg-white p-4 outline-none'
                                        )
                                    }
                                >
                                    {({ checked, active }) => (
                                        <>
                                            <span className="flex flex-1">
                                                <span className="flex flex-col">
                                                    <RadioGroup.Label as="span" className="subheading font-medium">
                                                        {mailingList.title}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description as="span" className="main-desc">
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

                    <div className='flex gap-x-2 text-sm mt-6'>
                      <Checkbox id='agree' className='mt-1'/>
                      <label htmlFor='agree'>{t('sign_up_agreement_one')} <Link>{t('terms_of_use')}</Link> {t('sign_up_agreement_two')} <Link>{t('privacy_policy')}</Link></label>
                    </div>

                    <div className={`anim-up-delay translate-y-[20px] mt-4`}>
                        <Button
                            type='submit'
                            className='justify-center w-full'
                            // disabled={!formik.isValid}
                        >{t('continue')}</Button>
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
        industry: 'retail',
        goal: [],
        country: 'Thailand',
    },
    validationSchema,
    state
}) => {
    const { t } = useTranslation()
    const checkboxLists = localStorage.lang === 'th' ? dataThai.business_type.potential_goals.options : dataEng.business_type.potential_goals.options
    const industryOptions = localStorage.lang === 'th' ? dataThai.business_type.your_business.options : dataEng.business_type.your_business.options

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
        <form className="register-formbox" onSubmit={formik.handleSubmit}>
            <Steps total={5} step={current} />
            <div className="anim-up">
                <h2 className="main-heading mt-8">{t('business_type.title')}</h2>
            </div>
            <div className={`space-y-6 mt-6 anim-up`}>
                {/* <Select options={industryOptions}
                    value={industryOptions.find((option) => option.value === formik.values.industry)}
                    onChange={({ value }) => formik.setFieldValue('industry', value)}
                /> */}
                <div>
                  <label htmlFor='your_business' className="subheading mb-2 font-medium">{t('business_type.your_business.label')}</label>
                  <Select onValueChange={value => {formik.setFieldValue('industry', value)}}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={industryOptions[0].label} defaultValue={industryOptions[0].label} />
                    </SelectTrigger>
                    <SelectContent className='z-[999]'>
                      {industryOptions.map(option => (
                        <SelectItem value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                    {formik.values.industry === 'other' ? (
                    <Input placeholder={t('business_type.your_business.other_businesses')} className='mt-2'/>
                    ) : null}
                </div>

                <div>
                    <h2 className="secondary-heading">{t('business_type.potential_goals.title')}</h2>
                    <p className='main-desc mt-2'>{t('business_type.potential_goals.desc')}</p>

                    <div className="grid gap-3 mt-4">
                        {/* {checkboxLists.map((checkboxList) => (
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
                                <span className="main-desc border checkbox-card">
                                    {checkboxList.title}
                                </span>
                            </label>
                        ))} */}
                        {checkboxLists.map(checkboxList => (
                            <div className='flex items-center gap-x-2'>
                            <Checkbox id={checkboxList.key} checked={formik.values.goal.includes(checkboxList.key)} value={checkboxList.key} name={checkboxList.key} onCheckedChange={(e) => {
                                if (!formik.values.goal.includes(checkboxList.key)) {
                                    formik.setFieldValue('goal', [...formik.values.goal, checkboxList.key])
                                } else {
                                    formik.setFieldValue('goal', formik.values.goal.filter((item) => item !== checkboxList.key))
                                }
                            }}/>
                            <label htmlFor={checkboxList.key} className='text-sm'>{checkboxList.title}</label>
                            </div>
                        ))}
                        {formik.errors.goal && (<p className="error">{formik.errors.goal}</p>)}
                    </div>
                </div>
            </div>
            <div className={`anim-up-delay translate-y-[20px] mt-2 flex gap-x-2 justify-between`}>
                <Button variant='secondary' className={`w-1/4 justify-center`} onClick={prev}>{t('business_type.back')}</Button>
                <Button
                    className='w-1/4 justify-center'
                    // disabled={!formik.isValid}
                >{t('business_type.continue')}</Button>
            </div>
        </form>
    )
}

export const TeamInfoForm = ({
    current,
    prev,
    next,
    initialValues = {
        no_of_employees: '2-5 people',
        accepted_user_terms: true,
    },
    validationSchema,
    onSubmit,
    state,
}) => {
    const { t } = useTranslation()
    const memberOptions = localStorage.lang === "th" ? dataThai.members : dataEng.members;
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
            className="register-formbox"
            onSubmit={formik.handleSubmit}
        >
            <Steps total={5} step={current} />
            <div className="anim-up">
                <h2 className="main-heading mt-8">{t('how_many_people')}</h2>
            </div>
            <div className={`space-y-4 mt-6 anim-up`}>
                <RadioGroup className="mt-2" name='no_of_employees' value={formik.values.no_of_employees} onChange={(value) => formik.setFieldValue('no_of_employees', value)}>
                    <RadioGroup.Label className="sr-only"> {t('how_many_people')} </RadioGroup.Label>
                    <div className="grid grid-cols-1 gap-3">
                        {memberOptions.map((option) => (
                            <RadioGroup.Option
                                key={option}
                                value={option}
                                className={({ active, checked }) =>
                                    classNames(
                                        active ? 'ring-2 ring-offset-2 ring-[#0F172A]' : '',
                                        checked
                                            ? 'bg-[#0F172A] border-transparent text-white'
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
                <div className={`anim-up-delay translate-y-[20px] mt-2 flex gap-x-2 justify-between`}>
                    <Button variant='secondary' className={`w-1/4 justify-center`} onClick={prev}>{t('business_type.back')}</Button>
                    <Button
                        className='w-1/4 justify-center'
                        // disabled={!formik.isValid}
                    >{t('business_type.continue')}</Button>
                </div>
            </div>
        </form>
    )
}