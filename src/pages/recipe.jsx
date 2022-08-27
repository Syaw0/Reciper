import React from 'react';
import IcoClose from '../assest/icons/IcoClose';
import IcoEidt from '../assest/icons/IcoEdit';
import IcoLike from '../assest/icons/IcoLike';
import RecipeCheaps from '../components/recipe/recipeCheaps';
import Button from '../styles/styledComponents/button';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function Recipe() {
  const fakeInfoData = [
    { 'Min Perpetration': '15min' },
    { 'Min Cook': '15min' },
    { Level: 'Easy' },
    { Steps: '3' },
    { Material: '5' },
  ];
  const fakeData = {
    needItem: ['2 pounds lean ground beef', '1 (1 ounce) package ranch dressing mix', '1 egg, lightly beaten'],
    cookStep: ['Preheat the grill for high heat.', 'In a bowl, mix the ground beef, ranch dressing mix, egg, crushed crackers, and onion. Form into hamburger patties.', 'Lightly oil the grill grate. Place patties on the grill, and cook 5 minutes per side, or until well done.'],
    tips: ['This Food per Serve Have: 268 calories; protein 23.1g; carbohydrates 7.7g; fat 15.2g; cholesterol 97.6mg; sodium 392.7mg.'],
  };
  return (
    <Flex
      data-testid="recipePage"
      dir="column"
      css={{
        width: '65%',
        margin: '$5 0',
      }}
    >

      <Flex css={{
        backgroundImage: `url(${'https://user-images.githubusercontent.com/90524474/185795801-545f94fa-8d62-4d71-a365-289c25645b0b.jpg'})`,
        bgCentering: '',
        height: '38rem',
        borderRadius: '32px',
      }}
      />

      <Flex
        dir="column"
        css={{
          width: '100%',
        }}
      >

        <Flex
          justify="between"
          css={{
            margin: '$3 0',
          }}
        >
          <Text css={{
            headline1: '700',
            fontFamily: '$yeseva',
            color: '$onBg',
          }}
          >
            French Strawberry Cake

          </Text>
          <Flex
            dir="column"
            css={{
              width: 'fit-content',
              '& > p': {
                subhead1: '400',
                color: '$onBg500',
              },
            }}
          >
            <Text>
              2022/02/01

            </Text>
            <Text>
              Publisher

            </Text>
          </Flex>
        </Flex>

        <Flex
          dir="column"
          css={{
            margin: '$2 0',
            borderBottom: '1px solid $onBg100',
            paddingBottom: '$3',

          }}
        >
          <Text css={{
            headline5: '500',
            marginBottom: '$4',
            color: '$onBg900',
          }}
          >
            Reminiscent of a ladyfinger cake, this is a deliciously light
            cake that is not all that sweet and is best made with fresh, ripe strawberries.
            Decorate with additional strawberries.
          </Text>
          <Flex css={{
            flexWrap: 'wrap',
          }}
          >
            {fakeInfoData.map((info) => (
              <RecipeCheaps cheapsInside={info} key={Object.keys(info)[0]} />))}
          </Flex>
        </Flex>

        <Flex
          dir="column"
          css={{
            borderBottom: '1px solid $onBg100',
            padding: '$2 0',
          }}
        >
          <Text css={{
            headline3: '600',
            fontFamily: '$yeseva',
            margin: '$1 0 $5 0',
          }}
          >
            What We Need ?
          </Text>
          <Flex css={{
            '& ul': {
              position: 'relative',
              listStyle: 'none',
            },
            '& li': {
              headline5: '400',
              paddingLeft: '$4',
              marginBottom: '$2',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              '&::before': {
                backgroundColor: '$onBg',
                content: ' ',
                display: 'block',
                height: '1rem',
                width: '1rem',
                left: '-1rem',
                borderRadius: '50%',
                position: 'relative',
              },
            },
          }}
          >
            <ul>
              {fakeData.needItem.map((item, index) => (
                <li>{item}</li>
              ))}
            </ul>
          </Flex>
        </Flex>

        <Flex
          dir="column"
          css={{
            borderBottom: '1px solid $onBg100',
            padding: '$3 0',
          }}
        >
          <Text css={{
            headline3: '600',
            fontFamily: '$yeseva',
            margin: '$1 0 $5 0',
          }}
          >
            Let's Cook !
          </Text>
          <Flex
            dir="column"
            css={{
            }}
          >
            {fakeData.cookStep.map((item, index) => (
              <Flex
                dir="column"
                css={{
                  marginBottom: '$3',

                }}
              >
                <Text css={{
                  width: '100%',
                  backgroundColor: '$primary',
                  color: '$onPrimary',
                  padding: '4px 10px',
                  headline5: '600',
                  borderRadius: '32px',
                  marginBottom: '$2',
                }}
                >
                  Step
                  {' '}
                  {index + 1}

                </Text>
                <Text css={{
                  headline5: '500',
                  paddingLeft: '$3',
                }}
                >
                  {item}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex
          dir="column"
          css={{
            borderBottom: '1px solid $onBg100',
            padding: '$3 0',
          }}
        >
          <Text css={{
            headline3: '600',
            fontFamily: '$yeseva',
            margin: '$1 0 $5 0',
          }}
          >
            Some Notes
          </Text>
          <Flex
            dir="column"
            css={{
            }}
          >
            {fakeData.tips.map((item, index) => (
              <Flex
                dir="column"
                css={{
                  marginBottom: '$3',
                }}
              >
                <Text css={{
                  width: '100%',
                  backgroundColor: '$secondary',
                  color: '$onSecondary',
                  padding: '4px 10px',
                  headline5: '600',
                  borderRadius: '32px',
                  marginBottom: '$2',
                }}
                >
                  Note
                  {' '}
                  {index + 1}

                </Text>
                <Text css={{
                  headline5: '500',
                  paddingLeft: '$3',
                }}
                >
                  {item}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex justify="end" css={{
          marginTop:"$4",
          '& button':{
            marginLeft:"$3"
          }
        }}>
          <Button
            type="shadow"
            css={{
              color: '$error',
              '&:hover': {
                color: '$error',
                borderBottom:"1px solid $error"
              },
              '& svg': {
                stroke: '$error',

                fill: '$error',
              },
            }}
          >
            Delete Recipe
            <IcoClose dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" event={() => {}} />
          </Button>

          <Button
            type="outline"
            css={{
              padding:"4px $2"
            }}
          >
            Edit Recipe
            <IcoEidt dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" event={() => {}} />
          </Button>

          <Button
            type="primary"
            css={{
              padding:"4px $2"
            }}
          >
            Like Recipe
            <IcoLike dataTest="RecipeDeleteButton" width="15px" height="15px" id="RecipeDeleteButton" event={() => {}} />
          </Button>

        </Flex>

      </Flex>

    </Flex>
  );
}

export default Recipe;
