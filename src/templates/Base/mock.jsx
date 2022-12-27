import linksMock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase = {
  children: (
    <div>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </div>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de Footer</p>',
};
