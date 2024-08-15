
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

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

const appData = [
    {
        id: 0,
        image: require('../assets/images/dashboard3.png'),
        title: 'Dashboard'
    },
    {
        id: 1,
        image: require('../assets/images/patient3.png'),
        title: 'Patients',
        to: 'Patients'
    },
    {
        id: 2,
        image: require('../assets/images/appointment3.png'),
        title: 'Appointments',
        to: 'Appointments',
    },
    {
        id: 3,
        image: require('../assets/images/payment2.png'),
        title: 'Payments',
        to: 'Payments',
    },
    {
        id: 4,
        image: require('../assets/images/invoice2.png'),
        title: 'Invoices',
        to: 'Invoices',
    },
    {
        id: 5,
        image: require('../assets/images/service2.png'),
        title: 'Services',
        to: 'Services',
    },
    {
        id: 6,
        image: require('../assets/images/medicine2.png'),
        title: 'Medicines',
        to: 'Medicines',
    },
    {
        id: 7,
        image: require('../assets/images/campaign2.png'),
        title: 'Campaigns',
        to: 'Campaigns'
    },
    {
        id: 8,
        image: require('../assets/images/doCare.png'),
        title: 'doCare',
        to: 'AddQuestion',
    },
    {
        id: 9,
        image: require('../assets/images/setting3.png'),
        title: 'Settings',
        to: 'Settings',
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
        to: 'MedicalRecord',
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
    {
        id: 6,
        image: require('../assets/images/warn1.png'),
        name: 'Patient Information',
        to: 'PatientInfo',
    },
    {
        id: 7,
        image: require('../assets/images/warn2.png'),
        name: 'Health Information',
        to: 'HealthInfo',
    }
]

const profileOption=[
    {
        id:0,
        text:'Profile'
    },
    {
        id:1,
        text:'0 Answers'
    },
    {
        id:2,
        text:'1 Questions'
    },
    {
        id:3,
        text:'0 Reveiw'
    },
    {
        id:4,
        text:'1 Post'
    }
]

const BaseUrl1 = 'https://avijobackend-production.up.railway.app';
const BaseUrl2 = "https://avijobackend-production-2eae.up.railway.app";

export {
    BaseUrl1,
    BaseUrl2,
    hp,
    wp,
    offerData,
    dashboardData,
    appData,
    medicineData,
    notiData,
    docList,
    previewPayment,
    medicine,
    PatientCategoryData,
    profileOption
};