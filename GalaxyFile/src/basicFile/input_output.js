import {randomData} from "../generate/data.js"

let pre, input, textarea

const fileOptions = {

    // open local file
    openFile: function(){

        //create new input to open local file from computer
        input = document.createElement("input")
        document.body.appendChild(input)
        input.type = "file"
        input.id = "inputfile"
    },

    readFile: function(source, point){
        // create pre element 
        pre = document.createElement("pre")
        document.body.appendChild(pre)
        pre.id = "output"

        // fill both elements of data
        document.querySelector(source)
            .addEventListener('change', function () {
 
                let fr = new FileReader()
                fr.onload = function () {
                    document.querySelector(point)
                        .textContent = fr.result

                }
 
                fr.readAsText(this.files[0])
            })
    },



    // write to file using text area element
    writeFile: function(source, point){
        textarea = document.createElement("textarea")

        document.body.appendChild(textarea)
        textarea.id = "textarea"

        document.querySelector(source)
            .addEventListener('change', function () {
 
                let fr = new FileReader()
                fr.onload = function () {

                // empty pre elements
                   if(document.getElementById("output")){
                    pre.textContent = ""
                   }

                    document.querySelector(point)
                        .textContent = fr.result
                }
 
                fr.readAsText(this.files[0])
            })

    },

    // download file 
    downloadFile: function(text){
            let question = confirm("Do you want to download this file?")
            if(question == true){
                // load text 
                const blob = new Blob([text], { type: 'text/plain' });

                const url = URL.createObjectURL(blob);


                //create element and download file
                const a = document.createElement('a');
                a.href = url;
                a.download = 'vystup.txt';

                document.body.appendChild(a);

                a.click();

                URL.revokeObjectURL(url);
            }


        },

        // fills a file with random generate data
        fillFile: function(number, point){

            if(!document.getElementById("textarea")){
                this.writeFile()
            }


            let textAreaContent = document.querySelector(point).value

            for (let i = 1; i <= number; i++) {
                let randomIndex = Math.floor(Math.random() * randomData.length)
                textAreaContent += randomData[randomIndex]
            }

            document.querySelector(point).value = textAreaContent

        },

        // delete a file
        deleteFile: function(source){

            document.querySelector(source)
            .addEventListener("change", async() => {
                const file = event.target.files[0];

                  const fileHandle = await window.showOpenFilePicker();

                  await fileHandle[0].remove();
                  
            })
            return true
        }
}




// export
export {fileOptions}