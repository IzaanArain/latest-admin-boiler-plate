export const baseUrl = import.meta.env.VITE_APP_URL

export const validation = {
    emailMax: 322,
    passwordMin: 5,
    passwordMax: 32,
    nameMin: 5,
    nameMax: 60,
    descriptionMax: 255
}

export const validationText = {
    emailRequired: "Email is required",
    emailMax: `Max length is ${validation.emailMax}`,
    invalidEmail: "Invalid email pattern",

    currentPasswordRequired: "Current password is required",
    newPasswordRequired: "New Password is required",
    confirmNewPasswordRequired: "Confirm new password is required",
    passwordRequired: "Password is required",
    passwordMin: `Max length is ${validation.passwordMin}`,
    passwordMax: `Max length is ${validation.passwordMax}`,


    nameRequired: "Name is required",
    nameMin: `Max length is ${validation.nameMin}`,
    nameMax: `Max length is ${validation.nameMax}`,

    descriptionRequired: "Description is required",
    descriptionMax: `Max length is ${validation.descriptionMax}`,

    numberAllowed: "Only numbers are allowed",
    numberAndDecimalAllowed: "Only numbers and decimal are allowed",
}

export const localStorageConstant = {
    tokenKey: "project_name_token",
    userKey: "project_name_user"
}

export const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FRIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}

export const modalType = {
    view: "view",
    edit: "edit",
    delete: "delete",
    block: "block"
}

export const apiUrls = {
    signin: '/admin/signin',
    signout: "/admin/signout",
    changePassword: "/admin/changepassword",
    tcpp: "/admin/TcPp",
    getTcpp: "/api/getTcPp",
    getAllUsers: '/admin/getAllUsers',
    blockUnblockUser: "/admin/blockunblock",
    deleteUser: "/admin/deleteAccount",
    dasboard:"/admin/dashboard",
}


