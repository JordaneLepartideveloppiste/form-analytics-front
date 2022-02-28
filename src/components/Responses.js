import "../assets/scss/Responses.scss";

const Responses = ({data}) => {
   const arrayQuestions = Object.keys(data[0]);
   const numberQuestions = arrayQuestions.length;
   const arrayAllResponses = [];
   const arrayResponsesOrderByQuestion = [];
   let numberResponses = 0;
   let numberResponsesForEachQuestions = [];
   let percentResponsesForEachQuestions = [];

   for (let i = 0; i < data.length; i++) {
     for (let y = 0; y < Object.values(data[i]).length; y++) {
       arrayAllResponses.push(Object.values(data[i])[y]);
     }
   }

   for (let i = 0; i < arrayAllResponses.length; i++) {
     if (arrayAllResponses[i]) {
       numberResponses++;
     }
   }
   const totalPercent = Math.round(
     (numberResponses * 100) / arrayAllResponses.length
   );
    
   for (let i = 1; i < arrayQuestions.length; i++) {
     for (let y = 0; y < data.length; y++) {
       arrayResponsesOrderByQuestion.push(Object.values(data[y])[i]);
       
     }
   }
   
   const n = data.length;

   const arrayResponsesForEachQuestion = new Array(
     Math.ceil(arrayResponsesOrderByQuestion.length / n)
   )
     .fill()
     .map((_) => arrayResponsesOrderByQuestion.splice(0, n));
     
    console.log(arrayResponsesForEachQuestion);
   
    for (let i=0; i<arrayResponsesForEachQuestion.length; i++) {
        let count = 0;
        for (let y = 0; y < arrayResponsesForEachQuestion[i].length; y++) {
            
            if ((arrayResponsesForEachQuestion[i])[y]) {
                count += 1;
                
            }
            
        }
        numberResponsesForEachQuestions.push(count);
    }

    for (let i=0; i<numberResponsesForEachQuestions.length; i++) {
        let percent = Math.round((numberResponsesForEachQuestions[i]*100)/data.length);
        percentResponsesForEachQuestions.push(percent);
    }
     
    

    
  

    


  return (
    <div className="responses">
      <div className="responses-content">
        <div id="questions" className="responses-part">
          <div className="responses-part-title">
            <span>Questions ({numberQuestions})</span>
          </div>
          <div className="questions-list">
            {arrayQuestions.map((question, index) => (
              <div className="question" key={index}>
                {question}
              </div>
            ))}
          </div>
        </div>
        <div id="responses" className="responses-part">
          <div className="responses-part-title">
            <span>
              Responses ({numberResponses}/{arrayAllResponses.length})
            </span>
          </div>
          <div className="responses-list">
            {numberResponsesForEachQuestions.map((response, index) => (
              <div className="response" key={index}>
                {response}
              </div>
            ))}
          </div>
        </div>
        <div id="purcents" className="responses-part">
          <div className="responses-part-title">
            <span>{totalPercent}%</span>
          </div>
          <div className="percents-list">
            {percentResponsesForEachQuestions.map((percent, index) => (
              <div className="percent" key={index}>
                {percent}%
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responses;
