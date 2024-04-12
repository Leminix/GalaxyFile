function testGF(){
    if("../../GalaxyFile.js"){
        document.open()
        document.write("<h1 style = 'color: green'>GalaxyFile.js  is connected</h1>")
        document.close()
    }else{
        document.open()
        document.write("<h1 style = 'color: red'>GalaxyFile.js  not found</h1>")
        document.close()
    }
}


//export
export {testGF}