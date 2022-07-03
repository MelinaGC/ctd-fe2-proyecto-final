import { INoticiasNormalizadas } from "./Noticias";
import {
  BotonLectura,
  DescripcionTarjetaNoticia,
  FechaTarjetaNoticia,
  ImagenTarjetaNoticia,
  TarjetaNoticia,
  TituloTarjetaNoticia,
} from "./styled";

interface NoticiaCardProps {
  noticia: INoticiasNormalizadas;
  setModal: (noticia: INoticiasNormalizadas) => void;
}

const NoticiaCard = ({ noticia, setModal }: NoticiaCardProps) => {
  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={noticia.imagen} />
      <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {noticia.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};

export default NoticiaCard;
