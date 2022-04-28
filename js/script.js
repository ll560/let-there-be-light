function myFunction(){
    let x = document.getElementById("light-on");
    if (x.style.display === "block") {
        x.style.display = "inline";
        //x.setAttribute("src", "/images/off-light-bulb-png.png");
        
      } else {
        x.style.display !== "block";
        document.createElement("newImg");
        x.setAttribute("src", "/images/on-light-bulb-png-transparent.png");
        
      }
}