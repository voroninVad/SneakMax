import { CSSProperties } from "react";
import styl from "./index.module.css";
import Contact from "./Contact";
import inst from '../../assets/inst.svg'
import vk from '../../assets/vk.svg'

const Contacts = () => {
    const class1:CSSProperties ={
        width:'100%',
        height:'100%',
        position:'relative',
        overflow:'hidden'
    }
    const class2:CSSProperties ={
        position:'absolute',
        fontSize:'12px',
        color:'#eee',
        top:'14px'
    }
    const class3:CSSProperties ={
        width:'100%',
        height:'100%',
        position:'relative',
    }
  return (
    <section className={styl.contacts}>
      <div className={styl.container_contacts}>
        <div className={styl.left_content}>
            <h3>Контакты</h3>
            <Contact title={'Главный офис'} btn={true}/>
            <Contact title={'Oтдел продаж'} btn={false}/>
            <div className={styl.social}>
              <a className={styl.link_social} href="https://vk.com/"><img src={vk} alt="vk" /></a>
              <a className={styl.link_social} href="https://instagram.com/"><img src={inst} alt="instagram" /></a>
            </div>
        </div>
        <div className={styl.rigth_map}>
          <div style={class1}>
            <a
              href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
              style={class2}
            >
              Санкт‑Петербург
            </a>
            <a
              href="https://yandex.ru/maps/2/saint-petersburg/house/2_ya_komsomolskaya_ulitsa_43/Z0kYdwNiSEAFQFtjfXRycXhqbQ==/?ll=30.142152%2C59.830499&utm_medium=mapframe&utm_source=maps&z=17"
              style={class2}
            >
              2-я Комсомольская улица, 43 — Яндекс Карты
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.142152%2C59.830499&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQwOTcwNBJb0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMi3RjyDQmtC-0LzRgdC-0LzQvtC70YzRgdC60LDRjyDRg9C70LjRhtCwLCA0MyIKDR8j8UEVblJvQg%2C%2C&z=17"
              width="560"
              height="400"
              frameBorder="1"
              allowFullScreen="true"
              style={class3}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
