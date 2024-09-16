import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useTranslation } from 'react-i18next';

function AppStore() {
  const { t } = useTranslation();

  return (
    <>
         <section class="aap_sec ptb100" style={{ backgroundImage: `url(${'.../../images/bg_clr.webp'})` }}>
         <div class="container">
            <div class="sec_head">
                  <h2> {t('AboutUspage.availablDevices')}</h2>
                  <p> {t('AboutUspage.avaiDes')}<br/> {t('AboutUspage.avaiDes1')}</p>
               </div>
               <div class="app_store">
                  <a href=""><img src="../../images/App-Store.webp"/> </a>
                  <a href=""><img src="../../images/Play-Store.webp"/> </a>
               </div>
         </div>
      </section>
    </>
  )
}

export default AppStore