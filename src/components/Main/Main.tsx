import clsx from 'clsx';

import { LearnMoreButton, PageContainer } from '../../components';
import {
  wind_generators_big__Desktop_ImagePath,
  wind_generators_big__Mobile_ImagePath,
  wind_generators_big__Tablet_ImagePath
} from '../../assets';

import s from './Main.module.css';

interface MainProps {
  customClassName?: string;
  className?: string;
}

const Main = ({ customClassName, className }: MainProps) => {
  return (
    <section className={customClassName ?? clsx(className, s.section)} id="main">
      <PageContainer>
        <div className={s.sectionTopContainer}>
          <h1 className={s.title}>Renewable energy for any task</h1>
          <div className={s.descriptionAndButtoncontainer}>
            <p className={s.description}>
              Development and implementation of renewable non-polluting energy sources,
              generating power generation using energy wind, sun, water, biomass
            </p>
            <LearnMoreButton className={s.learnMoreButton} />
          </div>
        </div>
        <address className={s.contactsContainer}>
          <ul className={s.contactsList}>
            <li className={s.contactItem}>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </li>
            <li className={s.contactItem}>office@ecosolution.com</li>
            <li className={s.contactItem}>ecosolution © 2023</li>
          </ul>
        </address>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={wind_generators_big__Desktop_ImagePath}
            width={1240}
            height={524}
          />
          <source
            media="(min-width: 768px)"
            srcSet={wind_generators_big__Tablet_ImagePath}
            width={708}
            height={348}
          />
          <source
            media="(max-width: 767px)"
            srcSet={wind_generators_big__Mobile_ImagePath}
            width={320}
            height={200}
          />
          <img
            className={s.image}
            src={wind_generators_big__Mobile_ImagePath}
            alt="Big wind generators"
          />
        </picture>
      </PageContainer>
    </section>
  );
};

export default Main;
