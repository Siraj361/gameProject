import { useState } from "react";
import { X, Eye, EyeOff, Lock } from "lucide-react";


export default function LoginModal({

  loginOpen,
  setLoginOpen,
  setSignupOpen,
  navigate,
  setToast,

}) {



const [phone,setPhone] = useState("");

const [password,setPassword] = useState("");

const [showPassword,setShowPassword] = useState(false);







const handleLogin = ()=>{


const savedUser =
JSON.parse(
localStorage.getItem("signupUser")
);




if(!savedUser){

setToast({

message:"Please signup first",

type:"error"

});


return;

}





if(

savedUser.phone === phone &&

savedUser.password === password

){



localStorage.setItem(

"user",

JSON.stringify(savedUser)

);




if(!localStorage.getItem("balance")){

localStorage.setItem(
"balance",
"0"
);

}





setToast({

message:"Login Successful",

type:"success"

});



setLoginOpen(false);



navigate("/profile");



}

else{


setToast({

message:"Wrong phone or password",

type:"error"

});


}



};









return (

<div

className={`

fixed

top-0

left-1/2

-translate-x-1/2


w-full

max-w-[540px]


h-screen


z-[10000]


${loginOpen

?

"pointer-events-auto"

:

"pointer-events-none"

}

`}

>







{/* OVERLAY */}

<div


onClick={()=>setLoginOpen(false)}


className={`

absolute

inset-0


bg-black/80


backdrop-blur-sm


transition


${loginOpen

?

"opacity-100 visible"

:

"opacity-0 invisible"

}

`}

/>









{/* LOGIN CARD */}

<div


className={`

absolute

left-1/2

top-1/2


-translate-x-1/2

-translate-y-1/2



w-[92%]

max-w-[400px]



bg-gradient-to-b

from-[#061b3a]

to-[#020617]



rounded-3xl



border

border-cyan-400/60



p-5



text-white



transition-all

duration-300



${loginOpen

?

"scale-100 opacity-100"

:

"scale-90 opacity-0"

}

`}

>








{/* CLOSE */}

<button


onClick={()=>setLoginOpen(false)}


className="

absolute

right-4

top-4

text-white

"


>


<X size={28}/>


</button>









<h1


className="

text-center

text-white

text-3xl

font-bold

mb-6

"

>


Login


</h1>









{/* PHONE */}

<input



placeholder="Phone Number"



value={phone}



onChange={(e)=>setPhone(e.target.value)}




className="


w-full


mb-3


p-4



rounded-xl



bg-black/70



border



border-cyan-600



text-white



outline-none


"

 />









{/* PASSWORD */}

<div


className="


flex


items-center



bg-black/70



border



border-cyan-600



rounded-xl


"


>


<Lock


className="

text-cyan-400

ml-3

"


/>







<input


type={
showPassword
?
"text"
:
"password"
}




placeholder="Password"



value={password}



onChange={(e)=>setPassword(e.target.value)}





className="


flex-1


p-4


bg-transparent


outline-none


text-white


"

 />









<button


type="button"



onClick={()=>setShowPassword(!showPassword)}



className="

mr-3

text-cyan-400

"


>


{

showPassword

?

<EyeOff size={22}/>

:

<Eye size={22}/>

}


</button>







</div>









{/* LOGIN BUTTON */}


<button


onClick={handleLogin}



className="


w-full



mt-6



py-4



rounded-xl



bg-gradient-to-r



from-cyan-400



to-blue-700





text-white



font-bold



text-lg



"

>


Login


</button>









<p


className="


text-gray-400


text-center


mt-5


"


>


Don't have an account?


</p>








<button



onClick={()=>{


setLoginOpen(false);

setSignupOpen(true);


}}




className="


w-full



text-cyan-400



font-bold



mt-2



"


>


Create Account


</button>









</div>







</div>

);


}