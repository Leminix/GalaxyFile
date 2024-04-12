const chiper = {

    // cipher text in open file to write
     hide: function(ele){
         let container = document.querySelector(ele).value
         let chars = container.split('')
         let code = []
        chars.forEach(element => {
            
            switch(element){
                case 'a':
                    code.push('! ')
                break
                case 'b':
                    code.push('# ')
                break
                case 'c':
                    code.push('*/ ')
                break
                case 'd':
                    code.push('* ')
                break
                case 'e':
                    code.push('@2 ')
                break
                case 'f':
                    code.push('+ ')
                break
                case 'g':
                    code.push('> ')
                break
                case 'h':
                    code.push('= ')
                break
                case 'i':
                    code.push('Ĺ ')
                break
                case 'j':
                    code.push('$ ')
                break
                case 'k':
                    code.push('{> ')
                break
                case 'l':
                    code.push('*#/ ')
                break
                case 'm':
                    code.push('!! ')
                break
                case 'n':
                    code.push('*$ ')
                break
                case 'o':
                    code.push('3? ')
                break
                case 'p':
                    code.push('&& ')
                break
                case 'q':
                    code.push('4 ')
                break
                case 'r':
                    code.push('% ')
                break
                case 's':
                    code.push('%$ ')
                break
                case 't':
                    code.push('; ')
                break
                case 'u':
                    code.push(';° ')
                break
                case 'v':
                    code.push('° ')
                break
                case 'w':
                    code.push('==- ')
                break
                case 'x':
                    code.push('68 ')
                break
                case 'y':
                    code.push('+/ ')
                break
                case 'z':
                    code.push('00 ')
                break

                case '(':
                    code.push(') ')
                break

                case ')':
                    code.push('( ')
                break

                case " ":
                    code.push("s ")
                break

                default:
                    code.push('? ')
            }

        })
        document.querySelector(ele).value = ""
        for(let i = 0; i<= code.length - 1; i++){
            document.querySelector(ele).value += code[i]
        }
     },


     // decode the cipher back
     show: function(ele){
        let container = document.querySelector(ele).value
        let chars = container.split(' ')
        let code = []
       chars.forEach(element => {
           
           switch(element){
               case '!':
                   code.push('a')
               break
               case '#':
                   code.push('b')
               break
               case '*/':
                   code.push('c')
               break
               case '*':
                   code.push('d')
               break
               case '@2':
                   code.push('e')
               break
               case '+':
                   code.push('f')
               break
               case '>':
                   code.push('g')
               break
               case '=':
                   code.push('h')
               break
               case 'Ĺ':
                   code.push('i')
               break
               case '$':
                   code.push('j')
               break
               case '{>':
                   code.push('k')
               break
               case '*#/':
                   code.push('l')
               break
               case '!!':
                   code.push('m')
               break
               case '*$':
                   code.push('n')
               break
               case '3?':
                   code.push('o')
               break
               case '&&':
                   code.push('p')
               break
               case '4':
                   code.push('q')
               break
               case '%':
                   code.push('r')
               break
               case '%$':
                   code.push('s')
               break
               case ';':
                   code.push('t')
               break
               case ';°':
                   code.push('u')
               break
               case '°':
                   code.push('v')
               break
               case '==-':
                   code.push('w')
               break
               case '68':
                   code.push('x')
               break
               case '+/':
                   code.push('y')
               break
               case '00':
                   code.push('z')
               break
  
               case ')':
                code.push('(')
                break

                case '(':
                    code.push(')')
                break

                case "s":
                    code.push(" ")
                break

                case "\0":
                    code.push("")
                break

               default:
                   code.push('.')
           }

       })
       
       document.querySelector(ele).value = ""
       for(let i = 0; i<= code.length - 1; i++){
           document.querySelector(ele).value += code[i]
       }
     }
}


export {chiper}