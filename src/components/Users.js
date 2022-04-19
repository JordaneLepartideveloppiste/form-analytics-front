import "../assets/scss/Users.scss";
import {useState} from "react";

const Users = ({ data }) => {
  const numberUsers = data.length;
  const arrayQuestions = Object.keys(data[0]);

  arrayQuestions.shift();
  const numberQuestions = arrayQuestions.length;
  const arrayAllResponses = [];
  let arrayMessageForAllUsers = [];
  let nbrResp = 0;

  for (let i = 0; i < data.length; i++) {
    for (let y = 1; y < Object.values(data[i]).length; y++) {
      arrayAllResponses.push(Object.values(data[i])[y]);
    }
    
  }

  const n = numberQuestions;

  const arrayResponsesByUsers = new Array(
    Math.ceil(arrayAllResponses.length / n)
  )
    .fill()
    .map((_) => arrayAllResponses.splice(0, n));     

   for (let i = 0; i < arrayResponsesByUsers.length; i++) {
     let message = "";
     for (let y = 0; y < arrayResponsesByUsers[i].length; y++) {
       if (arrayResponsesByUsers[i][y]) {
         message = "oui";
       } else {
           message = "non";
       }
       arrayMessageForAllUsers.push(message);
     }
    
   }
   console.log(arrayMessageForAllUsers);

   const arrayMessageForUser = new Array(
     Math.ceil(arrayMessageForAllUsers.length / n))
     .fill()
    .map((_) => arrayMessageForAllUsers.splice(0, n));
  


  console.log(arrayMessageForUser[10].filter((mess) => mess === "oui").length);
  
 

  for (let i =0; i < arrayMessageForUser.length; i++) {
    
    if (arrayMessageForUser[i]==="oui") {
      nbrResp += 1;
    }
  
  }

  
  const getNumberOfResponse = (arr, num) => {
    let nbrResp = arr[num].filter(mess => mess === "oui").length;

    return nbrResp;
  }

  const getResponsesByUser = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      return arr[num];
    }
  }
   
   




  
  

  const [responsesForOne, setResponsesForOne] = useState(0);
  const [numberResponses, setNumberResponses] = useState(-1);

  const handleChange = (e) => {
    setResponsesForOne(e.target.value);
    (e.target.value) === "noOne" ? setNumberResponses(-1) : setNumberResponses(e.target.value);
  }
  

  return (
    <div className="users">
      <div className="users-content">
        <div className="users-part">
          <div className="users-part-title">
            <span>User n°</span>
            <select name="nbrUser" id="user-select" onChange={handleChange}>
              <option value="noOne">--</option>
              {data.map((user, index) => {
                return (
                  <option value={index} key={index}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
          </div>
          {numberResponses >= 0 ? (
            <div className="validate-list">
              {getResponsesByUser(arrayMessageForUser, responsesForOne).map(
                (elem, index) => {
                  return (
                    <div className="message" key={index}>
                      <p className={elem === "oui" ? "valid-message" : null}>{elem}</p>
                    </div>
                  );
                }
              )}
            </div>
          ) : null}
        </div>
        <div className="users-part result-part">
          <div className="users-part-title">
            <span>
              Responses (
              {numberResponses < 0
                ? "--"
                : getNumberOfResponse(arrayMessageForUser, numberResponses)}
              /{numberQuestions})
            </span>
          </div>
          {numberResponses >= 0 ? (
            <div className="percent-by-user">
              <span>Cet utilisateur a répondu à :</span>
              <p>
                {Math.round(
                  (getNumberOfResponse(arrayMessageForUser, numberResponses) *
                    100) /
                    numberQuestions
                )}{" "}
                %
              </p>
              <span>des questions du questionnaire</span>
            </div>
          ) : null}
        </div>
        <div className="users-part">
          <div id="responses-by-user" className="users-part-title">
            <span>Users ({numberUsers})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
