// This is our custom script (avoid using arrow functions)
const quizBlockScript = function() {
   let answer = this.querySelector('.quiz_input').value;
    console.log('the element', answer);
};

editor.Components.addType('quiz-mcq-block', {
    model: {
        defaults: {
            script:quizBlockScript,
            // Add some style, just to make the component visible
            style: {
                width: '100%',
                height: '200px',
                background: 'white',
            },
            content: `
               <div>
               <h3>Given below mentions some characters and select which is correct?</h3>
                <ul>
                    <li><input type="radio" class="quiz_input" name="quiz_input" value="a">Given below mentions some characters and select which is correct?</li>              
                    <li><input type="radio" class="quiz_input" name="quiz_input" value="b">B</li>              
                    <li><input type="radio" class="quiz_input" name="quiz_input" value="c">Given below mentions some characters and select which is correct?</li>              
                    <li><input type="radio" class="quiz_input" name="quiz_input" value="d">D</li>
                    <input type="text" name="correctAnswer" style="display: none">            
              </ul>
              <button type="button" class="quiz_btn_submit">Submit</button>
            </div>
            `
        }
    }
});
blockManager.add("quiz-block", {
    label: `
              <div class="gjs-block__media" style='margin-bottom:5px !important'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="70px" height="70px" fill-rule="nonzero" fill="#dddddd"><g transform="translate(24.32,24.32) scale(0.81,0.81)"><g fill-opacity="0" fill="#dddddd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M-30.02469,286.02469v-316.04938h316.04938v316.04938z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-4.56 -1.33972,-8.81067 -3.63672,-12.38867l-1.36914,1.61719c1.895,3.154 3.00586,6.83148 3.00586,10.77148c0,11.579 -9.421,21 -21,21c-11.579,0 -21,-9.421 -21,-21c0,-11.579 9.421,-21 21,-21c5.443,0 10.39391,2.09977 14.12891,5.50977l1.30859,-1.54492c-4.085,-3.705 -9.5025,-5.96484 -15.4375,-5.96484zM43.23633,7.75391l-19.32227,22.80078l-8.13281,-7.58594l-1.36328,1.46289l9.66602,9.01563l20.67969,-24.40039z"></path></g></svg></div>
              <div class="gjs-block-label">MCQ</div>
            `,
    // You can use HTML/SVG inside labels
    content: {type:'quiz-mcq-block'},
    category: "QUIZ",
    attributes: {
        title: "Insert QUIZ",
    },
});

const addMcqEventClick = function (event) {
    if (event.target && event.target.matches("button.quiz_btn_submit")) {
        const targetElement = event.target || event.srcElement;
        targetElement.parentNode.querySelector(".correctAnswer").style.display = "block";
    }
};