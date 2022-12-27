import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
    //texte fonte big
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });
    //texte fonte medium
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
    //texte fonte huge
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render correct font-size wen using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    screen.getByRole('heading', { name: 'texto' });

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    //por default os parametros sem especificar nada sempre serão true
    //so é preciso informar se for false, coloquei true abaixo so para especificar, mas não há necessidade.
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    screen.getByRole('heading', { name: 'texto' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
