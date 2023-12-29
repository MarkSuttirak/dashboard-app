import React, { Fragment, useState } from 'react'
import StepMaintainer from '../../components/StepMaintainer';
import { RadioGroup, Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ArrowDownOnSquareStackIcon } from '@heroicons/react/24/solid';
import LoadingCheck from "../../components/loadingcheck";
import { useFormik } from 'formik';
import { useUser } from '../../hooks/useUser';
import { Navigate, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { site } from '../../client/api';
import { siteDomainSchema } from './validations/instanceConfigSchema';
import RegisterStep from '../../components/registerStep';
import { Steps } from '../register';
import Spacer from '../../components/spacer';
import { classNames } from '../../utils/helper';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import LineIcon from 'src/components/icon-menus/Line';
import { AppWindow, Coins, Store, UserSquare } from 'lucide-react';
import { LinkNone2Icon } from '@radix-ui/react-icons';
import lineOACRM from 'src/img/lineOACRM-selectapp.svg'
import rewardful from 'src/img/rewardful-selectapp.svg'
import crm from 'src/img/crm-selectapp.svg'
import onlineStore from 'src/img/onlinestore-selectapp.svg'
import untitled from 'src/img/untitled-selectapp.svg'
import marketConnect from 'src/img/marketconnect-selectapp.svg'
import { useTranslation } from 'react-i18next';

const InstanceConfig = () => {
    const { t } = useTranslation()
    const { auth } = useUser();
    const [status, setStatus] = useState(null)
    const [lsite, _] = useState({})
    const [waitingFor, setWaitingFor] = useState(null)

    const setSite = (data) => _({
        site: {
            ...lsite?.site,
            ...data
        }
    })

    const siteStates = {
        "Pending": () => { if (status !== 1) setStatus(1) },
        "Installing": () => { if (status !== 2) setStatus(2) },
        "Active": () => {
            if (status !== 3 && status !== "Active") {
                setStatus(3)
                setTimeout(() => setStatus("Active"), 2000)
            }
        },
        "Broken": () => setWaitingFor(false),
        // "Active": () => getUser().then(() => navigate('/dashboard/app')),
    }

    useQuery(`site-${waitingFor}`, () => site.get(waitingFor), {
        enabled: !!waitingFor,
        refetchInterval: 2500,
        onSuccess: (res) => siteStates[res.status](),
    })

    const { mutate, isLoading, isError } = useMutation(data => site.new({
        site: {
            ...lsite?.site,
            ...data
        }
    }),
        {
            onSuccess: (res) => {
                if (res.site) {
                    setWaitingFor(res.site)
                }
            }

        })

    if (waitingFor === false || isError) {
        <div role="status" className='flex items-center justify-center w-full h-screen'>
            <h3>Something went wrong, please contact support</h3>
        </div>
    }

    // if (auth?.onboarding.site_created) {
    //     return <Navigate replace to='/dashboard/app' />
    // }

    return (
        <>
            <div className="flex relative min-h-screen z-[999] bg-white">
                <div className="flex-1 flex-col hidden md:flex justify-center bg-[#F2F2F2]">
                    <RegisterStep active={1} />
                </div>
                <div className="flex flex-1 m-[30px] md:m-2 z-[999] basis-[20%] bg-white absolute md:relative register-screen">
                    <StepMaintainer state={{ site: lsite, setSite }}>
                        <SiteDomainForm onSubmit={mutate}/>
                    </StepMaintainer>
                </div>
            </div>
            <Transition.Root show={status === "Active"} as={Fragment}>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="main-heading">
                                            {t('creating_status.registered_successfully')}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="subheading">
                                                {t('creating_status.registered_text')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <Button
                                            type="button"
                                            className="w-full justify-center"
                                            onClick={() => window.location.href = "/dashboard/app"}
                                        >
                                            {t('creating_status.go_to_dashboard')}
                                        </Button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={(!!waitingFor || isLoading) && status !== "Active"} as={Fragment}>
                <Dialog as="div" className="relative z-[1001]" onClose={() => { }}>
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
                                    <p className="main-desc text-left font-bold mb-3 flex gap-x-2">
                                        <ArrowDownOnSquareStackIcon width='24' />
                                        {t('creating_status.creating_site')}
                                    </p>
                                    {status === 1 && (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <div className="loading-icon">
                                                    <div className="inner-icon"></div>
                                                </div>
                                                <div className="text-left">
                                                    <Dialog.Title as="h3" className="subheading small">
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
                                    )
                                    }
                                    {status > 1 && (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <LoadingCheck type='primary' height='20px' />
                                                <div className="text-left">
                                                    <Dialog.Title as="h3" className="subheading small">
                                                    {t('creating_status.built_workspace')}
                                                    </Dialog.Title>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-link'>{t('done')}</p>
                                            </div>
                                        </div>
                                    )}

                                    {status === 2 && (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <div className="loading-icon">
                                                    <div className="inner-icon"></div>
                                                </div>
                                                <Dialog.Title as="h3" className="subheading small">
                                                {t('creating_status.changing_site_name')}
                                                </Dialog.Title>
                                            </div>
                                            <div>
                                                <p className='main-desc'>{t('in_progress')}</p>
                                            </div>
                                        </div>
                                    )}
                                    {status > 2 && (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <LoadingCheck type='primary' height='20px' />
                                                <Dialog.Title as="h3" className="subheading small">
                                                {t('creating_status.changed_site_name')}
                                                </Dialog.Title>
                                            </div>
                                            <div>
                                                <p className='text-link'>{t('done')}</p>
                                            </div>
                                        </div>
                                    )}

                                    {status === 3 && (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <div className="loading-icon">
                                                    <div className="inner-icon"></div>
                                                </div>
                                                <Dialog.Title as="h3" className="subheading small">
                                                {t('creating_status.preparing_dashboard')}
                                                </Dialog.Title>
                                            </div>
                                            <div>
                                                <p className='main-desc'>{t('in_progress')}</p>
                                            </div>
                                        </div>
                                    )}
                                    {status === "Active" && (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <LoadingCheck type='primary' height='20px' />
                                                <Dialog.Title as="h3" className="subheading small">
                                                {t('creating_status.prepared_dashboard')}
                                                </Dialog.Title>
                                            </div>
                                            <div>
                                                <p className='text-link'>{t('done')}</p>
                                            </div>
                                        </div>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default InstanceConfig


export const SiteDomainForm = ({
    next,
    initialValues = {
        subdomain: '',
        domain: 'aca.fc.zaviago.com',
        apps: ["frappe", "erpnext"],
        group: '',
        plan: null,
        cluster: '',
        selected_app_plans: {},
        share_details_consent: false,
        skip_failing_patches: false,
        files: {
            database: null,
            public: null,
            private: null,
        }
    },
    validationSchema,
    state: { setSite },
    onSubmit,
}) => {
    const { t } = useTranslation()
    const [exists, setExists] = useState(false)
    const navigate = useNavigate()

    const { mutate } = useMutation(site.exists, {
        onSuccess: (doesExists, { subdomain }) => {
            setExists(doesExists);
            if (!doesExists) {
                setSite(formik.values)
                next();
            }
        },
    })

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: validationSchema ?? siteDomainSchema,
        onSubmit: onSubmit ?? mutate
    })

    return (
        <form className="register-formbox" onSubmit={formik.handleSubmit}>
            <Steps total={5} step={3} />
            <div className={`anim-up`}>
                <h2 className="main-heading mt-8">{t('setup_site.call_your_site')}</h2>
                <p className="subheading mt-2">{t('setup_site.call_your_site_desc')}</p>
            </div>
            <div className={`space-y-4 mt-10 anim-up`}>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 subheading">
                        https://
                    </div>
                    <Input
                        style={{ paddingRight: "140px", paddingLeft: "60px" }}
                        className={`form-input`}
                        placeholder="example"
                        name="subdomain"
                        onChange={formik.handleChange}
                        value={formik.values.subdomain}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 subheading">
                        .{formik.values.domain}
                    </div>
                </div>
                <p className='text-desc'>{t('setup_site.call_your_site_warning')}</p>
                <p className='error'>{exists ? t('setup_site.already_taken') : formik.errors.subdomain}</p>
            </div>

            <div className={`flex gap-x-2 anim-up-delay translate-y-[20px] justify-between`}>
                <Button variant='secondary' className='w-1/4 justify-center' onClick={() => navigate(-1)}>{t('business_type.back')}</Button>
                <Button
                    type='submit'
                    className='justify-center'
                    // disabled={!formik.isValid}
                >{t('business_type.continue')}</Button>
            </div>
        </form>
    )
}

export const AppsSelectionForm = ({
    prev,
    next,
    initialValues = {
        apps: ["frappe", "erpnext"],
        group: '',
        plan: null,
        cluster: '',
        selected_app_plans: {},
        share_details_consent: false,
        skip_failing_patches: false,
        files: {
            database: null,
            public: null,
            private: null,
        }
    },
    onSubmit,
    validationSchema,
    state: { site: siteData, setSite },
}) => {
    const [availableApps, setAvailableApps] = useState([])
    const otherApps = [
        {
            image:lineOACRM,
            title:'LineOA CRM',
            desc:'Collect customer information from LINE Membership'
        },
        {
            image:rewardful,
            title:'Rewardful',
            desc:'Point & Reward'
        },
        {
            image:onlineStore,
            title:'OnlineStore',
            desc:'Manage your online store'
        },
        {
            image:crm,
            title:'CRM',
            desc:'Gather information about customers'
        },
        {
            image:untitled,
            title:'Untitled',
            desc:'Website builder and design'
        },
        {
            image:marketConnect,
            title:'MarketConnect',
            desc:'OMS includes orders, check stock, sales'
        }
    ]

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setSite({
                ...siteData,
                ...values
            })
            next();
        }
    })

    useQuery('siteOptions', site.optionsForNew, {
        onSuccess: (res) => {
            res.versions.forEach((version) => {
                if (version.default) {
                    version.groups.forEach((group) => {
                        if (group.default) {
                            formik.setFieldValue('group', group.name);
                            formik.setFieldValue('cluster', group.clusters[0].name);
                            setAvailableApps(group.apps.filter(({ app }) => app !== "press" && app !== "erpnext" && app !== "frappe"));
                        }
                    })
                }
            })
        },
    })

    return (
        <form className="register-formbox" onSubmit={formik.handleSubmit}>
            <Steps total={5} step={4} />
            <div className="anim-up">
                <h2 className="main-heading mt-8">What would you like to add on your site?</h2>
                <p className="subheading mt-2">Select the apps you want to install on your site.</p>
            </div>
            <div className={`space-y-4 mt-10 anim-up`}>
                <div className="grid grid-cols-2 gap-4">

                    {/* {availableApps.map(({ app, app_title }) => (
                        <label htmlFor={app} onClick={() => {
                            if (formik.values.apps.includes(app)) {
                                formik.setFieldValue('apps', formik.values.apps.filter((selectedApp) => selectedApp !== app));
                            }
                            else {
                                formik.setFieldValue('apps', [...formik.values.apps, app]);
                            }
                        }}>
                            <input
                                type="checkbox"
                                className="checkbox-card-input"
                                name={app}
                                checked={formik.values.apps.includes(app)}
                            />
                            <span className="subheading border checkbox-card">
                                <BuildingStorefrontIcon />
                                {app_title}
                            </span>
                        </label>
                    ))} */}

                    {otherApps.map((app) => (
                        <label htmlFor={app.title} onClick={() => {
                            if (formik.values.apps.includes(app)) {
                                formik.setFieldValue('apps', formik.values.apps.filter((selectedApp) => selectedApp !== app));
                            }
                            else {
                                formik.setFieldValue('apps', [...formik.values.apps, app]);
                            }
                        }}>
                            <input
                                type="checkbox"
                                className="checkbox-card-input"
                                name={app.title}
                                id={app.title}
                                // checked={formik.values.apps.includes(app)}
                            />
                            <span className="subheading border checkbox-card">
                              <img src={app.image} />
                              <div className='px-[6px] pt-3 pb-2 text-center'>
                                <h2 className='subheading font-bold'>{app.title}</h2>
                                <p className='text-xs text-[#71717A] tracking-[0.12px] mt-1'>{app.desc}</p>
                              </div>
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <Spacer size={30} />
            <div className={`flex gap-x-2 anim-up-delay translate-y-[20px] flex gap-x-2 justify-between`}>
                <Button variant='secondary' className='w-1/4 justify-center' onClick={prev}>Back</Button>
                <Button
                    type='submit'
                    className='w-1/4 justify-center'
                    disabled={!formik.isValid}
                >Submit</Button>
            </div>
        </form>
    )
}

export const ThemeSelectionForm = ({
    prev,
    initialValues = {
        apps: ["frappe", "erpnext"],
        group: '',
        plan: null,
        cluster: '',
        selected_app_plans: {},
        share_details_consent: false,
        skip_failing_patches: false,
        files: {
            database: null,
            public: null,
            private: null,
        }
    },
    validationSchema,
    onSubmit,
    state: { site: siteData },
}) => {
    console.log("ThemeSelectionForm -> ");
    const themeOptions = [
        {
            id: 'theme1',
            name: 'Theme 1',
            bgColour: 'blueviolet',
            colour: 'white'
        },
        {
            id: 'theme2',
            name: 'Theme 2',
            bgColour: '#1BB040',
            colour: 'white'
        },
        {
            id: 'theme3',
            name: 'Theme 3',
            bgColour: 'red',
            colour: 'white'
        },
        {
            id: 'theme4',
            name: 'Theme 4',
            bgColour: 'black',
            colour: 'white'
        }
    ]
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (data) => {
            onSubmit({
                ...siteData,
                ...data
            })
        }
    })

    return (
        <form className="register-formbox" onSubmit={formik.handleSubmit}>
            <Steps total={6} step={5} />
            <div className="anim-up">
                <h2 className="main-title mt-8">Select a designed theme</h2>
                <p className="main-desc mt-2">Choose from plenty of designs for your site</p>
            </div>
            <div className={`space-y-4 mt-10 anim-up`}>
                <RadioGroup
                    className="mt-2"
                    name='theme'
                    value={formik.values.theme}
                    onChange={formik.handleChange}
                >
                    <RadioGroup.Label className="sr-only">Select a designed theme</RadioGroup.Label>
                    <div className="grid grid-cols-2 gap-3">
                        {themeOptions.map((option) => (
                            <RadioGroup.Option
                                key={option.id}
                                value={option.name}
                                className={({ active, checked }) =>
                                    classNames(
                                        active ? 'ring-2 ring-offset-2 ring-[#0788F5]' : '',
                                        checked
                                            ? 'ring-2 ring-offset-2 ring-[#0788F5]'
                                            : '',
                                        `rounded-md py-3 px-3 h-[100px] flex items-center justify-center text-sm font-medium cursor-pointer`
                                    )
                                }
                                style={{ backgroundColor: option.bgColour, color: option.colour }}
                            >
                                <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>

            <Spacer size={30} />
            <div className={`flex gap-x-2 anim-up-delay translate-y-[20px] flex gap-x-2 justify-between`}>
                <Button variant='secondary' className='w-1/4 justify-center' onClick={prev}>Back</Button>
                <Button
                    type='submit'
                    className='w-1/4 justify-center'
                    disabled={!formik.isValid}
                >Create site</Button>
            </div>
        </form>
    )
}
