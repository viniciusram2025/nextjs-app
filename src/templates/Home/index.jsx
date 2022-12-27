import { useEffect, useRef, useState } from 'react';
//import { useLocation } from 'react-router-dom';

//api
import { mapData } from '../../api/map-data';

//templates
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { Base } from '../Base';

//components
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

//import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  //const location = useLocation();

  useEffect(() => {
    //aqui foi inserida uma logica, para pegar o slug da url e redirecionar a pagina
    //cmo as versões do curso divergem, não deu para acompanhar essa parte, mas a logica é a mesma.

    //const pathname = location.pathname.replace(/[^a-z0-9-_], '' /);
    //const slug = pathname ? pathname : defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(
          //seria assim caso o pathname acima fosse implantado.
          //'http://localhost:1337/api/pages/?slug=' + slug

          //segunda formatação adicional que não está sendo usada, por versões diferentes do strapi
          //const data = await fetch(config.url + config.defaultSlug);

          'http://localhost:1337/api/pages?populate=deep',
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Pagina não encontrada';
      //configuração não utilizada por versões diferentes do strapi
      //document.title = `Pagina não encontrada | ${config.siteName}` ;
    }
    if (data && !data.slug) {
      document.title = 'Carregando...';
    }
    if (data && data.title) {
      document.title = data.title;
    }
  });

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
