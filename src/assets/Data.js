
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import messaging from '@react-native-firebase/messaging';

const offerData = [
    require('../assets/images/dr6.png'),
    require('../assets/images/dr6.png'),
    require('../assets/images/dr6.png'),
    require('../assets/images/dr6.png'),
    require('../assets/images/dr6.png'),
]

const dashboardData = [
    {
        id: 0,
        image: require('../assets/images/dash1.png'),
        name: 'Ananya',
        duartion: '2:00 PM - 4:00 PM',
        time: '1 Hour ago',
        status: 'pending',
    },
    {
        id: 1,
        image: require('../assets/images/dash2.png'),
        name: 'Kashvi',
        duartion: '4:00 PM - 6:00 PM',
        time: '3 Hour ago',
        status: 'cancel',
    },
    {
        id: 2,
        image: require('../assets/images/dash3.png'),
        name: 'Diviya',
        duartion: '6:00 PM - 8:00 PM',
        time: '7 Hour ago',
        status: 'success',
    }
]

const medicineData = [
    {
        id: 0,
        image: require('../assets/images/med1.png'),
        name: 'Paracitamol',
        duartion: '2:00 PM - 4:00 PM',
        price: '1200',
        measure: 'Tablet',
        stock: 400,
    },
    {
        id: 1,
        image: require('../assets/images/med2.png'),
        name: 'Dental Crowns',
        duartion: '4:00 PM - 6:00 PM',
        price: '800',
        measure: 'gm',
        stock: 0,
    },
    {
        id: 2,
        image: require('../assets/images/med3.png'),
        name: 'Ibuprofen',
        price: '240',
        measure: 'mm',
        stock: 1245,
    }
]

const docList = [
    {
        id: 0,
        image: require('../assets/images/personal.png'),
        title: 'Personal Info',
        to: 'PersonnelInfoDoc'
    },
    {
        id: 1,
        image: require('../assets/images/patient2.png'),
        title: 'Patients',
        to: 'PatientDoc'
    },
    {
        id: 2,
        image: require('../assets/images/appointment2.png'),
        title: 'Appointments',
        to: 'AppointmentDoc',
    },
    {
        id: 3,
        image: require('../assets/images/payment.png'),
        title: 'Payments',
        to: 'PaymentDoc',
    },
    {
        id: 4,
        image: require('../assets/images/invoice.png'),
        title: 'Invoices',
        to: 'InvoiceDoc',
    },
    {
        id: 5,
        image: require('../assets/images/key.png'),
        title: 'Access Control',
        to: 'AccessControl'
    }
]

const notiData = [
    {
        id: 0,
        image: require('../assets/images/calendar5.png'),
        name: 'Micheal Owen',
        text: 'Its Micheal Owen birthday  today',
        time: '2:00 PM',
        duration: '1 Day ago',
    },
    {
        id: 1,
        image: require('../assets/images/candle.png'),
        name: 'Mauris',
        text: 'Recent Appointments with Mauris',
        time: '2:00 PM',
        duration: '1 Day ago',
    },
    {
        id: 2,
        image: require('../assets/images/calendar5.png'),
        name: 'Micheal Owen',
        text: 'Its Micheal Owen birthday  today',
        time: '2:00 PM',
        duration: '1 Day ago',
    },
    {
        id: 3,
        image: require('../assets/images/candle.png'),
        name: 'Mauris',
        text: 'Recent Appointments with Mauris',
        time: '2:00 PM',
        duration: '1 Day ago',
    }
]

const previewPayment = [
    {
        id: 0,
        name: 'Dental Bridge',
        price: 4000,
        quantity: '02',
        amount: 5000,
    }, {
        id: 2,
        name: 'Dental Braces',
        price: 2000,
        quantity: '04',
        amount: 8000,
    }
]

