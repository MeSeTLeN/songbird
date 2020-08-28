import React, { Component } from "react";
import birdsData from "../data/birdsData";

export default class Quiz extends Component {
  state = {
    currentStage: 0,
    // randomQuestionIndex
    userAnswer: null,
    score: 0,
    maxStageScore: 5,
    responses: 0,
    selectedOptionBtn: false,
    enableNextStageBtn: false,
    list: [1, 2, 3],
  };

  onUpdateItems = () => {
    this.setState((state) => {
      const list = state.list.map((item) => item + 1);

      return {
        list,
      };
    });
  };

  //   return random name by currentStage index
  //   RandomQuestion = (questionData, questionIndex) => {
  //     if (this.state.currentStage === questionIndex) {
  //       return questionData[Math.floor(Math.random() * questionData.length)].name;
  //     }
  //   };

  
  RandomQuestion = (questionData, questionIndex) => {
    if (this.state.currentStage === questionIndex) {
      return questionData[Math.floor(Math.random() * questionData.length)].name;
    }
  };

  QuestionMap = () => {
    return birdsData.map((questionData, questionIndex) => (
      <div>{this.RandomQuestion(questionData, questionIndex)}</div>
    ));
  };

  // componentDidMount() {
  //   this.setState({
      
  //   })
  // }

  // loadData = () => {
  //   const { currentStage } = this.state;
  //   this.setState(() => {
  //     return {
  //       birdName: birdsData[currentStage].name,
  //     };
  //   });
  // };

  //   answerChecker= () =>{
  //       if(optionObj.name=)

  //   }

  // ! if option=answer
  // OnClickBtnFunc() => if (optionObj.name===questionObj.name) {this.setState({ enableNextStageBtn: true, score + (maxStageScore - responses), responses:0, play sound right})} else { play sound wrong}
  // !! bug infinity +score on press right btn and if wrong infinity -score on press wrong btn
  //   resolve if enableNextStageBtn=false use OnClickBtnFunc "if" and if enableNextStageBtn=true use just showing content without sound

  // ! to render new question and options
  // OnClickNextStageBtnFunc()=> return this.setState({currentStage + 1})
  // if currentStage =/ lastStage show 'next stage' else 'finish quiz'

  // ! sidebar more details
  // OnClickBtnFunc()=> birdsData.map somehow get selectedBtn obj index

  // ! congratz u made it with score

  // ! PlayAgain render new question by resend on first stage
  // OnClickPlayAgain () => {this.setState({currentStage:0 }) }

  // randomObjFromArray=()=>{[Math.floor(Math.random() * birdsData.length)]}

  render() {
    return (
      <div>
        <div>{this.state.list}</div>
        <button type="button" onClick={this.onUpdateItems}>
          Make everyone one year older
        </button>
        {/* if currentStage = optionsBoxObj index use selected class */}
        {birdsData.map((data, index) => (
          <div>stage {`${index + 1} / ${birdsData.length}`}</div>
        ))}

        {/* if currentStage <= birdsData.length render this */}
        {/* question */}
        <div>
          question:
          {/* {birdsData.map((questionData, questionIndex) => (
            <div>{this.RandomQuestion(questionData, questionIndex)}</div>
          ))} */}
          {this.QuestionMap()}
          {birdsData.map((questionData, questionIndex) => (
            <div>
              {this.state.currentStage === questionIndex
                ? questionData[Math.floor(Math.random() * questionData.length)]
                    .name
                : null}
            </div>
          ))}
        </div>

        {/* options */}
        {/* {birdsData.map((optionsBoxObj, index) => (
          <div>
            {optionsBoxObj.map((optionObj, index) => {
              if (this.state.currentStage === index) {
                return <button onClick={enableNextStageBtn==false? answerChecker(optionObj.name):null}>{optionObj.name} </button>;
              }
            })}
          </div>
        ))} */}

        {/* always render next stage(finish) btn */}
        {/* if currentStage > birdsData.length render congratz text */}
      </div>
    );
  }
}

// ! selected class
//   className={`options ${userAnswer === option ? "selected" : null}`}
// constructor(props) {
//     super(props);
//     //this.handleChange = this.handleChange.bind(this);
//     this.state = {
//         selectedButton: null
//     }
// }
// buttonSelected = selectedButton => ev => {
//     this.setState({ selectedButton })
// }
// render() {
//     return (
//         <div>
//             {['A', 'B', 'C'].map(key =>
//                 <button className={key === this.state.selectedButton ? 'selected' : ''} type="button" style={{ width: '25%', border: "none" }} key={key} onClick={this.buttonSelected(key)}>{key}</button>
//             )}
//         </div>
//     )
// }
