import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import mainStore from '../../store/mainStore';
import Button from '../../styles/styledComponents/button';
import IcoArrowRight from '../../assest/icons/IcoArrowRight';
import handleBreadsInternal from '../../store/utils/handleBreadsInternal';

function BreadCrumbs() {
  const breadCrumbs = mainStore((state) => state.breadCrumbs);
  return (
    <Flex
      data-testid="breadHolder"
      css={{
        padding: '$2 0px',
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
          color: '$bg300',
        },
      }}
    >
      {breadCrumbs.map((bread, index) => (
        <>
          <Button
            onClick={handleBreadsInternal}
            key={bread.level}
            id={`bread ${bread.level}`}
            data-testid={`bread${bread.level}`}
          >
            {bread.name}
          </Button>
          {index !== breadCrumbs.length - 1
            ? <IcoArrowRight key={`breadArrow${bread.level}`} width="7px" height="7px" event={() => {}} />
            : null}
        </>
      ))}
    </Flex>
  );
}

export default BreadCrumbs;
