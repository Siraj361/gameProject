import React from "react";

const Header = ({
  setOpenMenu,
  setLoginOpen,
  setSignupOpen,
  user,
  balance,
}) => {


return (

<header

className="
w-full
bg-gradient-to-b
from-[#061b3a]
via-[#071426]
to-[#020617]
border-b
border-cyan-700/50
sticky
top-0
z-40
"

>


<div

className="
max-w-[540px]
w-full
mx-auto
flex
items-center
justify-between
px-4
py-3
"

>



{/* LEFT SIDE */}

<div className="flex items-center gap-3">



{/* MENU BUTTON */}

<button

onClick={()=>setOpenMenu(true)}

className="
w-11
h-11
rounded-full
bg-[#020617]
border-2
border-cyan-500
flex
items-center
justify-center
"

>


<div className="space-y-1">


<span
className="
block
w-6
h-[3px]
bg-cyan-300
rounded
"
/>


<span
className="
block
w-4
h-[3px]
bg-cyan-300
rounded
"
/>


<span
className="
block
w-6
h-[3px]
bg-cyan-300
rounded
"
/>


</div>


</button>






{/* LOGO */}

<div>


<h1 className="leading-none font-black">


<span
className="
text-cyan-400
text-3xl
"
>

66RS

</span>



<span
className="
text-white
text-lg
"
>

.com

</span>


</h1>



<p

className="
text-[9px]
text-cyan-200
tracking-[3px]
uppercase
"

>

Gaming Platform

</p>



</div>



</div>








{/* RIGHT SIDE */}

<div className="flex items-center gap-2">



{

user ?


(



<div

className="
flex
items-center
rounded-full
border
border-cyan-400
bg-[#07294b]
px-2
py-1
"

>


{/* WALLET ICON */}

<div

className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-green-600
text-xl
"

>

💰

</div>





<span

className="
mx-2
text-sm
font-bold
text-cyan-300
"

>

Rs {balance}.00

</span>






<button

className="
h-9
w-9
rounded-full
bg-gradient-to-r
from-cyan-400
to-blue-600
text-white
text-xl
font-bold
"

>

+

</button>



</div>



)





:




(



<>



<button

onClick={()=>setLoginOpen(true)}

className="
px-4
py-2.5
rounded-full
bg-gradient-to-r
from-cyan-400
via-blue-500
to-blue-700
border
border-cyan-300
text-white
font-bold
text-sm
"

>

Log In

</button>






<button

onClick={()=>setSignupOpen(true)}

className="
px-4
py-2.5
rounded-full
border
border-cyan-500
bg-[#020617]
text-cyan-300
font-bold
text-sm
"

>

Sign Up

</button>



</>



)


}





</div>



</div>


</header>


)

};


export default Header;