import { useRef } from 'react';
import { fonts, colors } from 'styles';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import CardImage from '../../assets/Images/popup-image.jpg';

const CookiePopup = (props: { getIsPop: (arg: boolean) => void }) => {
  const popupRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  const handleCheck = (e: { target: { checked: any } }) => {
    const isCheck = e.target.checked;
    if (isCheck) {
      setCookie('welcomePop', 'done', 1);
      iconRef.current?.classList.add('on');
    } else {
      iconRef.current?.classList.remove('on');
    }
  };

  const handleClose = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    props.getIsPop(false);
  };

  return (
    <Container>
      <aside id="popup" ref={popupRef}>
        <div className="content">
          <Link to="#" className="close" onClick={handleClose}>
            <b>CLOSE</b>
          </Link>

          <div className="inner">
            <figure className="pic">
              <img src={CardImage} alt="카드이미지" />
            </figure>

            <article className="description">
              <h1>
                PURPLE
                <br />
                STONE
              </h1>
              <ul>
                <li>안녕하세요.</li>
                <li>
                  PurpleStone는 Typescript 기반의 React 라이브러리로 제작된
                  포트폴리오 사이트입니다.
                </li>
                <li>
                  현재 방문하신 사이트는 <strong>크롬</strong> 브라우저를
                  기반으로 제작되었으므로 <strong>크롬</strong> 브라우저에서
                  확인해주시면 감사하겠습니다.
                </li>
                <li>홈페이지에 방문해주셔서 감사합니다.</li>
              </ul>
            </article>
          </div>

          <div className="wrap">
            <label htmlFor="ck">
              <input type="checkbox" name="ck" id="ck" onChange={handleCheck} />
              <span className="icon" ref={iconRef}></span>
              하루동안 보지않기
            </label>
          </div>
        </div>
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
};

export default CookiePopup;

const check = keyframes`
  0%{ transform: scale(1, 1); }
  30%{ transform: scale(1.25, 0.75); }
  40%{ transform: scale(0.75, 1.25); }
  50%{ transform: scale(1.15, 0.85); }
  65%{ transform: scale(0.95, 1.05); }
  75%{ transform: scale(1.05, 0.95); }
  100%{ transform: scale(1, 1); }
`;

const Container = styled.div`
  #popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(20, 20, 20, 0.95);
    z-index: 1000;

    .content {
      width: 80rem;
      min-height: 40rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: transparent;
      border: 2px solid #fff;
      padding: 3rem;

      .close {
        float: right;
        ${fonts.BoldBody2};
        color: ${colors.Primary_01};
        position: absolute;
        top: 15px;
        right: 15px;

        b {
          display: block;
          transform: translateY(-20px);
          opacity: 0;
          transition: 0.5s;
        }

        &:hover {
          &::before,
          &::after {
            transform: rotate(0deg);
            top: 120%;
          }

          b {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        &::before {
          content: '';
          display: block;
          width: 20px;
          height: 2px;
          background: #fff;
          transform: rotate(45deg);
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -1rem;
          transition: 0.5s;
        }

        &::after {
          content: '';
          display: block;
          width: 20px;
          height: 2px;
          background: #fff;
          transform: rotate(-45deg);
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -1rem;
          transition: 0.5s;
        }
      }

      .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 40rem;
        margin: 1.5rem 0px;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        .pic {
          flex: 1;
          height: 100%;
          background: #fff;
          border-radius: 20px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .description {
          position: relative;
          flex: 1;
          padding: 1rem 3rem;

          h1 {
            margin-bottom: 1rem;
            ${fonts.Hero2};
            color: ${colors.Primary_01};
            line-height: 6rem;
            text-align: center;
          }

          ul {
            padding: 1.5rem 3rem;
            word-break: break-word;

            li {
              ${fonts.MediumBody1};
              color: #ddd;
              text-align: center;
              margin-bottom: 1rem;

              strong {
                color: ${colors.Primary_01};
              }
            }
          }

          input[type='text'] {
            width: 100%;
            height: 4rem;
            margin-bottom: 2rem;
            padding: 1rem;
            background: transparent;
            border: none;
            border-bottom: 2px solid #ddd;
            transition: 0.5s;

            &::placeholder {
              ${fonts.MediumBody1};
              color: #eee;
              text-align: center;
            }

            &:focus {
              color: #eee;
              border: 2px solid ${colors.Primary_01};
              background: transparent;
            }
          }

          input[type='submit'] {
            width: 100%;
            height: 40px;
            background: ${colors.Gray_01};
            border: none;
            padding: 10px;
            ${fonts.BoldBody1};
            color: #fff;
            cursor: pointer;
          }
        }
      }

      .wrap {
        float: left;

        label {
          ${fonts.MediumBody1};
          color: #ccc;
          margin-left: 5px;
        }

        input[type='checkbox'] {
          display: none;
          opacity: 0;
        }

        .icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: 1px solid ${colors.Primary_01};
          border-radius: 3px;
          cursor: pointer;
          vertical-align: middle;
          margin-right: 0.8rem;
          position: relative;
          transition: background-color 0.1s;

          &::after {
            content: '';
            display: inline-block;
            width: 5px;
            height: 10px;
            position: absolute;
            top: 0px;
            left: 5px;
            border-right: 2px solid #fff;
            border-bottom: 2px solid #fff;
            transform: rotate(45deg) scale(0);
            transition: all 0.3s ease 0.15s;
            opacity: 0;
          }

          &.on {
            background-color: ${colors.Primary_01};
            animation: ${check} 0.6s ease;

            &::after {
              transform: rotate(45deg) scale(1);
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
