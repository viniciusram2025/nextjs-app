import * as Styled from './styles';
import P from 'prop-types';
import { Heading } from '../Heading';
import Link from 'next/link';

export const LogoLink = ({ text, srcImg = '', link }) => {
  //se o link começar com / é um link interno, senão, é falso
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          {/* forma de usar o Link do NextJs */}
          <Styled.Container href={link}>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
            {/* ou */}
            {/* srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span> */}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
        {/* ou */}
        {/* srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span> */}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
