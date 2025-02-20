/* eslint no-console: 0 */
import React, {
  ComponentType,
  ElementType,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";

type ModalObject<ElementType extends React.ElementType = any> = {
  e: ElementType;
  id: string;
  props: React.ComponentPropsWithRef<ElementType>;
  open: boolean;
  timeout?: NodeJS.Timeout | null;
};

type ModalSystemPropsName = "close" | "open";
export type ModalSystemProps = {
  close: (unmountDelay?: number) => void;
  open: boolean;
};

export type ModalComponent<
  Props = {},
  SystemProps = ModalSystemProps
> = ComponentType<Props & SystemProps>;

interface IModalContext {
  openModal: <C extends ElementType>(
    e: C,
    props: Omit<React.ComponentPropsWithRef<C>, ModalSystemPropsName>,
    modalId?: string
  ) => void;
  closeModal: (id: any, unmountDelay?: number) => void;
  modals: ModalObject[];
}

export const ModalContext = React.createContext<IModalContext>({
  openModal: () => {},
  closeModal: () => {},
  modals: [],
});

export const useModal = () => React.useContext(ModalContext);

export const useModalAPI = (): IModalContext => {
  const [modals, setModals] = useState<IModalContext["modals"]>([]);
  const modalsRef = useRef(modals);
  modalsRef.current = modals;

  const openModal: IModalContext["openModal"] = (e, props, modalId = "") => {
    // @ts-ignore
    const id = modalId ? `${String(e.name)}__${modalId}` : String(e.name);

    const existsModal = modals.filter((modal) => modal.id === id)[0];
    if (existsModal) {
      console.log(`[modals] reopen already mounted modal #${id}`);
      setModals(
        modals.map((modal) => {
          if (modal.id === id) {
            modal.open = true;
            if (modal.timeout) clearTimeout(modal.timeout);
          }
          return modal;
        })
      );
      return;
    }

    console.log(`[modals] mount modal #${id}`);
    const newModals = [
      ...modals,
      {
        e,
        id,
        props,
        open: true,
      },
    ];
    setModals(newModals);
  };

  const unmountModal = (id: any) => {
    setModals(
      modalsRef.current.filter((modal) => {
        if (modal.id === id) {
          if (modal.open) {
            console.log(
              `[modals] cancel unmount modal #${id} because its open`
            );
            return true;
          }
          console.log(`[modals] unmount modal #${id}`);
          return false;
        }
        return true;
      })
    );
  };

  const closeModal = (id: any, unmountDelay: number = 5) => {
    console.log(`[modals] close modal #${id}`);
    setModals(
      modals.map((modal) => {
        if (modal.id === id) {
          modal.open = false;
          if (unmountDelay >= 0) {
            modal.timeout = setTimeout(
              () => unmountModal(id),
              unmountDelay === 0 ? 200 : unmountDelay * 1000
            );
          }
        }
        return modal;
      })
    );

    if (unmountDelay === -1) {
      console.log(`[modals] modal #${id} stay mounted`);
    }
  };

  return { openModal, closeModal, modals };
};

const Modal = () => {
  const { closeModal, modals } = useModal();

  return (
    <>
      {modals.map(({ e: Element, id, props, open }) => (
        <Element
          key={id}
          close={(unmountDelay = 5) => closeModal(id, unmountDelay)}
          open={open}
          {...props}
        />
      ))}
    </>
  );
};

export const ModalProvider = ({ children }: { children: any }) => {
  const { openModal, closeModal, modals } = useModalAPI();
  useEffect(() => {
    // @ts-ignore
    const pathRedirect: string | null = router.query?.redirect || null;
    if (pathRedirect) {
      localStorage.setItem("redirect_after_auth", pathRedirect);
    }

    // @ts-ignore
    const pathUtmCampaign: string | null = router.query?.utm_campaign || null;
    if (pathUtmCampaign) {
      localStorage.setItem("utm_campaign", pathUtmCampaign);
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ openModal, closeModal, modals }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};
