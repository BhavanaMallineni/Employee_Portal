import * as firebase from 'firebase';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBwmMkG_Isr8d79buHBl_zxgr6MOAPOaTs",
    authDomain: "employee-portal-5ffe6.firebaseapp.com",
    databaseURL: "https://employee-portal-5ffe6.firebaseio.com",
    projectId: "employee-portal-5ffe6",
    storageBucket: "employee-portal-5ffe6.appspot.com",
    messagingSenderId: "245208961801"
  };
  const fire = firebase.initializeApp(config);

  export default fire;
