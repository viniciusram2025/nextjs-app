import P from 'prop-types';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data;

  try {
    data = await loadPages();
  } catch (error) {
    console.log(error);
  }

  if (!data || !data.length) {
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

Index.propTypes = {
  data: P.array,
};

/*const json = await data.json();
const { attributes } = json.data[0];
const pageData = mapData([attributes]);
*/
