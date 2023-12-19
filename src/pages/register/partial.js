import { Fragment } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { ChatBubbleBottomCenterTextIcon, XMarkIcon } from '@heroicons/react/24/solid';
import LoadingCheck from "../../components/loadingcheck";
import { SignupProvider } from '../../hooks/useSignup';
import { useFormik } from 'formik';
import StepMaintainer from '../../components/StepMaintainer';
import { useMutation } from 'react-query';
import { partial } from '../../client/api';
import { otpSchema, phoneSchema } from './validations/phoneVerificationSchema';
import RegisterStep from '../../components/registerStep';
import Spacer from '../../components/spacer';
import { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

export default function Partial(){
    return (
        <SignupProvider>
            <Outlet />
        </SignupProvider>
    )
}

export const PhoneVerification = () => {
    const { key } = useParams();
    return (
        <div className="flex relative min-h-screen z-[999] bg-white">
            <div className="flex-1 flex-col hidden md:flex justify-center bg-[#F2F2F2]">
                <RegisterStep active={0} />
            </div>
            <div className="flex flex-1 m-[30px] md:m-2 z-[999] bg-white basis-[20%] absolute md:relative register-screen">
                <StepMaintainer key={key}>
                    {/* <VerifyOTP /> */}
                    <GetPhoneNumber />
                    <VerifyOTP />
                </StepMaintainer>
            </div>
        </div>
    )
}

const GetPhoneNumber = ({
    next,
    initialValues = {
        countryCode: '66',
        phoneNumber: '',
    },
    validationSchema,
    onSubmit,
}) => {
    const { key } = useParams();

    const { mutate, isLoading, isSuccess } = useMutation((data) => partial.requestOtp(key, `${data.countryCode}${data.phoneNumber}`), {
        onSuccess: next,
    })

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: true,
        validationSchema: validationSchema ?? phoneSchema,
        onSubmit: mutate ?? onSubmit
    })

    return (
        <form className="m-auto w-full max-w-sm w-96" onSubmit={formik.handleSubmit}>
            <h2 className="text-3xl font-semibold tracking-[-0.75px]">{false ? "Resend OTP" : "Let's get started"}</h2>
            <p className="text-[#71717A] mt-3">Enter your phone number to receive an OTP. An OTP will be sent to your phone number.</p>

            <Spacer size={36} />
            <div className="space-y-8">
                <div className="anim-up">
                    <label htmlFor="otp" className="subheading font-medium">
                        Enter your phone number
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="country" className="sr-only">
                                Country
                            </label>
                            <select
                                className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-1 text-gray-500 text-sm outline-none"
                                name="countryCode"
                                value={formik.values.countryCode}
                                onChange={formik.handleChange}
                            >
                                <option value="66">TH</option>
                                <option value="92">PK</option>
                                <option value="23">UK</option>
                                <option value="88">US</option>
                            </select>
                        </div>
                        <Input
                            ref={null}
                            placeholder="091-234-5678"
                            className="form-input"
                            style={{ paddingLeft: "64px" }}
                            name="phoneNumber"
                            type='number'
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                        />
                    </div>

                    {(formik.errors.phoneNumber || formik.errors.countryCode) && (<p className="error">{formik.errors.phoneNumber}</p>)}
                </div>

                <div className="anim-up-delay">
                    <Button
                        type='submit'
                        className='w-full justify-center'
                        disabled={formik.isSubmitting || !formik.isValid}
                    >Get OTP</Button>
                </div>
            </div>
            <Transition.Root show={isLoading} as={Fragment}>
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
                                    <div class="moving-line" />
                                    <p className="tab-desc text-left font-bold mb-3 flex gap-x-2">
                                        <ChatBubbleBottomCenterTextIcon width='24' />
                                        Requesting OTP
                                    </p>
                                    {isLoading ? (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <div className="loading-icon">
                                                    <div className="inner-icon"></div>
                                                </div>
                                                <div className="text-left">
                                                    <Dialog.Title as="h3" className="subheading small">
                                                        Requesting OTP
                                                    </Dialog.Title>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='tab-desc'>
                                                    In progress
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <LoadingCheck type='primary' height='20px' />
                                                <div className="text-left">
                                                    <Dialog.Title as="h3" className="subheading small">
                                                        Requested OTP
                                                    </Dialog.Title>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-link'>Done</p>
                                            </div>
                                        </div>
                                    )}

                                    {isSuccess ? (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <LoadingCheck type='primary' height='20px' />
                                                <Dialog.Title as="h3" className="subheading small">
                                                    Sent OTP
                                                </Dialog.Title>
                                            </div>
                                            <div>
                                                <p className='text-link'>Done</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <div className="loading-icon">
                                                    <div className="inner-icon"></div>
                                                </div>
                                                <Dialog.Title as="h3" className="subheading small">
                                                    Sending OTP
                                                </Dialog.Title>
                                            </div>
                                            <div>
                                                <p className='tab-desc'>In progress</p>
                                            </div>
                                        </div>
                                    )}

                                    {isSuccess && (
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-x-2 items-center">
                                                <LoadingCheck type='primary' height='20px' />
                                                <Dialog.Title as="h3" className="subheading small">
                                                    OTP sent to your phone
                                                </Dialog.Title>
                                            </div>
                                            <div>
                                                <p className='text-link'>Done</p>
                                            </div>
                                        </div>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </form>
    )
}

const VerifyOTP = ({
    prev,
    initialValues = {
        otp: '',
    },
    validationSchema,
    onSubmit,
}) => {
    const [show, setShow] = useState(false);
    const [requestNewOTP, setRequestNewOTP] = useState(false)
    const { key } = useParams();
    const navigate = useNavigate();

    const { mutate, isError, isSuccess } = useMutation((data) => partial.verifyOtp(key, Object.values(data).join('')), {
        onSuccess: (res) => {
            setShow(true); setTimeout((() => {
                navigate(`/partial/${key}/other-info`)
            }), 1000)
        },
        onError: (err) => { setShow(true) },
    })

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: true,
        validationSchema: validationSchema ?? otpSchema,
        onSubmit: mutate ?? onSubmit
    })

    return (
        <form className="m-auto w-full max-w-sm w-96" onSubmit={formik.handleSubmit}>
            <h2 className="text-3xl font-semibold tracking-[-0.75px]">6-digit code</h2>
            <p className="text-[#71717A] mt-3">Enter the 6-digit code you received via SMS via number {formik.values.phoneNumber}</p>
            <Spacer size={36} />
            <div className="space-y-8">
                <div className="anim-up">
                    <label htmlFor="otp" className="subheading font-medium">
                        Enter your OTP
                    </label>
                    <Input
                        className="form-input mt-1"
                        name="otp"
                        type='number'
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                    />
                    {!requestNewOTP ? (
                        <p className="text-[#71717A] text-sm mt-1">Request a new OTP code again in 00:30</p>
                    ) : (
                        <p className="text-[#0788F5] text-sm mt-1" onClick={prev}>Resend code</p>
                    )}
                </div>

                <div className="anim-up-delay">
                    <Button
                        type='submit'
                        className='w-full justify-center'
                        disabled={!formik.isValid}
                    >Confirm OTP</Button>
                    <p className="text-[#71717A] text-sm mt-3">Entered the wrong phone number? <span onClick={prev} className='text-[#0788F5] cursor-pointer'>Change phone number</span></p>
                    {isError && (<p className="error">OTP is incorrect</p>)}
                </div>
            </div>

            <Transition.Root show={show} as={Fragment}>
                <Dialog as="div" className="relative z-[1001]" onClose={() => setShow(false)}>
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
                                {isSuccess ? (
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all w-full max-w-[400px] flex flex-col gap-y-4">
                                        <div class="moving-line" />
                                        <LoadingCheck type='success' />
                                        <p className="tab-desc justify-center font-bold flex">
                                            OTP confirmed
                                        </p>
                                    </Dialog.Panel>
                                ) : (
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all w-full max-w-[400px] flex flex-col gap-y-4">
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                            <XMarkIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <p className="tab-desc justify-center font-bold flex">
                                            OTP is incorrect, please try again
                                        </p>
                                    </Dialog.Panel>
                                )}
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </form>
    )
}