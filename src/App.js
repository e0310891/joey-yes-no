import logo from './logo.svg';
import { useState, useRef } from "react";
import './App.css';

const phrases = [
"No",
"Are you sure?",
"3rd time is the charm?",
"Walao how many times you want to reject",
"Do so many things still reject?! think very funny hor",
"Enough ah",
"Ok lor... we just be fwbs"
];


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 11;
  const [buttonPosition, setButtonPosition] = useState({x:0, y:0});
  const noButtonRef = useRef(null);

  function handleNoClick() {
    //setNoCount(noCount + 1);
    setNoCount(prev => prev + 1);
    const button = noButtonRef.current;
    if (!button) return;

    //const buttonWidth = 100; // Adjust this value based on your button size
    //const buttonHeight = 40; // Adjust this value based on your button size
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const maxX = containerWidth - buttonWidth - 20;
    const maxY = containerHeight - buttonHeight - 20;
  
              
    setButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
  }

  function getNoButtontext() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }


  return (
    <div className="CoolApp">
      <header className="CoolApp-header">
      {yesPressed ? (
        <>
          <img
            alt = "bubu dudu"
            src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ2a29xaXVlbmRsamp1ZzlsZThodHR5ODBmb3BjaG8xNWJ3bzhzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oiwKNY1fVAi7rQUXSv/giphy.gif"

          />
            <div className = "text"> wah finally can tell Johnson you no longer dating someone but official alr :o </div>
            <p className = "CoolApp-para"> bad news... here's to more ragebaiting you hehe </p>
            <body className = "CoolApp-body"> 
            Anyway, I love how you always ask me to incorporate more rest days, but then proceed to make me sleep late hor.
            Jokes aside, rly grateful that you're here caring and supporting me including my workout schedule, 
            it's real comforting and joyful in your presence no matter how spent I am. 
            Most importantly, rly glad that we can be ourselves in front of each other and hash things out calmly i hope :o  
            other than that time you paggro me in Danang and when you giddy but not good ah HHAHAHHA </body>

            <p className = "CoolApp-para2"> I know my physical touch needs more work but am thankful that you see me
            making the effort and not disregarding them so heh   
            Time flies when tgt with you and it's hard to believe that we've been dating for close to 7 months now!
            I nvr had any bad memory of us other than you always saying I stammered on our first date cos I nervous :l 
            Nevertheless, thank you for being such a joy and comfort hehe
            Actly, I've no best memory of us yet too soooo... ...
            Here's to making greater memories tgt including overseas hiking and road trips in future!!
            PS: You still have to compete with my training schedule for another half this year once Sydney ends so kindly stop complaining hehe xoxo </p>
            
        </>
      ) : (
        <>
          <img
            alt = "dudu nervous"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczFmaDR1OXc0bWlmcmVlYml4Y2FiaHl2Y3Q3MXI3ZnVqNjBqeTBybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZWfvNu7bzWmDf93GUP/giphy.gif"
            className="App-logo"  
          />

          <div> 
            Do you want to be officially tgt?
          </div>

          <div>
            <button
              className = "yesButton"
              style = {{fontSize: yesButtonSize, 
                        backgroundColor: 'aquamarine',
                        marginRight: 80
                      }}
              onClick = {() => setYesPressed(true)}
            > 
              Yes
            </button>

            <button onClick = {handleNoClick}
              className = "noButton"
              style = {{backgroundColor: 'pink',
                        transform:`translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
            }}
            >
              {getNoButtontext()}


            </button>
          </div>

      </>            

      )}
      </header>
    </div>


  );
}



export default App;
