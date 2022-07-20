
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYkHT4W_gs8ccidQznRVJV4PumieIXomc",
  authDomain: "kwitter-off-brand-twitter.firebaseapp.com",
  databaseURL: "https://kwitter-off-brand-twitter-default-rtdb.firebaseio.com",
  projectId: "kwitter-off-brand-twitter",
  storageBucket: "kwitter-off-brand-twitter.appspot.com",
  messagingSenderId: "553273489001",
  appId: "1:553273489001:web:d70e7bcf9769e2d13354f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

         localStorage.setItem("room_name", room_name);

         window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id) ' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;     
 //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}
function logout() { localStorage.removeItem("user_name"); 

localStorage.removeItem("room_name"); 

window.location = "kwitter.html"; }