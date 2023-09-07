import { getImagemZonaPerigo } from "../utils/getImagemZonaPerigo";

export function ZonaPerigoCard({ zonaPerigo }) {
  const { nome_zp, localizacao_zp, descricao_zp } = zonaPerigo;//nome dos campos
  const imagemZonaPerigo = getImagemZonaPerigo(nome_zp);//chamando o get imagem

  return (
    <View style={styles.zonaPerigoCard}>
      <View style={styles.zonaPerigoHeader}>
        <Text style={styles.zonaPerigoName}>{nome_zp}</Text>
      </View>
      <View style={styles.carouselContainer}>
        <Image source={imagemZonaPerigo} style={styles.image} />
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.locationIconContainer}>
          <MaterialIcons name="location-on" size={16} color="#147DEB" style={styles.locationIcon} />
        </View>
        <Text style={styles.zonaPerigoLocation}>{localizacao_zp}</Text>
      </View>
      <Text style={styles.zonaPerigoDescription}>{descricao_zp}</Text>
    </View>
  );
};
