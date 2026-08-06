import { useNavigate } from "react-router-dom";

import Promo1 from "./assets/PROMO11.png";
import Promo2 from "./assets/Promo2.gif";
import Promo3 from "./assets/Promo3.gif";


export default function PromoCards(){

  const navigate = useNavigate();


  return (

    <div
      className="
        w-full
        px-3
        pt-2
        pb-2
      "
    >


      <div
        className="
          grid
          grid-cols-2
          gap-3
          h-[163px]
        "
      >


        {/* LEFT SIDE */}

        <div
          className="
            flex
            flex-col
            gap-3
          "
        >


          {/* VIP */}

          <div

            onClick={()=>navigate("/vip")}

            className="
              h-[70px]
              rounded-2xl
              overflow-hidden
              border
              border-cyan-400/50
              cursor-pointer
              transition
              hover:scale-[1.03]
            "

          >

            <img

              src={Promo1}

              alt="VIP"

              className="
                w-full
                h-full
                object-fill
              "

            />

          </div>




          {/* LUCKY */}

          <div

            className="
              h-[70px]
              rounded-2xl
              overflow-hidden
              border
              border-cyan-400/50
              cursor-pointer
              transition
              hover:scale-[1.03]
            "

          >

            <img

              src={Promo2}

              alt="Lucky"

              className="
                w-full
                h-full
                object-fill
              "

            />

          </div>


        </div>





        {/* RIGHT BIG INVITE */}


        <div

          onClick={()=>navigate("/invite-bonus")}

          className="
            h-[145px]
            rounded-2xl
            overflow-hidden
            border
            border-cyan-400/50
            cursor-pointer
            transition
            hover:scale-[1.03]
          "

        >

          <img

            src={Promo3}

            alt="Invite"

            className="
              w-full
              h-full
              object-fill
            "

          />

        </div>



      </div>


    </div>

  );

}