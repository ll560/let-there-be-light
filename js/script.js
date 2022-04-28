function myFunction(){
    let x = document.getElementById("light-on");
    if (x.style.display === "block") {
        x.style.display = "inline-block";
        x.setAttribute("src", "/images/off-light-bulb-png.png");
        
      } else {
        if(x.style.display = "inline-block"){
        x.style.display = "block"
        document.createElement("newImg");
        x.setAttribute("src", "/images/on-light-bulb-png-transparent.png");
        }
      }
}

// function myFunction(){
//     let x = document.getElementById("light-on");
//     if (x.style.display === "block") {
//         x.style.display = "inline";
//         //x.setAttribute("src", "/images/off-light-bulb-png.png");
        
//       } else {
//         if(x.style.display = "block"){
//         //x.style.display === "block"
//         document.createElement("newImg");
//         x.setAttribute("src", "/images/on-light-bulb-png-transparent.png");
//         }
//       }
// }