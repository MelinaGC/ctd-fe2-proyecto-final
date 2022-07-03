import { useEffect, useState } from "react";
import NoticiaCard from "./NoticiaCard";
import NoticiaModal from "./NoticiaModal";
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from "./styled";
import { obtenerInformacion } from "./utils";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const setNews = async () => {
      const data = await obtenerInformacion();
      setNoticias(data);
    };

    setNews();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <NoticiaCard noticia={noticia} setModal={setModal} />
        ))}
        {modal && <NoticiaModal modal={modal} setModal={setModal} />}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
