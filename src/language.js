import i18n from "i18next";
import {initReactI18next} from "react-i18next";


i18n
.use(initReactI18next)
.init({

lng:"en",

resources:{


en:{
translation:{
customer:"Customer Service",
logout:"Logout",
wallet:"Wallet Balance"
}
},


ur:{
translation:{
customer:"کسٹمر سروس",
logout:"لاگ آؤٹ",
wallet:"والٹ بیلنس"
}
}


}


});


export default i18n;