const medicine = [
    {
        id: 0,
        name: 'Amoxicillin'
    },
    {
        id: 1,
        name: 'Aspirin'
    },
    {
        id: 2,
        name: 'Codeine'
    },
    {
        id: 3,
        name: 'Dental Braces'
    },
    {
        id: 4,
        name: 'Dental Sealants'
    }
]

const PatientCategoryData = [
    {
        id: 0,
        image: require('../assets/images/clipboard.png'),
        name: 'Medical Records',
        to: 'Records',
    },
    {
        id: 1,
        image: require('../assets/images/appointment2.png'),
        name: 'Appointments',
        to: 'Appointments',
    },
    {
        id: 2,
        image: require('../assets/images/invoice.png'),
        name: 'Invoices',
        to: 'Invoices'
    },
    {
        id: 3,
        image: require('../assets/images/payment.png'),
        name: 'Payments',
        to: 'Payments',
    },
    {
        id: 4,
        image: require('../assets/images/image.png'),
        name: 'Images',
        to: 'Images',
    },
    // {
    //     id: 5,
    //     image: require('../assets/images/stethoscope.png'),
    //     name: 'Dental Chart',
    //     to: 'ChartInfo',
    // },
    // {
    //     id: 6,
    //     image: require('../assets/images/warn1.png'),
    //     name: 'Patient Information',
    //     to: 'PatientInfo',
    // },
    // {
    //     id: 7,
    //     image: require('../assets/images/warn2.png'),
    //     name: 'Health Information',
    //     to: 'HealthInfo',
    // }
]

const profileOption = [
    {
        id: 0,
        text: 'Profile'
    },
    {
        id: 1,
        text: '0 Answers'
    },
    {
        id: 2,
        text: '1 Questions'
    },
    {
        id: 3,
        text: 'Following',
    },
    {
        id: 4,
        text: '0 Reveiw'
    },
    {
        id: 5,
        text: '0 Followers'
    },
    {
        id: 6,
        text: '1 Spaces'
    },
    {
        id: 7,
        text: '1 Post'
    }
]


const emailList = [
    {
        id: 0,
        text: 'General questions & answers',
    },
    {
        id: 1,
        text: 'Messages, comments & mentions',
    },
    {
        id: 2,
        text: 'Messages, comments & mentions',
    },
    {
        id: 3,
        text: 'You & your network',
    }
]


const activityList = [
    {
        id: 0,
        text: 'Upvotes',
    },
    {
        id: 1,
        text: 'Shares',
    },
    {
        id: 2,
        text: 'Moderation',
    }
]

const doCareList = [
    {
        id: 0,
        text: 'Docare Digest',
    },
    {
        id: 1,
        text: 'Things you might like',
    }
]

