import mimikyu from "./images/mimikyu.png";
import charmander from "./images/charmander.png";
import treecko from "./images/treecko.png";
import snorlax from "./images/snorlax.png";
import pikachu from "./images/pikachu.png";
import mew from "./images/mew.png";
import gengar from "./images/gengar.png";
import persian from "./images/persian.png";
import litten from "./images/litten.png";
import ekans from "./images/ekans.png";
import koffing from "./images/koffing.png";
import bulbasor from "./images/bulbasor.png";
import blastoise from "./images/blastoise.png";
import tauros from "./images/tauros.png";
import machamp from "./images/machamp.png";

 let pokemonList = [
                {   id:     "mimikyu",
                name:    "Mimikyu",
                type:   "ghost",
                speed:  6,
                strength:   5, 
                weakness: "ghost",
                pokeDexNo: "0", 
                pokeIMG: mimikyu
            },

            {   id: "charmander",
                name: "Charmander",
                type:   "fire",
                speed:  4,
                strength:   3, 
                weakness: "water",
                pokeDexNo: "1",
                pokeIMG: charmander             
            },
        
            {   id: "treecko",
                name: "Treecko",
                type:   "grass",
                speed:  4,
                strength:   2,
                weakness: "fire",
                pokeDexNo: "2",
                pokeIMG: treecko             
            },

            {   id:     "snorlax",
                name:    "Snorlax",
                type:   "normal",
                speed:  2,
                strength:   6,
                weakness: "fighting",
                pokeDexNo: "3" ,
                pokeIMG: snorlax             
            },
    
            {   id:     "pikachu",
                name:    "Pikachu",
                type:   "electric",
                speed:  5,
                strength:   3,
                weakness: "ground",
                pokeDexNo: "4",
                pokeIMG: pikachu               
            },
            {   id:     "mew",
            name:    "Mew",
            type:   "psychic",
            speed:  5   ,
            strength:   5,
            weakness: "ghost",
            pokeDexNo: "5",
            pokeIMG: mew                
        },
        {   id:     "gengar",
            name:    "Gengar",
            type:   "poison",
            speed:  6   ,
            strength:   3 ,   
            weakness: "psychic",
            pokeDexNo: "6",
            pokeIMG: gengar             
        },
        {   id:     "persian",
            name:    "Persian",
            type:   "normal",
            speed:  6  ,
            strength:     4,   
            weakness: "fighting",
            pokeDexNo: "7" ,
            pokeIMG: persian           
        },
        {   id:     "litten",
            name:    "Litten",
            type:   "fire",
            speed:  5  ,
            strength:     4,
            weakness: "water",
            pokeDexNo: "8" ,
            pokeIMG: litten           
        },
        {   id:     "ekans",
            name:    "Ekans",
            type:   "poison",
            speed:  3  ,
            strength:    3,
            weakness: "psychic",
            pokeDexNo: "9"  ,
            pokeIMG: ekans          
        },
        {   id:     "koffing",
            name:    "Koffing",
            type:   "poison",
            speed:  2 ,
            strength:     3,
            weakness: "psychic",
            pokeDexNo: "10" ,
            pokeIMG: koffing           
        },
        {   id:     "bulbasor",
            name:    "Bulbasor",
            type:   "grass",
            speed:  3,
            strength:     3,
            weakness: "fire",
            pokeDexNo: "11"  ,
            pokeIMG: bulbasor         
        },
        {   id:     "blastoise",
            name:    "Blastoise",
            type:   "water",
            speed:  4 ,
            strength:     4,
            weakness: "electric",
            pokeDexNo: "12",
            pokeIMG: blastoise    
        },
    
        {
            id:     "tauros",
            name:   "Tauros",
            type:   "normal",
            speed:     6,
            strength:  5,
            weakness: "fighting",
            pokeDexNo: "13"  ,
            pokeIMG: tauros   
        },
        {
            id:     "machamp",
            name:   "Machamp",
            type:   "figting",
            speed:     3,
            strength:  7,
            weakness: "psychic" ,
            pokeDexNo: "14"  ,
            pokeIMG: machamp
        },
        ]
            
                
export default pokemonList;