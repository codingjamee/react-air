// import SidoName from './SidoName';
import React, { useState, useEffect } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
// import axios from 'axios'

const App = () => {
  const [sido, setSido] = useState("");
  const [apiData, setApiData] = useState("");
  
  const SidoList = [
    "전국", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "세종"
  ]
  
  const Card = () => {
    if (sido) {
      
    }
    
    return (
      <React.Fragment>
        <div></div>
      </React.Fragment>
    )
  }

  const handleSido = (e) => {
    setSido(e.target.value);
    console.log(e.target.value);
    console.log(sido)
  }

  useEffect(() => {
    const getParameters = {
      serviceKey:
        "WUQeZHYr%2F2NrKnfQpGMudEHSyEvnVTPOzzhn3Zrxw5hDlmjXyjnIAbuZI0NF0fvYn37sB7AToJk4anZsv46zLQ%3D%3D",
      returnType: "json",
      numOfRows:"100",
      pageNo:"1",
      sidoName: sido,
      ver:"1.0",
    }

    fetch(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=${getParameters['serviceKey']}&returnType=${getParameters['returnType']}&numOfRows=${getParameters['numOfRows']}& pageNo=${getParameters['pageNo']}&sidoName=${getParameters['sidoName']}&ver=${getParameters['ver']}`)
      .then(response => {
        response.json();
        console.log(response.json())
      })
      .then(data => {
        console.log('data: ' + data['response']['body']['items'])
      })
  }, [sido]);
 
  return (
    <div>
      <select onChange={handleSido}>
        {SidoList.map((sido) => (<option value={sido} key={sido}> { sido }</option>))}
      </select>
      <Card />
    </div>
  );
}

export default App;