export const getTimeDifference = (timestamp) => {
    // Convert timestamp to a Date object
    const date = new Date(timestamp);

    // Get the current date
    const now = new Date();

    // Calculate the difference in milliseconds
    const diff = now - date;

    // Calculate the difference in seconds, minutes, hours, and days
    const diffInSeconds = Math.floor(diff / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // Return the appropriate time difference
    if (diffInDays > 0) {
        return `${diffInDays} days ago`;
    } else if (diffInHours > 0) {
        return `${diffInHours} hours ago`;
    } else if (diffInMinutes > 0) {
        return `${diffInMinutes} minutes ago`;
    } else {
        return `${diffInSeconds} seconds ago`;
    }
};

const chatData = [
    {
        id: 0,
        name: 'Dr. Jii (Ai PA)',
        image: require('../assets/images/dr-ji.png'),
        pin: true,
    },
    {
        id: 1,
        name: 'Alis Smith',
        image: require('../assets/images/dash2.png'),
        pin: false,
    },
    {
        id: 2,
        name: 'Roomi',
        image: require('../assets/images/dash3.png'),
        pin: false,
    },
    {
        id: 3,
        name: 'Roomi',
        image: require('../assets/images/dash3.png'),
        pin: false,
    }
]


const recordData = [
    {
        id: 0,
        image: require('../assets/images/record1.png'),
        text: 'Medications',
        to: 'MedicalRecordView',
    },
    {
        id: 1,
        image: require('../assets/images/record2.png'),
        text: 'Lab Report'
    }
]

const facilityData = [
    {
        id: 0,
        image: require('../assets/images/facility1.png'),
        name: 'avijo',
        heading: 'Partnership',
        subHeading: 'example@gmail.com',
    },
    {
        id: 1,
        image: require('../assets/images/facility2.png'),
        name: 'Radiology',
        heading: 'Ownership',
        subHeading: 'example@abdm',
    },
    {
        id: 2,
        image: require('../assets/images/facility3.png'),
        name: 'Clinics',
        heading: 'Ownership',
        subHeading: 'example@gmail.com',
    },
    {
        id: 3,
        image: require('../assets/images/facility3.png'),
        name: 'Clinics',
        heading: 'Ownership',
        subHeading: 'example@gmail.com',
    }
]

const detailOption = [
    {
        id: 0,
        text: 'About'

    },
    {
        id: 1,
        text: 'Professional'
    },
    {
        id: 2,
        text: 'Services'
    },
    {
        id: 3,
        text: 'Department'
    },
    {
        id: 4,
        text: 'Address'
    }
]

const specializations = [
    "General Medicine",
    "General Surgery",
    "Otorhinolaryngology",
    "Internal Medicine",
    "Immunology",
    "Critical Care Medicine",
    "Infectious Diseases",
    "Clinical Pharmocology",
    "Anaesthesiology",
    "Radiology",
    "Sonology",
    "Biochemistry",
    "Virology",
    "Bacteriology",
    "Oncology",
    "Teratology",
    "Geriatric medicine",
    "Epidemiology",
    "Communicative Diseases",
    "Dermatology",
    "Trichology",
    "Psychiatry",
    "Neurology",
    "Otolaryngology (ENT)",
    "Otology",
    "Rhinology",
    "Ophthalmology",
    "Cardiology",
    "Pulmonology",
    "Angiology",
    "Haematology",
    "Endocrinology",
    "Gastroenterology",
    "Hepatology",
    "Diabetology",
    "Pediatrics",
    "Obstetrics",
    "Sexology/Venereology",
    "Gynecology",
    "Andrology",
    "Nephrology",
    "Urology",
    "Osteopathy/Orthopedy",
    "Rheumatology",
    "Anthrology",
    "Syndesmology",
    "Myology/Sarcology",
    "Sports Medicine",
    "Dentistry",
    "Odontology",
    "Veterinary science",
]

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        console.error('Failed to fetch the data from storage', e);
    }
};

export const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns 0-11
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
};

export const formatDateMonth = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const month = monthNames[date.getMonth()]; // Get month name
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
};


export const fetchFcmToken = async (id) => {
    try {
        const token = await messaging().getToken(); // Fetches the FCM token
        console.log('Firebase Cloud Messaging Token:', token);
        updateFcmToken(token, id);
    } catch (error) {
        console.error('Error fetching FCM Token:', error);
    }
};


const updateFcmToken = async (token, id) => {
    try {
        const data = {
            firebaseToken: token
        };

        const response = await fetch(`${BaseUrl2}/doctor/doctorProfile/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Set the content type
            },
            body: JSON.stringify(data), // Convert the data object to a JSON string
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json(); // Parse the JSON response
        console.log('Success:', result);
    } catch (e) {
        console.log('error updating FCM Token...', e);
    }
}

export const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
};


const BaseUrl1 = 'https://avijobackend-production.up.railway.app';
const BaseUrl2 = "https://avijobackend-production.up.railway.app";


export {
    BaseUrl1,
    BaseUrl2,
    hp,
    wp,
    offerData,
    dashboardData,
    medicineData,
    notiData,
    docList,
    previewPayment,
    medicine,
    PatientCategoryData,
    profileOption,
    emailList,
    activityList,
    doCareList,
    chatData,
    recordData,
    facilityData,
    detailOption,
    specializations,
};