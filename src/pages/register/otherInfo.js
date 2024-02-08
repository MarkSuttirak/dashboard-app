import React, { Fragment, useContext, useState, useEffect } from 'react'
import StepMaintainer from '../../components/StepMaintainer'
import { useFormik } from 'formik'
import { RadioGroup, Dialog, Transition } from '@headlessui/react';
import { businessInfoSchema, teamInfoSchema, userInfoSchema } from './validations/otherInfoSchema'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
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
import useSignup from 'src/hooks/useSignup';

const OtherInfo = () => {
    const { t } = useTranslation();
    const { key } = useParams();
    const { state } = useSignup();
    const navigate = useNavigate();
    const [otherInfo, setOtherInfo] = useState({
        key,
    });
    const [siteError, setSiteError] = useState(false);

    const { mutate: registernow, isLoading } = useMutation((data) => partial.setupOauthAccount(data), {
        onSuccess: (res) => {
            setToken(res.token);
            if ("inviteCode" in state) {
                navigate(`/invite/${state.inviteCode}`);
            } else {
                // navigate('/dashboard/instance-configuration');
                console.log(res);
            }
        },
    });

    const mailingLists = [
        { id: 1, title: t('entrepreneur_title'), description: t('entrepreneur_desc') },
        { id: 2, title: t('business_team_title'), description: t('business_team_desc') },
    ];
    const { idTokenData } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: idTokenData.email ?? '',
            key,
        },
        validateOnChange: false,
        validationSchema: userInfoSchema,
        onSubmit: (data) => {
            // Move the logic from the original onSubmit in UserInfoForm here
            // state.setOtherInfo(data);
            registernow(data);
            // next();
        },
    });

    return (
        <>
            <div className="flex relative min-h-screen z-[999] bg-white">
                <div className="flex-1 flex-col hidden md:flex justify-center bg-[#F2F2F2]">
                    <RegisterStep active={1} />
                </div>
                <div className="flex flex-1 m-[30px] md:m-2 z-[999] basis-[20%] bg-white absolute md:relative register-screen">
                    <form
                        className="register-formbox"
                        onSubmit={formik.handleSubmit}
                    >
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

                            {
                                !state?.inviteCode && (
                                    <div>
                                        <div>
                                            <h2 className="main-title mt-8">What would you like to call your site?</h2>
                                            <p className="tab-desc mt-2">It was popularised in the 1960s with the release of Letraset.</p>
                                        </div>

                                        <div>
                                            <div className="relative mt-1 rounded-md shadow-sm">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 tab-desc">
                                                    http://
                                                </div>
                                                <input
                                                    type="text"
                                                    name="site"
                                                    id="site"
                                                    className={`form-input ${siteError ? 'error' : ''}`}
                                                    placeholder="example"
                                                    style={{ paddingRight: "140px", paddingLeft: "60px" }}

                                                />
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 tab-desc">
                                                    .zaviago.com
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            <div>
                                <div className='flex gap-x-2 text-sm mt-6'>
                                    <Checkbox id='agree' className='mt-1' />
                                    <label htmlFor='agree'>{t('sign_up_agreement_one')} <Link>{t('terms_of_use')}</Link> {t('sign_up_agreement_two')} <Link>{t('privacy_policy')}</Link></label>
                                </div>

                                <div className={`anim-up-delay translate-y-[20px] mt-4`}>
                                    <Button
                                        type='submit'
                                        className='justify-center w-full'
                                    >{t('continue')}</Button>
                                </div>
                            </div>
                        </div>
                    </form>
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
    );
};

export default OtherInfo;
