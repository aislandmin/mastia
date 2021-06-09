
function appendFooter(selector){
  $(selector).append(`
  <div class="mastia-get-in-touch">
  <div class="div-content">
    <div class="touch-info">GO AHEAD AND FIND OUT HOW WE CAN HELP YOU!</div>
    <a href="">GET IN TOUCH</a>
  </div>
 </div>

  <div class="mastia-footer">
        <div class="footer-links">
          <ul class="first-ul">
            <li class="first-ul-li">
              <h4>ABOUT US</h4>
              <p>
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica, sport etc, litot
                Europa usa li sam vocabular. Li lingues differe solmen
              </p>
            </li>
            <li class="first-ul-li">
              <h4>RELATED LINKS</h4>
              <ul class="child-ul">
                <li>Official Site</li>
                <li>CreativeMarket profile</li>
                <li>Materialzer page on CM</li>
                <li>Electronic WP Theme</li>
                <li>Was Favvvv</li>
              </ul>
            </li>
            <li class="first-ul-li">
              <h4>NEWS & MEDIA</h4>
              <ul class="child-ul">
                <li>Events</li>
                <li>News and Press Releases</li>
                <li>Interviews</li>
                <li>Subsidiaries Media Contacts</li>
                <li>Media Kit</li>
              </ul>
            </li>
            <li class="first-ul-li">
              <h4>GET IN TOUCH</h4>
              <p>
                Lorem lpsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <ul class="child-ul-icon">
                <li class="footer-address">84 Street, City, State 24813</li>
                <li class="footer-tel">+00(123)456 78 90</li>
                <li class="footer-email">info@yourcompany.com</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="mastia-right-resvered">
        <div class="right-revered-text">
          <p>Made with</p>
          <img src="./imgs/red-heart.png" />
          <p>by Revolthemes.net All Rights Reserved</p>
        </div>
      </div>
  `)
}
appendFooter('body');