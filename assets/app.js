   // Initialize Firebase
   var config = {
       apiKey: "AIzaSyA0jp-LR-XNd1-AnoJSttvWW7rY4XZQsT4",
       authDomain: "employeedata-31bf9.firebaseapp.com",
       databaseURL: "https://employeedata-31bf9.firebaseio.com",
       projectId: "employeedata-31bf9",
       storageBucket: "employeedata-31bf9.appspot.com",
       messagingSenderId: "420064743945"
   };
   
   firebase.initializeApp(config);
   var database = firebase.database();
   person = {
       name: "",
       role: "",
       startdate: "",
       rate: 0,
   }

   $("#submitButton").on("click", function () {
       event.preventDefault();
       person.name = $("#emName").val().trim();
       person.role = $("#emRole").val().trim();
       person.startdate = $("#emStartDate").val().trim();
       person.rate = $("#emMonthRate").val().trim();
       database.ref().child(person.name).update({
           name: person.name,
           role: person.role,
           startdate: person.startdate,
           rate: person.rate,
       });
   });