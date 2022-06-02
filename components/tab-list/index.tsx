import {useState, Children} from 'react';

import * as S from './style';

import type {ReactComponent} from 'types';

interface TabProps extends ReactComponent {
  tabs: string[];
}

function Element({children}: ReactComponent) {
  return <S.ElementContainer>{children}</S.ElementContainer>;
}

function TabList({children, tabs}: TabProps) {
  const [tab, setTab] = useState(0);

  const list_length = Children.count(children);

  const handleTab = (index: number) => () => {
    const is_valid_index = index < list_length && index >= 0;

    if (is_valid_index) {
      setTab(index);
    }
  };

  return (
    <S.Container>
      <S.Nav>
        {tabs.map((tab_name, index) => {
          return (
            <S.NavTab key={tab_name}>
              <S.NavTabButton onClick={handleTab(index)} isCurrent={index === tab}>
                {tab_name}
              </S.NavTabButton>
            </S.NavTab>
          );
        })}
      </S.Nav>
      {Children.toArray(children)[tab]}
    </S.Container>
  );
}

TabList.Element = Element;

export default TabList;
