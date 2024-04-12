// object that contains methods in node.js to work with local files

const { text } = require('express')

// export object local as a model
module.exports = local = {

    // function to read a local file 
    readFile: function(fileName){
        let fs = require('fs')
        fs.readFile(fileName, "utf8", function(err, data){
            console.log(data)
            if(err){                    
                console.error(err)
            }
        })
    },

    // write data to a file 
    writeFile: function(fileName, text){
        let fs = require('fs')

        fs.appendFile(fileName, text, "utf8", function(err){
            if(err){
                console.error(err)
            }
        })
    },


    // this function will rewrite all text in a file
    reWriteFile: function(fileName, text){
        let fs = require('fs')

        fs.writeFile(fileName, text, "utf8", function(err){
            if(err){
                console.error(err)
            }
        })
    },


    // delete all content of a file
    clearFile: function(fileName){
        let fs = require('fs')

        fs.writeFile(fileName, "", "utf8", function(err){
            if(err){
                console.error(err)
            }
        })
    },


    // will remove a file
    rmFile: function(fileName){
        let fs = require('fs')
        fs.unlink(fileName, function(err){
            if(err){
                console.error(err)
            }
        })
    },


    // create a new empty director 
    mkDir: function(dirName){
        let fs = require('fs')
        fs.mkdirSync(dirName, function(err){
            if(err){
                console.error(err)
            }
        })
    },


    // remove a director with all files in
    rmDir: function(dirName){
        let fs = require('fs')
        fs.rmdir(dirName, function(err){
            if(err){
                console.error(err)
            }
        })
    },


    // will fill a file with charactera thet are random generate
    fillLocalFile: function(fileName, number){
        let fs = require('fs')
        const randomData = ["#", "?", "~", "!", "<", ">", "ę", "♫", "◙", "Ö", "«", "ë", "˝", "Ç", "ő", "↑", "/", "*", "+", "-"]
        let index
        let text
        for(let i = 0; i <= number; i++){
            index = Math.floor(Math.random() * 19)
            text += randomData[index]
        }

        fs.writeFile(fileName, text, "utf8", function(err){
            if(err){
                console.error(err)
            }
        })
    }
}