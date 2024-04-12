const imageOptions = {

    // open image from a computer
    showImage: function(source, point){

        //create new element "img"
        let image = document.createElement("img")
        document.body.appendChild(image)

        image.id = "showImg"

        document.querySelector(source)
        .addEventListener('change', function () {

            let fr = new FileReader()
            fr.onload = function () {

                // null element "output" if it exsist
                if(document.getElementById("output")){
                    document.getElementById("output").textContent = ""
                }

                document.querySelector(point)
                    .src = fr.result
            }
            fr.readAsDataURL(event.target.files[0]);
        })
    },
 
    // chenge contrast of a image
    contrastImage: function(point, value){

        if(!document.getElementById("showImg")){
            let image = document.createElement("img")
            document.body.appendChild(image)
    
            image.id = "showImg"
        }

        let image = document.querySelector(point)

        image.style.filter = `contrast(${value}%)`

    },

    // change brightness of a image
    brightnessImage: function(point, value){
        
        if(!document.getElementById("showImg")){
            let image = document.createElement("img")
            document.body.appendChild(image)
    
            image.id = "showImg"
        }

        let image = document.querySelector(point)

        image.style.filter = `brightness(${value}%)`

    },

}


// export
export {imageOptions}