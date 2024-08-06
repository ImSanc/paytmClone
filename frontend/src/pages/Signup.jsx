import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Header } from "../components/Headers";
import { useState,useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export function SignUp( ){

    useEffect( ()=>{
        if(localStorage.getItem("token")){
            navigate("/dashboard");
        }
    },[])
    
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    return <div className=" bg-customBackGround  flex items-center justify-center  h-screen">
        <div className=" bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
        <Header heading= {'Sign up'}/>
        <SubHeading subHeading={'Enter your information to create an account'}/>
        <InputBox label={'First Name'} placeholder={'Sanchit'} onChange={ (e)=>{
            setFirstName(e.target.value);
        }   } />
        <InputBox label={'Last Name'} placeholder={'Mishra'} onChange={ (e)=>{
            setLastName(e.target.value);
        }} />
        <InputBox label={'Email'} placeholder={'Mishra@gmail.com'} onChange={ (e)=>{
            setUsername(e.target.value);
        }}/>
        <InputBox label={'Password'} placeholder={'123456'} onChange={ (e)=>{
            setPassword(e.target.value);
        }} />
        <Button buttonName={'Sign up'} onClick={ async ()=>{

            try{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                username,
                firstName,
                lastName,
                password
            });
            
            if(response.data.token){
              localStorage.setItem("token","Bearer "+response.data.token);
              localStorage.setItem("username" , response.data.username);
              navigate("/dashboard");
            }
            else{
                alert("Sign up failed. Please check your details and try again.");
            }
        }
        catch(error){
            alert("Sign up failed. Please check your details and try again.");
        }
        

        }}/>
        <BottomWarning warning={'Already have an account?'} to={'/signin'} toLabel={'Sign in'}/>
        </div>
    </div>
}