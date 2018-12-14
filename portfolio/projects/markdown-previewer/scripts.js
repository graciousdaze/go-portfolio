const placeholderText = `# Marked - Markdown Parser

[Marked](https://github.com/markedjs/marked) is a useful library that can allow you to create previews of HTML elements. Here are some of the things you can do:

## Headings
As demonstrated with the first line in the previewer you can create headers by using a number of # in correspondence to the desired heading tier

> This is a block quote!

1. Want to see a numbered list?
2. No problem!
3. Just start typing out your list...
4. ....like this!!

But sometimes you want a good old fashioned bullet list, well good news! You can try that out too:

- Bullet lists are pretty neat
- They're pretty useful

You can also create \`<p>inline code</p>\` by wrapping text with single back ticks

\`\`\`
//Or you can make some multi-line code too:

const makeCoolThings = () => true;
\`\`\`

Okay, okay...so I know what you're thinking. Yeah all of that stuff up there is nifty and all, but what if you want to make it italicized? Sure thing you can _certainly_ do that!

But wait...what if I want to make it bold?? Oh my, **of course** you can!

How about putting it all together?? **_Well check me out!_**

That's all pretty neat, isn't it? And there's even more you can do with it! So what are you waiting for?!?! Go be an HTML preview ninja and try it out!`

//Enables the use of line breaks
marked.setOptions({
  breaks:true
});

class Presentation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: placeholderText
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  render(){
    return(
      <div class='row'>
        <textarea value={this.state.input} id='editor' class='col-sm-6' onChange={this.handleChange} />
        <div id='preview' class='col-sm-6' dangerouslySetInnerHTML={{__html: marked(this.state.input)}}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Presentation />, document.getElementById("contain"));