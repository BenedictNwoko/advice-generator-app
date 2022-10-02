const adviceButton = document.getElementById('AdviceButton');
const adviceText = document.getElementById('adviceText');
const adviceNumber = document.getElementById('adviceID');


//Configuration For tailwind css
//Added custom colors, font-Family and box-shadow

tailwind.config ={
    theme: {
      colors : {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)'
      },
      extend: {
        fontFamily: {
          manrope: ['Manrope', 'sans-serif']
        },
        boxShadow: {
          '3xl': '0 0 20px 4px hsl(150, 100%, 66%) 0 0 20px 4px hsl(150, 100%, 66%)  0 0 20px 4px hsl(150, 100%, 66%) 0 0 20px 4px hsl(150, 100%, 66%) ',
        }
      }
    }
  }


  adviceButton.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
         const { slip: { id, advice } } = data;
            adviceText.innerHTML = `${advice}`;
            adviceNumber.innerHTML = `${id}`;
        })
  })