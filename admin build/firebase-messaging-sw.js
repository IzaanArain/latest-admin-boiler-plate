importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyAJvoBHcITUWc8Y5m3Z9g6atiCkQOh0R8o",
    authDomain: "petpass-notification.firebaseapp.com",
    projectId: "petpass-notification",
    storageBucket: "petpass-notification.appspot.com",
    messagingSenderId: "181629356139",
    appId: "1:181629356139:web:ccc4d01a70b7d61fd2092e"
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload)

    const notification = payload.data
    if (!notification) {
        return
    }

    const notificationOptions = {
        body: payload.notification.body,
    };

    return self.registration.showNotification(notificationOptions)
});



