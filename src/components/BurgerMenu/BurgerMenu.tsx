import { useState } from 'react';

import { BurgerMenuButton, Modal, Navigation } from '../../components';
import { FacebookIcon, InstagramIcon } from '../../assets';

import s from './BurgerMenu.module.css';

interface BurgerMenuProps {
  customClassName?: string;
  className?: string;
}

const BurgerMenu = ({ customClassName, className }: BurgerMenuProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      <BurgerMenuButton
        onClick={() => setIsMenuOpened(true)}
        customClassName={customClassName}
        className={className}
      />
      <Modal
        closeModal={() => setIsMenuOpened(false)}
        isOpened={isMenuOpened}
        className={s.modal}
      >
        <div className={s.modalContentContainer}>
          <Navigation onPageChange={() => setIsMenuOpened(false)} />
          <ul className={s.socialMediaList}>
            <li className={s.socialMediaItem}>
              <a className={s.socialMedia} href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </a>
            </li>
            <li className={s.socialMediaItem}>
              <a className={s.socialMedia} href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default BurgerMenu;
