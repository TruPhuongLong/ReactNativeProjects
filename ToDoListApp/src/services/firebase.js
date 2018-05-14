
// <script src="https://www.gstatic.com/firebasejs/5.0.2/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDUzElHj_lHVDH7qLxSdgheaXlZ1MdKIww",
//     authDomain: "todolistapp-e0245.firebaseapp.com",
//     databaseURL: "https://todolistapp-e0245.firebaseio.com",
//     projectId: "todolistapp-e0245",
//     storageBucket: "todolistapp-e0245.appspot.com",
//     messagingSenderId: "428032917120"
//   };
//   firebase.initializeApp(config);
// </script>

import * as firebase from 'firebase';
const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyDUzElHj_lHVDH7qLxSdgheaXlZ1MdKIww",
    authDomain: "todolistapp-e0245.firebaseapp.com",
    databaseURL: "https://todolistapp-e0245.firebaseio.com",
    projectId: "todolistapp-e0245",
    storageBucket: "todolistapp-e0245.appspot.com",
    messagingSenderId: "428032917120"
})

export default initialize;