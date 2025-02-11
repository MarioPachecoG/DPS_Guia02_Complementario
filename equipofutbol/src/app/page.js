import styles from "./page.module.css"; 

const Equipos = ({ equipos }) => { 
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id} className={styles.equipo}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.jugador} key={`${equipo.id}-${jugador.id}`}>
                <img src={jugador.imagen} alt={jugador.nombre} className={styles.fotoJugador} />
                <div>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.altura}m <br /> Peso: {jugador.peso}Kg</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default function Home() {
  // Simula la obtención de datos desde tu JSON 
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Eden Hazard", altura: "1.75", peso: "74", imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSBOjxzJgvujMIpouaC2TZGsmKuoy87zP0fqOcSs66ciAQj6GPtObAraMphlgo1bOd8AigItd4teJ4F9a75MSvTkw" },
        { id: 2, nombre: "Gonzalo García", altura: "1.82", peso: "74", imagen: "https://okdiario.com/diariomadridista/img/2024/11/09/file-655x368.jpg"},
        { id: 3, nombre: "Karim Benzema", altura: "1.85", peso: "81", imagen: "https://s.hs-data.com/bilder/spieler/gross/29566.jpg" }
      ]
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", altura: "1.75", peso: "74", imagen: "https://assets-es.imgfoot.com/media/cache/1200x1200/marc-andre-ter-stegen-2324-1.jpg" },
        { id: 2, nombre: "Iñigo Martinez", altura: "1.82", peso: "74", imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbd5bj6CC4BvYaLuDRffP6myCwZmPqmNBk_g&s" },
        { id: 3, nombre: "Gavi", altura: "1.85", peso: "81", imagen: "https://www.fcbarcelona.com/photo-resources/2024/10/13/545795b7-4c63-4347-94ab-5f2a49b1eddd/06-Gavi-M.png?width=670&height=790" }
      ]
    },
    {
      id: 3,
      nombre: "Bayern de Múnich",
      plantilla: [
        { id: 1, nombre: "Harry Kane", altura: "1.88", peso: "86", imagen: "https://img.fcbayern.com/image/upload/f_auto/q_auto/t_cms-6x9-seo-thumbnail/v1712149739/cms/public/images/fcbayern-com/homepage/Saison-23-24/Profis/Kane/240403-kane-iffhs-mel.jpg" },
        { id: 2, nombre: "Manuel Neuer", altura: "1.93", peso: "93", imagen:"https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fmibundesliga.com%2Fwp-content%2Fuploads%2F2022%2F05%2Fmanuel-neuer-bayern-de-munich-zimbiocom.jpg" },
        { id: 3, nombre: "Thomas Muller", altura: "1.86", peso: "76", imagen: "https://ca-times.brightspotcdn.com/dims4/default/b01f090/2147483647/strip/true/crop/6585x4390+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F66%2F07%2F5b8c8d2ec8e0a7bea9648785bea2%2F9a900f7e495440babb89980409179745" }
      ]
    },
    {
      id: 4,
      nombre: "Manchester United",
      plantilla: [
        { id: 1, nombre: "Patrick Dorgu", altura: "1.85", peso: "68", imagen:"https://icdn.football-italia.net/wp-content/uploads/2024/09/12486628-1.jpg" },
        { id: 2, nombre: "Alejandro Gamacho", altura: "1.80", peso: "73", imagen:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Alejandro_Garnacho_7_August_2022_%28cropped%29.jpg" },
        { id: 3, nombre: "Leny Yoro", altura: "1.90", peso: "83", imagen:"https://assets.manutd.com/AssetPicker/images/0/0/20/102/1337079/PlayerProfile-ClickThrough-LY1721398070440.png" }
      ]
    }
  ];

  return ( 
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}