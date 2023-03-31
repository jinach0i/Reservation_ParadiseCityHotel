import './css/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <div id="container">
        <div className="scrolldown-wrap">
          <p>SCROLL DOWN</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="15.41" height="13.673" viewBox="0 0 15.41 13.673">
          <g id="그룹_18" data-name="그룹 18" transform="translate(-632.795 -964.795)">
            <g id="그룹_12" data-name="그룹 12" transform="translate(0 2)">
        <g id="그룹_10" data-name="그룹 10" transform="translate(633.5 963.5)">
          <line id="선_1" data-name="선 1" x1="7" y1="6" fill="none" stroke="#9c836a" stroke-linecap="round" stroke-width="1"/>
          <path id="패스_18" data-name="패스 18" d="M0,6,3.063,3.375,7,0" transform="translate(7)" fill="none" stroke="#9c836a" stroke-linecap="round" stroke-width="1"/>
        </g>
        <g id="그룹_13" data-name="그룹 13" transform="translate(633.5 969.763)">
          <line id="선_1-2" data-name="선 1" x1="7" y1="6" fill="none" stroke="#9c836a" stroke-linecap="round" stroke-width="1"/>
          <path id="패스_18-2" data-name="패스 18" d="M0,6,3.063,3.375,7,0" transform="translate(7)" fill="none" stroke="#9c836a" stroke-linecap="round" stroke-width="1"/>
        </g>
            </g>
          </g>
          </svg>
        </div>
        <div className="promotion-wrap">
          <div className="inner">
            <h2>FEATURED OFFERS</h2>
            <p>파라다이스시티에서 준비한 특별한 상품과 혜택을 지금 만나보세요.</p>
            <div className="listbox">
              <ul>
                <li data-aos="fade-up" className="animated fadeInUp">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=HTL">
                      <img src="https://www.p-city.com/upload_file/202303/1678844687419.jpg" alt="" />
                    </a>
                  </div>
                  <div className="txt">
                    <strong>BOOST YOUR PARADISE</strong>
                    <span className="sub">파라다이스시티 6주년과 함께하는 6가지 혜택</span>
                    <p>
                      <span className="price">270,000<span> 원 ~ </span></span>
                    </p>
                    <ul className="tags">
                        <li><span>#&nbsp;6주년</span><span>#&nbsp;리조트 머니 6만</span></li>
                        <li><span>#&nbsp;수영장 무제한</span><span>#&nbsp;키즈존 무제한</span></li>
                    </ul>
                    <span className="date">2023.03.22~2023.04.30</span>
                  </div>
                </li>
                <li data-aos="fade-up" className="animated fadeInUp" data-aos-delay="100">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=HTL">
                      <img src="https://www.p-city.com/upload_file/202303/1678840880752.jpg" alt="" />
                    </a>
                  </div>
                  <div className="txt">
                    <strong>BOOST YOUR SWEET</strong>
                    <span className="sub">파라다이스시티 6주년과 함께하는 60실 한정 프로모션</span>
                    <p>
                      <span className="price">570,000<span> 원 ~ </span></span>
                    </p>
                    <ul className="tags">
                        <li>
                          <span>#&nbsp;6주년</span><span>#&nbsp;디럭스 스위트</span>
                        </li>
                        <li>
                          <span>#&nbsp;리조트 머니 트리플</span><span>#&nbsp;수영장 무제한</span>
                        </li>
                    </ul>
                    <span className="date">2023.04.01~2023.04.30</span>
                  </div>
                </li>
                <li data-aos="fade-up" className="animated fadeInUp"  data-aos-delay="400">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=PKG">
                      <img src="https://www.p-city.com/upload_file/202211/1668043807149.jpg" alt="" />
                    </a>
                  </div>
                  <div className="txt">
                    <strong>4월 자유이용권</strong>
                    <span className="sub">상상 속의 밤의 유원지 원더박스</span>
                    <p>
                      <span className="price">23,000<span> 원 ~ </span></span>
                    </p>
                    <ul className="tag"><li></li></ul>
                    <span className="date">2023.04.01~2023.04.30</span>
                  </div>
                </li>
              </ul>
              <div className="btnMore">
                <a href="/front/reservation"><span>전체 보기</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="events-wrap">
          <div className="inner">
            <h2>PARADISE CITY EVENTS</h2>
            <p>파라다이스시티에서 진행되는 다양한 이벤트를 만나보세요.</p>
            <div className="listbox">
            <ul>
                <li data-aos="fade-up" className="animated fadeInUp">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=HTL">
                      <img src={require('./img/1679278526285.jpg')} alt="6OOST FESTIVAL thumbnail" />
                    </a>
                  </div>
                  <div className="txt">
                    <strong>6OOST FESTIVAL</strong>
                    <span className="sub">파라다이스시티 6주년 6oost Festival!</span>
                    <p className="date">2023.03.29~2023.04.30
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" className="animated fadeInUp" data-aos-delay="100">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=HTL">
                      <img src={require('./img/1677199252734.jpg')} alt="AUDIO ART DOCENT thumbnail" />
                    </a>
                  </div>
                  <div className="txt">
                    <strong>AUDIO ART DOCENT</strong>
                    <span className="sub">매력적인 명품 배우 목소리로 작품에 담겨있는 이야기를 들어보세요.</span>
                    <p className="date">2023.03.01~2024.01.31
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" className="animated fadeInUp"  data-aos-delay="400">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=PKG">
                      <img src={require('./img/1676961783013.jpg')} alt="WELCOME  thumbnail" />
                    </a>
                  </div>
                  <div className="txt">
                    <strong>WELCOME TO PARADISE </strong>
                    <span className="sub">파라다이스시티에서만 만날 수 있는 특별한 고객맞이 엔터테인먼트</span>
                    <p className="date">2023.02.24~2023.12.31
                    </p>
                  </div>
                </li>
              </ul>
              <div className="btnMore">
                <a href="/front/reservation"><span>전체 보기</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="membership-wrap">
          <div className="inner">
          <h2>PARADISE CITY MEMBERSHIP</h2>
            <p>파라다이스시티 고객님께 특별한 혜택을 제공해드리는 다양한 멤버십 프로그램을 소개합니다.</p>
            <div className="listbox">
            <ul>
                <li data-aos="fade-up" className="animated fadeInUp">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=HTL">
                      <img src={require('./img/img_membership1.jpg')} alt="PARADISE REWARDS thumbnail" />
                      <div class="cover">
								        <div>
									        <p>차별화된 회원 특전과 포인트<br />혜택을 제공하는 파라다이스시티<br />통합 무료 멤버십입니다.</p>
									        <a href="/front/memnotice/membership?Type=REWARDS" class="btn small2 btnLine2">자세히 보기</a>
								        </div>
							        </div>
                    </a>
                  </div>
                  <div className="txt">
                    <p>PARADISE REWARDS</p>
                  </div>
                </li>
                <li data-aos="fade-up" className="animated fadeInUp" data-aos-delay="100">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=HTL">
                      <img src={require('./img/img_membership2.jpg')} alt="PARADISE SIGNATURE thumbnail" />
                      <div class="cover">
                        <div>
                          <p>고품격 서비스와 다양한 혜택이 <br />어우러진 파라다이스시티 <br />통합 유료 멤버십입니다.</p>
                          <a href="/front/memnotice/membership?Type=SIGNATURE" class="btn small2 btnLine2">자세히 보기</a>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="txt">
                    <p>PARADISE SIGNATURE</p>
                  </div>
                </li>
                <li data-aos="fade-up" className="animated fadeInUp"  data-aos-delay="400">
                  <div className="img">
                    <a href="/front/reservation?TAB_CD=PKG">
                      <img src={require('./img/img_membership4.jpg')} alt="CASINO MEMBERSHIP thumbnail" />
                      <div class="cover">
                        <div>
                          <p>K-Style 프리미엄 <br />외국인 전용 카지노의 회원만을 <br />위해 다양한 혜택으로 구성된 <br />카지노 전용 멤버십입니다.</p>
                            <a href="/front/memnotice/membership?Type=CASINO" class="btn small2 btnLine2">자세히 보기</a>
                          </div>
                          </div>
                    </a>
                  </div>
                  <div className="txt">
                    <p>CASINO MEMBERSHIP</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div className="inner">
            <div className="footer-main">
              <div className="cs-wrap">
                <h1>CUSTOMER CENTER</h1>
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="qr-wrap">
                <h1>E-CONCIERGE SERVICE</h1>
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="family-wrap">
                <a href="javascript::" className='family'></a>
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <address>
              <div className="left">
                <div className="top">
                  <ul>
                    <li><a href="/front/contents/pcity/location">오시는 길</a></li>
                    <li><a href="/front/contents/sitemap">사이트맵</a></li>
                    <li><a href="/front/policy/privacy" class="fwBdI">개인정보 처리 방침</a></li>
                    <li><a href="/front/policy/pic">영상정보처리기기 운영,관리방침</a></li>
                    <li><a href="/front/policy/privacy/agreement">이용약관</a></li>
                    <li><a href="http://recruit.paradise.co.kr/">채용안내</a></li>
                    <li><a href="/front/contents/pcity/paradiseCity?M1=PAR&amp;M2=PC">ABOUT US</a></li>
                  </ul>
                </div>
                <div className="bottom"></div>
              </div>
              <div className="right"></div>
            </address>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App;
