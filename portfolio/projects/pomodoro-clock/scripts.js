let meow = new Audio('https://soundbible.com/mp3/Cat%20Meowing-SoundBible.com-781322082.mp3');
//Recorded by Mike Koenig - Licensed under Attribution 3.0

class KittyPomodoro extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      imgSrc: "https://image.ibb.co/btrGx9/study_cat_white.png",
      minutes: "25",
      seconds: "00",
      countDown: ''
    });
    this.toggleOn = this.toggleOn.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }
  toggleOn(e){
    let kitty = e.target.id;
    clearInterval(this.state.countDown);
    switch(kitty){
      case 'study':
        this.setState({
          imgSrc: "https://image.ibb.co/btrGx9/study_cat_white.png",
          minutes: "25",
          seconds: "00",
          countDown: ''
        });
        break;
      case 'short-break':
        this.setState({
          imgSrc: "https://image.ibb.co/nJykqU/short_break_white.png",
          minutes: "5",
          seconds: "00",
          countDown: ''
        });
        break;
      case 'long-break':
        this.setState({
          imgSrc: "https://image.ibb.co/e6YMVU/cat_48470.png",
          minutes: "15",
          seconds: "00",
          countDown: ''
        });
        break;
    }
  }
  start(){
    if(this.state.countDown == ''){
      this.setState({
      countDown: setInterval(()=>{
        seconds = parseInt(this.state.seconds) + (parseInt(this.state.minutes) * 60) - 1;
        this.setState({
          seconds:  ("0" + (seconds % 60).toString()).slice(-2),
          minutes: (seconds - (seconds % 60)) / 60
        });
        if(this.state.minutes == 0 && this.state.seconds == 0){
          clearInterval(this.state.countDown);
          meow.play();
        }
      }, 1000)
    });
    }
  }
  stop(){
    clearInterval(this.state.countDown);
    this.setState({
      countDown: ''
    })
  }
  render(){
    return (
      <div>
        <div id="kitty">
            <img id="kitty-img" src={this.state.imgSrc} />
        </div>
        <div id="buttons">
          <div id="study" onClick={this.toggleOn} class="buttons">
            <p>Work <br />Time</p>
          </div>
          <div id="short-break" onClick={this.toggleOn} class="buttons">
            <p>Short <br/>Break</p>
          </div>
          <div id="long-break" onClick={this.toggleOn} class="buttons">
            <p>Long <br />Break</p>
          </div>
        </div>
        <div id="time">
          <span>{this.state.minutes}:{this.state.seconds}</span>
       </div>
       <div id="tracking">
          <button id="start" onClick={this.start}>Start</button>
          <button id="Stop" onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }
}
  
ReactDOM.render(<KittyPomodoro />, document.getElementById("root"));