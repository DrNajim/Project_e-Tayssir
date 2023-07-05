import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name: "Universite",
    initialState: {
        Universites: [
            { Université: "Université Mohamed V - Rabat",Region:"Rabat", image:"usmba.png", Site_web: "www.um5.ac.ma" },
            { Université: "Université Hassan II - Casablanca",Region:"Casablanca",image:"uh2m.svg",  Site_web: "www.univh2c.ma" },
            { Université: "Université Sidi Mohammed Ben Abdellah - Fès",Region:"Fès",image:"usmba.svg",  Site_web: "www.usmba.ac.ma"},
            { Université: "Université Mohammed Premier - Oujda",Region:"Oujda",image:"ump.svg",  Site_web: "www.ump.ma" },
            { Université: "Université Cadi Ayyad - Marrakech",Region:"Marrakech",image:"usd.svg",  Site_web: "www.uca.ma" },
            { Université: "Université Moulay Smail - Meknès",Region:"Meknès",image:"umi.svg",  Site_web: "www.umi.ac.ma" },
            { Université: "Université Abdelmalek Essaadi - Tétouan",Region:"Tétouan",image:"uae.svg",  Site_web: "www.uae.ma" },
            { Université: "Université Chouaib Doukkali – El jadida",Region:"El jadida",image:"usd.svg",  Site_web: "www.ucd.ac.ma" },
            { Université: "Université Ibn Tofail – Kénitra",Region:"Kénitra",image:"uit.svg",  Site_web: "www.uit.ac.ma" },
            { Université: "Université Ibn Zohr - Agadir",Region:"Agadir",image:"uiz.svg",  Site_web: "www.uiz.ac.ma" },
            { Université: "Université Hassan Premier - Settat",Region:"Settat",image:"uh1.svg",  Site_web: "www.uh1.ac.ma" },
            { Université: "Université Sultan Moulay Slimane – Béni Mellal",Region:"Béni Mellal",image:"usms.svg",  Site_web: "www.usms.ac.ma" }
        ]
    },
    reducers: {
    }
})
// export const { filterlist, thisit } = ListSlice.actions
export default ListSlice.reducer