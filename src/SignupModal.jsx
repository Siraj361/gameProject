import React, { useState } from "react";
import { X, Eye, Lock } from "lucide-react";


export default function SignupModal({

  signupOpen,
  setSignupOpen,
  setLoginOpen,
  setToast

}) {


const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");
const [confirmPassword,setConfirmPassword] = useState("");





const registerUser = ()=>{


if(
!name ||
!phone ||
!password ||
!confirmPassword
){

setToast({

message:"Please fill all fields",
type:"error"

});

return;

}





if(password !== confirmPassword){

setToast({

message:"Password not match",
type:"error"

});

return;

}





const user = {

name,
phone,
password,
balance:0

};





localStorage.setItem(
"signupUser",
JSON.stringify(user)
);




setToast({

message:"Account Created Successfully",
type:"success"

});




setSignupOpen(false);



setTimeout(()=>{

setLoginOpen(true);

},300);



}







return (

<>


{/* MAIN 540 WRAPPER */}

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

${signupOpen 
?
"pointer-events-auto"
:
"pointer-events-none"
}

`}

>







{/* OVERLAY */}

<div

onClick={()=>setSignupOpen(false)}

className={`

absolute
inset-0

bg-black/80

backdrop-blur-sm

transition-all

duration-300


${signupOpen ?

"opacity-100 visible"

:

"opacity-0 invisible"

}

`}

/>









{/* MODAL */}


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



shadow-xl



transition-all

duration-300



${signupOpen ?

"scale-100 opacity-100"

:

"scale-90 opacity-0"

}



`}

>







{/* CLOSE BUTTON */}

<button

onClick={()=>setSignupOpen(false)}

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

text-white

text-3xl

font-bold

text-center

mb-6

"

>

Create Account

</h1>









{/* NAME */}

<input


placeholder="Full Name"


value={name}


onChange={(e)=>setName(e.target.value)}


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

mb-3

"

>


<Lock

className="
text-cyan-400
ml-3
"

/>



<input

type="password"


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



<Eye

className="
text-cyan-400
mr-3
"

/>



</div>









{/* CONFIRM PASSWORD */}

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

type="password"


placeholder="Confirm Password"


value={confirmPassword}


onChange={(e)=>setConfirmPassword(e.target.value)}


className="

flex-1

p-4

bg-transparent

outline-none

text-white

"

/>



<Eye

className="
text-cyan-400
mr-3
"

/>



</div>










{/* REGISTER */}

<button

onClick={registerUser}

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

Register

</button>









<p

className="

text-gray-400

text-center

mt-4

"

>

Already have account?

</p>








<button


onClick={()=>{


setSignupOpen(false);

setLoginOpen(true);


}}


className="

w-full

text-cyan-400

font-bold

mt-2

"

>

Login

</button>








</div>






</div>



</>


)

}