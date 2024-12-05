import { useRef } from "react";
import { Link } from "react-router-dom";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import AnimationWrapper from "../common/page-animation";

const UserAuthForm = ({ type }) => {

    const authForm = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();

        let form = new FormData(authForm.current);
        

    
        console.log(form);

        
    }

    return(
        <AnimationWrapper keyValue={type}>
             <section className="h-cover flex items-center justify-center">

                <form ref={authForm} className="w-[80%] max-w-[400px]">
                    <h1 className="text-3xl font-gelasio capitalize text-center mb-24 ">
                        {type == "sign-in" ? "Welcome back" : "Join us"}
                    </h1>
                    {
                        type != "sign-in" ?
                        <InputBox
                            name="fullname"
                            type="text"
                            placeholder="Fullname"
                            icon="fi-rr-user"
                        />
                        : ""
                    }

                    <InputBox
                        name="email"
                        type="email"
                        placeholder="Email"
                        icon="fi-rr-envelope"
                    />

                    <InputBox
                        name="password"
                        type="password"
                        placeholder="Password"
                        icon="fi-rr-key"
                    />

                    <button 
                        className="btn-dark center mt-14"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        {type.replace("-"," ")}
                    </button>

                    <div className="relative w-full items-center gap-2 my-10
                        opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black" /><p>or</p> <hr className="w-1/2 border-black" />
                        
                    
                    </div>

                    <button className="btn-dark flex items-center justify-center
                        gap-4 w-[90%] center">
                        <img src={googleIcon} className="w-5" />
                        continue with google
                    </button>

                    {
                        type == "sign-in" ?
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Don't you have an account?
                            <Link to="/signup" className="underline text-black
                            text-xl ml-1 ">
                            Join us today
                            </Link>
                        </p>
                        :
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Already created an account?
                            <Link to="/signin" className="underline text-black
                            text-xl ml-1 ">
                            Sign in here
                            </Link>
                        </p>
                    }

                </form>
             </section>
        </AnimationWrapper>
    )
}
export default UserAuthForm;