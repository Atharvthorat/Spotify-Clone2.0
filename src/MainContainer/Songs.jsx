import BellaCiao from "../assets/BellaCiao.png";
import Beast from "../assets/beast.png";
import Joker from "../assets/joker.png";
import PeakyBlinder from "../assets/peakyBlinder.png";
import Veera from "../assets/veera.png";
import Woman from "../assets/YourWoman.png";
import Charlie from "../assets/Charlie.png";
import MaskOff from "../assets/maskOff.png";
import HeyMama from "../assets/Heymama.png";
import Turkish from "../assets/Turkish.png";
import Adiye from "../Songs/Adiye.mp3"
import HeyMAMa from "../Songs/HeyMAMA.mp3"
import PeakyBlinderSong from "../Songs/Tommy.mp3"





const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Bella Ciao",
      artist: "El Profesor",
      song: Adiye,
      imgSrc: BellaCiao,
    },
    {
      id: 2,
      favourite: false,
      songName: "Beast",
      artist: "Anirudh Ravichander",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbeast.mp3?alt=media&token=ebf29a01-079b-44eb-969a-57ee66a15ee8",
      imgSrc:Beast,
     },
    {
      id: 3,
      favourite: false,
      songName: "Joker - Rock and Roll",
      artist: "Hildur Guðnadóttir",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fjoker.mp3?alt=media&token=9e79751a-726d-4359-8a26-116db925f6ff",
      imgSrc:Joker 
 ,    },
    {
      id: 4,
      favourite: false,
      songName: "I Am A Peaky Blinder",
      artist: "Otnicka",
      song: PeakyBlinderSong,
      imgSrc:PeakyBlinder,
     },
    {
      id: 5,
      favourite: false,
      songName: "Naanga Vera Maari",
      artist: "Yuvan Shankar Raja",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
      imgSrc:Veera,
     },
    {
      id: 6,
      songName: "Your Woman",
      artist: "White Town",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3",
      imgSrc:Woman,
     },
    {
      id: 7,
      favourite: false,
      songName: "Charlie",
      artist: "Gopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
      imgSrc:Charlie,
     },
    {
      id: 8,
      favourite: false,
      songName: "Mask Off",
      artist: "Future",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
      imgSrc:MaskOff,
     },
    {
      id: 9,
      favourite: false,
      songName: "Hey Mama",
      artist: "David Guetta",
      song: HeyMAMa ,
      imgSrc:HeyMama,
     },
    {
      id: 10,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
      imgSrc:Turkish,
     },
  ];
  
  export { Songs };
  