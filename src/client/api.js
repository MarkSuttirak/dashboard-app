import api from './api-client';
const backend_url = `${process.env.REACT_APP_BACKEND_URL || 'https://hosting.zaviago.com'}`;

export const user = {
    oauthLogin: (provider, accessToken, idToken) => api.post(
        '/method/press.api.account.auth',
        { provider, access_token: accessToken, id_token: idToken }
    ),
    login: (email, password) => api.post('/method/login', { usr: email, pwd: password, use_jwt: 1 }),
    logout: () => api.post('/method/logout'),
    register: (email, password) => api.post('/method/register', { usr: email, pwd: password }),
    get: () => api.get('/method/press.api.account.get'),
    updateUser : (data) => api.post("/method/press.api.account.update_profile" , data),
    getInvoices : () => api.get("/method/press.api.billing.invoices_and_payments").then((response) => response.data),
    getBillingInfo : () => api.post("/method/press.api.account.get_billing_information").then((response) => response.data),
    updateBillingInfo:(data)=>api.post("/method/press.api.account.update_billing_information",{billing_details:data}),
    get_plans: () => api.get(`/resource/Plan?limit_start=0`).then((response) => response.data),
    // {billing_details:{address:"Thailandvdddddd",billing_name:"Test 3",city:"Thailand",country:"Thailand",gstin:null,postal_code:"12345",state:"Bangkok"}})
}

export const partial = {
    requestOtp: (key, phoneNumber) => api.post('/method/press.api.account.request_otp', { key: key, phone_number: phoneNumber }).then((response) => response.data.message),
    verifyOtp: (key, otp) => api.post('/method/press.api.account.verify_otp', { key: key, otp: otp }).then((response) => response.data.message),
    setupOauthAccount: (data) => api.post('/method/press.api.account.setup_oauth_account', data).then((response) => response.data),
}

export const site = {
    list: (params) => api.get('/method/press.api.site.all', { params }).then((response) => response.data.message),
    get: (name) => api.get('/method/press.api.site.get', { params: { name } }).then((response) => response.data.message),
    overview: (name) => api.get('/method/press.api.site.overview', { params: { name } }).then((response) => response.data.message),
    loginAsAdmin: (name, reason) => api.post('/method/press.api.site.login', { name, reason }),
    info: (name) => api.get(`/resource/Site/${name}`).then((response) => response.data),
    rename: (data) => api.post('/method/press.api.site.rename', data).then((response) => response.data.message),
    exists: (data) => api.get('/method/press.api.site.exists', { params: data }).then((response) => response.data.message),
    optionsForNew: () => api.get('/method/press.api.site.options_for_new').then((response) => response.data.message),
    new: (data) => api.post('/method/press.api.site.new_saas_site', data).then((response) => response.data.message),
    appslist: (name) => api.get('/method/press.api.marketplace.get_apps', { params: { name } }).then((response) => response.data.message), 
    installed_apps: (name) => api.get('/method/press.api.site.installed_apps', { params: { name } }).then((response) => response.data.message),
    install_app: (name,app,plan) => api.post('/method/press.api.site.install_app', {  name,app,plan }).then((response) => response.data.message),
    uninstall_app: (name,app) => api.post('/method/press.api.site.uninstall_app', {  name,app }).then((response) => response.data.message),


    get_app_plans: (app) => api.get('/method/press.api.marketplace.get_app_plans', { params: { app } }).then((response) => response.data.message),
    change_plan: (name, plan) => api.post('/method/press.api.site.create_invoice', { name, plan }).then((response) => response.data.message),  
    create_app_subscription: (app,name,plan) => api.post('/method/press.api.site.install_app', { app,name,plan }).then((response) => response.data.message),
    get_web_plans: (name) => api.post('/method/press.api.site.get_plans', {name}).then((response) => response.data.message),
    get_agent_jobs: (name) => api.get('/method/press.api.site.jobs', { params: { name }}).then((response) => response.data.message),
    backend_url: () => backend_url
}
export const getCountryList = () => api.get('/method/press.api.account.country_list').then((response) => response.data);