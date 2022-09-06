import React from 'react';
import EditMaterial from '../components/edit/editMaterial';
import EditMsg from '../components/edit/editMsg';
import EditNaming from '../components/edit/editNaming';
import EditRecipeButtons from '../components/edit/editRecipeButtons';
import EditStep from '../components/edit/editStep';
import EditTip from '../components/edit/editTip';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function Edit() {
  return (
    <Flex
      dir="column"
      justify="center"
      align="start"
      data-testid="editPage"
      css={{
        '&>div:not(div:last-child , div:nth-of-type(4) , div:nth-of-type(5))': {
          borderBottom: '1px solid $onBg200',
        },
        marginTop: '$5',
        width: '70%',
        height: '100%',
        '@bp1': {
          width: '85%',
        },
        '@bp4': {
          width: '100%',
        },

      }}
    >

      <Text css={{
        headline1: '500',
        fontFamily: '$yeseva',
        '@bp3': {
          headline2: '500',
          fontFamily: '$yeseva',
        },
        '@bp5': {
          headline3: '500',
          fontFamily: '$yeseva',
        },
      }}
      >
        Let`s Edit a Recipe
      </Text>

      <EditNaming />
      <EditMaterial />
      <EditStep />
      <EditTip />
      <EditMsg />
      <EditRecipeButtons />
    </Flex>
  );
}

export default Edit;
