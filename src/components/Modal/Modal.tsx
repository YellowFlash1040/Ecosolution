import { useEffect, ReactNode, MouseEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import { CrossIcon } from '../../assets';
import { PageContainer } from '../../components';

import s from './Modal.module.css';

interface ModalProps {
  className?: string;
  children: ReactNode;
  closeModal: () => void;
  isOpened: boolean;
}

const Modal = ({ className, children, closeModal, isOpened }: ModalProps) => {
  const modalRef = useRef(document.querySelector('#modal'));
  const nodeRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const transitionTime = 250;

  const handleClickOnBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = event;
    if (target === currentTarget || target === currentTarget.firstChild) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  useEffect(() => {
    if (isOpened) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '0';
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpened}
      timeout={transitionTime}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: s.modalEnter,
        enterActive: s.modalEnterActive,
        exit: s.modalExit,
        exitActive: s.modalExitActive
      }}
    >
      <div className={clsx(s.backdrop)} onClick={handleClickOnBackdrop} ref={nodeRef}>
        <PageContainer className={s.pageContentContainer}>
          <div className={clsx(className, s.container)} ref={contentContainerRef}>
            <button className={s.closeButton} type="button" onClick={() => closeModal()}>
              <CrossIcon width={20} height={20} />
              close
            </button>
            {children}
          </div>
        </PageContainer>
      </div>
    </CSSTransition>,
    modalRef.current!
  );
};

export default Modal;
