import * as Yup from 'yup';

function configureValidations() {
    Yup.addMethod(Yup.string, 'firstLetterUpperCase', function () {
        return this.test("first-letter-uppercase",
         'First letter must be uppercase', function (value){
            if (value && value.length > 0){ //if there is a letter, and length > 0
                const firstLetter = value.substring(0, 1); //extracting the first letter from input
                return firstLetter === firstLetter.toUpperCase(); // checking if the first is equal to first letter
            } 
            return true;    //return true -> validation only works if the user actually enters something
        })
    })
}

export default configureValidations;