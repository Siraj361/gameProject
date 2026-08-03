import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideWidget() {

  const navigate = useNavigate();

  const [showTopButton, setShowTopButton] = useState(false);


  useEffect(() => {

    const container = document.getElementById("home-scroll");

    const scrollTarget = container || window;


    const handleScroll = () => {

      const scrollTop = container
        ? container.scrollTop
        : window.scrollY;


      setShowTopButton(scrollTop > 250);

    };


    scrollTarget.addEventListener("scroll", handleScroll);


    return () => {

      scrollTarget.removeEventListener("scroll", handleScroll);

    };


  }, []);



  const scrollToTop = () => {

    const container = document.getElementById("home-scroll");


    if(container){

      container.scrollTo({
        top:0,
        behavior:"smooth"
      });

    }else{

      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

    }

  };



  return (

    <div

      className="
      fixed
      left-1/2
      -translate-x-1/2
      w-full
      max-w-[540px]
      z-[9999]
      pointer-events-none
      "

      style={{
        bottom:"390px"
      }}

    >



      <div

        className="
        absolute
        right-2
        flex
        flex-col
        items-end
        gap-3
        pointer-events-auto
        "

      >



        {/* INVITE GIF */}

        <img

          src="https://s3.cdnpk688.com/uploads/30001/30fccd7081a1402d2a4d195af577ada3.gif"

          alt="Invite"

          onClick={()=>navigate("/invite-bonus")}

          className="
          h-[82px]
          w-auto
          cursor-pointer
          rounded-l-2xl
          object-contain
          animate-widget
          hover:scale-110
          transition
          "

        />





        {/* BONUS GIF */}

        <img

          src="https://s3.cdnpk688.com/uploads/30004/5f2e28712aaa54d3f846a6e2803e45a5.gif"

          alt="Bonus"

          onClick={()=>navigate("/invite-bonus")}

          className="
          h-[82px]
          w-auto
          cursor-pointer
          rounded-l-2xl
          object-contain
          animate-widget-delay
          hover:scale-110
          transition
          "

        />







        {/* TOP BUTTON */}

        {
          showTopButton && (

            <button

              onClick={scrollToTop}

              className="
              flex
              h-[55px]
              w-[105px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-cyan-400/40
              bg-black/60
              backdrop-blur-xl
              shadow-lg
              animate-widget
              hover:scale-110
              transition
              "

            >


              <div

                className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-gradient-to-b
                from-cyan-300
                via-blue-500
                to-blue-800
                "

              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-5 w-5"
                >

                  <path d="M12 5l-7 7h5v7h4v-7h5z"/>

                </svg>

              </div>



              <span className="text-[15px] font-bold text-white">

                Top

              </span>


            </button>

          )

        }


      </div>


    </div>

  );

}