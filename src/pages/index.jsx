import P from 'prop-types';
import { mapData } from '../api/map-data';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch('http://localhost:1337/api/pages?populate=deep');
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

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
