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
import { useCallback, useEffect } from "react";

interface NoticiaModalProps {
  modal: INoticiasNormalizadas;
  setModal: (noticia: INoticiasNormalizadas | null) => void;
}

const NoticiaModal = ({ modal, setModal }: NoticiaModalProps) => {
  const { esPremium, imagen, titulo, descripcion } = modal;

  const handleUserSuscription = useCallback(() => {
    setTimeout(() => {
      alert("Suscripto!");
      setModal(null);
    }, 1000);
  }, [setModal]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        setModal(null);
      }
    };

    const handleEnterKey = (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        handleUserSuscription();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("keydown", handleEnterKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [setModal, handleUserSuscription]);

  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal
          src={esPremium ? SuscribeImage : imagen}
          alt={esPremium ? "mr-burns-excelent" : "news-image"}
        />
        <CotenedorTexto>
          <TituloModal>
            {esPremium ? "Suscríbete a nuestro Newsletter" : titulo}
          </TituloModal>
          <DescripcionModal>
            {esPremium
              ? "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."
              : descripcion}
          </DescripcionModal>
          {esPremium && (
            <BotonSuscribir onClick={handleUserSuscription}>
              Suscríbete
            </BotonSuscribir>
          )}
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default NoticiaModal;
