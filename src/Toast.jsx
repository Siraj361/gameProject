import React, { useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";


export default function Toast({ message, type="success", close }) {


useEffect(()=>{

const timer = setTimeout(()=>{

close();

},2000);


return ()=>clearTimeout(timer);


},[close]);



return (

<div className="
fixed
top-5
left-1/2
-translate-x-1/2
z-[999]
w-[90%]
max-w-[380px]
animate-bounce
">


<div className={`

flex
items-center
gap-3
rounded-2xl
px-5
py-4
shadow-[0_0_30px_rgba(0,200,255,.4)]
border

${type==="success"

?

"bg-[#062c3d] border-cyan-400 text-white"

:

"bg-red-950 border-red-500 text-white"

}

`}>



{

type==="success"

?

<CheckCircle 
className="text-cyan-400"
size={28}
/>

:

<AlertCircle
className="text-red-400"
size={28}
/>

}





<div className="flex-1">

<p className="font-bold text-lg">

{
type==="success"
?
"Success"
:
"Error"
}

</p>


<p className="text-sm text-gray-300">

{message}

</p>


</div>






<button

onClick={close}

>

<X size={20}/>

</button>




</div>


</div>

)

}