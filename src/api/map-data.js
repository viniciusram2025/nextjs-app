import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

//const { inspect } = require('util');
//const dados = require('./dados.json');
//console.log(inspect(mapData(dados), null, null, true));
