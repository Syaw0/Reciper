import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import IcoArrowRight from '../../assest/icons/IcoArrowRight';
import handleBreadsInternal from '../../store/utils/handleBreadsInternal';
import IcoSun from '../../assest/icons/IcoSun';
import IcoMoon from '../../assest/icons/IcoMoon';

function BreadCrumbs() {
  const breadCrumbs = mainStore((state) => state.breadCrumbs);
  const currentTheme = mainStore((state) => state.currentTheme);

  const handleTheme = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    mainStore.setState((state) => ({ ...state, currentTheme: nextTheme }));
  };

  return (
    <Flex
      data-testid="breadHolder"
      css={{
        padding: '$2 0px',
        position: 'relative',
        '& button': {
          color: '$onBg800',
          button: '400',
          '&:last-child': {
            cursor: 'default',
          },
        },
        '& svg': {
          cursor: 'default',
          margin: '0 $3',
          fill: '$onBg300',
        },
      }}
    >
      {breadCrumbs.map((bread, index) => (
        <Flex
          data-testid={`breadHold${bread.level}`}
          key={bread.level}
          css={{
            width: 'fit-content',
          }}
        >
          <Button
            onClick={bread.name !== 'SearchFor...' ? handleBreadsInternal : null}
            key={bread.level}
            id={`bread ${bread.level}`}
            data-testid={`bread${bread.level}`}
          >
            {bread.name}
          </Button>
          {index !== breadCrumbs.length - 1
            ? <IcoArrowRight key={`breadArrow${bread.level}`} width="7px" height="7px" />
            : null}
        </Flex>
      ))}
      <Flex
        title="change theme"
        justify="center"
        align="center"
        css={{
          position: 'absolute',
          right: '0',
          top: '0',
          width: 'fit-content',
          height: '100%',
          '& > svg': {
            fill: '$onBg600',
            cursor: 'pointer',
            '&:hover': {
              fill: '$onBg900',
            },
          },
        }}
      >
        {currentTheme === 'light' && <IcoMoon width="24" height="24" dataTest="changeThemeToDark" event={handleTheme} id="changeThemeToDark" />}
        {currentTheme === 'dark' && <IcoSun width="24" height="24" dataTest="changeThemeToLight" event={handleTheme} id="changeThemeToLight" />}
      </Flex>
    </Flex>
  );
}

export default BreadCrumbs;
