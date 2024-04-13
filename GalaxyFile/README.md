# File Operations in javascript
This javascript module provides methods for working with files, such as reading, writing, clearing, and deleting files, as well as creating and removing directories.

### Installation
You can install this framework from GitHub

### Add to your project

Use the module, import it into your javascript application or for local file use require

    import GalaxyFile.js
    
    require(local)

## Functions in fileOptions
### openFile()
Description: Opens a file dialog to select a local file.
Usage: fileOptions.openFile()
Associated Object: fileOptions
### readFile(source, target)
Description: Reads the content of the specified file and displays it at the specified HTML element.
Usage: fileOptions.readFile(source, target)
Associated Object: fileOptions
### writeFile(source, target)
Description: Writes the content of the specified file to the specified HTML element.
Usage: fileOptions.writeFile(source, target)
Associated Object: fileOptions
### downloadFile(text)
Description: Downloads the specified text content as a file.
Usage: fileOptions.downloadFile(text)
Associated Object: fileOptions
### fillFile(number, target)
Description: Fills the specified HTML element with random data.
Usage: fileOptions.fillFile(number, target)
Associated Object: fileOptions
### deleteFile(source)
Description: Deletes the specified file.
Usage: fileOptions.deleteFile(source)
Associated Object: fileOptions

    // Open a file dialog
    fileOptions.openFile();
    
    // Read a file and display its content
    fileOptions.readFile('inputfile', 'output');
    
    // Write content to a file
    fileOptions.writeFile('inputfile', 'textarea');
    
    // Download file
    fileOptions.downloadFile('File content to download');
    
    // Fill file with random data
    fileOptions.fillFile(100, 'textarea');
    
    // Delete file
    fileOptions.deleteFile('inputfile');


## Functions in imageOptions
### showImage(source, target)
Description: Displays the selected image at the specified HTML element.
Usage: imageOptions.showImage(source, target)
Associated Object: imageOptions
### contrastImage(point, value)
Description: Adjusts the contrast of the image displayed at the specified HTML element.
Usage: imageOptions.contrastImage(point, value)
Associated Object: imageOptions
### brightnessImage(point, value)
Description: Adjusts the brightness of the image displayed at the specified HTML element.
Usage: imageOptions.brightnessImage(point, value)
Associated Object: imageOptions

    // Display image
    imageOptions.showImage('inputfile', 'img');
    
    // Adjust contrast
    imageOptions.contrastImage('img', 50);
    
    // Adjust brightness
    imageOptions.brightnessImage('img', 80);

## Functions in oversee
### wait(time)
Description: Pauses execution for the specified amount of time.
Usage: oversee.wait(time)
Associated Object: oversee
### after(event)
Description: Waits until the specified event occurs before continuing execution.
Usage: oversee.after(event)
Associated Object: oversee
### fileError(function)
Description: Checks for errors in the specified function and returns -1 if an error occurs.
Usage: oversee.fileError(fun)
Associated Object: oversee
### countCharses(element)
Description: Counts the number of characters in the specified HTML element.
Usage: oversee.countCharses(element)
Associated Object: oversee
### countWords(element)
Description: Counts the number of words in the specified HTML element.
Usage: oversee.countWords(element)
Associated Object: oversee
### countOnly(element, char)
Description: Counts the occurrences of the specified character in the content of the specified HTML element.


    // Pause execution for 5 seconds
    await oversee.wait(5000);
    
    // Check for an event
    if (oversee.after(event)) {
        console.log('Event occurred.');
    }
    
    // Check for errors in a function
    const result = oversee.fileError(myFunction);
    if (result === -1) {
        console.error('An error occurred.');
    }
    
    // Count characters in an HTML element
    oversee.countCharses('textarea');
    
    // Count words in an HTML element
    oversee.countWords('textarea');
    
    // Count occurrences of a character in an HTML element
    const charCount = oversee.countOnly('textarea', 'a');
    

## Functions in cipher
### hide(element)
Description: Encrypts the content of the specified HTML element using a simple cipher.
Usage: chiper.hide(element)
Associated Object: chiper
### show(element)
Description: Decrypts the content of the specified HTML element encrypted by the hide function.
Usage: chiper.show(element)
Associated Object: chiper

    // Encrypt content of an HTML element
    chiper.hide('textarea');
    
    // Decrypt content of an HTML element
    chiper.show('textarea');

## Functions in local
### readFile(fileName)
Description: Reads the content of the specified file.
Usage: local.readFile(fileName)
Associated Object: local
### writeFile(fileName, text)
Description: Writes the specified text to the file. If the file exists, it appends the text to the end of the file.
Usage: local.writeFile(fileName, text)
Associated Object: local
### reWriteFile(fileName, text)
Description: Rewrites the entire content of the file with the specified text.
Usage: local.reWriteFile(fileName, text)
Associated Object: local
### clearFile(fileName)
Description: Clears all content from the file.
Usage: local.clearFile(fileName)
Associated Object: local
### rmFile(fileName)
Description: Deletes the specified file.
Usage: local.rmFile(fileName)
Associated Object: local
### mkDir(dirName)
Description: Creates a new directory with the specified name.
Usage: local.mkDir(dirName)
Associated Object: local
### rmDir(dirName)
Description: Deletes the specified directory and all its contents.
Usage: local.rmDir(dirName)
Associated Object: local
### fillLocalFile(fileName, number)
Description: Fills the file with a specified number of randomly generated characters.
Usage: local.fillLocalFile(fileName, number)
Associated Object: local

    const local = require('local-file-operations').local;
    
    // Read a file
    local.readFile('example.txt');
    
    // Write to a file
    local.writeFile('example.txt', 'Hello, World!');
    
    // Create a directory
    local.mkDir('example_directory');
    
