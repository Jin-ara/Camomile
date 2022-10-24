export const Navigation = (props) => {
  
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <a className="navbar-brand page-scroll" href="#page-top">
          <img
            src={require("./camomile.png").default}
            style={{
              position: "relative",
              width: "150px",
              bottom: 10,
              left: 20,
            }}
          />
        </a>{" "}
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="" className="page-scroll">
              로그인
            </a>
          </li>
          <li>
            <a href="" className="page-scroll">
              회원가입
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div>
          <ul className="nav navbar-nav navbar-left">
            <li>
              <a href="" className="page-scroll">
                공지사항
              </a>
            </li>
            <li>
              <a href="" className="page-scroll">
                예약
              </a>
            </li>
            <li>
              <a href="" className="page-scroll">
                리뷰
              </a>
            </li>
            <li>
              <a href="" className="page-scroll">
                지도
              </a>
            </li>
          </ul>
        </div>
        <div >
          <input type="text" name="mainSearch"/>
          <button type="submit" className="mainSubmit">
             <img src="" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
  
}