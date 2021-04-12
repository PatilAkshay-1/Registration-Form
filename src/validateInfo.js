export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username="Username required"
    }


    if (!values.email){
        errors.email="Email required"
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email address is invalid"
    }


    if (!values.password){
        errors.password="Password Required"
    }else if (values.password.length < 8 ){
        errors.password="Password needs to be of minimuim 8 characters"
    }    



    if (!values.confirmPassword){
        errors.confirmPassword="Confrim Password Required"
    }else if (values.confirmPassword !== values.password){
        errors.confirmPassword="Passwords did not match"
    }
    return errors
}
