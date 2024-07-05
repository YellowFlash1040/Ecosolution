import {
  BurgerMenuButton,
  GetInTouchButton,
  Logo,
  PageContainer
} from '../../components';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <PageContainer className={s.container}>
        <Logo />
        <div className={s.buttonsContainer}>
          <BurgerMenuButton />
          <GetInTouchButton className={s.getInTouchButton} />
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;
