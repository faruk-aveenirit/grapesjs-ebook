
//Start Custom Plugins
grapesjs.plugins.add('grapesjs-aveenir-ebook-block', (editor, options) => {

// // Start MCQ Block
//     editor.BlockManager.add('mcq-block', {
//         label: 'MCQ Block',
//         activate: true,
//         content: `
//                     <div class="mcq-block">
//                         <div class="question">What is the capital of France?</div>
//                         <div class="options">
//                             <input type="radio" name="answer" value="paris"><p>Paris</p><br>
//                             <input type="radio" name="answer" value="london"><p>London</p><br>
//                             <input type="radio" name="answer" value="america"><p>America</p><br>
//                             <input type="radio" name="answer" value="canada"><p>Canada</p><br>
//                         </div>
//                         <a href="javascript:void(1)" onclick="showAnswer()">Correct Check</a>
//                         <div class="answer">
//                             <strong>Correct Answer:</strong><p>Paris</p>
//                         </div>
//                     </div>
//                 `,
//         attributes: { class: 'fa fa-question' },
//         category: 'Custom Blocks',
//     });
// // End MCQ Block

// Start Flash Block
    editor.BlockManager.add("flash-block", {
        label: `<div class="gjs-block__media"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0,0,256,256">
  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2.66667,2.66667)"><path d="M22,53c-1.657,0 -3,-1.343 -3,-3v-26c0,-5.72 3.541,-9 9.714,-9h39.285c9.001,0 9.001,6.358 9.001,11v4c0,1.657 -1.343,3 -3,3c-1.657,0 -3,-1.343 -3,-3v-4c0,-5 0,-5 -3.001,-5h-39.285c-3.464,0 -3.714,1.133 -3.714,3v26c0,1.657 -1.343,3 -3,3z" opacity="0.3"></path><path d="M22,52c-1.104,0 -2,-0.896 -2,-2v-26c0,-5.159 3.095,-8 8.714,-8h39.285c8.001,0 8.001,5.083 8.001,10v4c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2v-4c0,-5.32 -0.148,-6 -4.001,-6h-39.285c-3.926,0 -4.714,1.531 -4.714,4v26c0,1.104 -0.896,2 -2,2z" opacity="0.3"></path><path d="M27.544,81.003c-2.294,0 -4.639,-0.292 -6.343,-1.971c-2.043,-2.012 -2.201,-5.013 -2.201,-9.032v-4c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3v4c0,1.034 0,4.179 0.43,4.778c0.008,-0.002 0.366,0.225 2.203,0.225c0.104,0 0.211,-0.001 0.324,-0.002l40.043,-0.001c1.654,0 3,-1.346 3,-3v-26c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3v26c0,4.962 -4.037,9 -9,9h-39.999c-0.151,0.002 -0.305,0.003 -0.457,0.003z" opacity="0.3"></path><path d="M27.558,80.003c-2.092,0 -4.202,-0.252 -5.655,-1.683c-1.766,-1.74 -1.903,-4.546 -1.903,-8.32v-4c0,-1.104 0.896,-2 2,-2c1.104,0 2,0.896 2,2v4c0,2.308 0.055,4.825 0.71,5.471c0.383,0.377 1.468,0.561 3.262,0.529h40.028c2.206,0 4,-1.794 4,-4v-26c0,-1.104 0.896,-2 2,-2c1.104,0 2,0.896 2,2v26c0,4.411 -3.589,8 -8,8h-39.999c-0.147,0.002 -0.295,0.003 -0.443,0.003z" opacity="0.3"></path><path d="M22.01,58c-3.647,0 -6.493,-2.868 -11.206,-7.934c-1.129,-1.213 -1.061,-3.111 0.153,-4.24c1.212,-1.129 3.111,-1.06 4.239,0.153c2.365,2.541 5.602,6.021 6.815,6.021v0c1.202,-0.001 4.436,-3.493 6.797,-6.042c1.125,-1.215 3.023,-1.29 4.239,-0.163c1.216,1.125 1.289,3.024 0.163,4.239c-4.709,5.085 -7.55,7.962 -11.192,7.966c-0.002,0 -0.005,0 -0.008,0z" opacity="0.3"></path><path d="M22.01,57c-3.231,0 -5.95,-2.752 -10.474,-7.615c-0.753,-0.809 -0.707,-2.074 0.102,-2.827c0.808,-0.751 2.075,-0.707 2.826,0.102c3.563,3.83 6.014,6.34 7.547,6.34h0.001c1.524,-0.002 3.972,-2.521 7.529,-6.363c0.752,-0.812 2.015,-0.859 2.827,-0.108c0.81,0.75 0.858,2.016 0.108,2.826c-4.65,5.021 -7.228,7.642 -10.46,7.646c-0.001,-0.001 -0.003,-0.001 -0.006,-0.001z" opacity="0.3"></path><path d="M64.99,51.004c-0.729,0 -1.46,-0.264 -2.037,-0.799c-1.216,-1.125 -1.289,-3.024 -0.163,-4.239c4.709,-5.085 7.55,-7.962 11.192,-7.966c0.002,0 0.005,0 0.008,0c3.647,0 6.493,2.868 11.206,7.934c1.129,1.213 1.061,3.111 -0.153,4.24c-1.212,1.129 -3.111,1.061 -4.239,-0.153c-2.365,-2.541 -5.602,-6.021 -6.815,-6.021v0c-1.202,0.001 -4.436,3.493 -6.797,6.042c-0.59,0.639 -1.395,0.962 -2.202,0.962z" opacity="0.3"></path><path d="M64.991,50.004c-0.486,0 -0.974,-0.176 -1.359,-0.533c-0.81,-0.75 -0.858,-2.016 -0.108,-2.826c4.65,-5.021 7.228,-7.642 10.46,-7.646c0.002,0 0.004,0 0.007,0c3.231,0 5.95,2.752 10.474,7.615c0.753,0.809 0.707,2.074 -0.102,2.827c-0.807,0.752 -2.073,0.707 -2.826,-0.102c-3.564,-3.829 -6.015,-6.339 -7.548,-6.339h-0.001c-1.524,0.002 -3.972,2.521 -7.529,6.363c-0.395,0.426 -0.931,0.641 -1.468,0.641z" opacity="0.3"></path><path d="M22,51c-0.553,0 -1,-0.448 -1,-1v-26c0,-4.645 2.596,-7 7.714,-7h39.285c7.001,0 7.001,4.171 7.001,9v4c0,0.552 -0.447,1 -1,1c-0.553,0 -1,-0.448 -1,-1v-4c0,-4.951 0,-7 -5.001,-7h-39.285c-5.035,0 -5.714,2.527 -5.714,5v26c0,0.552 -0.447,1 -1,1z"></path><path d="M27.626,79.003c-2.551,0 -4.024,-0.412 -5.021,-1.395c-1.49,-1.468 -1.605,-4.079 -1.605,-7.608v-4c0,-0.552 0.447,-1 1,-1c0.553,0 1,0.448 1,1v4c0,3.442 0.156,5.343 1.009,6.183c0.613,0.604 1.795,0.853 3.978,0.817h40.013c2.757,0 5,-2.243 5,-5v-26c0,-0.552 0.447,-1 1,-1c0.553,0 1,0.448 1,1v26c0,3.86 -3.141,7 -7,7h-39.999c-0.128,0.002 -0.253,0.003 -0.375,0.003z"></path><path d="M22.011,56c-2.817,0 -5.408,-2.637 -9.743,-7.296c-0.376,-0.404 -0.354,-1.037 0.051,-1.413c0.405,-0.376 1.037,-0.354 1.414,0.051c4.21,4.525 6.4,6.659 8.278,6.659c0.001,0 0.002,0 0.003,0c1.87,-0.002 4.056,-2.142 8.262,-6.684c0.373,-0.407 1.008,-0.43 1.413,-0.055c0.405,0.375 0.43,1.008 0.054,1.413c-4.455,4.811 -6.91,7.322 -9.727,7.325c-0.002,0 -0.004,0 -0.005,0z"></path><path d="M64.991,49.004c-0.243,0 -0.487,-0.088 -0.68,-0.266c-0.405,-0.375 -0.43,-1.008 -0.054,-1.413c4.455,-4.811 6.91,-7.322 9.727,-7.325c0.002,0 0.004,0 0.005,0c2.817,0 5.408,2.637 9.743,7.296c0.376,0.404 0.354,1.037 -0.051,1.413c-0.405,0.376 -1.037,0.354 -1.414,-0.051c-4.21,-4.525 -6.4,-6.659 -8.278,-6.659c-0.001,0 -0.002,0 -0.003,0c-1.87,0.002 -4.056,2.142 -8.262,6.684c-0.196,0.213 -0.464,0.321 -0.733,0.321z"></path></g>
  </svg></div>
  <div class="gjs-block-label">Flash</div>
`,
        content: `<div  style='margin-top:50px !important; width: 100%; max-width: 300px;  overflow: hidden; position: relative;  margin: 0 auto;' class="flashcontainer">
    <div class="thecard">
    <div class="thefront" style='height: 300px;'><h1>Front of Card</h1><p style='text-align:center'>This is the front of the card. It contains important information. Please see overleaf for more details.</p> <p style=' color:red; text-align:center;   font-size: 60px !important;' class='questionmark'>?</p></div>
    <div class="theback" style='height: 300px;'><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>

  </div>
</div>`,
        category:'Custom Blocks',
        attributes: {
            title: "Insert FlipCard",
        },
    });
// End Flash Block

// Start Matching Block
    editor.BlockManager.add("matching-block", {
        label: `<div class="gjs-block__media"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px" viewBox="0,0,256,256"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(0.5,0.5)"><path d="M485,155h-67.373c-2.44641,-0.84761 -5.15169,-0.45984 -7.26149,1.04087c-2.1098,1.5007 -3.36363,3.92905 -3.36551,6.51813c0,20.43454 -16.56546,37 -37,37c-20.43454,0 -37,-16.56546 -37,-37c-0.00222,-2.58916 -1.25629,-5.01744 -3.36622,-6.5181c-2.10993,-1.50065 -4.81527,-1.88844 -7.26178,-1.0409h-67.372c-1.35408,-0.00143 -2.68612,0.34277 -3.87,1h-57.681c-4.29122,-25.76391 -26.58117,-44.64833 -52.7,-44.64833c-26.11883,0 -48.40878,18.88442 -52.7,44.64833h-62.049c-4.41828,0 -8,3.58172 -8,8v69c0,4.41828 3.58172,8 8,8h0.875c20.71068,0 37.5,16.78932 37.5,37.5c0,20.71068 -16.78932,37.5 -37.5,37.5h-0.875c-4.41828,0 -8,3.58172 -8,8v69c0,4.41828 3.58172,8 8,8h228c2.42795,0.00082 4.72435,-1.10322 6.24,-3h62.54c2.41579,0.69475 5.01762,0.21469 7.02641,-1.29643c2.00879,-1.51112 3.19135,-3.87787 3.19359,-6.39157c0,-20.43454 16.56546,-37 37,-37c20.43454,0 37,16.56546 37,37c0.00223,2.51371 1.18479,4.88046 3.19359,6.39157c2.00879,1.51112 4.61062,1.99117 7.02641,1.29643h67.78c4.41828,0 8,-3.58172 8,-8v-227c0,-4.41828 -3.58172,-8 -8,-8zM246,385h-212v-53.475c26.50999,-3.62339 46.27054,-26.26854 46.27054,-53.025c0,-26.75646 -19.76055,-49.40161 -46.27054,-53.025v-53.475h61.365c4.36877,0.00056 7.9301,-3.50379 8,-7.872c0.3499,-20.39856 16.98594,-36.75168 37.3875,-36.75168c20.40156,0 37.0376,16.35312 37.3875,36.75168c0.0699,4.36821 3.63123,7.87256 8,7.872h59.86v51.921c-25.82985,5.51856 -44.40883,28.16867 -44.769,54.579c0.01395,26.17587 18.94771,48.50611 44.769,52.8zM477,382h-54.641c-3.89129,-25.91442 -26.15405,-45.08381 -52.359,-45.08381c-26.20495,0 -48.46771,19.16939 -52.359,45.08381h-54.641v-60.178c0.00056,-4.36877 -3.50379,-7.9301 -7.872,-8c-20.472,-0.18369 -36.92575,-16.9158 -36.766,-37.388c-0.01442,-5.5278 1.18373,-10.9915 3.51,-16.006c6.55845,-11.96515 19.1113,-19.41041 32.756,-19.428v0c4.73231,-1.0215 8.17517,-5.1137 8.372,-9.951v-60.049h54.662c3.94606,25.85639 26.18223,44.95645 52.338,44.95645c26.15577,0 48.39194,-19.10006 52.338,-44.95645h54.662z"></path></g></g></svg></div>
  <div class="gjs-block-label">Matching</div>
`,
        content: ` <removeItem>
  <div  style='margin-top:30px !important' class='js-matching-container'>
   <div class='line-item top-angle-line'> </div>
   <div class='line-item bottom-angle-line'> </div>

    <div class='line-item top-linear-line'> </div>
      <div class='line-item bottom-linear-line'> </div>

  <table class='mcq-matching' style='width:100%; border:1px dashed #9e9e9e; box-shadow: 0 0 5px #333'>
  <tr>
    <td  class='js-left-opt '  > <h5  data-option="a" class='option-handler'> Option A </h5></td>
    <td  data-option="b" class='js-right-ans   option-handle' ><img  data-option="b"  class='option-handler' data-gjs-type="image" draggable="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="gjs-plh-image gjs-selected"></td>
  </tr>
  <tr>
    <td  data-option="c"  class='js-right-opt option-handle' editable="true"><h5  data-option="c" class='option-handler'>Option B</h5></td>
    <td   data-option="d" class='js-right-ans option-handle'><img   data-option="d"  class='option-handler' data-gjs-type="image" draggable="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="gjs-plh-image gjs-selected"></td>
  </tr>
  </table>
  <div>

  <button  class='matchingAanswer general-btn'>Show Correct Answer</button>
  <div class='hidden-item'>
  <h2 type='text' class='hiddenmatchingAanswer'  />H</h2>
   <div>   H for Horizontal Matching & A for Cross Matching</div>
    </div> </removeItem>
  `,
        category: 'Custom Blocks',
        attributes: {
            title: "Matching",
            class: "monir",
        },
    });
// End Matching Block

// Start Filling Gaps Block
    editor.BlockManager.add("filling-gaps", {
        label: `
      <div class="gjs-block__media"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px" viewBox="0,0,256,256"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M32,122h10c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3h-10c-3.9,0 -7,-3.1 -7,-7v-10c0,-1.7 -1.3,-3 -3,-3c-1.7,0 -3,1.3 -3,3v10c0,7.2 5.8,13 13,13zM86,122h10c7.2,0 13,-5.8 13,-13v-10c0,-1.7 -1.3,-3 -3,-3c-1.7,0 -3,1.3 -3,3v10c0,3.9 -3.1,7 -7,7h-10c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3zM42,6h-10c-7.2,0 -13,5.8 -13,13v10c0,1.7 1.3,3 3,3c1.7,0 3,-1.3 3,-3v-10c0,-3.9 3.1,-7 7,-7h10c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3zM86,6c-1.7,0 -3,1.3 -3,3c0,0.2 0,0.3 0.1,0.5c-0.1,0.2 -0.1,0.3 -0.1,0.5v9c0,7.2 5.8,13 13,13h9c0.2,0 0.3,0 0.5,-0.1c0.2,0 0.3,0 0.5,0c1.7,0 3,-1.3 3,-3c0,-12.6 -10.3,-22.9 -23,-22.9zM96,26c-3.9,0 -7,-3.1 -7,-7v-6.7c7,1.2 12.5,6.7 13.7,13.7zM39,59c0,1.7 1.3,3 3,3h44c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3h-44c-1.7,0 -3,1.3 -3,3zM89,74c0,-1.7 -1.3,-3 -3,-3h-44c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h44c1.7,0 3,-1.3 3,-3zM69.2,89c0,-1.7 -1.3,-3 -3,-3h-24c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h24c1.7,0 3,-1.3 3,-3z"></path></g></g></svg></div>
      <div class="gjs-block-label">Filling Gaps</div>
    `,
        content: `<div style='margin:5px auto; border: 1px solid #efefef'>
    <h2  style='margin-top:30px !important; margin-left:10px'>Fill in the gaps</h2>
    <div class='js-filling-container'>

    <div class='js-filling-textarea' style='width:90% !important; font-size:18px; margin:0px auto; padding:15px'> __________ is the president of russia</div>
        <div>
            <button  class='js-fillings-gaps general-btn'>Show Correct Answer</button>
            <div class='hidden-item'>
            <h2 type='text' class='hiddenmatchingAanswer'>Putin</h2>
      </div>
      </div>
    </div>
  </div>
  `,
        category: 'Custom Blocks',
        attributes: {
            title: "Filling Gaps",
            class: "fillings-gaps",
        },
    });
// End Filling Gaps Block

    editor.BlockManager.add("quiz-block", {
        label: `
      <div class="gjs-block__media" style='margin-bottom:5px !important'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="70px" height="70px" fill-rule="nonzero" fill="#dddddd"><g transform="translate(24.32,24.32) scale(0.81,0.81)"><g fill-opacity="0" fill="#dddddd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M-30.02469,286.02469v-316.04938h316.04938v316.04938z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-4.56 -1.33972,-8.81067 -3.63672,-12.38867l-1.36914,1.61719c1.895,3.154 3.00586,6.83148 3.00586,10.77148c0,11.579 -9.421,21 -21,21c-11.579,0 -21,-9.421 -21,-21c0,-11.579 9.421,-21 21,-21c5.443,0 10.39391,2.09977 14.12891,5.50977l1.30859,-1.54492c-4.085,-3.705 -9.5025,-5.96484 -15.4375,-5.96484zM43.23633,7.75391l-19.32227,22.80078l-8.13281,-7.58594l-1.36328,1.46289l9.66602,9.01563l20.67969,-24.40039z"></path></g></svg></div>
      <div class="gjs-block-label">MCQ</div>
    `, // You can use HTML/SVG inside labels
        content: `<div  style='margin-top:0px !important; border:1px solid #efefef; margin-bottom:20px' class='mcqblock el-X'>
            <div   style="box-sizing: border-box; font-size:22px; color:#333; padding: 10px;">How are you feeling today?</div>
           <div class='mcqoption'>
            <table style='width:100%'>
                <tr>
                    <td> <input name="contact" type="radio" /></td>
                    <td style='width:50%; '><div style='font-size: 16px'> Excited </div> </td>
                    <td> <input name="contact" type="radio" /></td>
                    <td style='width:50%'><div style='font-size: 16px'> Okayish </div> </td>
                </tr>
                <tr>
                    <td> <input name="contact" type="radio" /></td>
                    <td style='width:50%'><div style='font-size: 16px'> Sad </div> </td>
                    <td> <input name="contact" type="radio" /></td>
                    <td style='width:50%'><div style='font-size: 16px'> Angry</div> </td>
                </tr>
                <tr>
              <td colspan='4'><button style='margin:0 auto; font-size:18px; margin:10px auto; padding: 15px 5px;' class='checkanswer'>Check Answer</button> <br />
              <div class='correctAnswer' style='background:green; padding:10px; color:#fff; font-size:20px' >   Excited </div></td>
              </tr>
            </table>
          </div>`,
        category: 'Custom Blocks',
        attributes: {
            title: "Insert QUIZ",
        },
    });


    editor.BlockManager.add("Audio-block", {
        id: 'jsFunc("randomId")',
        label: "Audio Block",
        media: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0,0,256,256"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M24.15625,3c-0.30469,0 -0.60547,0.0625 -0.90625,0.15625c-0.60547,0.19141 -1.18359,0.55078 -1.6875,1.0625l-11.75,11.75h-6.8125c-1.66797,0 -3.03125,1.36328 -3.03125,3.03125v12c0,1.66797 1.36328,3.03125 3.03125,3.03125h6.8125l11.71875,11.65625c1.11719,1.12109 2.55078,1.61328 3.71875,1.0625c1.17578,-0.55469 1.75,-1.89062 1.75,-3.4375v-37c0,-1.5 -0.76562,-2.74609 -1.9375,-3.15625c-0.29297,-0.10156 -0.60156,-0.15625 -0.90625,-0.15625zM24.1875,5c0.10156,0 0.17969,0.00781 0.25,0.03125c0.28516,0.09766 0.5625,0.35156 0.5625,1.28125v37c0,1.06641 -0.35156,1.54297 -0.59375,1.65625c-0.24219,0.11328 -0.73047,0.125 -1.5,-0.65625l-12.59375,-12.59375c-0.01953,-0.01172 -0.04297,-0.02344 -0.0625,-0.03125c0.07422,0.06641 -0.25,-0.56641 -0.25,-0.9375v-11.5c0,-0.37109 0.33594,-1.01172 0.25,-0.9375c0.02344,-0.01953 0.04297,-0.03906 0.0625,-0.0625l12.65625,-12.625c0.46875,-0.47266 0.91016,-0.62109 1.21875,-0.625zM38.28125,6.8125c-0.4375,0.07422 -0.77344,0.42969 -0.82422,0.87109c-0.04687,0.44141 0.19531,0.86328 0.60547,1.03516c5.94922,3 10,9.15234 10,16.28125c0,7.12891 -4.05078,13.28125 -10,16.28125c-0.36719,0.125 -0.625,0.45313 -0.66797,0.83594c-0.04297,0.38672 0.14063,0.76172 0.47266,0.96484c0.32813,0.19922 0.74609,0.19141 1.07031,-0.01953c6.60156,-3.33203 11.125,-10.16797 11.125,-18.0625c0,-7.89453 -4.52344,-14.73047 -11.125,-18.0625c-0.17187,-0.09766 -0.36719,-0.14062 -0.5625,-0.125c-0.03125,0 -0.0625,0 -0.09375,0zM34.71875,12.125c-0.44531,0.05469 -0.80078,0.40234 -0.86328,0.84766c-0.06641,0.44141 0.17188,0.875 0.58203,1.05859c3.90234,2.10547 6.5625,6.21484 6.5625,10.96875c0,4.73828 -2.64844,8.85938 -6.53125,10.96875c-0.48437,0.26563 -0.66016,0.875 -0.39062,1.35938c0.26563,0.48438 0.875,0.66016 1.35938,0.39063c4.50781,-2.44922 7.5625,-7.23437 7.5625,-12.71875c0,-5.5 -3.0625,-10.30469 -7.59375,-12.75c-0.17969,-0.10156 -0.38672,-0.14453 -0.59375,-0.125c-0.03125,0 -0.0625,0 -0.09375,0zM3,18.03125h5.1875c-0.12891,0.38281 -0.1875,0.80078 -0.1875,1.21875v11.5c0,0.41797 0.0625,0.83203 0.1875,1.21875h-5.1875c-0.53906,0 -0.96875,-0.42969 -0.96875,-0.96875v-12c0,-0.53906 0.42969,-0.96875 0.96875,-0.96875zM30.53125,18.40625c-0.48437,0.05859 -0.85156,0.45703 -0.875,0.94531c-0.02344,0.48438 0.30469,0.91797 0.78125,1.02344c2.04688,0.53516 3.5625,2.40234 3.5625,4.625c0,2.22266 -1.51562,4.08984 -3.5625,4.625c-0.53516,0.13672 -0.85547,0.68359 -0.71875,1.21875c0.13672,0.53516 0.68359,0.85547 1.21875,0.71875c2.91016,-0.76172 5.0625,-3.42578 5.0625,-6.5625c0,-3.13672 -2.15234,-5.80078 -5.0625,-6.5625c-0.13281,-0.03906 -0.26953,-0.04687 -0.40625,-0.03125z"></path></g></svg>`,
        // Use `video` component
        content: `<table style='width:100%; padding:10px 20px'>
                  <tr>
                      <td   style='width:220px; padding:10px; width:150px; heith:80px; box-sizing: border-box' >
                       <video  src='https://download.samplelib.com/mp3/sample-3s.mp3'     controls="" style="box-sizing: border-box; width: 220px; height: 32px;"></video>
                    </td>
                  </tr>
                  <tr>
                    <td >
                      <div style='box-sizing:border-box' data-gjs-highlightable="true" data-gjs-type="text" draggable="true" class="cke_editable cke_editable_inline cke_contents_ltr cke_show_borders" contenteditable="false" aria-readonly="false" spellcheck="false">Insert your text here</div>  
                    </td>
                  </tr>
            </table>
          `,
        // The component `image` is activatable (shows the Asset Manager).
        // We want to activate it once dropped in the canvas.
        activate: true,
        category: 'Custom Blocks',
        // select: true, // Default with `activate: true`
    });

    editor.BlockManager.add("autoread-block", {
        id: 'jsFunc("randomId")',
        label: "TTS Para",
        media: `<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px" viewBox="0,0,256,256"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M64,14c-27.61424,0 -50,22.38576 -50,50c0,27.61424 22.38576,50 50,50c27.61424,0 50,-22.38576 50,-50c0,-27.61424 -22.38576,-50 -50,-50z" fill="#fff8f8"></path><path d="M64,117c-29.2,0 -53,-23.8 -53,-53c0,-29.2 23.8,-53 53,-53c29.2,0 53,23.8 53,53c0,29.2 -23.8,53 -53,53zM64,17c-25.9,0 -47,21.1 -47,47c0,25.9 21.1,47 47,47c25.9,0 47,-21.1 47,-47c0,-25.9 -21.1,-47 -47,-47z" fill="#212223"></path><path d="M64,84.5c-1.7,0 -3,-1.3 -3,-3v-30c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v30c0,1.7 -1.3,3 -3,3zM74,84.5c-1.7,0 -3,-1.3 -3,-3v-15c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v15c0,1.7 -1.3,3 -3,3zM84,84.5c-1.7,0 -3,-1.3 -3,-3v-20c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v20c0,1.7 -1.3,3 -3,3zM54,84.5c-1.7,0 -3,-1.3 -3,-3v-20c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v20c0,1.7 -1.3,3 -3,3zM44,84.5c-1.7,0 -3,-1.3 -3,-3v-9c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v9c0,1.7 -1.3,3 -3,3z" fill="#212223"></path></g></g></svg>`,
        // Use `video` component
        category: 'Custom Blocks',
        content: `<table class='ttspara'  style='width:100%; padding:10px 20px'>
          <tr>
          <td style='width:120px; padding:10px;  box-sizing: border-box' >
            <svg class='js-tts-play' style='cursor:pointer' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px" viewBox="0,0,256,256"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M64,14c-27.61424,0 -50,22.38576 -50,50c0,27.61424 22.38576,50 50,50c27.61424,0 50,-22.38576 50,-50c0,-27.61424 -22.38576,-50 -50,-50z" fill="#fff8f8"></path><path d="M64,117c-29.2,0 -53,-23.8 -53,-53c0,-29.2 23.8,-53 53,-53c29.2,0 53,23.8 53,53c0,29.2 -23.8,53 -53,53zM64,17c-25.9,0 -47,21.1 -47,47c0,25.9 21.1,47 47,47c25.9,0 47,-21.1 47,-47c0,-25.9 -21.1,-47 -47,-47z" fill="#212223"></path><path d="M64,84.5c-1.7,0 -3,-1.3 -3,-3v-30c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v30c0,1.7 -1.3,3 -3,3zM74,84.5c-1.7,0 -3,-1.3 -3,-3v-15c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v15c0,1.7 -1.3,3 -3,3zM84,84.5c-1.7,0 -3,-1.3 -3,-3v-20c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v20c0,1.7 -1.3,3 -3,3zM54,84.5c-1.7,0 -3,-1.3 -3,-3v-20c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v20c0,1.7 -1.3,3 -3,3zM44,84.5c-1.7,0 -3,-1.3 -3,-3v-9c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v9c0,1.7 -1.3,3 -3,3z" fill="#212223"></path></g></g></svg>
            <svg class='js-tts-pause' style='cursor:pointer; display:none'  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px" viewBox="0,0,256,256"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M64,14c-27.61424,0 -50,22.38576 -50,50c0,27.61424 22.38576,50 50,50c27.61424,0 50,-22.38576 50,-50c0,-27.61424 -22.38576,-50 -50,-50z" fill="#ffffff"></path><path d="M64,117c-29.2,0 -53,-23.8 -53,-53c0,-29.2 23.8,-53 53,-53c29.2,0 53,23.8 53,53c0,29.2 -23.8,53 -53,53zM64,17c-25.9,0 -47,21.1 -47,47c0,25.9 21.1,47 47,47c25.9,0 47,-21.1 47,-47c0,-25.9 -21.1,-47 -47,-47z" fill="#161717"></path><path d="M57,79.5c-1.7,0 -3,-1.3 -3,-3v-25c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v25c0,1.7 -1.3,3 -3,3zM71,79.5c-1.7,0 -3,-1.3 -3,-3v-25c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3v25c0,1.7 -1.3,3 -3,3z" fill="#161717"></path></g></g></svg>
          </td>
          <td >
          <div style='box-sizing:border-box' data-gjs-highlightable="true" data-gjs-type="text" draggable="true" class="cke_editable cke_editable_inline cke_contents_ltr cke_show_borders" contenteditable="false" aria-readonly="false" spellcheck="false">Insert your text here</div>  </td>
          </tr>
            </table>
  `,
        // The component `image` is activatable (shows the Asset Manager).
        // We want to activate it once dropped in the canvas.
        activate: true,
        // select: true, // Default with `activate: true`
    });


    editor.BlockManager.add('mp3upload', {
        label: "Upload media Files",
        category: 'Custom Blocks',
        media: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0,0,256,256"><g fill="#feffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M6,3v26h20v-19.40039l-0.30078,-0.29883l-6,-6l-0.29883,-0.30078zM8,5h10v6h6v16h-16zM20,6.40039l2.59961,2.59961h-2.59961zM16,13l-4,4h3v5h2v-5h3zM12,23v2h8v-2z"></path></g></g></svg>`,
        render: ({model, el}) => {
            el.addEventListener('click', () => {
                document.getElementById('model-popup').style.display = 'block'
            })
        },
    });

   editor.BlockManager.add('audio-block', {
        label: 'Audio Block',
        content: {
            type: 'audio',
            src: 'path/to/default-audio.mp3', // Provide a default audio file if needed
            style: {
                width: '100%',
                height: 'auto',
            },
        },
        attributes: { class: 'fa fa-music' },
        category: 'Custom Blocks',
    });

});
// JavaScript function to show the correct answer
// function showAnswer() {
//     var answerBlock = document.querySelector('.answer');
//     if (answerBlock.style.display === 'none') {
//         answerBlock.style.display = 'block';
//     }
// }

function handleAudioChange(input) {
    const audioPlayer = document.getElementById('audioPlayer');
    const file = input.files[0];

    if (file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
    } else {
        audioPlayer.src = '';
    }
}

//End Grapesjs Custom Plugins