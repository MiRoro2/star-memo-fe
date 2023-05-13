import "./App.css";
import styled from "styled-components";
import Circle from "./components/main/Circle";
import Orbit from "./components/main/Orbit";

const Wrap = styled.div<{ bgColor: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
`;

const CentrePosition = styled.div<{ radius: string; ground: string }>`
  position: absolute;
  bottom: ${(props) => `calc(${props.ground} - ${props.radius})`};
  left: ${(props) => `calc(50vw - ${props.radius})`};
`;

function App() {
  /** 우주 배경의 색 */
  const backgroundColor = "#02343F";
  /** 전경의 색 */
  const primaryColor = "#F0EDCC";

  /** 랜덤으로 생성되는 행성의 색 */
  const planetColors = ["#EBCCF0", "#F0EDCC", "#D8D07C", "#F0E2CC", "#B5FFED"];

  // 가장 바깥 쪽 궤도의 직경 : 80vw
  // 가운데 궤도의 직경 : 57vw
  // 가장 안쪽 궤도의 직경 : 34vw
  // 프로필의 직경 : 13vw

  /** 궤도의 직경 배열 */
  const orbitDiameters = [34, 57, 80];
  /** 궤도가 나타내는 달 배열 */
  const months = ["1월", "2월", "3월"];

  const profileDiameter = 13;

  /** 프로필, 궤도를 바닥에 묻는 정도 */
  const ground = "75px";

  return (
    <div className="App">
      <Wrap bgColor={backgroundColor}>
        <CentrePosition radius={`${profileDiameter / 2}vw`} ground={ground}>
          <Circle
            diameter={`${profileDiameter}vw`}
            color={primaryColor}
          ></Circle>
        </CentrePosition>
        {
          // Orbits
          orbitDiameters.map((diameter) => (
            <CentrePosition radius={`${diameter / 2}vw`} ground={ground}>
              <Orbit diameter={`${diameter}vw`} color={primaryColor} />
            </CentrePosition>
          ))
        }
      </Wrap>
    </div>
  );
}

export default App;
