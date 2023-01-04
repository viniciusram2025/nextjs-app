import { mapData } from './map-data';
//import config from '../config';

//caso fossemos usar slug, seria passado (slug='') como parametro da função.
export const loadPages = async () => {
  //const cleanSlug = slug ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  //const url = `${config.url}/pages/${cleanSlug}`;

  //minha versão do codigo.
  //const url = `${config.url2}/pages`;

  const raw = await fetch('http://localhost:1337/api/pages?populate=deep');
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return data;
};

/**Devido a atualização do strapi, essa parte do codigo está comentada porque
 * NÃO CONSEGUIMOS UTILIZAR 'SLUG' NA URL, conforme acima.
 * Foi usado o "populate=deep" */
