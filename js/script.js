"using strict";

window.onload = () => {

    // setTimeout(() => { //Make page visible after it loads 
    //     document.getElementById('page').style.visibility = "visible";
    // }, 2000);


    var sunElement = document.getElementById('sun');
    console.log(`The sun is ${sunElement}`);

    
    
    let options = {
        threshold: 1.0
    };
      
    let observer = new IntersectionObserver(() => {
        // alert("TUX HAS APPEARED");
        observer.unobserve(sunElement);
        toggleAnimation();
    }, options);

    observer.observe(sunElement);
    
    var satellitesElements = document.getElementsByClassName('satellite');
    console.log(satellitesElements);

    function toggleAnimation() {

        console.log("toggled");
        // observer.unobserve();


        for (var i = 0; i < satellitesElements.length; i++) {
            console.log(`Started cycle ${i}`);
            console.log(satellitesElements[i]);
        
            if (!satellitesElements[i].classList.contains('satellite_animated')) {
                console.log("Added");
                satellitesElements[i].classList.add("satellite_animated");
            }
            else {
                console.log("Removed");
                satellitesElements[i].classList.remove("satellite_animated");
            }
        }
        
    }

    // sunElement.addEventListener('click', () => {
    //     toggleAnimation();
    // });

      

};

