const editor = grapesjs.init({
    container: '#gjs',
    storageManager: false,
    plugins: ['grapesjs-preset-newsletter','grapesjs-plugin-ckeditor','gjs-blocks-basic','grapesjs-blocks-table','grapesjs-aveenir-ebook-block'],
    pluginsOpts: {
        'grapesjs-preset-newsletter': {},
        'gjs-blocks-basic': {
            category:"Custom Blocks",
            blocks:['link', 'image', 'video', 'map'],
        },
        'grapesjs-plugin-ckeditor': {},
        'grapesjs-blocks-table': {
            tblResizable:true,
            cellsResizable:true,
            componentCell:"custom-table-td",
            componentCellHeader:"custom-table-th",
            componentRow:"custom-table-tr",
        },
        'grapesjs-aveenir-ebook-block':{}
    },
    pageManager: {
        pages: [{
            id: 'page-1',
            name: 'Page 1',
            component: '<div id="comp1">Page 1</div>',
            styles: '#comp1 { color: red }',
        }, {
            id: 'page-2',
            name: 'Page 2',
            component: '<div id="comp2">Page 2</div>',
            styles: '#comp2 { color: green }',
        }, {
            id: 'page-3',
            name: 'Page 3',
            component: '<div id="comp3">Page 3</div>',
            styles: '#comp3 { color: blue }',
        }]
    },
    domComponents: { storeWrapper: 1 },
    deviceManager: {
        devices: [
            {
                id: 'Desktop',
                name: "Desktop",
                width: "800", // default size
                height: "800px",
                widthMedia: "", // this value will be used in CSS @media
            }
        ],
    },
});

const pm = editor.Pages;
var pn = editor.Panels;
var modal = editor.Modal;
var cmdm = editor.Commands;
const blockManager = editor.Blocks;

editor.getModel().set('dmode', 'absolute');

/* editor.Panels.getButton('views', 'open-blocks').set('active', true) */
// editor.Panels.getButton('views', 'open-blocks').set('active', true)
editor.on("component:selected", function(args) { args.set("resizable", true); });
editor.Panels.addButton("options", [
    {
        id: "save-db",
        className: "fa fa-floppy-o",
        command: "save-db",
        attributes: {title: "Save Content"},
    },
]);
// Add the command
editor.Commands.add("save-db", {
    run: function (editor, sender) {
        sender && sender.set("active", 0); // turn off the button
        editor.store();
        // loading.start();
        // let htmldata = editor.getHtml();
        // let cssdata = editor.getCss();
        // let htmlWithCss = editor.runCommand("gjs-get-inlined-html");
// Get the HTML/CSS code from the page component
        const component = page.getMainComponent();
        const htmlPage = editor.getHtml({ component });
        const cssPage = editor.getCss({ component });
        console.log(cssdata)

        // const dataset = {
        //     htmldata: htmldata,
        //     cssdata: cssdata,
        //     inlinehtmlcss: htmlWithCss,
        //     pageID: activePage,
        // };
        // postData("/ebookpage/updatePage", dataset).then((data) => {
        //     editorChanged = 0;
        //     loading.complete();
        //
        //     // console.log(data); // JSON data parsed by `data.json()` call
        // });
    },
});
// editor.on('page', () => {
//     pm.getSelected().id
//     console.log('lll')
// });
