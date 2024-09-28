import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Verification from './src/screens/Verification';
import Profile from './src/screens/Profile';
import CreateProfile from './src/screens/CreateProfile';
import Confirm from './src/screens/Confirm';
import MyAppointments from './src/screens/MyAppointments';
import ConsultDetail from './src/screens/ConsultDetail';
import Reviews from './src/screens/Reviews';
import Account from './src/screens/Account';
import MyProfile from './src/screens/MyProfile';
import Dashboard from './src/screens/Dashboard';
import Patients from './src/screens/Patients';
import Receptions from './src/screens/Receptions';
import Doctors from './src/screens/Doctors';
import Appointments from './src/screens/Appointments';
import Payments from './src/screens/Payments';
import Invoices from './src/screens/Invoices';
import Services from './src/screens/Services';
import Medicines from './src/screens/Medicines';
import Campaigns from './src/screens/Campaigns';
import Settings from './src/screens/Settings';
import Notification from './src/screens/Notification';
import MedicalRecord from './src/screens/MedicalRecord';
import NewRecord from './src/screens/NewRecord';
import EditAppointment from './src/screens/EditAppointment';
import CreateCampaign from './src/screens/CreateCampaign';
import DoctorList from './src/screens/DoctorList';
import PersonnelInfoDoc from './src/screens/PersonnelInfoDoc';
import PatientDoc from './src/screens/PatientDoc';
import AppointmentDoc from './src/screens/AppointmentDoc';
import InvoiceDoc from './src/screens/InvoiceDoc';
import PaymentDoc from './src/screens/PaymentDoc';
import AccessControl from './src/screens/AccessControl';
import AddItem from './src/screens/AddItem';
import PaymentReview from './src/screens/PaymentReview';
import EditPayment from './src/screens/EditPayment';
import ShareWithPatient from './src/screens/ShareWithPatient';
import AddStuff from './src/screens/AddStuff';
import PreviewInvoice from './src/screens/PreviewInvoice';
import EditInvoice from './src/screens/EditInvoice';
import AddInvoice from './src/screens/AddInvoice';
import MedAndService from './src/screens/MedAndService';
import PatientDetail from './src/screens/PatientDetail';
import NewMedicine from './src/screens/NewMedicine';
import NewService from './src/screens/NewService';
import EditService from './src/screens/EditService';
import EditMedicine from './src/screens/EditMedicine';
import ViewCampaign from './src/screens/ViewCampaign';
import VideoChat from './src/screens/VideoChat';
import AddQuestion from './src/screens/AddQuestion';
import PatientCategory from './src/screens/PatientCategory';
import MedicalRecordView from './src/screens/MedicalRecordView';
import CreateInvoice from './src/screens/CreateInvoice';
import GeneratePayment from './src/screens/GeneratePayment';
import AddAppointment from './src/screens/AddAppointment';
import Images from './src/screens/Images';
import PatientInfo from './src/screens/PatientInfo';
import ChartInfo from './src/screens/ChartInfo';
import HealthInfo from './src/screens/HealthInfo';
import AppointmentDetail from './src/screens/AppointmentDetail';
import Chat from './src/screens/Chat';
import Main from './src/screens/Main';
import DrProfile from './src/screens/DrProfile';
import EditMedicalRecord from './src/screens/EditMedicalRecord';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Main' component={Main} options={{headerShown:false}}/>
        <Stack.Screen name='Verification' component={Verification} options={{headerShown:false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name='CreateProfile' component={CreateProfile} options={{headerShown:false}}/>
        <Stack.Screen name='Confirm' component={Confirm} options={{headerShown:false}}/>
        <Stack.Screen name='MyAppointments' component={MyAppointments} options={{headerShown:false}}/>
        <Stack.Screen name='ConsultDetail' component={ConsultDetail} options={{headerShown:false}}/>
        <Stack.Screen name='Reviews' component={Reviews} options={{headerShown:false}}/>
        <Stack.Screen name='Account' component={Account} options={{headerShown:false}}/>
        <Stack.Screen name='MyProfile' component={MyProfile} options={{headerShown:false}}/>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name='Patients' component={Patients} options={{headerShown:false}}/>
        <Stack.Screen name='Receptions' component={Receptions} options={{headerShown:false}}/>
        <Stack.Screen name='Doctors' component={Doctors} options={{headerShown:false}}/>
        <Stack.Screen name='Appointments' component={Appointments} options={{headerShown:false}}/>
        <Stack.Screen name='Payments' component={Payments} options={{headerShown:false}}/>
        <Stack.Screen name='Invoices' component={Invoices} options={{headerShown:false}}/>
        <Stack.Screen name='Services' component={Services} options={{headerShown:false}}/>
        <Stack.Screen name='Medicines' component={Medicines} options={{headerShown:false}}/>
        <Stack.Screen name='Campaigns' component={Campaigns} options={{headerShown:false}}/>
        <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
        <Stack.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
        <Stack.Screen name='MedicalRecord' component={MedicalRecord} options={{headerShown:false}}/>
        <Stack.Screen name='NewRecord' component={NewRecord} options={{headerShown:false}}/>
        <Stack.Screen name='EditAppointment' component={EditAppointment} options={{headerShown:false}}/>
        <Stack.Screen name='CreateCampaign' component={CreateCampaign} options={{headerShown:false}}/>
        <Stack.Screen name='DoctorList' component={DoctorList} options={{headerShown:false}}/>
        <Stack.Screen name='PersonnelInfoDoc' component={PersonnelInfoDoc} options={{headerShown:false}}/>
        <Stack.Screen name='PatientDoc' component={PatientDoc} options={{headerShown:false}}/>
        <Stack.Screen name='AppointmentDoc' component={AppointmentDoc} options={{headerShown:false}}/>
        <Stack.Screen name='InvoiceDoc' component={InvoiceDoc} options={{headerShown:false}}/>
        <Stack.Screen name='PaymentDoc' component={PaymentDoc} options={{headerShown:false}}/>
        <Stack.Screen name='AccessControl' component={AccessControl} options={{headerShown:false}}/>
        <Stack.Screen name='AddItem' component={AddItem} options={{headerShown:false}}/>
        <Stack.Screen name='PaymentReview' component={PaymentReview} options={{headerShown:false}}/>
        <Stack.Screen name='EditPayment' component={EditPayment} options={{headerShown:false}}/>
        <Stack.Screen name='ShareWithPatient' component={ShareWithPatient} options={{headerShown:false}}/>
        <Stack.Screen name='AddStuff' component={AddStuff} options={{headerShown:false}}/>
        <Stack.Screen name='PreviewInvoice' component={PreviewInvoice} options={{headerShown:false}}/>
        <Stack.Screen name='EditInvoice' component={EditInvoice} options={{headerShown:false}}/>
        <Stack.Screen name='AddInvoice' component={AddInvoice} options={{headerShown:false}}/>
        <Stack.Screen name='MedAndService' component={MedAndService} options={{headerShown:false}}/>
        <Stack.Screen name='PatientDetail' component={PatientDetail} options={{headerShown:false}}/>
        <Stack.Screen name='NewMedicine' component={NewMedicine} options={{headerShown:false}}/>
        <Stack.Screen name='NewService' component={NewService} options={{headerShown:false}}/>
        <Stack.Screen name='EditService' component={EditService} options={{headerShown:false}}/>
        <Stack.Screen name='EditMedicine' component={EditMedicine} options={{headerShown:false}}/>
        <Stack.Screen name='ViewCampaign' component={ViewCampaign} options={{headerShown:false}}/>
        <Stack.Screen name='VideoChat' component={VideoChat} options={{headerShown:false}}/>
        <Stack.Screen name='AddQuestion' component={AddQuestion} options={{headerShown:false}}/>
        <Stack.Screen name='PatientCategory' component={PatientCategory} options={{headerShown:false}}/>
        <Stack.Screen name='MedicalRecordView' component={MedicalRecordView} options={{headerShown:false}}/>
        <Stack.Screen name='CreateInvoice' component={CreateInvoice} options={{headerShown:false}}/>
        <Stack.Screen name='GeneratePayment' component={GeneratePayment} options={{headerShown:false}}/>
        <Stack.Screen name='AddAppointment' component={AddAppointment} options={{headerShown:false}}/>
        <Stack.Screen name='Images' component={Images} options={{headerShown:false}}/>
        <Stack.Screen name='PatientInfo' component={PatientInfo} options={{headerShown:false}}/>
        <Stack.Screen name='ChartInfo' component={ChartInfo} options={{headerShown:false}}/>
        <Stack.Screen name='HealthInfo' component={HealthInfo} options={{headerShown:false}}/>
        <Stack.Screen name='AppointmentDetail' component={AppointmentDetail} options={{headerShown:false}}/>
        <Stack.Screen name='Chat' component={Chat} options={{headerShown:false}}/>
        <Stack.Screen name='DrProfile' component={DrProfile} options={{headerShown:false}}/>
        <Stack.Screen name='EditMedicalRecord' component={EditMedicalRecord} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})