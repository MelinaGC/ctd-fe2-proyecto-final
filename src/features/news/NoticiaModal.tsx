import { INoticiasNormalizadas } from "./Noticias";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";
import { useEffect } from "react";

interface NoticiaModalProps {
  modal: INoticiasNormalizadas | null;
  setModal: (noticia: INoticiasNormalizadas | null) => void;
}

const NoticiaModal = ({ modal, setModal }: NoticiaModalProps) => {
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        setModal(null);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [setModal]);

  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        {modal?.esPremium ? (
          <>
            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
            <CotenedorTexto>
              <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
              <DescripcionModal>
                Suscríbete a nuestro newsletter y recibe noticias de nuestros
                personajes favoritos.
              </DescripcionModal>
              <BotonSuscribir
                onClick={() =>
                  setTimeout(() => {
                    alert("Suscripto!");
                    setModal(null);
                  }, 1000)
                }
              >
                Suscríbete
              </BotonSuscribir>
            </CotenedorTexto>
          </>
        ) : (
          <>
            <ImagenModal src={modal?.imagen} alt="news-image" />
            <CotenedorTexto>
              <TituloModal>{modal?.titulo}</TituloModal>
              <DescripcionModal>{modal?.descripcion}</DescripcionModal>
            </CotenedorTexto>
          </>
        )}
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default NoticiaModal;
