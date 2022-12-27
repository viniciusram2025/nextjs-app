import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá Mundo" />);
    expect(
      //teste 1
      screen.getByRole('heading', { name: 'Olá Mundo' }),
    ).toBeInTheDocument();
    //teste 2
    expect(screen.getByRole('link', { name: 'Olá Mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />,
    );
    //A variavel somente seria usada, caso fosse utilizar a primeira forma.
    //const heading = screen.getByRole('heading', { name: 'Olá Mundo' });
    screen.getByRole('heading', { name: 'Olá Mundo' });
    //primeira forma de selecionar
    //expect(heading.firstChild.firstChild).toHaveAttribute('src', 'image.jpg');
    //segunda forma de selecionar
    expect(screen.getByRole('img', { name: 'Olá Mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
    //terceira forma de selecionar
    //expect(screen.getByAltText('Olá Mundo' )).toHaveAttribute('src','image.jpg',);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
