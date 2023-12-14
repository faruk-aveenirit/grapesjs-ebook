<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>GrapesJS Preset Webpage</title>
    <link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<!--    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>-->
    <script src="https://unpkg.com/grapesjs"></script>
    <script src="https://unpkg.com/grapesjs-preset-newsletter"></script>
    <script src="https://unpkg.com/grapesjs-preset-webpage"></script>
      <script src="https://unpkg.com/grapesjs-blocks-basic"></script>
<!--      <script src="https://unpkg.com/grapesjs-blocks-table"></script>-->
      <script src="./grapesjs-blocks-table.min.js"></script>
<!--    <script src="https://unpkg.com/grapesjs-video-embed-manager"></script>  -->
    <script src="https://unpkg.com/grapesjs-plugin-ckeditor"></script>
    <script src="./custom-plugins.js"></script>
<!--    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>  -->
    <style>
      body, html {
        /*height: 100%;*/
        margin: 0;
      }
      .app-wrap {
        height: 100%;
        width: 100%;
        display: flex;
      }
      .editor-wrap  {
        widtH: 100%;
        height: 100%;
      }
      .pages-wrp, .pages {
        display: flex;
        flex-direction: column
      }
      .pages-wrp {
        background: #333;
        padding: 5px;
      }
      .add-page {
        background: #444444;
        color: white;
        padding: 5px;
        border-radius: 2px;
        cursor: pointer;
        white-space: nowrap;
        margin-bottom: 10px;
      }
      .page {
        background-color: #444;
        color: white;
        padding: 5px;
        margin-bottom: 5px;
        border-radius: 2px;
        cursor: pointer;

        &.selected {
          background-color: #706f6f
        }
      }

      .page-close {
        opacity: 0.5;
        float: right;
        background-color: #2c2c2c;
        height: 20px;
        display: inline-block;
        width: 17px;
        text-align: center;
        border-radius: 3px;

        &:hover {
          opacity: 1;
        }
      }
      .d-done{
          display: none;
      }
    </style>
  </head>
  <body>
  <div class="app-wrap">
    <div class="pages-wrp">
      <div class="add-page" @click="addPage">Add new page</div>
      <div class="pages">
        <div v-for="page in pages" :key="page.id" :class="{page: 1, selected: isSelected(page) }" @click="selectPage(page.id)">
          {{ page.get('name') || page.id }} <span v-if="!isSelected(page)" @click="removePage(page.id)" class="page-close">&Cross;</span>
        </div>
      </div>
    </div>
    <div class="editor-wrap">
      <div id="gjs"></div>
    </div>
  </div>
  <div id="model-popup" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
          <span class="close">&times;</span>
          <div class="tts-block">

              <section>
                  <!-- <select id="voiceSelect"></select> -->
                  <div class='voice-block'>
                      <p class="lead text-light mt-4">Select Voice</p>
                      <select id="voices" class="form-select bg-secondary text-light"> </select>
                  </div>
                  </select>
                  <div class="d-flex mt-4 text-light">
                      <div>
                          <p class="lead">Volume</p>
                          <input type="range"
                                 class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                 min="0" max="1" value="1" step="0.1" id="volume"/>
                          <span id="volume-label" class="ms-2">1</span>
                      </div>
                      <div>
                          <p class="lead">Rate</p>
                          <input type="range"
                                 class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                 min="0.1" max="10" value="1" id="rate" step="0.1"/>
                          <span id="rate-label" class="ms-2">1</span>
                      </div>
                      <div>
                          <p class="lead">Pitch</p>
                          <input type="range"
                                 class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                 min="0" max="2" value="1" step="0.1" id="pitch"/>
                          <span id="pitch-label" class="ms-2">1</span>
                      </div>
                  </div>

                  <div class="mb-5 pt-5">
                      <button id="start"
                              class="btn btn-primary">Start
                      </button>
                      <button id="pause"
                              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pause
                      </button>
                      <button id="resume"
                              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Resume
                      </button>
                      <button id="cancel"
                              class="btn btn-danger">Cancel
                      </button>
                  </div>
              </section>
          </div>
      </div>
  </div>
  <script src="./main.js"></script>
<!--  <script src="./blocks.js"></script>-->
    <script type="text/javascript">

        // const editor = grapesjs.init({
        //     container: '#gjs',
        //     storageManager: false,
        //     plugins: ['grapesjs-preset-newsletter','grapesjs-blocks-basic','grapesjs-plugin-ckeditor','grapesjs-blocks-table','grapesjs-mcq-block'],
        //     pluginsOpts: {
        //         'grapesjs-preset-newsletter': {},
        //         'grapesjs-blocks-basic': {
        //             category:"Basic",
        //             blocks:['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
        //         },
        //         'grapesjs-plugin-ckeditor': {},
        //         'grapesjs-blocks-table': {},
        //     },
        //     pageManager: {
        //         pages: [{
        //             id: 'page-1',
        //             name: 'Page 1',
        //             component: '<div id="comp1">Page 1</div>',
        //             styles: '#comp1 { color: red }',
        //         }, {
        //             id: 'page-2',
        //             name: 'Page 2',
        //             component: '<div id="comp2">Page 2</div>',
        //             styles: '#comp2 { color: green }',
        //         }, {
        //             id: 'page-3',
        //             name: 'Page 3',
        //             component: '<div id="comp3">Page 3</div>',
        //             styles: '#comp3 { color: blue }',
        //         }]
        //     },
        //     domComponents: { storeWrapper: 1 },
        //     deviceManager: {
        //         devices: [
        //             {
        //                 id: 'Desktop',
        //                 name: "Desktop",
        //                 width: "800", // default size
        //                 height: "800px",
        //                 widthMedia: "", // this value will be used in CSS @media
        //             }
        //         ],
        //     },
        // });
</script>
  </body>
</html>

