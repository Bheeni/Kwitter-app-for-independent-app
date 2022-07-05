
var firebaseConfig = {
      apiKey: "AIzaSyCPbPEKISOFs4Yxv13xpY0992PogpIvzNw",
      authDomain: "kwitter-app-708b2.firebaseapp.com",
      databaseURL: "https://kwitter-app-708b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-708b2",
      storageBucket: "kwitter-app-708b2.appspot.com",
      messagingSenderId: "1024329862333",
      appId: "1:1024329862333:web:123bca21da8b03bb31bbd4",
      measurementId: "G-RVHT0EBGG3"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("name");

function add_room(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("ROOM_NAME",room_name);
window.location = "kwitter_page.html";
}

document.getElementById("user_name_display").innerHTML= "Welcome " + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(
            function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("ROOM_NAME",name);
window.location = "kwitter_page.html";

}

function logout_user(){
      localStorage.removeItem("name");
      localStorage.removeItem("ROOM_NAME");
      window.location= "index.html";
}