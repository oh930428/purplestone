import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CookiePopup(props: { getIsPop: (arg0: boolean) => void }) {
  const popup = useRef(null);
  let [value, setValue] = useState('');

  const handleCheck = (e: { target: { checked: any } }) => {
    const isCheck = e.target.checked;
    setValue(isCheck);
  };

  return (
    <Container>
      <aside id="welcomePop" ref={popup}>
        <div className="content">
          <h1>Welcome</h1>
          <ul>
            <li>안녕하세요.</li>
            <li>
              PurpleStone는 Typescript 기반의 react 라이브러리로 제작된
              포트폴리오 사이트입니다.
            </li>
            <li>
              현재 방문하신 사이트는 <strong>크롬</strong> 브라우저를 기반으로
              제작되었으므로 <strong>크롬</strong> 브라우저에서 확인해주시면
              감사하겠습니다.
            </li>
            <li>홈페이지에 방문해주셔서 감사합니다.</li>
          </ul>
        </div>
        <div className="wrap">
          <input type="checkbox" name="ck" id="ck" onChange={handleCheck} />
          <label htmlFor="ck">오늘 하루 그만보기</label>
        </div>
        <Link
          to="#"
          className="close"
          onClick={e => {
            e.preventDefault();
            if (value) setCookie('welcomePop', 'done', 1);
            props.getIsPop(false);
            console.log(document.cookie.indexOf('welcomePop=done'));
          }}
        >
          CLOSE
        </Link>
      </aside>
    </Container>
  );

  function setCookie(cookieName: string, cookieValue: string, time: number) {
    const today = new Date();
    const date = today.getDate();
    today.setDate(date + time);
    const duedate = today.toUTCString();

    document.cookie = `${cookieName} = ${cookieValue}; path ="/"; expires=${duedate}`;
  }
}

export default CookiePopup;

const Container = styled.div`
  #welcomePop {
    width: 36rem;
    z-index: 3;
    background: rgba(17, 17, 17, 0.9);
    padding: 4rem;
    color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    .content {
      width: 100%;
      min-height: 32rem;

      h1 {
        font: 600 3rem/1 'Oswald';
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 2rem;
      }

      ul li {
        padding: 0.5rem 0px;
        list-style: square;
        margin-left: 1rem;
        font-size: 1.4rem;
        line-height: 1.6;
      }
    }

    .wrap {
      float: left;
      position: relative;
      bottom: 0.7rem;
      label {
        font: bold 1.2rem/1 '맑은 고딕';
        color: #fff;
        margin-left: 0.4rem;
      }
    }
    .close {
      float: right;
      font: 1.4rem/1 'arial';
      color: #fff;
      cursor: pointer;
    }
  }
`;
