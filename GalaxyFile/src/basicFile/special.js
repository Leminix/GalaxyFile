
// object with special methods
const oversee = {

    // wait function
    wait: function(time){
        return new Promise(resolve => setTimeout(resolve, time)) // use with "await"
    },

    // function after wait until event will be done
    after: function(event){
        if(event){
            return true
        }
    },

    // check a function and if is there some problem return -1 or 0
    fileError: function(fun){
        try{
            fun

        }catch(err){
            console.error(err)
            return -1       // return -1
        }finally{
            return 0        // return 0
        }
    },

    // count all charses in a string
    countCharses: function(ele){
        let container = document.querySelector(ele).value
        console.log(container.split('').length)         //split string to characters and get the length
    },

    // count all words in a string
    countWords: function(ele){
        let container = document.querySelector(ele).value
        console.log(container.split(' ').length)      // split string by spaces
    },


    // count only one char or word in a string
    countOnly: function(ele, char){
        let sum = 0
        let container = document.querySelector(ele).value

        if (!char.trim()) {
            return 0;       // return 0 if element is empty
        }

            let all = container.split('')
            all.forEach(element => {
                if(element === char){
                    sum += 1
                }
            })
            return sum          // return sum
    }
}

export {oversee}