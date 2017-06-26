'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

marked.setOptions({
  breaks: true
});

var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return '<a target="_blank" href="' + href + '">' + text + '</a>';
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false,
      previewMarkdown: true
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleEditorMaximize = _this.handleEditorMaximize.bind(_this);
    _this.handlePreviewMaximize = _this.handlePreviewMaximize.bind(_this);
    _this.handleToggleHtml = _this.handleToggleHtml.bind(_this);
    return _this;
  }

  App.prototype.handleChange = function handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  };

  App.prototype.handleEditorMaximize = function handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  };

  App.prototype.handlePreviewMaximize = function handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  };

  App.prototype.handleToggleHtml = function handleToggleHtml() {
    this.setState({
      previewMarkdown: !this.state.previewMarkdown
    });
  };

  App.prototype.render = function render() {
    var classes = this.state.editorMaximized ? ['editorWrap maximized column medium-12 small-12', 'previewWrap hide', ['fa fa-angle-double-left has-tip', 'fa fa-angle-double-right has-tip']] : this.state.previewMaximized ? ['editorWrap hide', 'previewWrap maximized column medium-12 small-12', ['fa fa-angle-double-right has-tip', 'fa fa-angle-double-right has-tip']] : ['editorWrap column medium-6 small-12', "previewWrap column medium-6 small-12", ['fa fa-angle-double-right has-tip', 'fa fa-angle-double-left has-tip']];

    var titles = this.state.editorMaximized ? ['Press to Minimize Editor', ""] : this.state.previewMaximized ? ['', "Press to Minimize Preview"] : ['Press to Maximize Editor', 'Press to Maximize Preview'];

    return React.createElement(
      'div',
      { className: 'rootWrap row' },
      React.createElement(Title, { text: 'Markdown Previewer',
        icon: 'devicon-react-original-wordmark',
        onClick: this.handleToggleHtml }),
      React.createElement(
        'div',
        { className: classes[0] },
        React.createElement(Toolbar, { text: 'Enter Markdown Here',
          mainIcon: 'fa fa-pencil-square-o',
          icon: classes[2][0],
          onClick: this.handleEditorMaximize,
          title: titles[0] }),
        React.createElement(Editor, { markdown: this.state.markdown,
          onChange: this.handleChange })
      ),
      React.createElement(
        'div',
        { className: classes[1] },
        React.createElement(Toolbar, { text: 'Here is Your Live Preview',
          mainIcon: 'fa fa-eye',
          icon: classes[2][1],
          onClick: this.handlePreviewMaximize,
          title: titles[1] }),
        React.createElement(Preview, { markdown: this.state.markdown,
          previewMarkdown: this.state.previewMarkdown })
      )
    );
  };

  return App;
}(React.Component);

var Title = function Title(props) {
  return React.createElement(
    'div',
    { className: 'title-bar' },
    React.createElement(
      'div',
      { className: 'title-bar-right' },
      React.createElement(
        'span',
        { className: 'title-bar-title' },
        React.createElement('i', { className: props.icon }),
        props.text,
        React.createElement('i', { className: props.icon })
      ),
      React.createElement(
        'button',
        { onClick: props.onClick, className: 'success button' },
        'Toggle HTML'
      )
    )
  );
};
var Toolbar = function Toolbar(props) {

  return React.createElement(
    'div',
    { className: 'toolbar' },
    React.createElement('i', { className: props.mainIcon }),
    '  ',
    props.text,
    React.createElement('i', { onClick: props.onClick, className: props.icon, title: props.title })
  );
};
var Editor = function Editor(props) {
  return React.createElement('textarea', { id: 'editor',
    value: props.markdown,
    onChange: props.onChange,
    type: 'text' });
};

var Preview = function Preview(props) {
  var preview = props.previewMarkdown;
  if (preview) {
    return React.createElement('div', { id: 'preview', dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } });
  } else {

    var html = $("#preview").html();
    var split = html.split(/\n/g);

    var final = split.map(function (line) {
      return React.createElement(
        'p',
        null,
        line
      );
    });

    return React.createElement(
      'div',
      { id: 'preview' },
      final
    )
    /*  <div id="preview">{split[0]}<br/>{split[1]}<br/>{split[2]}<br/>{split[3]}<br/>{split[4]}<br/>{split[5]}<br/>{split[6]}<br/>{split[7]}<br/>{split[8]}<br/>{split[9]}<br/>{split[10]}<br/>{split[11]}<br/>{split[12]}<br/>{split[13]}<br/>{split[14]}<br/>{split[15]}<br/>{split[16]}<br/>{split[17]}<br/>{split[18]}<br/>{split[19]}<br/>{split[20]}<br/>{split[21]}<br/>{split[22]}<br/>{split[23]}<br/>{split[24]}<br/>{split[25]}<br/>{split[26]}<br/>{split[27]}<br/>{split[28]}<br/>{split[28]}<br/>{split[29]}<br/>{split[30]}<br/>{split[31]}<br/>{split[32]}<br/>{split[33]}<br/>{split[34]}<br/>{split[35]}<br/>{split[36]}<br/>{split[37]}<br/>{split[38]}<br/>{split[39]}<br/>{split[40]}<br/>{split[41]}<br/>{split[42]}<br/>{split[43]}<br/>{split[44]}<br/>{split[45]}<br/>{split[46]}<br/>{split[47]}<br/>{split[48]}<br/>{split[49]}<br/>{split[50]}<br/>{split[51]}<br/>{split[52]}<br/>{split[53]}<br/>{split[54]}<br/>{split[55]}<br/>{split[56]}<br/>{split[57]}<br/>{split[58]}<br/>{split[59]}<br/>{split[60]}<br/>{split[61]}<br/>{split[62]}<br/>{split[63]}<br/>{split[64]}<br/></div>*/
    ;
  }
};

var placeholder = '# Markdown Previewer!\n\n## Two hash tag subheader\n\n### This is three...\n\n#### Cuatro...\n\n##### Cinco...\n\n###### Six...those are the headers...now for more...\n  \nTo do single-line code use  `<div> 2 backticks </div>`\n\n```\n// this is multi-line code:\n\nfunction benCooler() {\nben.cool++;\nbenCooler();\n}\n```\n\nEmojis? &#128513;&#128519;be good!&#128520;or not🤸🏿‍♂️\nDingbats? &#9749;&#9754;&#9745; coffee sound good\n\nYou can also make text **bold** or _italic_ or **_both!_**\n\nYou can also ~~Ben is a LOSER~~.\n\nThere\'s also links such as [one to my facebook web dev page](https://www.facebook.com/benjaminadk), and\n\n> To Ben or not to Ben, that tis\' the question\n\n---\n\nTables are Easy:\n\nPerson| Cool Bool | Awesome Bool\n------------ | ------------- | ------------- \nbenjaminadk | true | true\nyou | true | false\n\n***\n\n- Lists of stuff\n  - Bulleted\n     - Just Indent\n        - Easy Peasy\n\n\n1. Numbered Lists\n1. Use just 1s if you want! \n1. dashes\n- asterisks.\n* Next we have images\n\n![Images of Me](https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/IMG_0156.JPG)\n\n<p id=\'ben\' style=\'border:5px outset #cecece;background:pink;\'onclick=\'document.getElementById("ben").style.setProperty("transform","rotate(180deg)");\'>Inline HTML/CSS/JS WORK TOO CLICK ME....BIZZARE!!!</p>\n\n### You Tube Links With Photo\n\n[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/v6rGkOuEUP4/0.jpg)](https://www.youtube.com/watch?v=v6rGkOuEUP4)\n';

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));