//import * as Styled from './styles';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>A pagina que você busca não foi encontrada. <br> <a href="/">Clique para voltar</a></p>'
    />
  );
};
