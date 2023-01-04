import P from 'prop-types';
import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';

/**VAMOS A UM ENTENDIMENTO FORÇADO AQUI
 * O slug, vem da api .. no curso a api que o professor usou está diferente,
 * o que esse codigo faz, é mapear os slugs na api e passar como parametro da url,
 * assim direcionando para a pagina correta.
 * Enttão as paginas redirecionadas precisam vir da api, no caso é preciso ser criado no strapi
 * para poder redirecionar.
 */

export default function Page({ data }) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths = async () => {
  try {
    const paths = (await loadPages()).map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log(e);
  }
};

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug);
  } catch (error) {
    data = null;
    console.log(error);
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
